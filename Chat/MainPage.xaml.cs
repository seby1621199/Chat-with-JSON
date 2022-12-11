using Newtonsoft.Json;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Windows.Input;

namespace Chat;


public class Message
{
    public string head = "";          // titlul
    public string from = "";               // destinatar
    public string message = "";            // mesaj
    public string to = "all";        // expeditor


}

public class User
{
    public string name;
    public string color;

}

public partial class MainPage : ContentPage
{
    #region Variable
    public ICommand Send { get; set; }
    static readonly TcpClient client = new();
    static string username = "";
    static List<string> usernames = new();
    static List<User> u;
    Random random = new();
    string[] colorslist = {
        "#25C1AD",
        "#7E7EEC",
        "#C3A92C",
        "#EC4EE5",
        "#284BBE",
        "#EC8735",
        "#EF5B75",
        "#D935D9",
        "#4CBB50",
        "#9D4FE1",
        "#3CA5A5" };
    //static bool connected = false;
    #endregion


    public MainPage()
    {
        InitializeComponent();

    }

    #region Encode&Convert
    public static byte[] Encode(string m)
    {
        byte[] bytes = Encoding.UTF8.GetBytes(m);
        return bytes;
    }
    public static Message ConvertStringToObj(string m)
    {
        return JsonConvert.DeserializeObject<Message>(m);
    }
    #endregion

    #region Connect
    private async void Button_Connect_Clicked(object sender, EventArgs e)
    {
        await Button_Connect.ScaleTo(0.7, 300, Easing.Linear);
        await Button_Connect.ScaleTo(1, 300, Easing.Linear);
        if (Input_Username.Text != "")
        {
            if (!client.Connected)
            {
                client.Connect(IPAddress.Parse("68.219.106.94"), 7891);

                if (Input_Message.Text != "")
                {
                    username = Input_Username.Text;
                }
                Send_username(client, username);
                Get_users(client);
                /* Message Connected */

                FormattedString formattedString = new();
                formattedString.Spans.Add(new Span { Text = "Connected ", TextColor = Colors.LightGray });
                Span Span_Username = new() { Text = username, TextColor = Color.FromArgb("#CEF1C1") };
                formattedString.Spans.Add(Span_Username);
                Label Welcome_Message = new Label { FormattedText = formattedString, HorizontalTextAlignment = TextAlignment.Center, FontSize = 20, FontAttributes = FontAttributes.Bold, Margin = new Thickness(10) };
                chat.Children.Add(Welcome_Message);


                Task.Run(() =>
                {
                    Read(client);
                });
            }
        }
    }
    #endregion

    #region Send&Receive Username
    private void Get_users(TcpClient c)
    {
        NetworkStream stream = c.GetStream();
        byte[] data = new byte[1024];
        int bytes = stream.Read(data, 0, data.Length);
        string message_usernames = Encoding.UTF8.GetString(data, 0, bytes);
        usernames = message_usernames.Split(',').ToList();
        u = new List<User>();
        foreach (var item in usernames)
        {
            u.Add(new User { name = item, color = colorslist[random.Next(colorslist.Length)] });
        }
        Globals.users = u;

    }

    private static void Send_username(TcpClient c, string username = "default")
    {
        Message message = new();
        if (username == "default")
            message.from = Environment.UserName;
        else
            message.from = username;
        message.to = "Server";
        message.message = "Username";
        NetworkStream s = c.GetStream();
        string m = JsonConvert.SerializeObject(message);
        s.Write(Encode(m), 0, Encode(m).Length);
    }
    #endregion

    #region Read

    [Obsolete]
    private async void Read(TcpClient c)
    {
        while (true)
        {
            try
            {
                NetworkStream stream = c.GetStream();
                byte[] data = new byte[1024];
                int bytes = stream.Read(data, 0, data.Length);
                string message = Encoding.UTF8.GetString(data, 0, bytes);
                Message m = ConvertStringToObj(message);
                if (m.head == "")
                {
                    /* Message Received */
                    if (m.from != username)
                    {

                        MessageModel.MessageReceived messageReceived = new()
                        {
                            UserColor = u.Where(x => x.name == m.from).Select(x => x.color).FirstOrDefault(),
                            From = m.from,
                            Message = m.message,
                            HorizontalOptions = LayoutOptions.Start,
                            Opacity = 1
                        };
                        Device.BeginInvokeOnMainThread(async () =>
                        {
                            chat.Children.Add(messageReceived);
                            //await messageReceived.FadeTo(1, 10, Easing.Linear);
                            Scroll_Chat.ScrollToAsync(0, Scroll_Chat.ContentSize.Height, true);
                        });
                    }
                    /* Message Send */
                    else
                    {
                        MessageModel.MessageSend messageSend = new()
                        {
                            From = m.from,
                            Message = m.message,
                            HorizontalOptions = LayoutOptions.End,
                            Opacity = 1
                        };
                        Device.BeginInvokeOnMainThread(async () =>
                        {
                            chat.Children.Add(messageSend);
                            //await messageSend.FadeTo(1, 50, Easing.Linear);
                            Scroll_Chat.ScrollToAsync(0, Scroll_Chat.ContentSize.Height, true);
                        });

                    }
                }

                if (m.head == "Disconnected")
                {
                    Device.BeginInvokeOnMainThread(() =>
                    {
                        Label label = new()
                        {
                            Text = DateTime.Now.ToString("HH:mm") + m.message + " s-a deconectat",
                            FontSize = 18,
                            TextColor = Color.FromArgb("#a2a6a7")

                        };
                        chat.Children.Add(label);
                        u.Remove(u.Find(x => x.name == m.from));
                        usernames.Remove(m.from);
                    });
                }

                if (m.head == "Connected Message")
                {
                    Device.BeginInvokeOnMainThread(() =>
                    {
                        Label label = new()
                        {
                            Text = DateTime.Now.ToString("HH:mm") + "  " + $"{m.message}",
                            FontSize = 18,
                            TextColor = Color.FromArgb("#a2a6a7")

                        };
                        chat.Children.Add(label);
                    });
                }

                if (m.head == "Connected")
                {
                    Device.BeginInvokeOnMainThread(() =>
                    {
                        u.Add(new User { name = m.from, color = colorslist[random.Next(colorslist.Length)] });
                        usernames.Add(m.from);
                    });

                }
            }
            catch
            {
            }
        }
    }
    #endregion

    #region Send
    private async void Button_Send_Clicked(object sender, EventArgs e)
    {
        await Button_Send.ScaleTo(0.85, 50, Easing.Linear);
        await Button_Send.ScaleTo(1, 50, Easing.Linear);
        if (Input_Message.Text != "")
        {
            Message message = new()
            {
                from = username,
                to = "all",
                message = Input_Message.Text
            };
            NetworkStream s = client.GetStream();
            string m = JsonConvert.SerializeObject(message);
            s.Write(Encode(m), 0, Encode(m).Length);
            // Add_Message(message);
            Input_Message.Text = "";
        }

    }

    private async void Input_Message_Focused(object sender, FocusEventArgs e)
    {
        await Scroll_Chat.ScrollToAsync(0, Scroll_Chat.ContentSize.Height, true);
    }
    #endregion


    private void Button_NextPage(object sender, EventArgs e)
    {
        Navigation.PushAsync(new HomePage());

    }

}



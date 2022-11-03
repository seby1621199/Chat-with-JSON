using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using System.Windows.Media;

namespace Client_JSON_WPF
{
    public class Message
    {
        public string head = "";          // titlul
        public string from = "";               // destinatar
        public string message = "";            // mesaj
        public string to = "all";        // expeditor

    }


    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        static List<string> usernames = new();
        public static Message message = new();
        public static TcpClient client = new();

        public MainWindow()
        {
            InitializeComponent();


        }

        #region Encode&Send
        public static string ConvertObjToString(Message message)
        {
            return JsonConvert.SerializeObject(message);
        }
        public static byte[] Encode(string m)
        {
            byte[] bytes = Encoding.UTF8.GetBytes(m);
            return bytes;
        }
        public static void Send(TcpClient c, Message message)
        {
            NetworkStream s = c.GetStream();
            string m = ConvertObjToString(message);
            s.Write(Encode(m), 0, Encode(m).Length);
        }

        public static void Send(TcpClient c, string m)
        {
            NetworkStream s = c.GetStream();
            Message message = new()
            {
                message = m
            };
            s.Write(Encode(ConvertObjToString(message)), 0, Encode(ConvertObjToString(message)).Length);
        }

        public static Message ConvertStringToObj(string m)
        {
            return JsonConvert.DeserializeObject<Message>(m);
        }

        #endregion

        #region Client initialization

        public static void Send_username(TcpClient c, string username = "default")
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

        public void Get_users(TcpClient c)
        {
            NetworkStream stream = c.GetStream();
            byte[] data = new byte[1024];
            int bytes = stream.Read(data, 0, data.Length);
            string message = Encoding.UTF8.GetString(data, 0, bytes);
            usernames = message.Split(',').ToList();
            foreach (string user in usernames)
            {
                Dispatcher.Invoke(() =>
                {
                    TextBlock textBlock = new()
                    {
                        Text = user,
                        FontSize = 12,
                        Foreground = Brushes.White,
                    };
                    textBlock.MouseLeftButtonDown += new MouseButtonEventHandler(User_Select);
                    clienti.Children.Add(textBlock);
                });
            }
        }
        #endregion


        #region Read
        public void Read(TcpClient c)
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
                    if (m.head == "Connected")
                    {
                        //TODO: Aici trebuie sa adaugam userul in lista de useri
                        Console.Write("Connected to server! " + m.from);
                        Dispatcher.Invoke(() =>
                        {
                            TextBlock textBlock = new()
                            {
                                Text = m.from,
                                FontSize = 12,
                                Foreground = Brushes.White
                            };
                            clienti.Children.Add(textBlock);
                        });
                    }
                    else
                    {

                        Console.WriteLine(m.from + ": " + m.message);

                        Dispatcher.Invoke(() =>
                        {
                            TextBlock textBlock = new()
                            {
                                Text = $"{m.from}: {m.message}",
                                FontSize = 12,
                                Foreground = Brushes.White
                            };
                            chat.Children.Add(textBlock);
                        });
                    }
                }
                catch (Exception e)
                {
                }
            }
        }
        #endregion

        private void User_Select(object sender, MouseButtonEventArgs e)
        {
            var user = (TextBlock)sender;
            message.to = user.Text;
            txtMessage.Text = message.to;
            PrivateMessage privateMessage = new(user.Text);
            privateMessage.Show();

        }




        private void Window_MouseDown(object sender, MouseButtonEventArgs e)
        {
            if (e.ChangedButton == MouseButton.Left)
                this.DragMove();
        }

        private void Btn_Send_Click(object sender, RoutedEventArgs e)
        {
            if (client.Connected)
            {
                if (txtMessage.Text != "")
                {
                    //NetworkStream stream = client.GetStream();
                    //byte[] data = Encoding.UTF8.GetBytes(username + ": " + txtMessage.Text);
                    //send_message(username + ": " + txtMessage.Text);
                    message.message = txtMessage.Text;
                    Send(client, message);
                    txtMessage.Text = "";
                }
            }
            else
            {
                MessageBox.Show("Not connected to server");
            }

        }
        private void Connect()
        {
            if (!client.Connected)
                client.Connect(IPAddress.Parse("192.168.1.105"), 7891);
            else
                MessageBox.Show("Already connected to server");
            if (TxtUsername.Text != "")
            {
                message.from = TxtUsername.Text;
            }
            else
            {
                message.from = Environment.UserName;
            }


        }

        private void Btn_Connect_Click(object sender, RoutedEventArgs e)
        {
            if (!client.Connected)
                Connect();
            if (client.Connected)
            {
                Dispatcher.Invoke(() => //pentru eroarea legata de thread/task cu componentele cu UI
                {
                    TextBlock textBlock = new()
                    {
                        Text = DateTime.Now.ToString("HH:mm") + " " + $"Connected with username:" +
                        $" {message.from}.",
                        FontSize = 12,
                        Foreground = Brushes.White
                    };
                    chat.Children.Add(textBlock);
                });
                NetworkStream stream = client.GetStream();
                Send_username(client, message.from);
                Get_users(client);
                cnc_message.Visibility = Visibility.Visible;
                Task.Run(() => { Read(client); });

            }





            void Window_KeyDown(object sender, System.Windows.Input.KeyEventArgs e)
            {
                if (e.Key == Key.Enter)
                {
                    Btn_Send_Click(sender, e);
                }

            }

            void TxtUsername_KeyDown(object sender, KeyEventArgs e)
            {
                if (e.Key == Key.Enter)
                {
                    if (TxtUsername.Text != "")
                    {
                        message.from = TxtUsername.Text;
                    }
                }

            }
        }

        private void TextBlock_MouseLeftButtonDown(object sender, MouseButtonEventArgs e)
        {

        }
    }
}

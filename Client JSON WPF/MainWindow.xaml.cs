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
        static List<PrivateMessage> privateMessages = new List<PrivateMessage>();
        static List<string> usernames = new();
        public static Message message = new();
        public static TcpClient client = new();
        public static PrivateMessage privateMessage = null;

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
                message = m,
                to = "all"
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
            string message_usernames = Encoding.UTF8.GetString(data, 0, bytes);
            usernames = message_usernames.Split(',').ToList();
            foreach (string user in usernames)
            {
                Dispatcher.Invoke(() =>
                {
                    TextBlock textBlock = new()
                    {
                        Name = user,
                        Text = user,
                        FontSize = 12,
                        Foreground = Brushes.White,
                    };
                    if (user != message.from)
                    {
                        textBlock.MouseEnter += (sender, e) => { textBlock.Foreground = Brushes.Gray; };
                        textBlock.MouseLeave += (sender, e) => { textBlock.Foreground = Brushes.White; };
                        textBlock.MouseLeftButtonDown += new MouseButtonEventHandler(User_Select);
                    }
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
                    if (m.head == "Disconnected")
                    {
                        Dispatcher.Invoke(() =>
                        {
                            TextBlock textBlock = new()
                            {
                                Text = m.message + " s-a deconectat",
                                FontSize = 12,
                                Foreground = Brushes.White,
                            };
                            chat.Children.Add(textBlock);
                        });
                        usernames.Remove(m.message);
                        Dispatcher.Invoke(() =>
                        {
                            TextBlock t = clienti.Children.OfType<TextBlock>().FirstOrDefault(x => x.Name == m.message);
                            clienti.Children.Remove(t);
                            //TODO: remove from private messages
                            PrivateMessage p = privateMessages.FirstOrDefault(x => x.Destinatar == m.message);
                            if (p != null)
                            {
                                privateMessages.Remove(p);
                                p.Close();
                            }
                        });
                        continue;



                    }
                    if (m.head == "Connected Message")
                    {
                        //Console.WriteLine(m.from + ": " + m.message);

                        Dispatcher.Invoke(() =>
                        {
                            TextBlock textBlock = new()
                            {
                                Text = DateTime.Now.ToString("HH:mm") + "  " + $"{m.message}",
                                FontSize = 12,
                                Foreground = Brushes.White
                            };

                            chat.Children.Add(textBlock);

                        });
                    }
                    if (m.head == "")
                    {
                        //Console.WriteLine(m.from + ": " + m.message);

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
                    if (m.head == "Connected")
                    {
                        //TODO: Aici trebuie sa adaugam userul in lista de useri
                        Console.Write("Connected to server! " + m.from);
                        Dispatcher.Invoke(() =>
                        {
                            TextBlock textBlock = new()
                            {
                                Name = m.from,
                                Text = m.from,
                                FontSize = 12,
                                Foreground = Brushes.White
                            };
                            textBlock.MouseLeftButtonDown += new MouseButtonEventHandler(User_Select);
                            textBlock.MouseEnter += (sender, e) => { textBlock.Foreground = Brushes.Gray; };
                            textBlock.MouseLeave += (sender, e) => { textBlock.Foreground = Brushes.White; };
                            clienti.Children.Add(textBlock);
                        });
                    }

                    if (m.head == "Private Message")
                    {
                        Dispatcher.Invoke(() =>
                        {
                            PrivateMessage p = privateMessages.FirstOrDefault(x => x.Destinatar == m.from);
                            if (p == null)
                            {
                                p = new PrivateMessage(m.from);
                                privateMessages.Add(p);
                            }
                            p.AddMessage(m);
                            

                            TextBlock t = clienti.Children.OfType<TextBlock>().FirstOrDefault(x => x.Name == m.from);

                            if (t.Text.Contains("("))
                            {
                                int number = int.Parse(t.Text.Split('(')[1].Split(')')[0]);
                                t.Text = t.Text.Split('(')[0] + "(" + (number + 1) + ")";
                            }
                            else
                            {
                                t.Text = t.Text + "(1)";
                            }
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
            bool find = false;
            message.to = user.Text;
            //see if exist a private message window
            foreach (PrivateMessage p in privateMessages)
            {
                if (p.Destinatar == user.Text)
                {
                    if (!p.IsActive)
                    {
                        p.Show();
                        find = true;
                        return;
                    }
                    else
                    {
                        MessageBox.Show("Already open");
                    }
                }
            }
            privateMessage = privateMessages.FirstOrDefault(x => x.Destinatar == user.Text);
            if (privateMessage != null)
            {
                find = true;
                privateMessage.Show();
            }

            if (!find)
            {
                privateMessage = new PrivateMessage(user.Text);
                privateMessages.Add(privateMessage);
                privateMessage.Show();
            }
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
                    message.to = "all";
                    message.head = "";
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
                client.Connect(IPAddress.Parse("192.168.1.108"), 7891);
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
            {
                Connect();
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
            else
            {

                MessageBox.Show("Already connected to server");

            }
        }

        private void TextBlock_MouseLeftButtonDown(object sender, MouseButtonEventArgs e)
        {

        }

        private void Close_Button_Click(object sender, RoutedEventArgs e)
        {
            this.Close();

        }

        private void TxtMessage_KeyDown(object sender, KeyEventArgs e)
        {
            if (e.Key == Key.Enter)
            {
                Btn_Send_Click(sender, e);
            }
        }

        private void Window_Closed(object sender, EventArgs e)
        {
            client.Close();
            foreach (PrivateMessage p in privateMessages)
            {
                p.Close();
            }
            privateMessages = new List<PrivateMessage>();
        }
    }
}

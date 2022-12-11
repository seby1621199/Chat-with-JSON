using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using System.Windows.Media;

namespace Client_JSON_WPF
{
    /// <summary>
    /// Interaction logic for PrivateMessage.xaml
    /// </summary>
    public partial class PrivateMessage : Window
    {
        public string Destinatar = "";
        readonly string Expeditor = MainWindow.message.from;
        public PrivateMessage(string to)
        {
            InitializeComponent();
            Destinatar = to;
            User_Txt.Text = "Private Message with " + Destinatar;
            // Expeditor = from;
            // IsFirstMessage = first;
            From_Txt.Text = Expeditor;
            // Task.Run(() => { Read(); });

        }

        private void Btn_Send_Click(object sender, RoutedEventArgs e)
        {
            if (txtMessage.Text != "")
            {
                Message message = new()
                {
                    head = "Private Message",
                    from = Expeditor,
                    to = Destinatar,
                    message = txtMessage.Text
                };
                MainWindow.Send(MainWindow.client, message);
                txtMessage.Text = "";
                TextBlock textBlock = new()
                {
                    Text = $"{message.from}: {message.message}",
                    FontSize = 12,
                    Foreground = Brushes.White
                };

                chat.Children.Add(textBlock);

            }
        }



        #region Window 
        private void Close_Button_Click(object sender, RoutedEventArgs e)
        {
            this.Hide();

        }

        private void Window_MouseDown(object sender, MouseButtonEventArgs e)
        {
            if (e.ChangedButton == MouseButton.Left)
                this.DragMove();
        }
        #endregion

        private void User_Txt_DataContextChanged(object sender, DependencyPropertyChangedEventArgs e)
        {

        }

        private void TxtMessage_KeyDown(object sender, KeyEventArgs e)
        {
            if (e.Key == Key.Enter)
            {
                Btn_Send_Click(sender, e);
            }
        }

        internal void AddMessage(Message m)
        {
            TextBlock textBlock = new()
            {
                Text = $"{m.from}: {m.message}",
                FontSize = 12,
                Foreground = Brushes.White
            };
            chat.Children.Add(textBlock);
        }
    }

}

using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;
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
        string Destinatar = "";
        string Expeditor = "";
        bool IsFirstMessage = true;
        public PrivateMessage(string from, string to,bool first=true)
        {
            InitializeComponent();
            Destinatar = to;
            User_Txt.Text = "Private Message with " + Destinatar;
            Expeditor = from;
            IsFirstMessage = first;
            From_Txt.Text = Expeditor;
           // Task.Run(() => { Read(); });

        }

        private void Btn_Send_Click(object sender, RoutedEventArgs e)
        {
            if (txtMessage.Text != "")
            {
                Message message = new();
                if (IsFirstMessage == true)
                {
                    IsFirstMessage = false;
                    message.head = "Private Message Start";
                }
                else
                {
                    message.head = "Private Message";
                }
                // message.head = "Private Message Start";
                message.from = Expeditor;
                message.to = Destinatar;
                message.message = txtMessage.Text;
                MainWindow.Send(MainWindow.client, message);
                txtMessage.Text = "";
                TextBlock textBlock = new()
                {
                    Text = $"{message.from}: {message.message}",
                    FontSize = 12,
                    Foreground = Brushes.White
                };
                //chat.Children.Add(textBlock);
                chat.Children.Add(textBlock);
            }
        }
        


        #region Window 
        private void Close_Button_Click(object sender, RoutedEventArgs e)
        {
            this.Close();

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
    }
}

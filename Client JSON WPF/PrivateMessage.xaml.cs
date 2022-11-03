using System;
using System.Windows;

namespace Client_JSON_WPF
{
    /// <summary>
    /// Interaction logic for PrivateMessage.xaml
    /// </summary>
    public partial class PrivateMessage : Window
    {
        public PrivateMessage(string user)
        {
            InitializeComponent();
            User_Txt.Text = "Private Message To " + user;
            Console.WriteLine("ss");


        }

        private void Btn_Send_Click(object sender, RoutedEventArgs e)
        {
            if (txtMessage.Text != "")
            {
                Message message = new Message();
                message.head = "Private Message";
                message.from = MainWindow.message.from;
                message.to = User_Txt.Text;
                message.message = txtMessage.Text;
                MainWindow.Send(MainWindow.client, message);
                txtMessage.Text = "";
            }
        }
    }
}

namespace Chat.MessageModel;

public partial class MessageSend : ContentView
{
    string from;
    public string From
    {
        get => from;
        set { from = value; OnPropertyChanged(); User.Text = from; }
    }

    public string Message
    {
        get => from;
        set { from = value; OnPropertyChanged(); m_message.Text = Message; date.Text = DateTime.Now.ToString("HH:mm"); }
    }
    public MessageSend()
    {
        InitializeComponent();
    }
}
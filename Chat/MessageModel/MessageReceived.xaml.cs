namespace Chat.MessageModel;

public partial class MessageReceived : ContentView
{
    public string UserColor
    {
        get => UserColor;
        set
        {
            if (value == null)
            {
                UserColor = "#B5B5E9";
                OnPropertyChanged();
            }
            User.TextColor = Color.FromArgb(value); OnPropertyChanged();
        }
    }


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

    public MessageReceived()
    {
        InitializeComponent();
    }
}
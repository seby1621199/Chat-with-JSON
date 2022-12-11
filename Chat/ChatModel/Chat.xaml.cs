namespace Chat.ChatModel;

public partial class Chat : ContentView
{
    string[] Colors = { "#25C1AD", "#7E7EEC", "#C3A92C", "#EC4EE5", "#284BBE", "#EC8735", "#EF5B75", "#D935D9", "#4CBB50", "#9D4FE1", "#3CA5A5" };
    public string Name_Chat
    {
        get => Name_Chat;
        set
        {
            Name.Text = value; OnPropertyChanged(); Avatar_Name.Text = value.Substring(0, 1).ToUpper();
        }
    }

    public string Message_Chat
    {
        get => Message_Chat;
        set
        {
            Message.Text = value; OnPropertyChanged();
        }
    }



    public Chat()
    {
        InitializeComponent();
        var random = new Random();
        var color = Color.FromHex(Colors[random.Next(Colors.Length)]);
        Avatar.BackgroundColor = color;
    }

    private async void TapGestureRecognizer_Tapped(object sender, TappedEventArgs e)
    {
        //create animation when tap for whole area chat
        await Chat_Area.ScaleTo(0.9, 100, Easing.Linear);
        await Chat_Area.ScaleTo(1, 100, Easing.Linear);
        Name.Text = Globals.sss;
        var random = new Random();
        Avatar.BackgroundColor = Color.FromHex(Colors[random.Next(Colors.Length)]);

    }
}
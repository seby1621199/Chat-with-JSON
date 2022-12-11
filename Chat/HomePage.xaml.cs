namespace Chat;

public partial class HomePage : ContentPage
{
    public HomePage()
    {
        InitializeComponent();
        Initialize();
    }

    private void Initialize()
    {

        foreach (var item in Globals.users)
        {
            ChatList.Children.Add(new Chat.ChatModel.Chat()
            {
                Name_Chat = item.name,
                Message_Chat = "Hello"
            });
        }

    }

    private void TapGestureRecognizer_Tapped(object sender, TappedEventArgs e)
    {

    }
}
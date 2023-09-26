## _CHAT APP with JSON using TCP Protocol_  [Archived]
Archived, this project has been improved: [new version](https://github.com/seby1621199/Chat)


The purpose of this application is to send messages to other users.
### Features:
- List of connected users
- Custom username (default system user)
- Private Message 

![Client Windows](https://i.imgur.com/aHmHb8I.png)
<p align="center">
  <img  height="500" src="https://i.imgur.com/MncRG1b.jpeg">
</p>
<br>

![Client](https://i.imgur.com/Gtv4nfO.png)
![Client Web](https://i.imgur.com/25AD6WQ.png)
</br>
For online chat check : <a href="http://server.pavalsebastian.live:8080/chat">website</a>

### Message:
```
    class Message
    {
        public string head = "";
        public string from;
        public string message = "";
        public string to = "all";
    }
```

using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;

namespace Client_JSON
{
    class Message
    {
        public string head = "";          // titlul
        public string from;               // destinatar
        public string message;            // mesaj
        public string to = "all";        // expeditor

    }

    internal class Program
    {
        static List<string> usernames = new List<string>();

        #region Encode&Send
        public static string ConvertObjToString(Message message)
        {
            return JsonConvert.SerializeObject(message);
        }
        public static byte[] encode(string m)
        {
            byte[] bytes = Encoding.UTF8.GetBytes(m);
            return bytes;
        }
        public static void send(TcpClient c, Message message)
        {
            NetworkStream s = c.GetStream();
            string m = ConvertObjToString(message);
            s.Write(encode(m), 0, encode(m).Length);
        }

        public static void send(TcpClient c, string m)
        {
            NetworkStream s = c.GetStream();
            Message message = new Message();
            message.message = m;
            s.Write(encode(ConvertObjToString(message)), 0, encode(ConvertObjToString(message)).Length);
        }

        public static Message ConvertStringToObj(string m)
        {
            return JsonConvert.DeserializeObject<Message>(m);
        }

        #endregion

        #region Client initialization

        public static void send_username(TcpClient c, string username = "default")
        {
            Message message = new Message();
            if (username == "default")
                message.from = Environment.UserName;
            else
                message.from = username;
            message.to = "Server";
            message.message = "Username";
            NetworkStream s = c.GetStream();
            string m = JsonConvert.SerializeObject(message);
            s.Write(encode(m), 0, encode(m).Length);
        }

        public static void get_users(TcpClient c)
        {
            NetworkStream stream = c.GetStream();
            byte[] data = new byte[1024];
            int bytes = stream.Read(data, 0, data.Length);
            string message = Encoding.UTF8.GetString(data, 0, bytes);
            usernames = message.Split(',').ToList();
            Console.WriteLine("Users received! " + message);
        }
        #endregion


        #region Read
        public static void read(TcpClient c)
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
                        Console.Write("Connected to server! " + m.from);
                    else

                        Console.WriteLine(m.from + ": " + m.message);
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message);
                }
            }
        }
        #endregion

        static void Main()
        {

            Console.Title = "Client";
            TcpClient client = new TcpClient();
            client.Connect(IPAddress.Parse("192.168.0.191"), 7891);
            send_username(client);
            get_users(client);
            Task.Run(() => { read(client); });
            while (true)
            {
                {
                    string message = Console.ReadLine();
                    Message m = new Message();
                    m.from = Environment.UserName;
                    m.message = message;
                    m.to = "all";
                    send(client, m);
                }

            }

        }
    }
}

using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;

namespace Server___JSON
{
    class Client
    {

        public string username;
        public TcpClient client;
        public NetworkStream stream;
        public Client(TcpClient client)
        {
            this.client = client;
        }
        #region Client initialization

        /*
         * Steps
         * 1.Get username                       Mai intai trimite la toti mesajul "userul s-a conectat" dupa il pune in lista pentru a nu-l trimite si lui acelasi mesaj
         * 2.Send list of connected users
         * 3. Read&Send loop
         */


        public void get_username()
        {
            byte[] data = new byte[1024];
            stream = client.GetStream();
            int bytes = stream.Read(data, 0, data.Length);
            string messagejson = Encoding.UTF8.GetString(data, 0, bytes);
            Message message = JsonConvert.DeserializeObject<Message>(messagejson);
            this.username = message.from;
            message.head = "Connected";
            Program.send_to_all(message);
            message.head = "";
            message.from = "Server";
            message.message = "User " + username + " connected";
            Program.send_to_all(message);

            Console.WriteLine("User connected! " + this.username);
        }

        public void Send_usernames()
        {
            byte[] data = Encoding.ASCII.GetBytes(String.Join(",", Program.clients.Select(a => a.username).ToList()));
            stream = client.GetStream();
            stream = client.GetStream();
            stream.Write(data, 0, data.Length);
            Console.WriteLine("Usernames sent");


        }

        #endregion

        #region Read
        public void read()
        {
            {
                byte[] data = new byte[1024];
                stream = client.GetStream();
                int bytes = stream.Read(data, 0, data.Length);
                string messagejson = Encoding.UTF8.GetString(data, 0, bytes);
                Message message = JsonConvert.DeserializeObject<Message>(messagejson);
                Console.WriteLine(message.from + ": " + message.message);
                Program.send_to_all(message);
            }
        }
        #endregion
    }




    class Message
    {
        public string head = "";
        public string from;
        public string message = "";
        public string to = "all";

    }
    internal class Program
    {
        public static List<Client> clients = new List<Client>();

        #region Encode&Send
        public static string Convert(Message message)
        {
            return JsonConvert.SerializeObject(message);
        }
        public static byte[] encode(string m)
        {
            byte[] bytes = Encoding.UTF8.GetBytes(m);
            return bytes;
        }

        public static void send_to_all(Message m)
        {

            {
                foreach (Client client in clients)
                {
                    NetworkStream stream = client.client.GetStream();
                    stream.Write(encode(Convert(m)), 0, encode(Convert(m)).Length);
                    stream.Flush();
                }
            }
        }
        public static void send(TcpClient c, Message message)
        {
            NetworkStream s = c.GetStream();
            string m = Convert(message);
            s.Write(encode(m), 0, encode(m).Length);
        }

        #endregion

        public static async Task Main()
        {

            Console.Title = "Server";
            TcpListener listener = new TcpListener(IPAddress.Parse("192.168.1.105"), 7891);
            listener.Start();


            Console.WriteLine("Server is running");
            Console.WriteLine("Waiting for a connection...");

            while (true)
            {
                var tcpclient = await listener.AcceptTcpClientAsync();
                Console.WriteLine("User new");
                Task.Run(() =>
               {
                   Client client = new Client(tcpclient);
                   client.get_username();
                   clients.Add(client);
                   client.Send_usernames();
                   Console.WriteLine(client.username);
                   while (true)
                       client.read();
               });
            }
        }

    }
}

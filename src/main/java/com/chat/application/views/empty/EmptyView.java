package com.chat.application.views.empty;

import com.chat.application.views.ChatBubble;
import com.chat.application.views.ChatBubbleMe;
import com.chat.application.views.MainLayout;
import com.vaadin.flow.component.ClientCallable;
import com.vaadin.flow.component.Key;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.RouteAlias;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.Socket;
import java.util.Random;

@PageTitle("ChatApp")
@Route(value = "chat", layout = MainLayout.class)
@RouteAlias(value = "", layout = MainLayout.class)
@CssImport("./styles/chatapp.css")

public class EmptyView extends VerticalLayout {
    Div chatarea = new Div();
    String username = "website"+(new Random().nextInt(900)+100)+'s';
    TextField inputText = new TextField();
    Socket socket;
    private final UI uimain;


    @ClientCallable

    public void windowClosed() {
        System.out.println("Window closed");
        try {
            OutputStream output = socket.getOutputStream();
            Message message = new Message();
            message.head="Disconnected";
            message.from = "Server";
            message.to = "all";
            message.message = username;
            output.write(message.toJson().getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public EmptyView() throws IOException {

        setSpacing(false);
        Div chatcontainer = new Div();
        chatcontainer.addClassName("chat-container");
        add(chatcontainer);
        chatarea.addClassName("chatarea");
        chatcontainer.add(chatarea);
        uimain = UI.getCurrent();
       uimain.setPollInterval(500);




        socket = new Socket("server.pavalsebastian.live", 7891);
        OutputStream output = socket.getOutputStream();
        Message message = new Message();
        message.from = username;
        message.to = "Server";
        message.message = "Username";
        output.write(message.toJson().getBytes());


        UI.getCurrent().getPage().executeJs("function closeListener() { $0.$server.windowClosed(); } " +
                "window.addEventListener('beforeunload', closeListener); " +
                "window.addEventListener('unload', closeListener);",getElement());
        addDetachListener(e -> windowClosed());

        inputText.addKeyPressListener(Key.ENTER, keyPressEvent -> {
            try {
                sendMessage();
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        });
        Div inputcontainer = new Div();
        inputcontainer.addClassName("input-container");


        inputText.addClassName("input-text");
        inputText.setPlaceholder("Type your message here");
        Button sendButton = new Button("Send");

        sendButton.addClickListener(clickEvent -> {
            try {
                sendMessage();
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        });

        sendButton.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
        inputcontainer.add(inputText, sendButton);
        add(inputcontainer);






        chatarea.add(new Paragraph("Conectat"));
        InputStream input = socket.getInputStream();
        byte[] data = new byte[1024];
        input.read(data);

        chatarea.add(new Paragraph("Welcome to the chat!"));

        new Thread(() -> {
            while (true) {

                try {
                    byte[] data1 = new byte[1024];
                    input.read(data1);
                    String message1 = new String(data1);
                    uimain.access(() -> {

                        Message message2 = new Message(message1);
                        if(message2.head.equals("")) {
                            if(message2.from.equals(username))
                                chatarea.add(new ChatBubbleMe(message2.from, message2.message));
                            else
                                chatarea.add(new ChatBubble(message2.from, message2.message));
                        }
                    });

                } catch (IOException e) {
                    e.printStackTrace();

                    uimain.access(() -> {
                        chatarea.removeAll();
                        chatarea.add(new Paragraph("Disconnected"));
                    });
                }

            }
        }).start();




    }
    private void sendMessage() throws IOException {
        if(!inputText.getValue().equals("")) {
            OutputStream output = socket.getOutputStream();
            Message message = new Message();
            message.head = "";
            message.from = username;
            message.message = inputText.getValue();
            message.to = "all";
            output.write(message.toJson().getBytes());
            inputText.clear();


        }
    }

}

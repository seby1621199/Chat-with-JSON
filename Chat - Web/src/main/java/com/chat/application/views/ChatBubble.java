package com.chat.application.views;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.littemplate.LitTemplate;
import com.vaadin.flow.component.template.Id;

/**
 * A Designer generated component for the chat-bubble template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("chat-bubble")
@JsModule("./chat-bubble.ts")
public class ChatBubble extends LitTemplate {

    @Id("message-him")
    private Div messageHim;
    @Id("message-username")
    private Paragraph messageUsername;
    @Id("message-message")
    private Paragraph messageMessage;

    /**
     * Creates a new ChatBubble.
     */
    public ChatBubble(String name, String message) {
        // You can initialise any data required for the connected UI components here.
        //get element by id 'name' and set the text to the name
        messageUsername.setText(name);
        messageMessage.setText(message);
        //messageHim.setText(namee);
        //messageMe.setText(messagee);
        
       
    }

}

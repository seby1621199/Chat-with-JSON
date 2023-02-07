package com.chat.application.views;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.littemplate.LitTemplate;
import com.vaadin.flow.component.template.Id;

/**
 * A Designer generated component for the chat-bubble-me template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("chat-bubble-me")
@JsModule("./chat-bubble-me.ts")
public class ChatBubbleMe extends LitTemplate {

    @Id("message-username")
    private Paragraph messageUsername;
    @Id("message-message")
    private Paragraph messageMessage;

    /**
     * Creates a new ChatBubbleMe.
     */
    public ChatBubbleMe(String name, String message) {
        // You can initialise any data required for the connected UI components here.
        messageUsername.setText(name);
        messageMessage.setText(message);
    }

}

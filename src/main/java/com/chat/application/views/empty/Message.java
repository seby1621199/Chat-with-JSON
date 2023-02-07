package com.chat.application.views.empty;

public class Message {
    public String head = "";
    public String from= "";
    public String message = "";
    public String to = "";

    public String toJson() {
        return "{\"head\":\"" + head + "\",\"from\":\"" + from + "\",\"message\":\"" + message + "\",\"to\":\"" + to + "\"}";
    }
    public Message() {
    }
    public Message(String json){
        this.head = json.substring(json.indexOf("\"head\":\"")+8,json.indexOf("\",\"from\":\""));
        this.from = json.substring(json.indexOf("\"from\":\"")+8,json.indexOf("\",\"message\":\""));
        this.message = json.substring(json.indexOf("\"message\":\"")+11,json.indexOf("\",\"to\":\""));
        this.to = json.substring(json.indexOf("\"to\":\"")+6,json.indexOf("\"}"));
    }

    public String toString() {
        return from+": "+message;
    }

}

import { LitElement, html, css, customElement } from 'lit-element';

@customElement('chat-bubble-me')
export class ChatBubbleMe extends LitElement {
  static get styles() {
    return css`
      :host {
          display: block;
          height: 100%;
      }
      
.message{
  display:inline-block;
  clear: both;
  padding: 20px;
  border-radius: 30px;
  margin-bottom: 2px;
  font-family: Helvetica, Arial, sans-serif;
}

.him{
  background: #eee;
  float: left;
}

.me{
  float: right;
  background: #0084ff;
  color: #fff;
  align-self: flex-end;
}

.him + .me{
  border-bottom-right-radius: 5px;
}

.me + .me{
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
      
      
      `;
  }

  render() {
    return html`
      <div style="width: 100%">
        <div class="me" id="message-me" style="  display:inline-block;
            clear: both;
            margin-right: 20px;
            padding: 5px;
            padding-left: 20px;
            padding-right: 20px;
            border-radius: 30px;
            margin-bottom: 10px;
        font-family: Helvetica, Arial, sans-serif;
        align-self: flex-end;">
          <p style="
    margin-bottom: 0px;
    font-size: 12px;
    
    color: hsl(125deg 100% 86%);
    display: flex;
    justify-content: flex-end;
    font-weight: bold;
" id="message-username">
            Username
          </p>

          <p style="
    margin-bottom: 3px;
    font-size: 15px;
    margin-top: 2px;
    color: #efefef;
" id="message-message">
            Message from user
          </p>


        </div>
      </div>
    `;
  }

  // Remove this method to render the contents of this view inside Shadow DOM
  createRenderRoot() {
    return this;
  }
}

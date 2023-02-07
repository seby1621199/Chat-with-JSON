import {css, customElement, html, LitElement} from 'lit-element';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';

@customElement('chat-bubble')
export class ChatBubble extends LitElement {

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
 <div class="him" id="message-him" style="
    display: inline-block;
    clear: both;
    padding: 5px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 30px;
    margin-bottom: 10px;
    margin-right: 20px;
    font-family: Helvetica, Arial, sans-serif;">
  
     <p style="
    margin-bottom: 0px;
    font-size: 12px;
    color: hsl(214deg 42% 45%);
    font-weight: bold;
" id="message-username">
      Username 
  </p>
     
  <p style="
    margin-bottom: 3px;
    font-size: 15px;
    margin-top: 2px;" id="message-message">
      Message 
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

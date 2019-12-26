const chatWeb = {
  chatPage: function(chat) {
    return `
      <!doctype html>
      <html>
        <head>
          <title>Chat</title>
          <link rel="stylesheet" href="chat.css"/>
        </head>

        <body>
          <div id="chat-app">
            <div id="side-bar">
              <div>
                <ul id="users">
                ${chatWeb.getUserList(chat)}
                </ul>
              </div>
            </div>
            <div id="chat-window">
              <ol class="messages">     
                  ${chatWeb.getMessageList(chat)}
              </ol>
            </div>
            ${chatWeb.getOutgoing()}
          </div>
        </body>
      </html>`;

  },
  getMessageList: function(chat) {
    return `<ol class="messages">` +
      Object.values(chat.messages).map( message => `
        <li>
          <div class="chat-span">
            <div class="chat-cell">
              <img class="user-icon" src=${chatWeb.getUserImage(chat, message.sender)}>
              <span class="username">${message.sender}</span>
            </div>
            <div class="chat-cell-text">
              <span>${message.text}</span>
              <span class="timestamp">${message.timestamp.toString("2019-01-01 19:20:00").substring(0,25)}</span>
            </div>
          </div>
        </li>    
        `).join('');
  },
  getUserList: function(chat) {
    return `<ul class="users">` +
    Object.values(chat.users).map( user => `
      <li>
              <div class="user">
                <div class="user-icon-div">
                <img class="user-icon" src=${user.image}>
                </div>
                <span class="username">${user.sender}</span>
                <span class="timestamp-sidebar">${user.timestamp.toDateString().substring()}</span>
              </div>
      </li>

    `).join('');
  },
  getOutgoing: function() {
    return `<div id="outgoing">
              <form action="/chat" method="POST">
                <input type="text" class="to-send" name="text" value="" placeholder="Enter message to send"/>
                <input type="hidden" name="username" value="Amit" />
                <button type="submit">Send</button>
              </form>
            </div>`;    
  },

 getUserImage: function(chat, sender){
    var image;
    chat.users.forEach((element) => {
      if(element.sender == sender){
        image = element.image;
      }
    });
    return image;
 }

};
module.exports = chatWeb;

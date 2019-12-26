const chatWeb = {
  chatPage: function(chat, username) {
    return `
      <!doctype html>
      <html>
        <head>
          <title>Chat</title>
          <link rel="stylesheet" href="/chat.css"/>
        </head>
        <body>
            <div id="chat-app">
              <div class="horizontal-container">
                <div id="title">
                  <h2>Welcome to group chat</h2>
                </div>
                ${chatWeb.getRefreshForm(username)}
                ${chatWeb.getLogoutForm(username)}
              </div>
              <div class="horizontal-container">
                  <div id="side-bar">
                    <div>
                      <ul id="users">
                      ${chatWeb.getUserList(chat, username)}
                      </ul>
                    </div>
                  </div>
                  <div id="chat-window">
                    <div class="error-message"> </div>
                    ${chatWeb.getMessageList(chat)}              
                  </div>
              </div>
              ${chatWeb.getOutgoing(username)}
            </div>
        <script src="javascript/chat-client.js"></script>
        </body>
      </html>`;
  },
  getMessageList: function(chat) {
    return `<ol class="messages">` +
      Object.values(chat.messages).map( message => `
        <li>
          <div class="chat-container">
            <div class="chat-cell">
              <img class="user-icon" src= ${message.image}>
              <span class="messagelist-username">${message.sender}</span>
            </div>
            <div class="chat-cell-text ${"__" + message.sender + "__"}">
              <span>${message.text}</span>
              <span class="timestamp">
                ${message.timestamp.getDate()  + "-" + (message.timestamp.getMonth()+1) + "-" + message.timestamp.getFullYear() + " " + message.timestamp.getHours() + ":" + message.timestamp.getMinutes()}
              </span>
            </div>
          </div>
        </li>    
        `).join('') + `</ol>`;
  },
  getUserList: function(chat,username) {
    return `<ul class="users">` +
    Object.values(chat.users).map( user => `
      <li>
            <div class="user">
              <div class="user-icon-div">
              <img class="user-icon" src=${user.image}>
              </div>
              <span class="userlist-username">${user.sender}</span>
              <span class="timestamp-sidebar">${user.timestamp.toDateString()}</span>
            </div>
      </li>

    `).join('');
  },
  getOutgoing: function(username) {
    return `<div id="outgoing">
              <form action="/chat" method="POST">
                <input type="text" class="to-send" name="text" value="" placeholder="Enter message to send"/>
                <input type="hidden" name="username" value="${username}"/>
                <button id="send-button" type="submit" disabled>Send</button>
              </form>
            </div>`;    
  },
  getRefreshForm: function(username){
    return `<form class="simple-button" action="/chat" method="POST">
                  <input type="hidden" name="username" value="${username}"/>
                  <button id="refresh-button" type="submit">Refresh</button>
            </form>`
  },
  getLogoutForm: function(username){
    return `<form class="simple-button" action="/logout" method="POST">
                  <input type="hidden" name="username" value="${username}"/>
                  <button type="submit">Logout</button>
            </form>`
  },
};
module.exports = chatWeb;

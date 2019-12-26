const users = [
{ 
  sender:"Amit",
  image:"images/avatar-amit.jpg",
  timestamp:new Date("2019-01-01 19:20:00"),
},
{
  sender:"Bao",
  image:"images/avatar-bao.jpg",
  timestamp:new Date("2019-01-01 19:20:00"),
}
];

const messages = [
  {
    sender: "Amit",
    timestamp: new Date("2019-01-01 19:20:00"),
    text: "You up?",
  },
  {
    sender: "Bao",
    timestamp: new Date("2019-01-01 19:21:00"),
    text: "Yeah, still working on this INFO6250 work, but I keep getting distracted by cat videos",
  }
];

function addMessage({ sender, timestamp, text}) {
  let obj = {sender:sender,timestamp:timestamp,text:text};
  messages.push(obj);
}

function addUser({sender,timestamp}){
  const image = "images/user-icon.png";
  if(isUsernameInvalid(sender))
    return false;
  let obj = { sender:sender,timestamp:timestamp, image:image};
  let result = users.map(a => a.sender);
  if(!result.includes(sender)){
    users.push(obj);
  }
  return true;
}

function isUsernameInvalid(sender){
  let regExp = /^[a-zA-Z0-9]*$/;
  return !regExp.test(sender);
}

function deleteUser(sender){
  let result = users.map(a => a.sender);
  for( let i = result.length-1; i >=0; i--){
    if(result[i] == Object.values(sender)){
      users.pop(result[i]);
    }
  }
}

function updateUserTimestamp({sender, timestamp}) {
users.forEach((element) => {
  if(element.sender == sender){
    element.timestamp = timestamp;
    }
  });
}

const chat = {
  users,
  messages,
  addMessage,
  updateUserTimestamp,
  addUser,
  deleteUser
};

module.exports = chat;


const users = [
{ 
  sender:"Amit",
  timestamp:new Date("2019-01-01 19:20:00"),
  image:"/images/avatar-amit.jpg",
},
{
  sender:"Bao",
  timestamp:new Date("2019-01-01 19:20:00"),
  image:"/images/avatar-bao.jpg",
}
];

const messages = [
  {
    sender: "Amit",
    timestamp: new Date("2019-01-01 19:20:00"),
    image:"/images/avatar-amit.jpg",
    text: "You up?",
  },
  {
    sender: "Bao",
    timestamp: new Date("2019-01-01 19:21:00"),
    image:"/images/avatar-bao.jpg",
    text: "Yeah, still working on this INFO6250 work, but I keep getting distracted by cat videos",
  }
];

function addMessage({ sender, timestamp, text}){
  let image = "/images/user-icon.png";
  users.forEach((element) => {
    if(element.sender == sender){
      image = element.image;
    }
  });

  let obj = {sender:sender, timestamp:timestamp, text:text, image:image}
  messages.push(obj);
}

function isExistingUser(username){
  let found = false;
  users.forEach((element) => {
    if(element.sender === username){
      found = true;
    }
  });
  return found;
}

function addUser({sender,timestamp}){
  const image = "/images/user-icon.png";
  let obj = { sender:sender, timestamp:timestamp, image:image}
  let result = users.map(a => a.sender);
  if(!result.includes(sender)){
    users.push(obj);
  }
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
    if(element.sender === sender){
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
  deleteUser,
  isExistingUser,
  isUsernameInvalid
};

module.exports = chat;


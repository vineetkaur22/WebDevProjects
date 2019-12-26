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
  var obj = { sender:sender,timestamp:timestamp,text:text};
  messages.push(obj);
  console.log("working");
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
};

module.exports = chat;


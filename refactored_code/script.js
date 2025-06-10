// Written by mlazze@globocorp.com - email me at mlazze1337dev@gmail.com for freelance work!
var messages = [];
var count = 0;

function send() {
  var input = document.getElementById('input');
  var prompt = input.value;

  if (prompt == '') {
    alert('Type something!');
    return;
  }

  count++;
  messages.push(prompt);

  var chat = document.getElementById('chat');
  chat.innerHTML += '<div class="message user">You: ' + prompt + '</div>';
  input.value = '';

  // TODO: Simulate the chat for now
  // replace with a to askGPTGenie(prompt)

  setTimeout(function() {
    var replies = ["Cool!", "Awesome!", "Noice", "Killer idea", "Lowkey fire", "Fire", "Goated idea", "I hear you...", "Sounds like a plan"];
    var reply = replies[Math.floor(Math.random() * replies.length)];
    chat.innerHTML += '<div class="message bot">Bot: ' + reply + '</div>';
    chat.scrollTop = chat.scrollHeight;
  }, 500);
  // End Simulate

}

var appVersion = "1.0";
var appName = "GloboCorp's GPT Genie";
console.log(appName + " " + appVersion + " loaded @ " + new Date());

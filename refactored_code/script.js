document.addEventListener('DOMContentLoaded', () => {
    var messages = [];
    var count = 0;

    var chat = document.getElementById('chat');
    var input = document.getElementById('input');
    var button = document.querySelector('button');

    function send() {
        var prompt = input.value;
        if (prompt === '') {
            alert('Type something!');
            return;
        }

        count++;
        messages.push(prompt);

        chat.innerHTML += '<div class="message user">' + prompt + '</div>';
        input.value = '';

        setTimeout(function () {
            var replies = ["Cool!", "Awesome!", "Noice", "Killer idea", "Lowkey fire", "Fire", "Goated idea", "I hear you...", "Sounds like a plan"];
            var reply = replies[Math.floor(Math.random() * replies.length)];
            chat.innerHTML += '<div class="message bot">GENIE<br>' + reply + '</div>';
            chat.scrollTop = chat.scrollHeight;
        }, 500);
    }

    input.addEventListener('keypress', (event) => {
        if (event.keyCode === 13) {
            send();
        }
    });

    button.addEventListener('click', () => {
        send();
    });

    var appVersion = "1.0";
    var appName = "GloboCorp's GPT Genie";
    console.log(appName + " " + appVersion + " loaded @ " + new Date());
});

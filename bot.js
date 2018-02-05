
var builder = require('botbuilder');

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword
});

let duration = 25 * 60 * 1000; // 25 mins
let timeout;

var bot = module.exports = new builder.UniversalBot(connector, function (session) {
    
    if (session.message.text == "/2505") {
    // Count down 25 mins to the user
        let now, minutes, seconds, distance;

        timeout = new Date().getTime() + duration;
        timer = setInterval(() => {
            now = new Date().getTime();
            distance = timeout - now;

            minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.round((distance % (1000 * 60)) / 1000);

            session.send(`Time left: ${minutes}m ${seconds}s`);
        }, 10000);

        setTimeout(() => {
            session.send('2505 system finished');
            clearInterval(timer);
        }, duration);
    }

    // Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
    session.send(`You said: ${session.message.text}`);
});
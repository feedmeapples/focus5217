
import * as builder from 'botbuilder';
import { pomodoroDialog } from './pomodoro';

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword
});

var bot = new builder.UniversalBot(connector, [
    function (session: builder.Session, args, next) {
        session.send(`sup ${session.message.text}`);
    }
]);

bot.dialog('pomodoro', pomodoroDialog)
    .triggerAction({
        matches: [/start/i],
    });

export { bot };
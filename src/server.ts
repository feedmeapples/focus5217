import * as restify from 'restify';

import { bot } from './bot';

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

// home
server.get('/', (req, res, next) => {
    res.send('Productivity bot for Telegram :P https://t.me/focus5217_bot');
    next();
});

// Listen for messages from users
server.post('/api/messages', (bot.connector('*') as any).listen());
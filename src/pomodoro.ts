
import * as builder from 'botbuilder';

let duration = 25 * 60 * 1000; // 25 mins
let updateInterval = 10 * 1000 // 10 sec
let timeout: number;

export function pomodoroDialog(session: builder.Session) {

    session.send(`Starting ${duration / 60 / 1000} mins timer`);

    let now, minutes, seconds, distance;

    timeout = new Date().getTime() + duration;
    
    const ticker = setInterval(() => {
        // set up a ticker timer
        now = new Date().getTime();
        distance = timeout - now;

        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.round((distance % (1000 * 60)) / 1000);

        session.send(`Time left: ${minutes}m ${seconds}s`);
    }, updateInterval);

    setTimeout(() => {
        // finish the timer
        session.send('2505 system finished');
        clearInterval(ticker);
    }, duration);

}
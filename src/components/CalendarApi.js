import axios from "axios";

const API_KEY = 'AIzaSyCnzlJyzHz7kRv4EV7aIrAMsAXR4gv0VIQ'
const CALENDAR_ID = 'db0mdgc9qej2sdfgonrfme4ghk@group.calendar.google.com'
const CALENDAR_API = 'asbij5ic6q7gdpj6j15diegt1b1t7uf3@import.calendar.google.com';
let test = 'https://calendar.google.com/calendar/ical/db0mdgc9qej2sdfgonrfme4ghk%40group.calendar.google.com/public/basic.ics'
const config = {
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
}


export async function getEventsFromAirbnb() {
    let events = [];
    await axios.get('https://www.airbnb.ca/calendar/ical/36451250.ics?s=a95327e336c80101fa9004d2530ddb19', config)
        .then(r => console.log(r.data))
}


export async function getEventsFromGoogle(CalendarId) {
    let events = [];
    await axios.get(`https://www.googleapis.com/calendar/v3/calendars/${CalendarId}/events?key=${API_KEY}`)
        .then(r => (r.data.items).map((item, fakeId) => events.push({
            id: fakeId + 1,
            title: item.summary,
            start: new Date(item.start.date),
            end: new Date(item.end.date),
            link: item.htmlLink,
        })))
        .catch(e => console.log(e));
   return events;
}



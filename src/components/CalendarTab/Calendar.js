import React from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";
import {getEventsFromGoogle, getEventsFromAirbnb} from '../CalendarApi';
const CALENDAR_ID = 'db0mdgc9qej2sdfgonrfme4ghk@group.calendar.google.com'
const second_id = 'asbij5ic6q7gdpj6j15diegt1b1t7uf3@import.calendar.google.com'
moment.locale();

const localizer = momentLocalizer(moment) // or globalizeLocalizer

getEventsFromAirbnb()

class MyCalendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: this.props.rooms,
            loading: true,
            events: []
        }
    }

    async componentDidMount() {
        let temp;
        let second;
        let full;
        temp = await getEventsFromGoogle(CALENDAR_ID);
        second = await getEventsFromGoogle(second_id);
        full = [...temp, ...second];
        this.setState({events: full, loading: false});
    }


    render() {
        return (
            <>
                {this.state.loading ? <div>loading...</div> :
                    <Calendar
                    localizer={localizer}
                    events={this.state.events}
                    defaultView="month"
                    style={{height: "60vh"}}
                />}

                {/*{this.state.events && <Calendar*/}
                {/*    localizer={localizer}*/}
                {/*    events={this.state.events}*/}
                {/*    defaultView="month"*/}
                {/*    style={{height: "60vh"}}*/}
                {/*/>}*/}
            </>
        )
    };
}
export default MyCalendar;
import React, {useState} from 'react';
import BigCalendar from './Calendar'
import Accordion from '@material-ui/core/Accordion'
import {AccordionDetails, AccordionSummary} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {AccordionStyle} from "../Styles";

const CalendarTab = () => {
    const classes = AccordionStyle();
    const [rooms, SetRooms] = useState([]);

    function handleChange(event) {
        if (event.target.checked === false) {
           const temp = rooms.filter((room) => room.toString() !== event.target.id.toString());
           SetRooms(temp)
        } else {
            const temp = rooms;
            temp.push(event.target.id);
            SetRooms(temp);
        }
    }

    return (
        <>
            <div className="calendar-controls">

                <Accordion className={classes.accordion}>
                    <AccordionSummary className={classes.headingBar} expandIcon={<ExpandMoreIcon/>}>
                        <h1 className={classes.heading}>Calendar Controls</h1>
                        <p className={classes.secondaryHeading}>Choose what rentals to see</p>
                    </AccordionSummary>
                    <AccordionDetails className={classes.details}>
                        <div className="accordion-item-internal-div">
                            <div className="accordion-item-content">
                                <div className="accordion-item-internal-div">
                                    <div className="w-form">
                                        <form id="wf-form-Calendar-Controls-Form" name="wf-form-Calendar-Controls-Form" className="calendar-controls-form">
                                            <div className="flex-box">
                                                <label className="w-checkbox calendar-check-input">
                                                    <input type="checkbox" id="K1" name="King-1" className="w-checkbox-input" defaultChecked={false} onClick={event => handleChange(event)}/>
                                                    <span className="w-form-label">King #1</span>
                                                </label>
                                                <label className="w-checkbox calendar-check-input">
                                                    <input type="checkbox" id="K2" name="King-2" className="w-checkbox-input" defaultChecked={false} onClick={event => handleChange(event)}/>
                                                    <span className="w-form-label">King #2</span>
                                                </label>
                                            </div>
                                            <div className="flex-box flex-box-long">
                                                <label className="w-checkbox calendar-check-input">
                                                    <input type="checkbox" id="Q1" name="Queen-1" className="w-checkbox-input" defaultChecked={false} onClick={event => handleChange(event)}/>
                                                    <span className="w-form-label">Queen #1</span>
                                                </label>
                                                <label className="w-checkbox calendar-check-input">
                                                    <input type="checkbox" id="Q2" name="Queen-2" className="w-checkbox-input" defaultChecked={false} onClick={event => handleChange(event)}/>
                                                    <span className="w-form-label">Queen #2</span>
                                                </label>
                                                <label className="w-checkbox calendar-check-input">
                                                    <input type="checkbox" id="Q3" name="Queen-3" className="w-checkbox-input" defaultChecked={false} onClick={event => handleChange(event)}/>
                                                    <span className="w-form-label">Queen #3</span>
                                                </label>
                                                <label className="w-checkbox calendar-check-input">
                                                    <input type="checkbox" id="Q4" name="Queen-4" className="w-checkbox-input" defaultChecked={false} onClick={event => handleChange(event)}/>
                                                    <span className="w-form-label">Queen #4</span>
                                                </label>
                                                <label className="w-checkbox calendar-check-input">
                                                    <input type="checkbox" id="Q5" name="Queen-5" className="w-checkbox-input" defaultChecked={false} onClick={event => handleChange(event)}/>
                                                    <span className="w-form-label">Queen #5</span>
                                                </label>
                                                <label className="w-checkbox calendar-check-input">
                                                    <input type="checkbox" id="Q6" name="Queen-6" data-name="Queen # 6" className="w-checkbox-input" defaultChecked={false} onClick={event => handleChange(event)}/>
                                                    <span className="w-form-label">Queen #6</span>
                                                </label>
                                                <label className="w-checkbox calendar-check-input">
                                                    <input type="checkbox" id="Q7" name="Queen-7" data-name="Queen # 7" className="w-checkbox-input" defaultChecked={false} onClick={event => handleChange(event)}/>
                                                    <span className="w-form-label">Queen #7</span>
                                                </label>
                                            </div>
                                            <div className="flex-box">
                                                <label className="w-checkbox calendar-check-input">
                                                    <input type="checkbox" id="H1" name="Hostel-Bed-1" data-name="Hostel Bed #1" className="w-checkbox-input" defaultChecked={false} onClick={event => handleChange(event)}/>
                                                    <span className="w-form-label">Hostel Bed #1</span>
                                                </label>
                                                <label className="w-checkbox calendar-check-input">
                                                    <input type="checkbox" id="H2" name="Hostel-Bed-2" data-name="Hostel Bed #2" className="w-checkbox-input" defaultChecked={false} onClick={event => handleChange(event)}/>
                                                    <span className="w-form-label">Hostel Bed #2</span>
                                                </label>
                                                <label className="w-checkbox calendar-check-input">
                                                    <input type="checkbox" id="H3" name="Hostel-Bed-3" data-name="Hostel Bed #3" className="w-checkbox-input" defaultChecked={false} onClick={event => handleChange(event)}/>
                                                    <span className="w-form-label">Hostel Bed #3</span>
                                                </label>
                                                <label className="w-checkbox calendar-check-input">
                                                    <input type="checkbox" id="H4" name="Hostel-Bed-4" data-name="Hostel Bed #4" className="w-checkbox-input" defaultChecked={false} onClick={event => handleChange(event)}/>
                                                    <span className="w-form-label">Hostel Bed #4</span>
                                                </label>
                                                <label className="w-checkbox calendar-check-input">
                                                    <input type="checkbox" id="H5" name="Hostel-Bed-5" data-name="Hostel Bed #5" className="w-checkbox-input" defaultChecked={false} onClick={event => handleChange(event)}/>
                                                    <span className="w-form-label">Hostel Bed #5</span>
                                                </label>
                                                <label className="w-checkbox calendar-check-input">
                                                    <input type="checkbox" id="H6" name="Hostel-Bed-6" data-name="Hostel Bed #6" className="w-checkbox-input" defaultChecked={false} onClick={event => handleChange(event)}/>
                                                    <span className="w-form-label">Hostel Bed #6</span>
                                                </label>
                                                <label className="w-checkbox calendar-check-input">
                                                    <input type="checkbox" id="H7" name="Hostel-Bed-7" data-name="Hostel Bed #7" className="w-checkbox-input" defaultChecked={false} onClick={event => handleChange(event)}/>
                                                    <span className="w-form-label">Hostel Bed #7</span>
                                                </label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>


            <div className="big-calendar">
                {/*<iframe*/}
                {/*    src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=America%2FBelize&amp;src=ZGIwbWRnYzlxZWoyc2RmZ29ucmZtZTRnaGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=YXNiaWo1aWM2cTdnZHBqNmoxNWRpZWd0MWIxdDd1ZjNAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=ZWJqM2Uybm8xczE0dGpnbmU3Ym9yOGg1ZXBkcjhxczFAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=dG9nZnZxNTg5Njljb2tzY252ZWRydGhrYWIwbzU4bm5AaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23E4C441&amp;color=%23F09300&amp;color=%23F4511E&amp;color=%23616161&amp;mode=MONTH&amp;showTitle=0&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=1&amp;showTz=0"*/}
                {/*    className="testCal"> </iframe>*/}
                <BigCalendar rooms={rooms} />
            </div>
        </>
    );

};

export default CalendarTab;
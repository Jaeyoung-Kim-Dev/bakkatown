import React, {useRef} from 'react';
import {AccordionDetails, AccordionSummary} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionStyle from '../Styles'
import axios from "axios";
import {toast} from 'react-toastify';
import {Button} from "react-bootstrap";


const Calendar = (props) => {
    const classes = AccordionStyle();
    const tralpa = useRef(props.settings.tralapaIcal);
    const kingOne = useRef(props.settings.kingOneIcal);
    const kingTwo = useRef(props.settings.kingTwoIcal);
    const queenOne = useRef(props.settings.queenOneIcal);
    const queenTwo = useRef(props.settings.queenTwoIcal);
    const queenThree = useRef(props.settings.queenThreeIcal);
    const queenFour = useRef(props.settings.queenFourIcal);
    const queenFive = useRef(props.settings.queenFiveIcal);
    const queenSix = useRef(props.settings.queenSixIcal);
    const queenSeven = useRef(props.settings.queenSevenIcal);
    const hostelOne = useRef(props.settings.hostelOneIcal);
    const hostelTwo = useRef(props.settings.hostelTwoIcal);
    const hostelThree = useRef(props.settings.hostelThreeIcal);
    const hostelFour = useRef(props.settings.hostelFourIcal);
    const hostelFive = useRef(props.settings.hostelFiveIcal);
    const hostelSix = useRef(props.settings.hostelSixIcal);
    const hostelSeven = useRef(props.settings.hostelSevenIcal);

    function update(event) {
        event.preventDefault()
        event.target.disabled = true;
        alert('updated path: ' + tralpa.current.value);
        axios.post('http://localhost:8080/api/v1/admin/icals', {
            tralapaIcal: tralpa.current.value,
            kingOneIcal: kingOne.current.value,
            kingTwoIcal: kingTwo.current.value,
            queenOneIcal: queenOne.current.value,
            queenTwoIcal: queenTwo.current.value,
            queenThreeIcal: queenThree.current.value,
            queenFourIcal: queenFour.current.value,
            queenFiveIcal: queenFive.current.value,
            queenSixIcal: queenSix.current.value,
            queenSevenIcal: queenSeven.current.value,
            hostelOneIcal: hostelOne.current.value,
            hostelTwoIcal: hostelTwo.current.value,
            hostelThreeIcal: hostelThree.current.value,
            hostelFourIcal: hostelFour.current.value,
            hostelFiveIcal: hostelFive.current.value,
            hostelSixIcal: hostelSix.current.value,
            hostelSevenIcal: hostelSeven.current.value
        })
            .then((response) => {
                if (response.status === 200) {
                    toast.success("Update confirmed");
                    event.target.disabled = false;
                }
            }).catch((e) => {
            console.log("tried sending: ", tralpa.current.value);
            console.log(e);
            toast.error("Could not update");
            event.target.disabled = false;
        })
    }

    return (
        <Accordion className={classes.accordion}>
            <AccordionSummary className={classes.headingBar} expandIcon={<ExpandMoreIcon/>}>
                <h1 className={classes.heading}>Calendar</h1>
                <p className={classes.secondaryHeading}>This application uses iCal link to sync with the calendars from Airbnb</p>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
                <div className="accordion-item-internal-div">
                    <div id="wf-form-icals-Form" className="calendar-setting-form">
                        <input type="text" className="settings-text-field w-input" name="Tralapa" placeholder="Tralapa iCal" id="Tralapa" defaultValue={props.settings.tralapaIcal} ref={tralpa}/>
                        <input type="text" className="settings-text-field w-input" name="King-Room-1" placeholder="King Room #1 iCal" id="King-Room"        defaultValue={props.settings.kingOneIcal} ref={kingOne}/>
                        <input type="text" className="settings-text-field w-input" name="King-Room-2" placeholder="King Room #2  iCal" id="King-Room-3"     defaultValue={props.settings.kingTwoIcal} ref={kingTwo}/>
                        <input type="text" className="settings-text-field w-input" name="Queen-Room-1" placeholder="Queen Room #1  iCal" id="Queen-Room"    defaultValue={props.settings.queenOneIcal} ref={queenOne}/>
                        <input type="text" className="settings-text-field w-input" name="Queen-Room-2" placeholder="Queen Room #2  iCal" id="Queen-Room-2"  defaultValue={props.settings.queenTwoIcal} ref={queenTwo}/>
                        <input type="text" className="settings-text-field w-input" name="Queen-Room-3" placeholder="Queen Room #3  iCal" id="Queen-Room-3"  defaultValue={props.settings.queenThreeIcal} ref={queenThree}/>
                        <input type="text" className="settings-text-field w-input" name="Queen-Room-4" placeholder="Queen Room #4  iCal" id="Queen-Room-4"  defaultValue={props.settings.queenFourIcal} ref={queenFour}/>
                        <input type="text" className="settings-text-field w-input" name="Queen-Room-5" placeholder="Queen Room #5  iCal" id="Queen-Room-5"  defaultValue={props.settings.queenFiveIcal} ref={queenFive}/>
                        <input type="text" className="settings-text-field w-input" name="Queen-Room-6" placeholder="Queen Room #6  iCal" id="Queen-Room-6"  defaultValue={props.settings.queenSixIcal} ref={queenSix}/>
                        <input type="text" className="settings-text-field w-input" name="Queen-Room-7" placeholder="Queen Room #7  iCal" id="Queen-Room-7"  defaultValue={props.settings.queenSevenIcal} ref={queenSeven}/>
                        <input type="text" className="settings-text-field w-input" name="Hostel-Bed-1" placeholder="Hostel Bed #1  iCal" id="Hostel-Bed"    defaultValue={props.settings.hostelOneIcal} ref={hostelOne}/>
                        <input type="text" className="settings-text-field w-input" name="Hostel-Bed-2" placeholder="Hostel Bed #2  iCal" id="Hostel-Bed-2"  defaultValue={props.settings.hostelTwoIcal} ref={hostelTwo}/>
                        <input type="text" className="settings-text-field w-input" name="Hostel-Bed-3" placeholder="Hostel Bed #3  iCal" id="Hostel-Bed-3"  defaultValue={props.settings.hostelThreeIcal} ref={hostelThree}/>
                        <input type="text" className="settings-text-field w-input" name="Hostel-Bed-4" placeholder="Hostel Bed #4  iCal" id="Hostel-Bed-4"  defaultValue={props.settings.hostelFourIcal} ref={hostelFour}/>
                        <input type="text" className="settings-text-field w-input" name="Hostel-Bed-5" placeholder="Hostel Bed #5  iCal" id="Hostel-Bed-5"  defaultValue={props.settings.hostelFiveIcal} ref={hostelFive}/>
                        <input type="text" className="settings-text-field w-input" name="Hostel-Bed-6" placeholder="Hostel Bed #6  iCal" id="Hostel-Bed-6"  defaultValue={props.settings.hostelSixIcal} ref={hostelSix}/>
                        <div className="input-button-flex">
                            <input type="text" className="settings-text-field w-input" name="Hostel-Bed-7" placeholder="Hostel Bed #7  iCal" id="Hostel-Bed-7" defaultValue={props.settings.hostelSevenIcal} ref={hostelSeven}/>
                            <Button variant="dark" onClick={event => update(event)}>Update</Button>
                        </div>
                    </div>
                </div>
            </AccordionDetails>
        </Accordion>
    )
}


export default Calendar;
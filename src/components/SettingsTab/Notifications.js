import React, {useRef} from 'react';
import {AccordionDetails, AccordionSummary} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionStyle from '../Styles'
import axios from "axios";
import {toast} from 'react-toastify';
import {Button} from "react-bootstrap";

const Notifications = (props) => {
    const classes = AccordionStyle();
    const email = useRef(props.notificationEmail);
    const message = useRef(props.message);
    const booking = useRef(props.booking);
    const server = useRef(props.server);


    function update(event) {
        event.preventDefault()
        event.target.disabled = true;
        alert('updated path: ' + email.current.value);
        axios.post('http://localhost:8080/api/v1/admin/notifications', {email: email.current.value, message: message.current.checked, booking: booking.current.checked, server: server.current.checked})
            .then((response) => {
                if (response.status === 200) {
                    toast.success("Update confirmed");
                    event.target.disabled = false;
                }
            }).catch((e) => {
            console.log("tried sending: ", email.current.value, ' ', message.current.checked, ' ', booking.current.checked, ' ', server.current.checked);
            console.log(e);
            toast.error("Could not update");
            event.target.disabled = false;
        })
    }

    return (
        <Accordion className={classes.accordion}>
            <AccordionSummary className={classes.headingBar} expandIcon={<ExpandMoreIcon/>}>
                <h1 className={classes.heading}>Notifications</h1>
                <p className={classes.secondaryHeading}>Set notifications & updates</p>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
                <div className="accordion-item-internal-div">
                    <div id="wf-form-notification-Form" className="notification-form">
                        <input type="email" className="settings-text-field w-input" name="Notification-Email" placeholder="Notification Email"
                               id="Notification-Email" defaultValue={props.notificationEmail} ref={email}/>
                        <label className="w-checkbox checkbox-field-2">
                            <input type="checkbox" id="checkbox-4" name="checkbox-4" className="w-checkbox-input checkbox" defaultChecked={props.message} ref={message}/>
                            <span className="checkbox-label-3 w-form-label">New Message</span>
                        </label>
                        <label className="w-checkbox checkbox-field-2">
                            <input type="checkbox" id="checkbox-3" name="checkbox-3" className="w-checkbox-input checkbox" defaultChecked={props.booking} ref={booking}/>
                            <span className="checkbox-label-3 w-form-label">New Booking</span>
                        </label>
                        <label className="w-checkbox checkbox-field-2">
                            <input type="checkbox" id="checkbox-2" name="checkbox-2" className="w-checkbox-input checkbox" defaultChecked={props.server} ref={server}/>
                            <span className="checkbox-label-3 w-form-label">Server Failure</span>
                        </label>
                        <Button variant="dark" onClick={event => update(event)}>Update</Button>
                    </div>
                </div>
            </AccordionDetails>
        </Accordion>
    )

}

export default Notifications;
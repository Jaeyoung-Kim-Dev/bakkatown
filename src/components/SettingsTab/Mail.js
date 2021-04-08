import React, {useRef} from 'react';
import {AccordionDetails, AccordionSummary} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionStyle from '../Styles'
import axios from "axios";
import {toast} from 'react-toastify';
import {Button} from "react-bootstrap";


const MailSetting = (props) => {
    const classes = AccordionStyle();
    const email = useRef(props.serverEmail);
    const pass = useRef(props.emailPass);

    function update(event) {
        event.preventDefault()
        event.target.disabled = true;
        alert('updated email: ' + email.current.value);
        axios.post('http://localhost:8080/api/v1/admin/mail', {email: email.current.value, password: pass.current.value})
            .then((response) => {
                if (response.status === 200) {
                    toast.success("Update confirmed");
                    event.target.disabled = false;
                }
            }).catch((e) => {
            console.log("tried sending: ", email.current.value, ' ', pass.current.value);
            console.log(e);
            toast.error("Could not update");
            event.target.disabled = false;
        })
    }

    return (
        <Accordion className={classes.accordion}>
            <AccordionSummary className={classes.headingBar} expandIcon={<ExpandMoreIcon/>}>
                <h1 className={classes.heading}>Mail Settings</h1>
                <p className={classes.secondaryHeading}>Public mail server details</p>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
                <div className="accordion-item-internal-div">
                    <input type="email" className="settings-text-field w-input" name="Public-Email" placeholder="Public Email" id="Mail-Input" defaultValue={props.serverEmail}
                           ref={email}/>
                    <div className="input-button-flex">
                        <input type="password" className="settings-text-field w-input" name="Public-Email-Password" placeholder="Email Password" defaultValue={props.emailPass}
                               ref={pass}
                               id="Public-Email-Password"/>
                        <Button variant="dark" onClick={event => update(event)}>Update</Button>
                    </div>
                </div>
            </AccordionDetails>
        </Accordion>
    )
}

export default MailSetting;
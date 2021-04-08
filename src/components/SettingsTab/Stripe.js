import React, {useRef} from 'react';
import {AccordionDetails, AccordionSummary} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionStyle from '../Styles'
import axios from "axios";
import {toast} from 'react-toastify';
import {Button} from "react-bootstrap";

const StripeSetting = (props) => {
    const classes = AccordionStyle();

    const apikey = useRef(props.apikey);

    function update(event) {
        event.preventDefault()
        event.target.disabled = true;
        alert('update api key: ' + apikey.current.value);
        axios.post('http://localhost:8080/api/v1/admin/stripekey', {stripe: apikey.current.value}).then((response) => {
            if (response.status === 200) {
                toast.success("Update confirmed");
                event.target.disabled = false;
            }
        }).catch((e) => {
            console.log("tried sending: ", apikey.current.value);
            console.log(e);
            toast.error("Could not update");
            event.target.disabled = false;
        })
    }


    return (
        <Accordion className={classes.accordion}>
            <AccordionSummary className={classes.headingBar} expandIcon={<ExpandMoreIcon/>}>
                <h1 className={classes.heading}>Stripe Settings</h1>
                <p className={classes.secondaryHeading}>Api key</p>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
                <div className="accordion-item-internal-div">
                    <div className="input-button-flex">
                        <input type="text" className="settings-text-field w-input" name="API-Key" placeholder="Api-Key" id="API-Key" defaultValue={props.apikey} ref={apikey}/>
                        <Button variant="dark" onClick={event => update(event)}>Update</Button>
                    </div>
                </div>
            </AccordionDetails>
        </Accordion>
    )

}

export default StripeSetting;
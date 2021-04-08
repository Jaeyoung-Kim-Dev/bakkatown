import React, {useRef} from 'react';
import {AccordionDetails, AccordionSummary} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionStyle from '../Styles'
import axios from "axios";
import {toast} from 'react-toastify';
import {Button} from "react-bootstrap";

const Report = (props) => {
    const classes = AccordionStyle();
    const path = useRef(props.path);

    function update(event) {
        event.preventDefault()
        event.target.disabled = true;
        alert('updated path: ' + path.current.value);
        axios.post('http://localhost:8080/api/v1/admin/backup', {path:path.current.value})
            .then((response) => {
                if (response.status === 200) {
                    toast.success("Update confirmed");
                    event.target.disabled = false;
                }
            }).catch((e) => {
            console.log("tried sending: ", path.current.value);
            console.log(e);
            toast.error("Could not update");
            event.target.disabled = false;
        })
    }

    return (
        <Accordion className={classes.accordion}>
            <AccordionSummary className={classes.headingBar} expandIcon={<ExpandMoreIcon/>}>
                <h1 className={classes.heading}>Reports &amp; Back-up</h1>
                <p className={classes.secondaryHeading}>Back-up path and exporting reports</p>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
                <div className="accordion-item-internal-div">
                    <div className="input-button-flex">
                        <input type="text" className="settings-text-field w-input" name="Backup-Path" placeholder="Backup Path" id="Backup-Path" defaultValue={props.path} ref={path}/>
                        <Button variant="dark" onClick={event => update(event)}>Update</Button>
                    </div>
                </div>
            </AccordionDetails>
        </Accordion>
    )
}

export default Report;
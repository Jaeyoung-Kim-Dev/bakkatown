import React, {useEffect, useRef, useState} from 'react';
import {AccordionDetails, AccordionSummary, Button} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SaveIcon from "@material-ui/icons/Save";
import Accordion from "@material-ui/core/Accordion";
import {toast} from 'react-toastify';
import AccordionStyle from '../Styles'
import axios from "axios";
import CustomCode from "./CustomCode";


const PromoCodes = () => {
    const classes = AccordionStyle();
    const threeDaysAmount = useRef(null);
    const threeDaysEnabled = useRef(null);
    const weekAmount = useRef(null);
    const weekEnabled = useRef(null);
    const monthAmount = useRef(null);
    const monthEnabled = useRef(null);
    const newDescription = useRef(null);
    const newCode = useRef(null);
    const newAmount = useRef(null);
    const [internal, setInternal] = useState(null);
    const [custom, setCustom] = useState(null);


    async function enable(event) {
        let element = event.target
        element.disabled = true;
        axios.post('http://localhost:8080/api/v1/admin/promo/enable/' + element.id,)
            .then((response) => {
                if (response.status === 200) {
                    toast.success(element.name + " enabled");
                    element.disabled = false;
                }
            }).catch((e) => {
            element.disabled = false;
            element.checked = !element.checked;
            console.log("tried sending: " + element.name);
            console.log(e);
            toast.error("Could not update " + element.name);
        })
    }

    async function remove(event, code) {
        let element = event.target;
        element.disabled = true;
        axios.post('http://localhost:8080/api/v1/admin/promo/delete/' + code.code,)
            .then((response) => {
                if (response.status === 200) {
                    toast.success(element.name + " deleted");
                    element.disabled = false;
                    const updatedList = custom.filter((custom) => custom.code !== code.code);
                    setCustom(updatedList);
                }
            }).catch((e) => {
            element.checked = !element.checked;
            element.disabled = false;
            console.log("tried sending: " + element.name);
            console.log(e);
            toast.error("Could not remove " + element.name);
        })
    }

    async function createCode(event) {
        event.target.disabled = true;
        axios.post('http://localhost:8080/api/v1/admin/promo/create', {
            description: newDescription.current.value,
            code: newCode.current.value,
            amount: newAmount.current.value
        }).then((response) => {
            if (response.status === 200) {
                toast.success(newDescription.current.value + " deleted");
                event.target.disabled = false;
                //todo nothing happens after, update state and remount
            }
        }).catch((e) => {
            let code = {description: newDescription.current.value,
                code: newCode.current.value,
                amount: newAmount.current.value};
            const oldList = custom;
            oldList.push(code);
            setCustom(oldList);
            console.log(custom)

            event.target.disabled = false;
            console.log("tried sending: " + newDescription.current.value);
            console.log(e);
            toast.error("Could not add " + newDescription.current.value);
        })
    }

    useEffect(() => {
        fetch('./JSON/internal.json')
            .then(response => response.json())
            .then(data => setInternal(data));
    }, []);


    useEffect(() => {
        setTimeout(() => //todo take this out because it's updating from json, just want to see change
            fetch('./JSON/customCodes.json')
            .then(response => response.json())
            .then(data => setCustom(data)), 1000)
    }, []);

    return (
        <Accordion className={classes.accordion}>
            <AccordionSummary className={classes.headingBar} expandIcon={<ExpandMoreIcon/>}>
                <h1 className={classes.heading}>Promo Codes</h1>
                <p className={classes.secondaryHeading}>Create promo codes and discounts</p>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
                <div className="accordion-item-internal-div">
                    {internal && <div className="promo-section">
                        <h4 className="heading-6">Internal Codes</h4>
                        <div className="form-block-4 w-form">
                            <div className=" promo-block">
                                <h6 className="heading-5">3 days in a row</h6>
                                <div className="inner-promo-inputs">
                                    <input type="number" className="settings-text-field w-input" placeholder="Discount %"
                                           defaultValue={internal.threeDaysAmount} ref={threeDaysAmount}/>
                                    <label className="w-checkbox">
                                        <input type="checkbox" id={'three'} name="Three Days in a row" className="w-checkbox-input" defaultChecked={internal.threeDaysEnabled}
                                               disabled={false} ref={threeDaysEnabled} onChange={event => enable(event)}/>
                                        <span className="w-form-label">Enabled</span>
                                    </label>
                                </div>
                            </div>
                            <div className="promo-block">
                                <h6 className="heading-5">Whole week booked</h6>
                                <div className="inner-promo-inputs">
                                    <input type="number" className="settings-text-field w-input" placeholder="Discount %"
                                           defaultValue={internal.weekAmount} ref={weekAmount}/>
                                    <label className="w-checkbox">
                                        <input type="checkbox" id="week" name="Whole week" className="w-checkbox-input" defaultChecked={internal.weekEnabled}
                                               disabled={false} ref={weekEnabled}
                                               onChange={event => enable(event)}/>
                                        <span className="w-form-label">Enabled</span>
                                    </label>
                                </div>
                            </div>
                            <div className="promo-block">
                                <h6 className="heading-5">Whole Month booked</h6>
                                <div className="inner-promo-inputs">
                                    <input type="number" className="settings-text-field w-input" placeholder="Discount %"
                                           defaultValue={internal.monthAmount} ref={monthAmount}/>
                                    <label className="w-checkbox">
                                        <input type="checkbox" id="month" name="Whole month" className="w-checkbox-input" defaultChecked={internal.monthEnabled}
                                               disabled={false} ref={monthEnabled} onChange={event => enable(event)}/>
                                        <span className="w-form-label">Enabled</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>}
                    <div className="promo-section">
                        <h4 className="heading-7">External Codes &amp; Discounts</h4>
                        <div className="w-row">
                            <div className="w-col w-col-6">
                                <div className="form-block-4 w-form">
                                    <div className=" promo-block">
                                        <h6 className=" heading-5">Make new Code</h6>
                                        <div className=" promo-code-creator-block">
                                            <input type="text" className="settings-text-field w-input" placeholder="Promo Description" ref={newDescription}/>
                                            <input type="text" className="settings-text-field w-input" placeholder="Promo Code" ref={newCode}/>
                                            <input type="number" min="0" max="100" className="settings-text-field w-input" placeholder="Discount %" ref={newAmount}/>
                                            <Button variant="contained" color="primary" size="small" className={classes.button} startIcon={<SaveIcon/>}
                                                    onClick={event => createCode(event)} disabled={false}>Save</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-col w-col-6">
                                <h6 className="heading-5">Custom Codes</h6>
                                <div className="custom-codes-header-bar">
                                    <div>Description</div>
                                    <div>Input Code</div>
                                    <div>Discount</div>
                                    <div>Enabled</div>
                                    <div>Delete</div>
                                </div>
                                <div className="promo-block">
                                    {custom && custom.map((code, key) => (
                                        <CustomCode code={code} key={code.code} enable={enable} remove={remove}/>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AccordionDetails>
        </Accordion>
    )
}

export default PromoCodes;



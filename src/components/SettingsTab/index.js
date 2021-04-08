import React, {useEffect, useState} from 'react';
import StripeSetting from "./Stripe";
import {AccordionStyle} from "../Styles";
import Mail from "./Mail";
import Report from "./Report";
import Notifications from "./Notifications";
import Calendar from "./Calendar";
import PromoCodes from "./PromoCodes";

const SettingsTab = () => {
    const classes = AccordionStyle();
    const [settings, setSettings] = useState(null);

    useEffect(() => {
        fetch('./JSON/settings.json')
            .then(response => response.json())
            .then(data => setSettings(data));
    }, []);

    return (
        <>
            <div className={classes.wrapper}>
                {settings && <StripeSetting apikey={settings.apikey}/>}

                {settings && <Mail serverEmail={settings.serverEmail} emailPass={settings.emailPass}/>}

                {settings && <Report path={settings.path}/>}

                {settings && <PromoCodes />}

                {settings && <Notifications notificationEmail={settings.notificationEmail} message={settings.message} booking={settings.booking} server={settings.server}/>}

                {settings && <Calendar settings={settings}/>}

            </div>
        </>
    )
};

export default SettingsTab;
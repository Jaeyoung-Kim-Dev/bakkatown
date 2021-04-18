import React from 'react';
import ReservationTab from '../ReservationTab';
import CalendarTab from "../CalendarTab";
import SettingsTab from "../SettingsTab";
import ReviewsTab from "../ReviewsTab";
import {AppBar, Tab, Tabs} from "@material-ui/core";
import * as PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import {tabStyle} from "../Styles";
import {DateRange, EventNote, RateReview, Settings} from "@material-ui/icons";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                // <Box p={3}>
                    <Typography>{children}</Typography>
                // </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const TabBar = () => {
    const classes = tabStyle();
    const [value, setValue] = React.useState(0);


    const handleChange = (event, newValue) => {
        // todo load data here for the tab instead of all of it constantly
        // switch (newValue) {
        //     case 0:
        //         break;
        //     case 1:
        //         break;
        //     case 2:
        //         break;
        //     case 3:
        //         break;
        // }
        setValue(newValue);
    };

    return (

        <>
            <AppBar position="static" color={"transparent"} className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="scrollable force tabs"
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                >

                    <Tab className={classes.tabs} label="Reservation" icon={<EventNote />} {...a11yProps(0)} />
                    <Tab className={classes.tabs} label="Calendar" icon={<DateRange />} {...a11yProps(1)} />
                    <Tab className={classes.tabs} label="Reviews" icon={<RateReview />} {...a11yProps(2)} />
                    <Tab className={classes.tabs} label="Settings" icon={<Settings />} {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <ReservationTab />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <CalendarTab />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <ReviewsTab />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <SettingsTab />
            </TabPanel>
        </>
    );
};
export default TabBar;


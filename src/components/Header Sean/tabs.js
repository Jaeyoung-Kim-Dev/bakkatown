import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReservationTab from '../ReservationTab';
import CalendarTab from "../CalendarTab";
import SettingsTab from "../SettingsTab";
import ReviewsTab from "../ReviewsTab/class";

const TabBar = () => (
    <Tabs>
        <TabList>
            <Tab>Reservations</Tab>
            <Tab>Calendar</Tab>
            <Tab>Reviews</Tab>
            <Tab>Settings</Tab>
        </TabList>
        <TabPanel>
            <ReservationTab />
        </TabPanel>
        <TabPanel>
            <CalendarTab />
        </TabPanel>
        <TabPanel>
            <ReviewsTab />
        </TabPanel>
        <TabPanel>
            <SettingsTab />
        </TabPanel>
    </Tabs>
);
export default TabBar;
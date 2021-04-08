import React, {useState, useEffect, createContext} from 'react';
import {BiUser, BiMoon} from 'react-icons/bi';
import BookingDetail from './BookingDetail'
import {
    BookingCheckBoxLabel,
    GuestName,
    BookingTitleWarp,
    LastUpdate,
    ThridLineWarp,
    BookingCardContainer,
    BookingCardWarpper,
    BookingBodyWarp,
    NavBottomBlock,
    NavSideBar,
    SideButton,
    BookingCheckBox
} from './ReservationBodyElements';
import Popup from "./Popup";


const ReservationTab = () => {
    const [bookings, setBookings] = useState(() => []);
    const [id, setId] = useState();

    const BookingContext = createContext({
        selected: 'booking',
        created: 'create'
    })

    useEffect(() => {
        fetch('./JSON/bookings.json')
            .then((response) => response.json())
            .then((result) => setBookings(result));
    }, []);

    const selectedBooking = bookings.find(selectedBooking => selectedBooking.id === id);

    return (
        <BookingBodyWarp>
            <NavSideBar>
                <BookingCardContainer>
                    {bookings.map((booking, key) => (
                        <BookingCardWarpper key={key}>
                            <BookingCheckBox
                                id={key}
                                type="radio"
                                name="bookings"
                                value={booking.id}
                                checked={id === booking.id}
                                onChange={(e) => setId(e.target.value)}
                            />
                            <BookingCheckBoxLabel htmlFor={key}>
                                <BookingTitleWarp>
                                    <GuestName>{booking.name}</GuestName>
                                    <LastUpdate>{booking.update}</LastUpdate>
                                </BookingTitleWarp>
                                {booking.room}<br/>
                                <ThridLineWarp>
                                    {booking.arrival},&nbsp;
                                    {booking.night}
                                    <BiMoon style={{verticalAlign: 'bottom', marginBottom: '0.1rem'}}/>
                                    {booking.people}
                                    <BiUser style={{verticalAlign: 'bottom', marginBottom: '0.1rem'}}/>
                                </ThridLineWarp>
                            </BookingCheckBoxLabel>
                        </BookingCardWarpper>
                    ))}
                </BookingCardContainer>
                <NavBottomBlock>
                    <Popup />
                    {/*<SideButton>Create Booking</SideButton>*/}
                </NavBottomBlock>
            </NavSideBar>
            <BookingDetail selected={selectedBooking}/>
        </BookingBodyWarp>
    );
};

export default ReservationTab;
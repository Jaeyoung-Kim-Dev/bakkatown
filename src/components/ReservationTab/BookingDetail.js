import {
    BookingContentContainer,
    BookingContentWarpper, BookingDetailItem, BookingDetailWarpper, BookinglItemLabel, BookinglItemValue,
    BookingTitle,
    EmptyContentSubtitle,
    EmptyContentTitle, HrBar, IdNumberAndDate,
    Nonselected, RoomTypeAndGuests
} from "./ReservationBodyElements";
import {Grid} from "@material-ui/core";
import Messages from "./Messages";
import React from "react";


const BookingDetail = (props) => {
    let selectedBooking = props.selected;

    if (selectedBooking === undefined) {
        return (
            <Nonselected>
                <EmptyContentTitle>Reservations</EmptyContentTitle>
                <EmptyContentSubtitle>Select any reservation item</EmptyContentSubtitle>
            </Nonselected>
        );
    } else {
        return (
            <BookingContentContainer>
                <BookingContentWarpper>
                    <BookingTitle>{selectedBooking.name}</BookingTitle>
                    <IdNumberAndDate>#{selectedBooking.id} created on {selectedBooking.update}</IdNumberAndDate>
                    <br/>
                    <RoomTypeAndGuests>{selectedBooking.room} — {selectedBooking.people} adults</RoomTypeAndGuests>
                    <b>{selectedBooking.arrival}</b> 🡢 <b>{selectedBooking.departure}</b>({selectedBooking.night} nights)
                    <br/>
                    <br/>
                    <HrBar/>
                </BookingContentWarpper>
                <Grid container
                      direction="column"
                      justify="space-evenly"
                      alignItems="center"
                      spacing={2}
                >
                    <Grid item>
                        <BookingDetailWarpper>
                            <b>Guest</b>
                            <HrBar/>
                            <BookingDetailItem>
                                <BookinglItemLabel>Name</BookinglItemLabel>
                                <BookinglItemValue>{selectedBooking.name}</BookinglItemValue>
                            </BookingDetailItem>
                            <HrBar/>
                            <BookingDetailItem>
                                <BookinglItemLabel>Email</BookinglItemLabel>
                                <BookinglItemValue>{selectedBooking.email}</BookinglItemValue>
                            </BookingDetailItem>
                            <HrBar/>
                            <BookingDetailItem>
                                <BookinglItemLabel>Phone</BookinglItemLabel>
                                <BookinglItemValue>{selectedBooking.phone}</BookinglItemValue>
                            </BookingDetailItem>
                            <HrBar/>
                            <BookingDetailItem>
                                <BookinglItemLabel>Location</BookinglItemLabel>
                                <BookinglItemValue>{selectedBooking.location}</BookinglItemValue>
                            </BookingDetailItem>
                            <HrBar/>
                            <BookingDetailItem>
                                <BookinglItemLabel>Language</BookinglItemLabel>
                                <BookinglItemValue>{selectedBooking.language}</BookinglItemValue>
                            </BookingDetailItem>
                            <HrBar/>
                        </BookingDetailWarpper>
                    </Grid>
                    <Grid item>
                        <BookingDetailWarpper>
                            <b>Messaging</b>
                            <HrBar/>
                            <Messages id={selectedBooking.id}/>
                            <HrBar/>
                        </BookingDetailWarpper>
                    </Grid>
                </Grid>
            </BookingContentContainer>
        )
    }
};

export default BookingDetail;
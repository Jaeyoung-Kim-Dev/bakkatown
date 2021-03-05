import React from 'react';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { BiUser, BiBed, BiBath, BiWifi } from 'react-icons/bi';
import { ButtonS, ButtonM, RoomsWrapper, RoomsCard } from './BookElements';
// import RoomLists from '../Rooms/roomLists.json';
import {
  RoomsImage,
  RoomsH2,
  RoomsP,
  BtnWrap,
  RoomSpecs,
  RoomSpecList,
} from '../Rooms/RoomsElements';

const Rental = (props) => {
  let filteredRoomLists = props.roomLists;

  filteredRoomLists = filteredRoomLists.filter((room) => {
    return room.roomCapacity >= props.booking.guests;
  });

  const roomHandleChange = (room) => {
    props.setBooking((prevState) => ({
      ...prevState,
      roomType: room,
    }));
  };

  return (
    <>
      <RoomsWrapper>
        {filteredRoomLists.length ? (
          filteredRoomLists.map((room) => (
            <RoomsCard
              key={room.roomTypeId}
              roomName={room.roomTitle}
              selectedRoom={props.booking.roomType.roomTitle}
            >
              <RoomsH2>{room.roomTitle}</RoomsH2>
              <RoomsImage
                src={
                  require(`../../images/rooms/${room.roomTitle}.jpg`)?.default
                }
                alt={room.roomTitle}
              />
              {/* ?.default is temporary because of react-scripts v4.0.1's bug */}

              <RoomSpecs>
                <RoomSpecList>
                  <BiUser
                    style={{
                      color: 'green',
                      marginRight: '0.2rem',
                    }}
                  />
                  {room.roomCapacity}
                </RoomSpecList>
                <RoomSpecList>
                  <BiBed
                    style={{
                      color: 'green',
                      marginRight: '0.2rem',
                    }}
                  />
                  {room.bedCount}
                </RoomSpecList>
                <RoomSpecList>
                  <BiBath
                    style={{
                      color: 'green',
                      marginRight: '0.2rem',
                    }}
                  />
                  {room.bathCount}
                </RoomSpecList>
                <RoomSpecList>
                  {room.size}
                  <span
                    style={{
                      fontSize: '0.7rem',
                      color: 'green',
                      marginLeft: '0.1rem',
                    }}
                  >
                    SQF
                  </span>
                </RoomSpecList>
                {room.wifi && (
                  <RoomSpecList>
                    <BiWifi />
                  </RoomSpecList>
                )}
              </RoomSpecs>
              <RoomsP>
                From{' '}
                <span style={{ fontSize: '1.7rem' }}>${room.roomCost}</span> Per
                Night
              </RoomsP>
              <BtnWrap>
                <ButtonS onClick={() => roomHandleChange(room)}>Select</ButtonS>
                <ButtonM>More Info</ButtonM>
              </BtnWrap>
            </RoomsCard>
          ))
        ) : (
          <div>
            <h1>Sorry!</h1>
            <br />
            <h4>No rooms available during that date.</h4>
            <br />
            <p>Please go back and select another dates.</p>
            <br />
          </div>
        )}
      </RoomsWrapper>
    </>
  );
};

export default Rental;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BiUser, BiBed, BiBath, BiWifi } from 'react-icons/bi';
import { RiParkingBoxLine } from 'react-icons/ri';
import { ButtonS, ButtonM, RoomsWrapper, RoomsCard } from './BookElements';
import RoomLists from '../Rooms/roomLists.json';
import {
  RoomsImage,
  RoomsH2,
  RoomsP,
  BtnWrap,
  RoomSpecs,
  RoomSpecList,
} from '../Rooms/RoomsElements';

const Rental = (props) => {
  const [roomLists, setRoomLists] = useState();

  useEffect(() => {
    axios.get(`http://localhost:8080/book`).then((res) => {
      const roomList = res.data;
      setRoomLists(roomList);
      console.log('2', { filteredRoomLists });
    });

    console.log('feched');
  }, []);

  // let filteredRoomLists = RoomLists;
  // let filteredRoomLists = fetchRoomData;
  let filteredRoomLists = roomLists;
  // console.log('1', { filteredRoomLists });
  // filteredRoomLists = RoomLists;
  filteredRoomLists = filteredRoomLists.filter((room) => {
    return room.people >= props.booking.guests;
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
        {filteredRoomLists.map((room, key) => (
          <RoomsCard
            key={key}
            roomName={room.name}
            selectedRoom={props.booking.roomType.name}
          >
            <RoomsH2>{room.name}</RoomsH2>
            <RoomsImage
              src={require(`../../images/rooms/${room.image}.jpg`)?.default}
              alt={room.name}
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
                {room.people}
              </RoomSpecList>
              <RoomSpecList>
                <BiBed
                  style={{
                    color: 'green',
                    marginRight: '0.2rem',
                  }}
                />
                {room.bed}
              </RoomSpecList>
              <RoomSpecList>
                <BiBath
                  style={{
                    color: 'green',
                    marginRight: '0.2rem',
                  }}
                />
                {room.bath}
              </RoomSpecList>
              <RoomSpecList>
                {room.sqf}
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
              {room.parking && (
                <RoomSpecList>
                  <RiParkingBoxLine />
                </RoomSpecList>
              )}
            </RoomSpecs>
            <RoomsP>
              From <span style={{ fontSize: '1.7rem' }}>${room.price}</span> Per
              Night
            </RoomsP>
            <BtnWrap>
              <ButtonS onClick={() => roomHandleChange(room)}>Select</ButtonS>
              <ButtonM>More Info</ButtonM>
            </BtnWrap>
          </RoomsCard>
        ))}
      </RoomsWrapper>
    </>
  );
};

export default Rental;

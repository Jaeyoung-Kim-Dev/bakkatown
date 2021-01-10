import React, { useState, useEffect } from 'react';
import { BiUser, BiBed, BiBath, BiWifi } from 'react-icons/bi';
import { RiParkingBoxLine } from 'react-icons/ri';
import {
  RoomsContainer,
  RoomsH1,
  RoomsWrapper,
  RoomsCard,
  RoomsImage,
  RoomsH2,
  RoomsP,
} from './RoomsElements';

const Rooms = () => {
  const [rooms, setRooms] = useState(() => []);

  useEffect(() => {
    fetch('./JSON/rooms.json')
      .then((response) => response.json())
      .then((result) => setRooms(result));
  }, []);

  return (
    <RoomsContainer id='services'>
      <RoomsH1>Our Rooms</RoomsH1>
      <RoomsWrapper>
        {rooms.map((room, key) => (
          <RoomsCard key={key}>
            <RoomsImage
              src={require(`../../images/rooms/${room.image}.jpg`)?.default}
              alt={room.name}
            />
            {/* ?.default is temporary because of react-scripts v4.0.1's bug */}
            <RoomsH2>{room.name}</RoomsH2>
            <RoomsP>
              <BiUser />
              {room.people}
              <BiBed />
              {room.bed}
              <BiBath />
              {room.bath}
              {room.sqf}SQF
              {room.wifi && <BiWifi />}
              {room.parking && <RiParkingBoxLine />}
            </RoomsP>
          </RoomsCard>
        ))}
      </RoomsWrapper>
    </RoomsContainer>
  );
};

export default Rooms;

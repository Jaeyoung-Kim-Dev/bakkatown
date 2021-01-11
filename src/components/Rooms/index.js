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
  BtnWrap,
  Button,
  RoomSpecs,
  RoomSpecList,
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
            <RoomsH2>{room.name}</RoomsH2>
            <RoomsImage
              src={require(`../../images/rooms/${room.image}.jpg`)?.default}
              alt={room.name}
            />
            {/* ?.default is temporary because of react-scripts v4.0.1's bug */}

            <RoomSpecs>
              <RoomSpecList>
                <BiUser />
                {room.people}
              </RoomSpecList>
              <RoomSpecList>
                <BiBed />
                {room.bed}
              </RoomSpecList>
              <RoomSpecList>
                <BiBath />
                {room.bath}
              </RoomSpecList>
              <RoomSpecList>
                {room.sqf}
                <span style={{ fontSize: '0.7rem' }}>SQF</span>
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
              From <span style={{ fontSize: '2rem' }}>${room.price}</span> Per
              Night
            </RoomsP>
            <BtnWrap>
              <Button>More Info</Button>
            </BtnWrap>
          </RoomsCard>
        ))}
      </RoomsWrapper>
    </RoomsContainer>
  );
};

export default Rooms;

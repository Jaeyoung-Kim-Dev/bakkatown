import React, { useState, useEffect } from 'react';
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
            <RoomsP>{room.people}</RoomsP>
          </RoomsCard>
        ))}
      </RoomsWrapper>
    </RoomsContainer>
  );
};

export default Rooms;

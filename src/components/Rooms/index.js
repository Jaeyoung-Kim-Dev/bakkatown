import React, { useState, useEffect } from 'react';
import Icon1 from '../../images/svg1.svg';
// import Icon2 from '../../images/svg-2.svg';
// import Icon3 from '../../images/svg-3.svg';
import {
  RoomsContainer,
  RoomsH1,
  RoomsWrapper,
  RoomsCard,
  RoomsIcon,
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
            <RoomsIcon
              src={require(`../../images/${room.icon}.svg`)}
              alt={room.title}
            />
            <RoomsH2>{room.title}</RoomsH2>
            <RoomsP>{room.text}</RoomsP>
          </RoomsCard>
        ))}
      </RoomsWrapper>
    </RoomsContainer>
  );
};

export default Rooms;

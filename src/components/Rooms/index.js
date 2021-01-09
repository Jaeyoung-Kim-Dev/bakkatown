import React, { useState, useEffect } from 'react';
import RoomKing from '../../images/rooms/King_Studio_Apartment.jpg';
import RoomQueen from '../../images/rooms/Queen_Apartments.jpg';
import RoomTralapa from '../../images/rooms/Tralapa_Casita_by_the_Sea.jpg';
import RoomHostel from '../../images/rooms/Hostel_Mixed_Dorm_Room.jpg';
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
            <RoomsIcon src={RoomKing} alt={room.name} />
            <RoomsH2>{room.name}</RoomsH2>
            <RoomsP>{room.people}</RoomsP>
          </RoomsCard>
        ))}
      </RoomsWrapper>
    </RoomsContainer>
  );
};

export default Rooms;

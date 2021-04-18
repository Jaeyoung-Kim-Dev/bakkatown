import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BiUser, BiBed, BiBath, BiWifi } from 'react-icons/bi';
import RoomLists from './roomlists.json';
import {
  RoomsContainer,
  RoomsH1,
  RoomsWrapper,
  RoomsCard,
  RoomsImage,
  RoomsH2,
  RoomsP,
  RoomSpecs,
  RoomSpecList,
} from './RoomsElements';
// import King from './rooms/King.jpg'
// import Queen from './rooms/Queen Apartment.jpg'
// import Hostel from './rooms/Hostel Mixed Dorm Room.jpg'
// import Tralapa from './rooms/Tralapa Casita by the Sea.jpg'


const Rooms = () => {
  const [roomLists, setRoomLists] = useState([]);

  // useEffect(() => {
  //   let images = [King, Queen, Hostel, Tralapa];
  //   let temp = RoomLists;
  //   let counter = 0;
  //   temp.forEach(room => room.roomImg = images[counter++])
  //   setRoomLists(temp)
  // }, []);

  useEffect(() => {

    // setRoomLists(RoomLists) todo maybe change this if not working in the end
    axios.get(`http://localhost:8080/api/room`).then((res) => {
    console.log(roomLists)
      setRoomLists(res.data);
    }).catch(() => console.log('No updates on rooms'));
  }, []);


  // useEffect(() => {
  //   let images = [King, Queen, Hostel, Tralapa];
  //   let temp = RoomLists;
  //   let counter = 0;
  //   temp.forEach(room => room.roomImg = images[counter++])
  //   setRoomLists(temp)
  // }, []);

  return (
      (roomLists &&
      <RoomsContainer id='services'>
       <RoomsH1>Our Rooms</RoomsH1>
      <RoomsWrapper>
        {roomLists.map((room, key) => (
          <RoomsCard key={key}>
            <RoomsH2>{room.roomTitle}</RoomsH2>
            <RoomsImage
              // src={room.roomImg}
              src={require(`../../images/rooms/${room.roomTitle}.jpg`)?.default}
              alt={room.roomTitle}
            />

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
              From <span style={{ fontSize: '1.7rem' }}>${room.roomCost}</span>{' '}
              Per Night
            </RoomsP>
            {/*<BtnWrap>*/}
            {/*  <Button>More Info</Button>*/}
            {/*</BtnWrap>*/}
          </RoomsCard>
        ))}
      </RoomsWrapper>
    </RoomsContainer>)
  );
};

export default Rooms;

import React, { useState, useEffect } from 'react';
import { BiUser, BiBed, BiBath, BiWifi } from 'react-icons/bi';
import { RiParkingBoxLine } from 'react-icons/ri';
import { ButtonS, ButtonM, RoomsWrapper } from './BookElements';
import {
  // RoomsWrapper,
  RoomsCard,
  RoomsImage,
  RoomsH2,
  RoomsP,
  BtnWrap,
  RoomSpecs,
  RoomSpecList,
} from '../Rooms/RoomsElements';

const Rental = (props) => {
  const [rooms, setRooms] = useState(() => []);

  useEffect(() => {
    fetch('./JSON/rooms.json')
      .then((response) => response.json())
      .then((result) => setRooms(result));
  }, []);

  return (
    <>
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
              <ButtonS>Select</ButtonS>
              <ButtonM>More Info</ButtonM>
            </BtnWrap>
          </RoomsCard>
        ))}
      </RoomsWrapper>

      {/* <FormContent>
        <FormLabel htmlFor='king'>
          <FormInput
            type='radio'
            id='king'
            name='roomType'
            value='king'
            onChange={props.handleChange}
            required
          />
          King Studio Apartment
        </FormLabel>
        <FormLabel htmlFor='queen'>
          <FormInput
            type='radio'
            id='queen'
            name='roomType'
            value='queen'
            onChange={props.handleChange}
            required
          />
          Queen Apartments
        </FormLabel>
        <FormLabel htmlFor='tralapaCasita'>
          <FormInput
            type='radio'
            id='tralapaCasita'
            name='roomType'
            value='tralapaCasita'
            onChange={props.handleChange}
            required
          />
          Tralapa Casita by the Sea
        </FormLabel>
        <FormLabel htmlFor='dorm'>
          <FormInput
            type='radio'
            id='dorm'
            name='roomType'
            value='dorm'
            onChange={props.handleChange}
            required
          />
          Hostel Mixed Dorm Room
        </FormLabel>
      </FormContent> */}
    </>
  );
};

export default Rental;

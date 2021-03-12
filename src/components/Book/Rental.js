import React from 'react';
import { BiUser, BiBed, BiBath, BiWifi } from 'react-icons/bi';
import { ButtonS, ButtonM, RoomsWrapper, RoomsCard } from './BookElements';
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
    return room.roomType.roomCapacity >= props.booking.guests;
  });

  const roomHandleChange = (room) => {
    props.setBooking((prevState) => ({
      ...prevState,
      roomId: room.roomId,
      roomType: room.roomType,
    }));
  };

  return (
    <>
      <RoomsWrapper>
        {filteredRoomLists.length ? (
          filteredRoomLists.map((room) => (
            <RoomsCard
              key={room.roomType.roomTypeId}
              roomId={room.roomId}
              selectedRoom={props.booking.roomId}
            >
              <RoomsH2>{room.roomType.roomTitle}</RoomsH2>
              <RoomsImage
                src={
                  require(`../../images/rooms/${room.roomType.roomTitle}.jpg`)
                    ?.default
                }
                alt={room.roomType.roomTitle}
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
                  {room.roomType.roomCapacity}
                </RoomSpecList>
                <RoomSpecList>
                  <BiBed
                    style={{
                      color: 'green',
                      marginRight: '0.2rem',
                    }}
                  />
                  {room.roomType.bedCount}
                </RoomSpecList>
                <RoomSpecList>
                  <BiBath
                    style={{
                      color: 'green',
                      marginRight: '0.2rem',
                    }}
                  />
                  {room.roomType.bathCount}
                </RoomSpecList>
                <RoomSpecList>
                  {room.roomType.size}
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
                {room.roomType.wifi && (
                  <RoomSpecList>
                    <BiWifi />
                  </RoomSpecList>
                )}
              </RoomSpecs>
              <RoomsP>
                From{' '}
                <span style={{ fontSize: '1.7rem' }}>
                  ${room.roomType.roomCost}
                </span>{' '}
                Per Night
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

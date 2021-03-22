import React from 'react';
import { BiUser, BiBed, BiBath, BiWifi } from 'react-icons/bi';
import { connect } from 'react-redux';
import { fetchRooms } from '../../actions/roomActions';
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

const Rooms = (props) => {
  // console.log(props);
  return (
    <RoomsContainer id='services'>
      <RoomsH1>Our Rooms</RoomsH1>
      {props.roomLists ? (
        <RoomsWrapper>
          {props.roomLists.map((room) => (
            <RoomsCard key={room.roomTypeId}>
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
                <Button>More Info</Button>
              </BtnWrap>
            </RoomsCard>
          ))}
        </RoomsWrapper>
      ) : (
        <button>nothing</button>
      )}
    </RoomsContainer>
  );
};

export default connect((state) => {
  return state.roomLists;
}, fetchRooms)(Rooms);

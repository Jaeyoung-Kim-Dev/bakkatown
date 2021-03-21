import React, { useState, useEffect } from 'react';
import store from '../../store';
import axios from 'axios';
import { BiUser, BiBed, BiBath, BiWifi } from 'react-icons/bi';
// import RoomLists from './roomLists.json';
import { connect } from 'react-redux';
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
  // const [roomLists, setRoomLists] = useState(props.roomLists);

  useEffect(() => {
    store.dispatch({ type: 'fetchRooms' });
    // axios.get(`http://localhost:8080/room`).then((res) => {
    //   setRoomLists(res.data);
    // });
  }, []);
  // console.log({ roomLists });
  // store.subscribe(() => setRoomLists(props.roomLists));
  console.log(props.roomLists);

  return (
    <RoomsContainer id='services'>
      <RoomsH1>Our Rooms</RoomsH1>
      {/* <button onClick={() => store.dispatch({ type: 'tt', newVal: 10 })}>
        e
      </button> */}
      {/* <button onClick={() => store.dispatch({ type: 'fetchRooms' })}>e</button> */}
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

function mapReduxStateToReactProps(state) {
  return {
    roomLists: state.roomLists,
  };
}
// function mapReduxDispatchToReactProps(state) {
//   return {};
// }

export default connect(
  mapReduxStateToReactProps
  // mapReduxDispatchToReactProps
)(Rooms);

// export default Rooms;

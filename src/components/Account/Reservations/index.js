import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { DataGrid } from '@material-ui/data-grid';
import { UserContext } from '../../../UserContext';
import formatCurrency from '../../../util';
import {
  Container,
  FormWrap,
  FormContent,
  TableWrapper,
  FormH1,
} from '../AccountElements';
import moment from 'moment';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'startDate', headerName: 'From', width: 150 },
  { field: 'endDate', headerName: 'To', width: 150 },
  { field: 'room', headerName: 'Room', width: 200 },
  { field: 'totalAmount', headerName: 'Total Amount', width: 100 },
];

const Reservations = () => {
  const { user } = useContext(UserContext);
  const [reservations, setReservations] = useState([]);

  useEffect(() => fetchReservations(), []);

  async function fetchReservations() {
    await axios
      .get('/api/account/reservations', {
        params: {
          email: user.email,
        },
      })
      .then((res) => {
        console.log(res.data);
        setReservations(res.data);
      })
      .catch(() => {
        toast('Something went wrong. Please try it later.', { type: 'error' });
      });
  }

  const rows = reservations.map((reservation) => ({
    id: reservation.reservationId,
    startDate: moment(reservation.checkIn).format('ddd, DD MMM YY'),
    endDate: moment(reservation.checkOut).format('ddd, DD MMM YY'),
    room: reservation.room.roomType.roomTitle,
    totalAmount: formatCurrency(reservation.totalCost),
  }));

  console.log(rows);

  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <FormH1>My Reservations</FormH1>
            {reservations.length ? (
              <TableWrapper>
                <DataGrid rows={rows} columns={columns} autoPageSize={true} />
              </TableWrapper>
            ) : (
              <FormH1>No reservation found.</FormH1>
            )}
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Reservations;

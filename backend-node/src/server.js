const cors = require('cors');
const express = require('express');
const stripe = require('stripe')(
  'sk_test_51IN11gDGhZ9LCyXGrtjNI6SDWR5awSzgev8J14PkZlS6Sz4Puh2TmaW1DKNJUKX1qJDSVuGU9S1IX5q7GhMSu27T00jWSbJ1dM'
);
const { v4: uuidv4 } = require('uuid');
const bt_room_type = require('./bt_room_type.json');
const bt_room = require('./bt_room.json');
const bookconfirm = require('./bookconfirm.json');
const reservation_list = require('./reservation_list.json');

const app = express();

app.use(express.json());
app.use(cors());

// app.get('/', (req, res) => {});

app.get('/api/room', (req, res) => {
  console.log(bt_room_type);
  res.json(bt_room_type);
});

app.get('/api/room/available', (req, res) => {
  console.log(req.query);
  setTimeout(() => res.json(bt_room), 1000);
  // res.json(bt_room);
});

app.get('/api/account/reservations', (req, res) => {
  console.log(req.query);
  res.json(reservation_list);
});

app.get('/api/promo', (req, res) => {
  console.log(req.query);
  res.json({
    promoCode: req.query.promoCode,
    discountRate: 20,
  });
});

app.post('/api/account/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const data = {
      token: 'generated_token_number',
      firstName: 'John',
      lastName: 'Doe',
      email: email,
    };
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
  }
});

app.post('/api/account/registration', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    console.log(firstName, lastName, email, password);
    const data = {
      token: 'generated_token_number',
      email: email,
    };
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
  }
});

app.post('/api/account/forgot', async (req, res) => {
  try {
    const email = req.body.email;
    console.log(email);
    const data = {
      email: email,
    };
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
  }
});

app.post('/api/account', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    console.log(firstName, lastName, email, password);
    const data = {
      token: 'generated_token_number',
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
  }
});

app.get('/api/promo', (req, res) => {
  console.log(req.query);
  res.json({
    promoCode: req.query.promoCode,
    discountRate: 20,
  });
});

app.post('/api/charge', async (req, res) => {
  res.json(bookconfirm);
});
// app.post('/api/charge', async (req, res) => {
//   let error;
//   let status;

//   try {
//     const { token, booking, totalAmount } = req.body;
//     const customer = await stripe.customers.create({
//       email: token.email,
//       source: token.id,
//     });

//     const idempotencyKey = uuidv4();
//     console.log({ token });
//     const charge = await stripe.charges.create(
//       {
//         amount: Number(totalAmount).toFixed(0),
//         currency: 'cad',
//         customer: customer.id,
//         receipt_email: token.email,
//         description: `Purchased the ${booking.roomType.name}`,
//         shipping: {
//           name: token.card.name,
//           address: {
//             line1: token.card.address_line1,
//             line2: token.card.address_line2,
//             city: token.card.address_city,
//             country: token.card.address_country,
//             postal_code: token.card.address_zip,
//           },
//         },
//       },
//       {
//         idempotencyKey,
//       }
//     );
//     console.log({ booking });
//     status = 'success';
//   } catch (error) {
//     console.error('Error:', error);
//     status = 'failure';
//   }

//   res.json({ error, status });
// });

app.listen(8080);

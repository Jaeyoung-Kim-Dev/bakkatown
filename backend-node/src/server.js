const cors = require('cors');
const express = require('express');
const stripe = require('stripe')(
  'sk_test_51IN11gDGhZ9LCyXGrtjNI6SDWR5awSzgev8J14PkZlS6Sz4Puh2TmaW1DKNJUKX1qJDSVuGU9S1IX5q7GhMSu27T00jWSbJ1dM'
);
const { v4: uuidv4 } = require('uuid');
const bt_room_type = require('./bt_room_type.json');
const bt_room = require('./bt_room.json');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {});

app.get('/room', (req, res) => {
  console.log(bt_room_type);
  res.json(bt_room_type);
});

app.get('/room/available', (req, res) => {
  console.log(req.query);
  res.json(bt_room);
});

app.post('/charge', async (req, res) => {
  let error;
  let status;
  try {
    const { token, booking, roomId, totalAmount } = req.body;
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const idempotencyKey = uuidv4();
    console.log({ token });
    const charge = await stripe.charges.create(
      {
        amount: Number(totalAmount).toFixed(0),
        currency: 'cad',
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${booking.roomType.name}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip,
          },
        },
      },
      {
        idempotencyKey,
      }
    );
    console.log({ booking });
    status = 'success';
  } catch (error) {
    console.error('Error:', error);
    status = 'failure';
  }

  res.json({ error, status });
});

app.listen(8080);

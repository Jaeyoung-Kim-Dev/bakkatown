const cors = require('cors');
const express = require('express');
const stripe = require('stripe')(
  'sk_test_51IN11gDGhZ9LCyXGrtjNI6SDWR5awSzgev8J14PkZlS6Sz4Puh2TmaW1DKNJUKX1qJDSVuGU9S1IX5q7GhMSu27T00jWSbJ1dM'
);
const { v4: uuidv4 } = require('uuid');
const roomList = require('./roomLists.json');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {});

app.get('/book', (req, res) => {
  console.log(roomList);
  res.json(roomList);
});

app.post('/charge', async (req, res) => {
  // console.log('Request:', req.body);

  let error;
  let status;
  try {
    const { token, booking, totalAmount } = req.body;
    // console.log({ booking });
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
    console.log('Charge:', { charge });
    status = 'success';
  } catch (error) {
    console.error('Error:', error);
    status = 'failure';
  }

  res.json({ error, status });
});

app.listen(8080);

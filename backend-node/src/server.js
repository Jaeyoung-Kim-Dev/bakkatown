const cors = require('cors');
const express = require('express');
const stripe = require('stripe')(
  'sk_test_51IN11gDGhZ9LCyXGrtjNI6SDWR5awSzgev8J14PkZlS6Sz4Puh2TmaW1DKNJUKX1qJDSVuGU9S1IX5q7GhMSu27T00jWSbJ1dM'
);
const uuidv4 = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  //res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
});

app.post('/charge', async (req, res) => {
  // console.log('Request:', req.body);

  let error;
  let status;
  try {
    const { token, booking } = req.body;
    // console.log({ booking });
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const idempotencyKey = uuidv4();
    const charge = await stripe.charges.create(
      {
        // amount: Number(amount).toFixed(2),
        amount: 100,
        currency: 'cad',
        customer: customer.id,
        receipt_email: token.email,
        // description: `Purchased the ${booking.roomType.name}`,
        description: `Purchased the something.`,
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

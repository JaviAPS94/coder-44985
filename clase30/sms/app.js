import express from 'express';
import twilio from 'twilio';

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const TWILIO_ACCOUNT_SID = 'AC740519973b489f9415fdc9c83444d658';
const TWILIO_AUTH_TOKEN = '74a311cb389991b51996ef4088e5bae9';
const TWILIO_PHONE_NUMBER = '+16206348868';

const client = twilio(
    TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN,
    TWILIO_PHONE_NUMBER
);

app.get('/sms', async (req, res) => {
    await client.messages.create({
        from: TWILIO_PHONE_NUMBER,
        to: '+593958963171',
        body: "Este es un mensaje de prueba clase 44985"
    });

    res.send('SMS sent');
});

app.get('/custom-sms', async (req, res) => {
    const { name, product } = req.query;
    await client.messages.create({
        from: TWILIO_PHONE_NUMBER,
        to: '+593958963171',
        body: `Hola ${name} gracias por tu compra. Tu producto es ${product}`
    });

    res.send('SMS sent');
});

app.get('/whatsapp', async(req, res) => {
    let { name, product } = req.query;
    await client.messages.create({
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+593958963171',
        body: `Hola ${name} gracias por tu compra. Tu producto es ${product}`
    });

    res.send('Whatsapp sent');
})

app.listen(8080);
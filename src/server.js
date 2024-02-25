import express from 'express';

const app = express();
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

app.get('/', (req, res) => {
    return res.status(200).send(`<h1>Hello there how are you doing?! NODE_ENV is ${NODE_ENV}</h1>`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port oh yeah: ${PORT}.`);
});
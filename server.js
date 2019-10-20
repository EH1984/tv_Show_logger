const express = require('express');
const app = express();
const connectDB = require('./db');

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/', require('./routes/api/showsRouter'));

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

const express = require('express');
const app = express();
const connectDB = require('./db');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/', require('./routes/api/showsRouter'));

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRouter = require('./routes/user');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
	.connect('mongodb://0.0.0.0:27017/medify')
	.then(() => console.log('MongoDB connected'));

app.use('/user', userRouter);

app.listen(3000, () => {
	console.log('Server running on port 3000');
});

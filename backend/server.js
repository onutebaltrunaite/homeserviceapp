const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const usersRoute = require('./routes/registerUser');
const connectDB = require('./config/db');

dotenv.config();
const app = express();

// Middleware
app.use(express.json()); // Body parser middleware
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/users', usersRoute);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

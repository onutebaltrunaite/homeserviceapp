const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const usersRoute = require('./routes/registerUser');
const loginRoute = require('./routes/loginUser'); // Import login route
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
app.use('/api/users', loginRoute); // Use the login route

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

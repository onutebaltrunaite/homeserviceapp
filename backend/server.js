const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const registerUserRoute = require('./routes/registerUser');
const loginRoute = require('./routes/loginUser'); // Import login route
const protectedRoute = require('./routes/protectedRoute');
const connectDB = require('./config/db');
const userDetailsRoute = require('./routes/userDetails'); // delete if the shit down not correct

dotenv.config();
const app = express();

// Middleware
app.use(express.json()); // Body parser middleware
// app.use(cors()); // kol kas, atniaukti su corso istrinimu, jei neveiks
app.use(cookieParser());

// CORS configuration
const corsOptions = {
    origin: 'http://localhost:5173', // Your frontend URL
    credentials: true, // This allows cookies to be sent
  };
  app.use(cors(corsOptions));


// Connect to MongoDB
connectDB();

// Routes
app.use('/api/users', registerUserRoute);
app.use('/api/users', loginRoute); // Use the login route
app.use('/api', protectedRoute);
app.use('/api/users', userDetailsRoute); // dont know if correct

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

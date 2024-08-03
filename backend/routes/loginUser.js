const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Route to handle user login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log("email is >>>>>>>", email);
  try {
    
    // Check if user exists
    let user = await User.findOne({ email });

    console.log(user);

    if (!user) {
    console.log("user is null or undefinied");
      return res.status(400).json({ msg: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    console.log('Stored Password:', user.password);  
    console.log('Entered Password:', password);
    console.log("User name:", user.name);

    console.log("Passwords match? >>>>", isMatch);
    if (!isMatch) {
        console.log("password doesnt match");
      return res.status(400).json({ msg: 'Invalid credentials' });
    } 
    
    // Return JWT token
    const payload = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});


function checkPassword(password, callback) {
    bcrypt.hash(password, 10, function(err, hash) {
        if (err) {
            return callback(err);
        }

        bcrypt.compare(password, hash, function(err, result) {
            if (err) {
                return callback(err);
            }
            console.log("Passwords match?", result);
            callback(null, result);
        });
    });
}

module.exports = router;

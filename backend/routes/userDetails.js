const express = require('express');
const router = express.Router();
const User = require('../models/User'); // User model

router.put('/me', async (req, res) => {
  try {
    // Extract user ID from request
    const userId = req.body._id;
    const user = await User.findById(userId).select('-password'); // Exclude password

    if (!user) {
      return res.status(500).json({ message: 'User not found' });
    }

    console.log("User to update: ", user);

    // Save updated user to database
    user.name = req.body.name;
    user.email = req.body.email;
    await user.save();


    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/me/:id', async (req, res) => {
  try {
    // Extract user ID from request
    const userId = req.params.id;
    const user = await User.findById(userId).select('-password'); // Exclude password

    if (!user) {
      return res.status(500).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});



module.exports = router;

const express = require('express');
const router = express.Router();
const Business = require('../models/Business');

//Fetch all businesses
router.get('/', async (req, res) => {
  try {
    const businesses = await Business.find();


    if (!businesses) {
      return res.status(500).json({ message: 'Businesses not found' });
    }

    res.json(businesses);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

//Fetch business by ID
router.get('/:id', async (req, res) => {
  try {
 
    // Extract user ID from request
    const businessId = req.params.id;
    const business = await Business.findById(businessId);

    if (!business) {
      return res.status(500).json({ message: 'Business not found' });
    }

    res.json(business);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});



module.exports = router;

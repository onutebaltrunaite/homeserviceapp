// routes/protectedRoute.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');

router.get('/dashboard', auth, (req, res) => {
  res.send('This is a protected route');
});

module.exports = router;

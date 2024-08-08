const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const BusinessSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  about: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true
  },
  contactperson: {
    type: String,
    required: true
  },
  images: {
    type: Array,
    required: false
  }


});

module.exports = mongoose.model('Business', BusinessSchema);

const mongoose = require('mongoose');

const resortSchema = new mongoose.Schema({

  location: String,
  mountain: String
});

const Resorts = mongoose.model('Resorts', resortSchema);

module.exports = Resorts;

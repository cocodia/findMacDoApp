const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Position = new Schema({
    longitude: {
        type: Number
      },
    latitude: {
        type: Number
      },
    name: {
    type: String
  },
  statecode: {
    type: String
  },
  address: {
    type: String
  },
  phonenumber: {
    type: String
  }
},{
    collection: 'mcdopositions'
});

module.exports = mongoose.model('Position', Position);
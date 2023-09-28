const mongoose = require('mongoose');

// Create Schema for Doctors and of their patients of the Hospital

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  name:{
    type: String,
    required: true,
  },
  type:{
    type: String,
    required: true,
  },
  reports:[
    {
        // reports reference 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reports',
    }
  ]
}, {
  timestamps: true
}
)

const User = mongoose.model('User', userSchema);

module.exports = User;
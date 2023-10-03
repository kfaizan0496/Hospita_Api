const mongoose = require('mongoose');

// Create Schema for Report of the Patients

const reportSchema = new mongoose.Schema({
  createdByDoctor: {
    // reference of the doctors who created reports
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  patient: {
    //  refernce id of the patients
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  status: {
    type:String,
    require:true,
    // enum is used because  only specific values are allowed
    enum:['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine',
        'Positive-Admit']
  },
  date:{
    type: Date,
    required: true,
  }
}, {
  timestamps: true
}
)
//  Declare models in the database
const Reports = mongoose.model('Reports', reportSchema);

module.exports = Reports;
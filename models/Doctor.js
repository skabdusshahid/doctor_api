// models/Doctor.js
const mongoose = require('mongoose');

const clinicSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String }
});

const timingsSchema = new mongoose.Schema({
  Monday: {
    type: {
      Morning: { type: [String] },    // Array of strings for Morning time slots (no 'required')
      Afternoon: { type: [String] },  // Array of strings for Afternoon time slots (no 'required')
      Evening: { type: [String] },    // Array of strings for Evening time slots (no 'required')
      Night: { type: [String] }       // Array of strings for Night time slots (no 'required')
    }
  },
  Tuesday: {
    type: {
      Morning: { type: [String] },
      Afternoon: { type: [String] },
      Evening: { type: [String] },
      Night: { type: [String] }
    }
  },
  Wednesday: {
    type: {
      Morning: { type: [String] },
      Afternoon: { type: [String] },
      Evening: { type: [String] },
      Night: { type: [String] }
    }
  },
  Thursday: {
    type: {
      Morning: { type: [String] },
      Afternoon: { type: [String] },
      Evening: { type: [String] },
      Night: { type: [String] }
    }
  },
  Friday: {
    type: {
      Morning: { type: [String] },
      Afternoon: { type: [String] },
      Evening: { type: [String] },
      Night: { type: [String] }
    }
  },
  Saturday: {
    type: {
      Morning: { type: [String] },
      Afternoon: { type: [String] },
      Evening: { type: [String] },
      Night: { type: [String] }
    }
  },
  Sunday: {
    type: {
      Morning: { type: [String] },
      Afternoon: { type: [String] },
      Evening: { type: [String] },
      Night: { type: [String] }
    }
  }
});

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  image: { type: String },
  experience: { type: String },
  details: { type: String },
  clinic: clinicSchema,
  timings: timingsSchema
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;

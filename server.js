
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // Import the cors package
const dotenv = require('dotenv');
const doctorRoutes = require('./routes/doctorRoutes');  // Adjust the path as needed

// Load environment variables from .env file
dotenv.config();  

const app = express();

// Enable CORS for all domains (or specify a domain)
app.use(cors());  // This allows all domains to access the API

// Middleware to parse JSON body
app.use(express.json()); 

// MongoDB Atlas Connection using the environment variable from .env
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.log(err));

// Use the doctor routes
app.use('/api/doctors', doctorRoutes);

// Export the express app as a Vercel serverless function handler
module.exports = app;

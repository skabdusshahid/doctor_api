// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // Import the cors package
const dotenv = require('dotenv');
const doctorRoutes = require('./routes/doctorRoutes');

dotenv.config();  // Load environment variables from .env file

const app = express();

// Enable CORS for all domains (or specify a domain)
app.use(cors());  // This allows all domains to access the API

// Middleware to parse JSON body
app.use(express.json()); 

// MongoDB Atlas Connection
mongoose.connect("mongodb+srv://abdusshahid11399:3QppeRMJJ15VCkwE@cluster0.w3xas7k.mongodb.net/doctordatabase?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.log(err));

// Use the doctor routes
app.use('/api/doctors', doctorRoutes);

// Start the server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

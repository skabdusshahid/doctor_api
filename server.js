// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // Import the cors package
const dotenv = require('dotenv');
const doctorRoutes = require('./routes/doctorRoutes');

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

// Start the server using the port from environment variable or default to 4000
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

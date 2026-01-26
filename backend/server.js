const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mernapp').then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Routes
app.post('/signup', async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    const fullname = `${firstname} ${lastname}`;
    const user = new User({ fullname, email, password });
    await user.save();
    res.status(201).send('User created successfully');
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).send('Email already exists');
    } else {
      res.status(500).send('Server error');
    }
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

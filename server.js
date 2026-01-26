const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User');
const { kenyanCars } = require('./src/kenyan_cars.js');

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/company-portal')
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, 'build')));

// Static HTML routes
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'signup.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// POST routes for authentication
app.post('/signup', async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send('User already exists');
        }
        const newUser = new User({ fullname, email, password });
        await newUser.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).send('Server error');
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).send('Invalid credentials');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send('Invalid credentials');
        }
        res.status(200).send('Login successful');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

// API endpoint for cars
app.get('/api/cars', (req, res) => {
    // Mock car data (same as in Dashboard.js)
    const cars = [
        { id: 1, make: 'Toyota', model: 'Camry', year: 2020, price: 3500000, condition: 'Excellent', image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
        { id: 2, make: 'Honda', model: 'Civic', year: 2019, price: 2800000, condition: 'Good', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
        { id: 4, make: 'BMW', model: 'X3', year: 2018, price: 7500000, condition: 'Used', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
        { id: 5, make: 'Audi', model: 'A4', year: 2022, price: 5500000, condition: 'New', image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
        { id: 6, make: 'Mercedes', model: 'C-Class', year: 2017, price: 6200000, condition: 'Good', image: 'images/mercedesbenzcclass.jpg' },
        { id: 7, make: 'Tesla', model: 'Model 3', year: 2023, price: 5800000, condition: 'New', image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
        { id: 8, make: 'Nissan', model: 'Altima', year: 2016, price: 2200000, condition: 'Used', image: 'https://images.unsplash.com/photo-1549399735-cef2e2c3f638?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
        { id: 9, make: 'Toyota', model: 'Vitz', year: 2018, price: 1800000, condition: 'Good', image: 'https://via.placeholder.com/300x200?text=Toyota+Vitz' },
        { id: 11, make: 'Toyota', model: 'RAV4', year: 2020, price: 4500000, condition: 'New', image: 'https://via.placeholder.com/300x200?text=Toyota+RAV4' },
        { id: 13, make: 'Toyota', model: 'Prius', year: 2021, price: 3800000, condition: 'New', image: 'https://via.placeholder.com/300x200?text=Toyota+Prius' },
        { id: 14, make: 'Honda', model: 'Accord', year: 2019, price: 3200000, condition: 'Good', image: 'https://via.placeholder.com/300x200?text=Honda+Accord' },
        { id: 15, make: 'Nissan', model: 'Sentra', year: 2018, price: 2000000, condition: 'Used', image: 'https://via.placeholder.com/300x200?text=Nissan+Sentra' },
    ];

    // Transform and add Kenyan car data
    let nextId = 46; // Start from next available ID
    Object.keys(kenyanCars).forEach(category => {
        kenyanCars[category].forEach(car => {
            // Parse price range to get average price
            const priceRange = car.typical_price_range;
            const minPrice = parseInt(priceRange.split(' - ')[0].replace('KSh ', '').replace(/,/g, ''));
            const maxPrice = parseInt(priceRange.split(' - ')[1].replace('KSh ', '').replace(/,/g, ''));
            const avgPrice = Math.floor((minPrice + maxPrice) / 2);

            // Generate random year between 2016-2023
            const year = Math.floor(Math.random() * (2023 - 2016 + 1)) + 2016;

            // Assign condition based on year
            let condition = 'Used';
            if (year >= 2022) condition = 'New';
            else if (year >= 2020) condition = 'Excellent';
            else if (year >= 2018) condition = 'Good';

            cars.push({
                id: nextId++,
                make: car.brand,
                model: car.model,
                year: year,
                price: avgPrice,
                condition: condition,
                image: car.image,
                category: category
            });
        });
    });

    res.json(cars);
});

// Serve React app for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0'; // Listen on all network interfaces
app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
    console.log(`Accessible on your network at: http://<your-ip-address>:${PORT}`);
});

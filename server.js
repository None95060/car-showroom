const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/company-portal', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
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
app.post('/signup', (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).send('User already exists');
    }
    users.push({ firstname, lastname, email, password });
    res.status(201).send('User registered successfully');
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        return res.status(401).send('Invalid credentials');
    }
    res.status(200).send('Login successful');
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
        { id: 10, make: 'Toyota', model: 'Probox', year: 2019, price: 2200000, condition: 'Excellent', image: 'images/toyotaprobox.jpg' },
        { id: 11, make: 'Toyota', model: 'RAV4', year: 2020, price: 4500000, condition: 'New', image: 'https://via.placeholder.com/300x200?text=Toyota+RAV4' },
        { id: 12, make: 'Toyota', model: 'Corolla', year: 2017, price: 2500000, condition: 'Used', image: 'images/toyotacorolla.jpg' },
        { id: 13, make: 'Toyota', model: 'Prius', year: 2021, price: 3800000, condition: 'New', image: 'https://via.placeholder.com/300x200?text=Toyota+Prius' },
        { id: 14, make: 'Honda', model: 'Accord', year: 2019, price: 3200000, condition: 'Good', image: 'https://via.placeholder.com/300x200?text=Honda+Accord' },
        { id: 15, make: 'Nissan', model: 'Sentra', year: 2018, price: 2000000, condition: 'Used', image: 'https://via.placeholder.com/300x200?text=Nissan+Sentra' },
        { id: 16, make: 'Toyota', model: 'Passo', year: 2020, price: 750000, condition: 'Good', image: 'images/toyotapasso.jpg' },
        { id: 17, make: 'Nissan', model: 'Juke', year: 2019, price: 1250000, condition: 'Excellent', image: 'images/nissanjuke.jpg' },
        { id: 18, make: 'Suzuki', model: 'Swift', year: 2018, price: 850000, condition: 'Good', image: 'images/suzukiswift.jpg' },
        { id: 19, make: 'Hyundai', model: 'i10', year: 2021, price: 800000, condition: 'New', image: 'images/hyundaii10.jpg' },
        { id: 20, make: 'Nissan', model: 'Sylphy', year: 2019, price: 1400000, condition: 'Good', image: 'images/nissansylphy.jpg' },
        { id: 21, make: 'Toyota', model: 'Wish', year: 2018, price: 1300000, condition: 'Used', image: 'https://images.unsplash.com/photo-1549399735-cef2e2c3f638?w=400&h=300&fit=crop' },
        { id: 22, make: 'Honda', model: 'Fit', year: 2020, price: 1550000, condition: 'Excellent', image: 'images/hondafit.jpg' },
        { id: 23, make: 'Mazda', model: 'Mazda3', year: 2021, price: 2500000, condition: 'New', image: 'images/mazdamazda3.jpg' },
        { id: 24, make: 'Hyundai', model: 'Elantra', year: 2019, price: 2100000, condition: 'Good', image: 'images/hyundaielantra.jpg' },
        { id: 25, make: 'Kia', model: 'Cerato', year: 2020, price: 1900000, condition: 'Excellent', image: 'images/kiacerato.jpg' },
        { id: 26, make: 'Toyota', model: 'Harrier', year: 2022, price: 5500000, condition: 'New', image: 'images/toyotaharrier.jpg' },
        { id: 27, make: 'Subaru', model: 'Forester', year: 2021, price: 4200000, condition: 'New', image: 'images/subaruforester.jpg' },
        { id: 28, make: 'Mazda', model: 'CX-5', year: 2020, price: 3800000, condition: 'Good', image: 'images/mazdacx5.jpg' },
        { id: 29, make: 'Nissan', model: 'X-Trail', year: 2019, price: 3300000, condition: 'Used', image: 'images/nissanxtrail.jpg' },
        { id: 30, make: 'Volkswagen', model: 'Tiguan', year: 2021, price: 3600000, condition: 'Excellent', image: 'images/volkswagentiguan.jpg' },
        { id: 31, make: 'Toyota', model: 'Hilux', year: 2018, price: 3500000, condition: 'Used', image: 'images/toyotahilux.jpg' },
        { id: 32, make: 'Isuzu', model: 'D-MAX', year: 2020, price: 4500000, condition: 'Good', image: 'images/isuzudmax.jpg' },
        { id: 33, make: 'Mitsubishi', model: 'L200', year: 2019, price: 3200000, condition: 'Used', image: 'images/mitsubishil200.jpg' },
        { id: 34, make: 'Mercedes-Benz', model: 'C-Class', year: 2022, price: 9000000, condition: 'New', image: 'images/mercedesbenzcclass.jpg' },
        { id: 35, make: 'BMW', model: '3 Series', year: 2021, price: 10000000, condition: 'New', image: 'images/bmw3series.jpg' },
        { id: 36, make: 'Lexus', model: 'RX', year: 2020, price: 11000000, condition: 'Good', image: 'images/lexusrx.jpg' },
        { id: 37, make: 'Volvo', model: 'XC60', year: 2022, price: 8000000, condition: 'New', image: 'images/volvoxc60.jpg' },
        { id: 38, make: 'Audi', model: 'Q5', year: 2021, price: 9500000, condition: 'Excellent', image: 'images/audiq5.jpg' },
        { id: 39, make: 'Subaru', model: 'Outback', year: 2020, price: 4800000, condition: 'Good', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop' },
        { id: 40, make: 'Subaru', model: 'XV', year: 2021, price: 3500000, condition: 'New', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop' },
        { id: 41, make: 'Subaru', model: 'Legacy', year: 2019, price: 2800000, condition: 'Used', image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop' },
        { id: 42, make: 'Scania', model: 'R500', year: 2018, price: 15000000, condition: 'Used', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop' },
        { id: 43, make: 'Volvo', model: 'FH16', year: 2020, price: 18000000, condition: 'Good', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop' },
        { id: 44, make: 'MAN', model: 'TGX', year: 2019, price: 14000000, condition: 'Used', image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop' },
        { id: 45, make: 'Mercedes-Benz', model: 'Actros', year: 2021, price: 20000000, condition: 'New', image: 'images/mercedesbenzgle.jpg' },
    ];
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

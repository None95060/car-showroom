// Script to check for duplicate cars in the API response
const { kenyanCars } = require('./kenyan_cars.js');

// Simulate the cars array from server.js
const hardcodedCars = [
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
    { id: 35, make: 'BMW', model: '3 Series', year: 2021, price: 10000000, condition: 'New', image: 'images/bmw3series.jpg' },
    { id: 36, make: 'Lexus', model: 'RX', year: 2020, price: 11000000, condition: 'Good', image: 'images/lexusrx.jpg' },
    { id: 37, make: 'Volvo', model: 'XC60', year: 2022, price: 8000000, condition: 'New', image: 'images/volvoxc60.jpg' },
    { id: 38, make: 'Audi', model: 'Q5', year: 2021, price: 9500000, condition: 'Excellent', image: 'images/audiq5.jpg' },
];

// Simulate adding Kenyan cars
let nextId = 46;
const allCars = [...hardcodedCars];

Object.keys(kenyanCars).forEach(category => {
    kenyanCars[category].forEach(car => {
        const priceRange = car.typical_price_range;
        const minPrice = parseInt(priceRange.split(' - ')[0].replace('KSh ', '').replace(/,/g, ''));
        const maxPrice = parseInt(priceRange.split(' - ')[1].replace('KSh ', '').replace(/,/g, ''));
        const avgPrice = Math.floor((minPrice + maxPrice) / 2);

        const year = Math.floor(Math.random() * (2023 - 2016 + 1)) + 2016;

        let condition = 'Used';
        if (year >= 2022) condition = 'New';
        else if (year >= 2020) condition = 'Excellent';
        else if (year >= 2018) condition = 'Good';

        allCars.push({
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

// Check for duplicates based on make and model
const seenMakeModel = new Set();
const duplicatesMakeModel = [];

allCars.forEach(car => {
    const key = `${car.make}-${car.model}`;
    if (seenMakeModel.has(key)) {
        duplicatesMakeModel.push(car);
    } else {
        seenMakeModel.add(key);
    }
});

// Check for duplicates based on image URL
const seenImage = new Set();
const duplicatesImage = [];

allCars.forEach(car => {
    if (seenImage.has(car.image)) {
        duplicatesImage.push(car);
    } else {
        seenImage.add(car.image);
    }
});

console.log('Total cars:', allCars.length);
console.log('Duplicates by make/model:', duplicatesMakeModel.length);
if (duplicatesMakeModel.length > 0) {
    console.log('Duplicate cars by make/model:');
    duplicatesMakeModel.forEach(dup => console.log(`- ${dup.make} ${dup.model} (id: ${dup.id})`));
}

console.log('Duplicates by image:', duplicatesImage.length);
if (duplicatesImage.length > 0) {
    console.log('Duplicate cars by image:');
    duplicatesImage.forEach(dup => console.log(`- ${dup.make} ${dup.model} (id: ${dup.id}, image: ${dup.image})`));
    console.log('\nAll cars with duplicate images:');
    const imageGroups = {};
    duplicatesImage.forEach(car => {
        if (!imageGroups[car.image]) imageGroups[car.image] = [];
        imageGroups[car.image].push(car);
    });
    Object.keys(imageGroups).forEach(image => {
        console.log(`Image: ${image}`);
        imageGroups[image].forEach(car => console.log(`  - ${car.make} ${car.model} (id: ${car.id})`));
    });
}

if (duplicatesMakeModel.length === 0 && duplicatesImage.length === 0) {
    console.log('No duplicates found.');
}

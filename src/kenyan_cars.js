/**
 * Kenyan Cars Data Structure
 * Organized by categories with realistic 2025-2026 prices in Kenyan Shillings (KES)
 */

const kenyanCars = {
    "Hatchbacks": [
        {
            "brand": "Toyota",
            "model": "Yaris",
            "typical_price_range": "KSh 800,000 - KSh 1,100,000",
            "image": "images/toyotavitz.jpg",
            "mileage": "15,000 - 25,000 km",
            "fuel_consumption": "4.5 - 6.0 L/100km",
            "engine": "1.5L 4-cylinder",
            "horsepower": "106 hp",
            "transmission": "CVT Automatic",
            "drivetrain": "FWD",
            "fuel_type": "Petrol",
            "seating_capacity": "5",
            "cargo_space": "286 liters",
            "safety_features": ["ABS", "Airbags", "Stability Control", "Hill Assist"],
            "warranty": "3 years/100,000 km"
        },
        {
            "brand": "Honda",
            "model": "Jazz",
            "typical_price_range": "KSh 900,000 - KSh 1,200,000",
            "image": "images/hondafit.jpg",
            "mileage": "12,000 - 20,000 km",
            "fuel_consumption": "4.8 - 6.5 L/100km",
            "engine": "1.5L 4-cylinder",
            "horsepower": "118 hp",
            "transmission": "CVT Automatic",
            "drivetrain": "FWD",
            "fuel_type": "Petrol",
            "seating_capacity": "5",
            "cargo_space": "354 liters",
            "safety_features": ["ABS", "Airbags", "Stability Control", "Hill Start Assist", "Honda Sensing"],
            "warranty": "3 years/100,000 km"
        },
        {
            "brand": "Volkswagen",
            "model": "Polo",
            "typical_price_range": "KSh 750,000 - KSh 1,000,000",
            "image": "images/hyundaii10.jpg",
            "mileage": "10,000 - 18,000 km",
            "fuel_consumption": "5.0 - 7.0 L/100km",
            "engine": "1.4L 4-cylinder",
            "horsepower": "85 hp",
            "transmission": "5-speed Manual",
            "drivetrain": "FWD",
            "fuel_type": "Petrol",
            "seating_capacity": "5",
            "cargo_space": "280 liters",
            "safety_features": ["ABS", "Airbags", "Stability Control", "Hill Hold Control"],
            "warranty": "3 years/100,000 km"
        },
        {
            "brand": "Renault",
            "model": "Clio",
            "typical_price_range": "KSh 700,000 - KSh 950,000",
            "image": "images/suzukiswift.jpg",
            "mileage": "12,000 - 22,000 km",
            "fuel_consumption": "4.8 - 6.8 L/100km",
            "engine": "1.2L 4-cylinder",
            "horsepower": "75 hp",
            "transmission": "5-speed Manual",
            "drivetrain": "FWD",
            "fuel_type": "Petrol",
            "seating_capacity": "5",
            "cargo_space": "300 liters",
            "safety_features": ["ABS", "Airbags", "Stability Control", "Emergency Braking"],
            "warranty": "3 years/100,000 km"
        },
        {
            "brand": "Peugeot",
            "model": "208",
            "typical_price_range": "KSh 850,000 - KSh 1,150,000",
            "image": "images/kiacerato.jpg",
            "mileage": "8,000 - 16,000 km",
            "fuel_consumption": "4.5 - 6.2 L/100km",
            "engine": "1.2L 3-cylinder",
            "horsepower": "82 hp",
            "transmission": "5-speed Manual",
            "drivetrain": "FWD",
            "fuel_type": "Petrol",
            "seating_capacity": "5",
            "cargo_space": "285 liters",
            "safety_features": ["ABS", "Airbags", "Stability Control", "Lane Keeping Assist"],
            "warranty": "3 years/100,000 km"
        },
        {
            "brand": "Fiat",
            "model": "500",
            "typical_price_range": "KSh 650,000 - KSh 900,000",
            "image": "images/hyundaii10.jpg",
            "mileage": "15,000 - 25,000 km",
            "fuel_consumption": "4.2 - 5.8 L/100km",
            "engine": "1.2L 4-cylinder",
            "horsepower": "69 hp",
            "transmission": "5-speed Manual",
            "drivetrain": "FWD",
            "fuel_type": "Petrol",
            "seating_capacity": "4",
            "cargo_space": "185 liters",
            "safety_features": ["ABS", "Airbags", "Stability Control", "Hill Holder"],
            "warranty": "3 years/100,000 km"
        },
        {
            "brand": "Mini",
            "model": "Cooper",
            "typical_price_range": "KSh 1,500,000 - KSh 2,200,000",
            "image": "images/bmw3series.jpg",
            "mileage": "5,000 - 12,000 km",
            "fuel_consumption": "6.0 - 8.5 L/100km",
            "engine": "1.5L 3-cylinder",
            "horsepower": "136 hp",
            "transmission": "6-speed Manual",
            "drivetrain": "FWD",
            "fuel_type": "Petrol",
            "seating_capacity": "4",
            "cargo_space": "211 liters",
            "safety_features": ["ABS", "Airbags", "Stability Control", "Dynamic Stability Control"],
            "warranty": "3 years/unlimited km"
        },
        {
            "brand": "Opel",
            "model": "Corsa",
            "typical_price_range": "KSh 600,000 - KSh 850,000",
            "image": "images/suzukiswift.jpg",
            "mileage": "14,000 - 24,000 km",
            "fuel_consumption": "4.3 - 6.0 L/100km",
            "engine": "1.2L 3-cylinder",
            "horsepower": "70 hp",
            "transmission": "5-speed Manual",
            "drivetrain": "FWD",
            "fuel_type": "Petrol",
            "seating_capacity": "5",
            "cargo_space": "309 liters",
            "safety_features": ["ABS", "Airbags", "Stability Control", "Forward Collision Alert"],
            "warranty": "3 years/100,000 km"
        }
    ],
    "Sedans": [
        {
            "brand": "Audi",
            "model": "A4",
            "typical_price_range": "KSh 3,500,000 - KSh 5,000,000",
            "image": "images/audia4.jpg",
            "mileage": "6,000 - 12,000 km",
            "fuel_consumption": "7.5 - 11.0 L/100km",
            "engine": "2.0L 4-cylinder Turbo",
            "horsepower": "201 hp",
            "transmission": "7-speed Automatic",
            "drivetrain": "AWD",
            "fuel_type": "Petrol",
            "seating_capacity": "5",
            "cargo_space": "480 liters",
            "safety_features": ["ABS", "Airbags", "Stability Control", "Audi Pre Sense", "Lane Assist"],
            "warranty": "3 years/100,000 km",
            "acceleration": "0-100 km/h in 7.3 seconds",
            "top_speed": "210 km/h"
        },
        {
            "brand": "Mercedes-Benz",
            "model": "E-Class",
            "typical_price_range": "KSh 4,000,000 - KSh 6,000,000",
            "image": "images/mercedesbenzcclass.jpg",
            "mileage": "5,000 - 10,000 km",
            "fuel_consumption": "8.0 - 12.0 L/100km",
            "engine": "2.0L 4-cylinder Turbo",
            "horsepower": "255 hp",
            "transmission": "9-speed Automatic",
            "drivetrain": "RWD",
            "fuel_type": "Petrol",
            "seating_capacity": "5",
            "cargo_space": "540 liters",
            "safety_features": ["ABS", "Airbags", "Stability Control", "Mercedes-Benz Intelligent Drive", "Active Brake Assist"],
            "warranty": "3 years/unlimited km",
            "acceleration": "0-100 km/h in 6.2 seconds",
            "top_speed": "250 km/h"
        },
        {
            "brand": "BMW",
            "model": "5 Series",
            "typical_price_range": "KSh 4,500,000 - KSh 6,500,000",
            "image": "images/bmw3series.jpg",
            "mileage": "4,000 - 9,000 km",
            "fuel_consumption": "7.8 - 11.5 L/100km",
            "engine": "2.0L 4-cylinder Turbo",
            "horsepower": "248 hp",
            "transmission": "8-speed Automatic",
            "drivetrain": "RWD",
            "fuel_type": "Petrol",
            "seating_capacity": "5",
            "cargo_space": "530 liters",
            "safety_features": ["ABS", "Airbags", "Stability Control", "BMW Driving Assistant", "Lane Departure Warning"],
            "warranty": "3 years/unlimited km",
            "acceleration": "0-100 km/h in 6.8 seconds",
            "top_speed": "250 km/h"
        },
        {
            "brand": "Lexus",
            "model": "ES",
            "typical_price_range": "KSh 3,800,000 - KSh 5,500,000",
            "image": "images/lexusrx.jpg",
            "mileage": "7,000 - 13,000 km",
            "fuel_consumption": "8.5 - 12.0 L/100km",
            "engine": "2.5L 4-cylinder Hybrid",
            "horsepower": "215 hp",
            "transmission": "CVT Automatic",
            "drivetrain": "FWD",
            "fuel_type": "Hybrid",
            "seating_capacity": "5",
            "cargo_space": "454 liters",
            "safety_features": ["ABS", "Airbags", "Stability Control", "Lexus Safety System+", "Pre-Collision System"],
            "warranty": "4 years/100,000 km",
            "acceleration": "0-100 km/h in 8.1 seconds",
            "top_speed": "180 km/h"
        },
        {
            "brand": "Volvo",
            "model": "S60",
            "typical_price_range": "KSh 3,200,000 - KSh 4,800,000",
            "image": "images/volvoxc60.jpg",
            "mileage": "8,000 - 15,000 km",
            "fuel_consumption": "6.5 - 9.5 L/100km",
            "engine": "2.0L 4-cylinder Turbo",
            "horsepower": "190 hp",
            "transmission": "8-speed Automatic",
            "drivetrain": "FWD",
            "fuel_type": "Petrol",
            "seating_capacity": "5",
            "cargo_space": "442 liters",
            "safety_features": ["ABS", "Airbags", "Stability Control", "Volvo City Safety", "Pilot Assist"],
            "warranty": "3 years/unlimited km",
            "acceleration": "0-100 km/h in 7.1 seconds",
            "top_speed": "210 km/h"
        },
        {
            "brand": "Jaguar",
            "model": "XE",
            "typical_price_range": "KSh 4,200,000 - KSh 6,000,000",
            "image": "images/jaguarfpace.jpg",
            "mileage": "3,000 - 8,000 km",
            "fuel_consumption": "8.5 - 12.5 L/100km",
            "engine": "2.0L 4-cylinder Turbo",
            "horsepower": "247 hp",
            "transmission": "8-speed Automatic",
            "drivetrain": "RWD",
            "fuel_type": "Petrol",
            "seating_capacity": "5",
            "cargo_space": "410 liters",
            "safety_features": ["ABS", "Airbags", "Stability Control", "Jaguar Co-Pilot", "Emergency Braking"],
            "warranty": "3 years/unlimited km",
            "acceleration": "0-100 km/h in 6.2 seconds",
            "top_speed": "250 km/h"
        },
        {
            "brand": "Infiniti",
            "model": "Q50",
            "typical_price_range": "KSh 3,600,000 - KSh 5,200,000",
            "image": "images/nissansylphy.jpg",
            "mileage": "6,000 - 12,000 km",
            "fuel_consumption": "9.0 - 13.0 L/100km",
            "engine": "3.0L V6 Twin-Turbo",
            "horsepower": "300 hp",
            "transmission": "7-speed Automatic",
            "drivetrain": "RWD",
            "fuel_type": "Petrol",
            "seating_capacity": "5",
            "cargo_space": "382 liters",
            "safety_features": ["ABS", "Airbags", "Stability Control", "Infiniti InTouch", "Forward Emergency Braking"],
            "warranty": "4 years/100,000 km",
            "acceleration": "0-100 km/h in 5.8 seconds",
            "top_speed": "250 km/h"
        },
        {
            "brand": "Acura",
            "model": "TLX",
            "typical_price_range": "KSh 3,900,000 - KSh 5,800,000",
            "image": "images/hondacivic.jpg",
            "mileage": "5,000 - 10,000 km",
            "fuel_consumption": "8.5 - 12.0 L/100km",
            "engine": "2.0L 4-cylinder Turbo",
            "horsepower": "272 hp",
            "transmission": "10-speed Automatic",
            "drivetrain": "FWD",
            "fuel_type": "Petrol",
            "seating_capacity": "5",
            "cargo_space": "382 liters",
            "safety_features": ["ABS", "Airbags", "Stability Control", "AcuraWatch", "Collision Mitigation"],
            "warranty": "4 years/80,000 km",
            "acceleration": "0-100 km/h in 6.0 seconds",
            "top_speed": "220 km/h"
        },
        {
            "brand": "Genesis",
            "model": "G70",
            "typical_price_range": "KSh 3,700,000 - KSh 5,300,000",
            "image": "images/hyundaielantra.jpg",
            "mileage": "4,000 - 9,000 km",
            "fuel_consumption": "9.0 - 13.0 L/100km",
            "engine": "2.0L 4-cylinder Turbo",
            "horsepower": "252 hp",
            "transmission": "8-speed Automatic",
            "drivetrain": "RWD",
            "fuel_type": "Petrol",
            "seating_capacity": "5",
            "cargo_space": "374 liters",
            "safety_features": ["ABS", "Airbags", "Stability Control", "Genesis Smart Cruise", "Lane Keeping Assist"],
            "warranty": "5 years/unlimited km",
            "acceleration": "0-100 km/h in 6.1 seconds",
            "top_speed": "240 km/h"
        },
        {
            "brand": "Cadillac",
            "model": "ATS",
            "typical_price_range": "KSh 3,400,000 - KSh 4,900,000",
            "image": "images/chevroletcruze.jpg",
            "mileage": "7,000 - 14,000 km",
            "fuel_consumption": "9.5 - 13.5 L/100km",
            "engine": "2.0L 4-cylinder Turbo",
            "horsepower": "272 hp",
            "transmission": "6-speed Automatic",
            "drivetrain": "RWD",
            "fuel_type": "Petrol",
            "seating_capacity": "5",
            "cargo_space": "295 liters",
            "safety_features": ["ABS", "Airbags", "Stability Control", "Cadillac CUE", "Forward Collision Alert"],
            "warranty": "4 years/80,000 km",
            "acceleration": "0-100 km/h in 5.9 seconds",
            "top_speed": "225 km/h"
        },
        {
            "brand": "Lincoln",
            "model": "MKZ",
            "typical_price_range": "KSh 3,300,000 - KSh 4,700,000",
            "image": "images/fordfocus.jpg",
            "mileage": "8,000 - 15,000 km",
            "fuel_consumption": "8.5 - 12.0 L/100km",
            "engine": "2.0L 4-cylinder Turbo",
            "horsepower": "245 hp",
            "transmission": "6-speed Automatic",
            "drivetrain": "FWD",
            "fuel_type": "Petrol",
            "seating_capacity": "5",
            "cargo_space": "436 liters",
            "safety_features": ["ABS", "Airbags", "Stability Control", "Lincoln Co-Pilot360", "Pre-Collision Assist"],
            "warranty": "4 years/80,000 km",
            "acceleration": "0-100 km/h in 7.2 seconds",
            "top_speed": "200 km/h"
        },
        {
            "brand": "Chrysler",
            "model": "300",
            "typical_price_range": "KSh 2,800,000 - KSh 4,200,000",
            "image": "images/jeepcompass.jpg",
            "mileage": "10,000 - 18,000 km",
            "fuel_consumption": "9.5 - 14.0 L/100km",
            "engine": "3.6L V6",
            "horsepower": "300 hp",
            "transmission": "8-speed Automatic",
            "drivetrain": "RWD",
            "fuel_type": "Petrol",
            "seating_capacity": "5",
            "cargo_space": "462 liters",
            "safety_features": ["ABS", "Airbags", "Stability Control", "Electronic Stability Control", "Traction Control"],
            "warranty": "3 years/60,000 km",
            "acceleration": "0-100 km/h in 6.4 seconds",
            "top_speed": "230 km/h"
        },
        {
            "brand": "Dodge",
            "model": "Charger",
            "typical_price_range": "KSh 3,000,000 - KSh 4,500,000",
            "image": "images/jeepcompass.jpg",
            "mileage": "8,000 - 15,000 km",
            "fuel_consumption": "10.5 - 15.0 L/100km",
            "engine": "3.6L V6",
            "horsepower": "300 hp",
            "transmission": "8-speed Automatic",
            "drivetrain": "RWD",
            "fuel_type": "Petrol",
            "seating_capacity": "5",
            "cargo_space": "467 liters",
            "safety_features": ["ABS", "Airbags", "Stability Control", "Blind Spot Monitoring", "Rear Cross Traffic Alert"],
            "warranty": "3 years/100,000 km",
            "acceleration": "0-100 km/h in 6.2 seconds",
            "top_speed": "200 km/h"
        },
        {
            "brand": "Dodge",
            "model": "Challenger",
            "typical_price_range": "KSh 3,500,000 - KSh 5,200,000",
            "image": "images/jeepcompass.jpg",
            "mileage": "6,000 - 12,000 km",
            "fuel_consumption": "12.0 - 18.0 L/100km",
            "engine": "3.6L V6",
            "horsepower": "305 hp",
            "transmission": "6-speed Manual",
            "drivetrain": "RWD",
            "fuel_type": "Petrol",
            "seating_capacity": "5",
            "cargo_space": "459 liters",
            "safety_features": ["ABS", "Airbags", "Stability Control", "Traction Control", "Electronic Stability Control"],
            "warranty": "3 years/100,000 km",
            "acceleration": "0-100 km/h in 6.0 seconds",
            "top_speed": "210 km/h"
        },
        {
            "brand": "Buick",
            "model": "Regal",
            "typical_price_range": "KSh 2,900,000 - KSh 4,300,000",
            "image": "images/chevroletcruze.jpg",
            "mileage": "9,000 - 16,000 km",
            "fuel_consumption": "8.0 - 11.5 L/100km",
            "engine": "2.0L 4-cylinder Turbo",
            "horsepower": "250 hp",
            "transmission": "9-speed Automatic",
            "drivetrain": "FWD",
            "fuel_type": "Petrol",
            "seating_capacity": "5",
            "cargo_space": "447 liters",
            "safety_features": ["ABS", "Airbags", "Stability Control", "Buick IntelliLink", "Forward Collision Alert"],
            "warranty": "3 years/60,000 km",
            "acceleration": "0-100 km/h in 6.5 seconds",
            "top_speed": "210 km/h"
        },
        {
            "brand": "Mazda",
            "model": "6",
            "typical_price_range": "KSh 2,500,000 - KSh 3,800,000",
            "image": "images/mazdamazda3.jpg",
            "mileage": "10,000 - 18,000 km",
            "fuel_consumption": "6.5 - 9.0 L/100km",
            "engine": "2.5L 4-cylinder",
            "horsepower": "187 hp",
            "transmission": "6-speed Automatic",
            "drivetrain": "FWD",
            "fuel_type": "Petrol",
            "seating_capacity": "5",
            "cargo_space": "419 liters",
            "safety_features": ["ABS", "Airbags", "Stability Control", "Mazda Radar Cruise Control", "Smart Brake Support"],
            "warranty": "3 years/unlimited km",
            "acceleration": "0-100 km/h in 8.0 seconds",
            "top_speed": "210 km/h"
        }
    ],
    "SUVs": [
        {
            "brand": "Toyota",
            "model": "Vanguard",
            "typical_price_range": "KSh 2,000,000 - KSh 2,800,000",
            "image": "images/toyotavanguard.jpg",
            "mileage": "12,000 - 20,000 km",
            "fuel_consumption": "7.5 - 10.5 L/100km",
            "engine": "2.0L 4-cylinder",
            "horsepower": "143 hp",
            "transmission": "CVT Automatic",
            "drivetrain": "FWD",
            "fuel_type": "Petrol",
            "seating_capacity": "7",
            "cargo_space": "1,200 liters (seats folded)",
            "safety_features": ["ABS", "Airbags", "Stability Control", "Hill Assist", "Toyota Safety Sense"],
            "warranty": "3 years/100,000 km",
            "ground_clearance": "160 mm",
            "towing_capacity": "1,500 kg"
        },
        {
            "brand": "Hyundai",
            "model": "Tucson",
            "typical_price_range": "KSh 2,900,000 - KSh 3,800,000",
            "image": "images/hyundaitucson.jpg",
            "mileage": "8,000 - 15,000 km",
            "fuel_consumption": "7.0 - 9.5 L/100km",
            "engine": "2.0L 4-cylinder",
            "horsepower": "164 hp",
            "transmission": "6-speed Automatic",
            "drivetrain": "FWD",
            "fuel_type": "Petrol",
            "seating_capacity": "5",
            "cargo_space": "878 liters (seats folded)",
            "safety_features": ["ABS", "Airbags", "Stability Control", "Hyundai Smart Cruise", "Forward Collision Warning"],
            "warranty": "5 years/unlimited km",
            "ground_clearance": "172 mm",
            "towing_capacity": "1,600 kg"
        },
        {
            "brand": "Kia",
            "model": "Sportage",
            "typical_price_range": "KSh 2,700,000 - KSh 3,600,000",
            "image": "images/kiasportage.jpg",
            "mileage": "9,000 - 16,000 km",
            "fuel_consumption": "6.8 - 9.2 L/100km",
            "engine": "2.0L 4-cylinder",
            "horsepower": "154 hp",
            "transmission": "6-speed Automatic",
            "drivetrain": "FWD",
            "fuel_type": "Petrol",
            "seating_capacity": "5",
            "cargo_space": "868 liters (seats folded)",
            "safety_features": ["ABS", "Airbags", "Stability Control", "Kia Drive Wise", "Lane Keeping Assist"],
            "warranty": "7 years/150,000 km",
            "ground_clearance": "172 mm",
            "towing_capacity": "1,400 kg"
        },
        {
            "brand": "Dodge",
            "model": "Durango",
            "typical_price_range": "KSh 4,500,000 - KSh 6,800,000",
            "image": "images/jeepcompass.jpg",
            "mileage": "5,000 - 12,000 km",
            "fuel_consumption": "12.0 - 18.0 L/100km",
            "engine": "3.6L V6",
            "horsepower": "295 hp",
            "transmission": "8-speed Automatic",
            "drivetrain": "AWD",
            "fuel_type": "Petrol",
            "seating_capacity": "7",
            "cargo_space": "1,351 liters (seats folded)",
            "safety_features": ["ABS", "Airbags", "Stability Control", "Blind Spot Monitoring", "Rear Cross Traffic Alert"],
            "warranty": "3 years/100,000 km",
            "ground_clearance": "207 mm",
            "towing_capacity": "2,812 kg",
            "acceleration": "0-100 km/h in 8.4 seconds",
            "top_speed": "180 km/h"
        }
    ],
    "Pickups": [
        {
            "brand": "Ford",
            "model": "Ranger",
            "typical_price_range": "KSh 2,200,000 - KSh 3,500,000",
            "image": "images/fordexplorer.jpg",
            "mileage": "15,000 - 25,000 km",
            "fuel_consumption": "8.5 - 12.0 L/100km",
            "engine": "2.2L 4-cylinder Turbo Diesel",
            "horsepower": "170 hp",
            "transmission": "6-speed Manual",
            "drivetrain": "4WD",
            "fuel_type": "Diesel",
            "seating_capacity": "5",
            "cargo_space": "1,213 liters (bed)",
            "safety_features": ["ABS", "Airbags", "Stability Control", "Hill Descent Control", "Trailer Sway Control"],
            "warranty": "4 years/120,000 km",
            "payload_capacity": "1,100 kg",
            "towing_capacity": "3,500 kg",
            "ground_clearance": "237 mm"
        },
        {
            "brand": "Chevrolet",
            "model": "Colorado",
            "typical_price_range": "KSh 2,500,000 - KSh 3,800,000",
            "image": "images/chevrolettrailblazer.jpg",
            "mileage": "12,000 - 20,000 km",
            "fuel_consumption": "9.0 - 13.0 L/100km",
            "engine": "2.5L 4-cylinder",
            "horsepower": "200 hp",
            "transmission": "6-speed Automatic",
            "drivetrain": "4WD",
            "fuel_type": "Petrol",
            "seating_capacity": "5",
            "cargo_space": "1,089 liters (bed)",
            "safety_features": ["ABS", "Airbags", "Stability Control", "StabiliTrak", "Teen Driver"],
            "warranty": "3 years/100,000 km",
            "payload_capacity": "725 kg",
            "towing_capacity": "3,175 kg",
            "ground_clearance": "213 mm"
        },
        {
            "brand": "Ram",
            "model": "1500",
            "typical_price_range": "KSh 3,000,000 - KSh 4,500,000",
            "image": "images/jeepcompass.jpg",
            "mileage": "10,000 - 18,000 km",
            "fuel_consumption": "11.0 - 16.0 L/100km",
            "engine": "3.6L V6",
            "horsepower": "305 hp",
            "transmission": "8-speed Automatic",
            "drivetrain": "4WD",
            "fuel_type": "Petrol",
            "seating_capacity": "6",
            "cargo_space": "1,481 liters (bed)",
            "safety_features": ["ABS", "Airbags", "Stability Control", "Electronic Roll Mitigation", "ParkSense"],
            "warranty": "3 years/100,000 km",
            "payload_capacity": "771 kg",
            "towing_capacity": "4,309 kg",
            "ground_clearance": "218 mm"
        },
        {
            "brand": "GMC",
            "model": "Canyon",
            "typical_price_range": "KSh 2,800,000 - KSh 4,200,000",
            "image": "images/chevrolettrailblazer.jpg",
            "mileage": "11,000 - 19,000 km",
            "fuel_consumption": "9.5 - 14.0 L/100km",
            "engine": "2.8L 4-cylinder Turbo Diesel",
            "horsepower": "181 hp",
            "transmission": "6-speed Automatic",
            "drivetrain": "4WD",
            "fuel_type": "Diesel",
            "seating_capacity": "5",
            "cargo_space": "1,089 liters (bed)",
            "safety_features": ["ABS", "Airbags", "Stability Control", "StabiliTrak", "Forward Collision Alert"],
            "warranty": "3 years/100,000 km",
            "payload_capacity": "725 kg",
            "towing_capacity": "3,175 kg",
            "ground_clearance": "213 mm"
        }
    ],
    "Luxury": [
        {
            "brand": "Land Rover",
            "model": "Range Rover",
            "typical_price_range": "KSh 15,000,000 - KSh 25,000,000",
            "image": "images/landroverrangerover.jpg"
        },
        {
            "brand": "BMW",
            "model": "X5",
            "typical_price_range": "KSh 13,000,000 - KSh 22,000,000",
            "image": "images/bmwx5.jpg"
        }
    ]
};

// Example usage functions
function getCarsByCategory(category) {
    /** Get all cars in a specific category */
    return kenyanCars[category] || [];
}

function getCarBrands() {
    /** Get all unique car brands */
    const brands = new Set();
    for (const category in kenyanCars) {
        kenyanCars[category].forEach(car => {
            brands.add(car.brand);
        });
    }
    return Array.from(brands).sort();
}

function searchCarsByBrand(brand) {
    /** Search cars by brand across all categories */
    const results = [];
    for (const category in kenyanCars) {
        kenyanCars[category].forEach(car => {
            if (car.brand.toLowerCase() === brand.toLowerCase()) {
                results.push({
                    category: category,
                    ...car
                });
            }
        });
    }
    return results;
}

function getPriceRange(category = null, brand = null) {
    /** Get price statistics for cars */
    let carsToAnalyze = [];
    if (category) {
        carsToAnalyze = kenyanCars[category] || [];
    } else if (brand) {
        carsToAnalyze = searchCarsByBrand(brand);
    } else {
        for (const categoryCars of Object.values(kenyanCars)) {
            carsToAnalyze = carsToAnalyze.concat(categoryCars);
        }
    }

    if (carsToAnalyze.length === 0) {
        return null;
    }

    // Extract minimum prices from ranges (rough estimate)
    const minPrices = [];
    carsToAnalyze.forEach(car => {
        const priceRange = car.typical_price_range;
        // Extract first number from "KSh X,XXX,XXX - KSh Y,YYY,YYY"
        const minPriceStr = priceRange.split(" - ")[0].replace("KSh ", "").replace(/,/g, "");
        const minPrice = parseInt(minPriceStr);
        if (!isNaN(minPrice)) {
            minPrices.push(minPrice);
        }
    });

    if (minPrices.length > 0) {
        return {
            min_price: Math.min(...minPrices),
            max_price: Math.max(...minPrices),
            avg_price: Math.floor(minPrices.reduce((a, b) => a + b, 0) / minPrices.length),
            count: carsToAnalyze.length
        };
    }
    return null;
}

// ES6 exports for React
export { kenyanCars, getCarsByCategory, getCarBrands, searchCarsByBrand, getPriceRange };

// CommonJS exports for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        kenyanCars,
        getCarsByCategory,
        getCarBrands,
        searchCarsByBrand,
        getPriceRange
    };
} else {
    // Browser usage
    console.log("Available categories:", Object.keys(kenyanCars));
    console.log("\nToyota cars:");
    const toyotaCars = searchCarsByBrand("Toyota");
    toyotaCars.forEach(car => {
        console.log(`- ${car.category}: ${car.model} - ${car.typical_price_range}`);
    });

    console.log(`\nTotal brands: ${getCarBrands().length}`);
    console.log("Brands:", getCarBrands());

    console.log("\nSUV price statistics:");
    const suvStats = getPriceRange("SUVs");
    if (suvStats) {
        console.log(`Min: KSh ${suvStats.min_price.toLocaleString()}, Max: KSh ${suvStats.max_price.toLocaleString()}, Avg: KSh ${suvStats.avg_price.toLocaleString()}`);
    }
}

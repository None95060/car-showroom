/**
 * Kenyan Cars Data Structure
 * Organized by categories with realistic 2025-2026 prices in Kenyan Shillings (KES)
 */

const kenyanCars = {
    "Hatchbacks": [
        {
            "brand": "Toyota",
            "model": "Passo",
            "typical_price_range": "KSh 650,000 - KSh 850,000",
            "image": "images/toyotapasso.jpg"
        },
        {
            "brand": "Toyota",
            "model": "Probox",
            "typical_price_range": "KSh 950,000 - KSh 1,200,000",
            "image": "images/toyotaprobox.jpg"
        },
        {
            "brand": "Nissan",
            "model": "Juke",
            "typical_price_range": "KSh 1,100,000 - KSh 1,400,000",
            "image": "images/nissanjuke.jpg"
        },
        {
            "brand": "Suzuki",
            "model": "Swift",
            "typical_price_range": "KSh 750,000 - KSh 950,000",
            "image": "images/suzukiswift.jpg"
        },
        {
            "brand": "Hyundai",
            "model": "i10",
            "typical_price_range": "KSh 700,000 - KSh 900,000",
            "image": "images/hyundaii10.jpg"
        }
    ],
    "Sedans": [
        {
            "brand": "Toyota",
            "model": "Subaru",
            "typical_price_range": "KSh 1,800,000 - KSh 2,500,000",
            "image": "images/toyotacorolla.jpg"
        },
        {
            "brand": "Nissan",
            "model": "Sylphy",
            "typical_price_range": "KSh 1,200,000 - KSh 1,600,000",
            "image": "images/nissansylphy.jpg"
        },
        {
            "brand": "Toyota",
            "model": "Wish",
            "typical_price_range": "KSh 1,100,000 - KSh 1,500,000",
            "image": "images/toyotawish.jpg"
        },
        {
            "brand": "Honda",
            "model": "Fit",
            "typical_price_range": "KSh 1,300,000 - KSh 1,800,000",
            "image": "images/hondafit.jpg"
        },
        {
            "brand": "Mazda",
            "model": "Mazda3",
            "typical_price_range": "KSh 2,200,000 - KSh 3,000,000",
            "image": "images/mazdamazda3.jpg"
        },
        {
            "brand": "Hyundai",
            "model": "Elantra",
            "typical_price_range": "KSh 1,900,000 - KSh 2,400,000",
            "image": "images/hyundaielantra.jpg"
        },
        {
            "brand": "Kia",
            "model": "Cerato",
            "typical_price_range": "KSh 1,700,000 - KSh 2,200,000",
            "image": "images/kiacerato.jpg"
        }
    ],
    "SUVs": [
        {
            "brand": "Toyota",
            "model": "Harrier",
            "typical_price_range": "KSh 4,500,000 - KSh 6,000,000",
            "image": "images/toyotaharrier.jpg"
        },
        {
            "brand": "Subaru",
            "model": "Forester",
            "typical_price_range": "KSh 3,500,000 - KSh 4,800,000",
            "image": "images/subaruforester.jpg"
        },
        {
            "brand": "Mazda",
            "model": "CX-5",
            "typical_price_range": "KSh 3,200,000 - KSh 4,500,000",
            "image": "images/mazdacx5.jpg"
        },
        {
            "brand": "Nissan",
            "model": "X-Trail",
            "typical_price_range": "KSh 2,800,000 - KSh 3,800,000",
            "image": "images/nissanxtrail.jpg"
        },
        {
            "brand": "Volkswagen",
            "model": "Tiguan",
            "typical_price_range": "KSh 3,000,000 - KSh 4,200,000",
            "image": "images/volkswagentiguan.jpg"
        },
        {
            "brand": "Toyota",
            "model": "Vanguard",
            "typical_price_range": "KSh 2,000,000 - KSh 2,800,000",
            "image": "images/toyotavanguard.jpg"
        },
        {
            "brand": "Hyundai",
            "model": "Tucson",
            "typical_price_range": "KSh 2,900,000 - KSh 3,800,000",
            "image": "images/hyundaitucson.jpg"
        },
        {
            "brand": "Kia",
            "model": "Sportage",
            "typical_price_range": "KSh 2,700,000 - KSh 3,600,000",
            "image": "images/kiasportage.jpg"
        }
    ],
    "Pickups": [
        {
            "brand": "Toyota",
            "model": "Hilux",
            "typical_price_range": "KSh 2,500,000 - KSh 4,500,000",
            "image": "images/toyotahilux.jpg"
        },
        {
            "brand": "Isuzu",
            "model": "D-MAX",
            "typical_price_range": "KSh 3,800,000 - KSh 5,500,000",
            "image": "images/isuzudmax.jpg"
        },
        {
            "brand": "Nissan",
            "model": "Navara",
            "typical_price_range": "KSh 2,800,000 - KSh 4,200,000",
            "image": "images/nissannavara.jpg"
        },
        {
            "brand": "Mitsubishi",
            "model": "L200",
            "typical_price_range": "KSh 2,600,000 - KSh 3,800,000",
            "image": "images/mitsubishil200.jpg"
        }
    ],
    "Luxury": [
        {
            "brand": "Mercedes-Benz",
            "model": "C-Class",
            "typical_price_range": "KSh 6,500,000 - KSh 12,000,000",
            "image": "images/mercedesbenzcclass.jpg"
        },
        {
            "brand": "BMW",
            "model": "3 Series",
            "typical_price_range": "KSh 7,000,000 - KSh 13,000,000",
            "image": "images/bmw3series.jpg"
        },
        {
            "brand": "Land Rover",
            "model": "Range Rover",
            "typical_price_range": "KSh 15,000,000 - KSh 25,000,000",
            "image": "images/landroverrangerover.jpg"
        },
        {
            "brand": "Lexus",
            "model": "RX",
            "typical_price_range": "KSh 8,000,000 - KSh 15,000,000",
            "image": "images/lexusrx.jpg"
        },
        {
            "brand": "Volvo",
            "model": "XC60",
            "typical_price_range": "KSh 6,000,000 - KSh 10,000,000",
            "image": "images/volvoxc60.jpg"
        },
        {
            "brand": "Audi",
            "model": "Q5",
            "typical_price_range": "KSh 7,500,000 - KSh 12,000,000",
            "image": "images/audiq5.jpg"
        },
        {
            "brand": "Mercedes-Benz",
            "model": "GLE",
            "typical_price_range": "KSh 12,000,000 - KSh 20,000,000",
            "image": "images/mercedesbenzgle.jpg"
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

// Example usage (for Node.js or browser console)
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

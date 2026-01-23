import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

// Mock car data (replace with API call)
const mockCars = [
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

const Dashboard = () => {
  const { user } = useAuth();
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [conditionFilter, setConditionFilter] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 25000000]);
  const [sortBy, setSortBy] = useState('price-low');

  // Fetch cars data
  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/cars');
        if (!response.ok) {
          throw new Error('Failed to fetch cars');
        }
        const data = await response.json();
        setCars(data);
        setFilteredCars(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching cars:', err);
        // Fallback to mock data if API fails
        setCars(mockCars);
        setFilteredCars(mockCars);
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  // Apply filters and sorting
  useEffect(() => {
    let filtered = cars.filter(car => {
      const matchesSearch = car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           car.year.toString().includes(searchTerm);
      const matchesCondition = conditionFilter === 'All' || car.condition === conditionFilter;
      const matchesPrice = car.price >= priceRange[0] && car.price <= priceRange[1];

      return matchesSearch && matchesCondition && matchesPrice;
    });

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'year':
          return b.year - a.year;
        default:
          return 0;
      }
    });

    setFilteredCars(filtered);
  }, [cars, searchTerm, conditionFilter, priceRange, sortBy]);

  const handlePriceRangeChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(e.target.value);
    setPriceRange(newRange);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <span className="ml-4 text-gray-600">Loading cars...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600 text-lg mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* User Greeting */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome, {user?.name || 'User'}!
        </h1>
        <p className="text-gray-600">
          Discover your next vehicle from our marketplace.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search
            </label>
            <input
              type="text"
              placeholder="Make, model, or year..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Condition Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Condition
            </label>
            <select
              value={conditionFilter}
              onChange={(e) => setConditionFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All Conditions</option>
              <option value="New">New</option>
              <option value="Used">Used</option>
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
            </select>
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price Range
            </label>
            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="Min"
                value={priceRange[0]}
                onChange={(e) => handlePriceRangeChange(e, 0)}
                className="w-1/2 px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <input
                type="number"
                placeholder="Max"
                value={priceRange[1]}
                onChange={(e) => handlePriceRangeChange(e, 1)}
                className="w-1/2 px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
          </div>

          {/* Sort By */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="year">Newest First</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4">
        <p className="text-gray-600">
          Showing {filteredCars.length} of {cars.length} cars
        </p>
      </div>

      {/* Car Grid */}
      {filteredCars.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No cars found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </div>
  );
};

// Car Card Component
const CarCard = ({ car }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={car.image}
          alt={`${car.make} ${car.model}`}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
          }}
        />
        <button
          onClick={toggleFavorite}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
        >
          <svg
            className={`w-5 h-5 ${isFavorited ? 'text-red-500 fill-current' : 'text-gray-400'}`}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {car.make} {car.model}
        </h3>
        <p className="text-gray-600 text-sm mb-2">Year: {car.year}</p>
        <div className="flex justify-between items-center mb-3">
          <span className="text-2xl font-bold text-green-600">
            KSH {car.price.toLocaleString()}
          </span>
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              car.condition === 'New'
                ? 'bg-green-100 text-green-800'
                : 'bg-yellow-100 text-yellow-800'
            }`}
          >
            {car.condition}
          </span>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
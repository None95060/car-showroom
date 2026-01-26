import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import CarCard from './CarCard';

// Import Kenyan car data
import { kenyanCars } from './kenyan_cars.js';

// Transform Kenyan car data to match expected structure
const transformKenyanCars = () => {
  const transformedCars = [];
  let id = 1;

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

      transformedCars.push({
        id: id++,
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

  return transformedCars;
};

const kenyanCarsData = transformKenyanCars();

const Dashboard = () => {
  const { user } = useAuth();
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [conditionFilter, setConditionFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [brandFilter, setBrandFilter] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 25000000]);
  const [sortBy, setSortBy] = useState('price-low');
  const [compareList, setCompareList] = useState([]);
  const [showCompare, setShowCompare] = useState(false);

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
        // Fallback to Kenyan car data if API fails
        setCars(kenyanCarsData);
        setFilteredCars(kenyanCarsData);
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
      const matchesCategory = categoryFilter === 'All' || car.category === categoryFilter;
      const matchesBrand = brandFilter === 'All' || car.make === brandFilter;
      const matchesPrice = car.price >= priceRange[0] && car.price <= priceRange[1];

      return matchesSearch && matchesCondition && matchesCategory && matchesBrand && matchesPrice;
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
  }, [cars, searchTerm, conditionFilter, categoryFilter, brandFilter, priceRange, sortBy]);

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
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

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All Categories</option>
              <option value="Hatchbacks">Hatchbacks</option>
              <option value="Sedans">Sedans</option>
              <option value="SUVs">SUVs</option>
              <option value="Pickups">Pickups</option>
              <option value="Luxury">Luxury</option>
            </select>
          </div>

          {/* Brand Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Brand
            </label>
            <select
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All Brands</option>
              <option value="Toyota">Toyota</option>
              <option value="Honda">Honda</option>
              <option value="Nissan">Nissan</option>
              <option value="BMW">BMW</option>
              <option value="Mercedes-Benz">Mercedes-Benz</option>
              <option value="Audi">Audi</option>
              <option value="Volkswagen">Volkswagen</option>
              <option value="Subaru">Subaru</option>
              <option value="Mazda">Mazda</option>
              <option value="Kia">Kia</option>
              <option value="Hyundai">Hyundai</option>
              <option value="Suzuki">Suzuki</option>
              <option value="Isuzu">Isuzu</option>
              <option value="Mitsubishi">Mitsubishi</option>
              <option value="Lexus">Lexus</option>
              <option value="Land Rover">Land Rover</option>
              <option value="Volvo">Volvo</option>
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
            <CarCard
              key={car.id}
              car={car}
            />
          ))}
        </div>
      )}

      {/* Compare Modal */}
      {showCompare && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-6xl w-full mx-4 max-h-96 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Compare Cars</h2>
              <button
                onClick={() => setShowCompare(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                &times;
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {compareList.map(car => (
                <div key={car.id} className="border rounded-lg p-4">
                  <img
                    src={car.image}
                    alt={`${car.make} ${car.model}`}
                    className="w-full h-32 object-cover rounded mb-4"
                    onError={(e) => e.target.src = 'https://via.placeholder.com/300x200?text=No+Image'}
                  />
                  <h3 className="font-bold text-lg mb-2">{car.make} {car.model}</h3>
                  <p className="text-gray-600 mb-1">Year: {car.year}</p>
                  <p className="text-gray-600 mb-1">Category: {car.category}</p>
                  <p className="text-gray-600 mb-1">Condition: {car.condition}</p>
                  <p className="text-2xl font-bold text-green-600 mb-4">KSH {car.price.toLocaleString()}</p>
                  <button
                    onClick={() => setCompareList(compareList.filter(c => c.id !== car.id))}
                    className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};



export default Dashboard;
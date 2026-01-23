import React, { useState, useEffect } from 'react';
import CarCard from './CarCard';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Load favorites from localStorage
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(savedFavorites);

    // Fetch all cars
    fetch('/api/cars')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch cars');
        }
        return res.json();
      })
      .then(data => setCars(data))
      .catch(err => {
        console.error('Error fetching cars:', err);
        // Fallback to empty array or mock data if needed
        setCars([]);
      });
  }, []);

  const favoriteCars = cars.filter(car => favorites.includes(car.id));

  const removeFavorite = (carId) => {
    const newFavorites = favorites.filter(id => id !== carId);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Favorites</h1>

      {favoriteCars.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">❤️</div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">No favorites yet</h2>
          <p className="text-gray-500">Start browsing cars and add them to your favorites!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteCars.map(car => (
            <div key={car.id} className="relative">
              <CarCard car={car} />
              <button
                onClick={() => removeFavorite(car.id)}
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                title="Remove from favorites"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
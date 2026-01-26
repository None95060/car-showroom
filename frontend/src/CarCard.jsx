import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CarCard = ({ car }) => {
  const navigate = useNavigate();
  const [isFavorited, setIsFavorited] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorited(favorites.includes(car.id));
  }, [car.id]);

  const handleImageError = () => {
    setImageError(true);
  };

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    let newFavorites;
    if (favorites.includes(car.id)) {
      newFavorites = favorites.filter(id => id !== car.id);
      setIsFavorited(false);
    } else {
      newFavorites = [...favorites, car.id];
      setIsFavorited(true);
    }
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const handleFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  // 3D Tilt effect
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <>
      <div ref={cardRef} className="car-card bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300" onClick={handleFullscreen}>
        <div className="relative">
          <img
            src={imageError ? 'https://via.placeholder.com/1920x1080?text=No+Image' : car.image}
            alt={`${car.make} ${car.model}`}
            className="w-full h-64 object-cover"
            onError={handleImageError}
          />
          {/* Minimalist Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="text-white">
              <h3 className="text-xl font-bold">{car.make} {car.model}</h3>
              <p className="text-sm">Year: {car.year}</p>
              <p className="text-lg font-semibold">{formatPrice(car.price)}</p>
            </div>
          </div>
          {/* Favorite Button */}
          <button
            onClick={(e) => { e.stopPropagation(); toggleFavorite(); }}
            className={`absolute top-4 right-4 p-2 rounded-full shadow-md transition-all duration-300 ${isFavorited ? 'bg-red-500 text-white scale-110' : 'bg-white text-gray-400 hover:bg-gray-100'}`}
          >
            <svg className="w-6 h-6" fill={isFavorited ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          {/* Dream Car Tag */}
          {isFavorited && (
            <div className="absolute top-4 left-4 bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
              Dream Car
            </div>
          )}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50" onClick={closeFullscreen}>
          <div className="max-w-4xl max-h-full p-8 bg-white rounded-lg relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>
            <img
              src={car.image}
              alt={`${car.make} ${car.model}`}
              className="w-full h-auto max-h-96 object-cover rounded-lg mb-4"
            />
            <h2 className="text-3xl font-bold mb-2">{car.make} {car.model}</h2>
            <p className="text-gray-600 mb-2">Year: {car.year}</p>
            <p className="text-2xl font-semibold text-green-600 mb-4">{formatPrice(car.price)}</p>
            <p className="text-gray-700 mb-4">{car.description}</p>
            <div className="flex space-x-4">
              <button
                onClick={toggleFavorite}
                className={`px-4 py-2 rounded-md transition-all duration-300 ${isFavorited ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                {isFavorited ? '❤️ Favorited' : '🤍 Favorite'}
              </button>
              <button
                onClick={() => navigate(`/car/${car.id}`)}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                View Details
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Contact Seller
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CarCard;

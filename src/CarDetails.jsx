import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { kenyanCars } from './kenyan_cars.js';

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Fetch car details
    fetch('/api/cars')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch cars');
        }
        return res.json();
      })
      .then(data => {
        const foundCar = data.find(c => c.id === parseInt(id));
        if (foundCar) {
          // Add more images for carousel
          foundCar.images = [
            foundCar.image,
            'https://via.placeholder.com/800x600?text=Interior',
            'https://via.placeholder.com/800x600?text=Engine',
            'https://via.placeholder.com/800x600?text=Details'
          ];

          // Find detailed specs from kenyan_cars data
          let detailedSpecs = null;
          Object.keys(kenyanCars).forEach(category => {
            const carInCategory = kenyanCars[category].find(c =>
              c.brand === foundCar.make && c.model === foundCar.model
            );
            if (carInCategory) {
              detailedSpecs = carInCategory;
            }
          });

          if (detailedSpecs) {
            foundCar.detailedSpecs = detailedSpecs;
          }

          setCar(foundCar);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching car:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center py-8">Loading car details...</div>;
  }

  if (!car) {
    return <div className="text-center py-8">Car not found</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % car.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + car.images.length) % car.images.length);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{car.make} {car.model}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Carousel */}
        <div className="relative">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={car.images[currentImageIndex]}
              alt={`${car.make} ${car.model}`}
              className="w-full h-96 object-cover"
              onError={(e) => e.target.src = 'https://via.placeholder.com/800x600?text=No+Image'}
            />
          </div>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
          >
            ‹
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
          >
            ›
          </button>
          <div className="flex justify-center mt-4 space-x-2">
            {car.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>

        {/* Car Details */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Specifications</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Year</label>
                <p className="text-gray-900">{car.year}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Condition</label>
                <p className="text-gray-900">{car.condition}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Make</label>
                <p className="text-gray-900">{car.make}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Model</label>
                <p className="text-gray-900">{car.model}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Price</h2>
            <p className="text-3xl font-bold text-green-600">${car.price.toLocaleString()}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700">{car.description}</p>
          </div>

          {/* Detailed Specifications */}
          {car.detailedSpecs && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Detailed Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Mileage</label>
                    <p className="text-gray-900">{car.detailedSpecs.mileage}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Fuel Consumption</label>
                    <p className="text-gray-900">{car.detailedSpecs.fuel_consumption}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Engine</label>
                    <p className="text-gray-900">{car.detailedSpecs.engine}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Horsepower</label>
                    <p className="text-gray-900">{car.detailedSpecs.horsepower}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Transmission</label>
                    <p className="text-gray-900">{car.detailedSpecs.transmission}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Drivetrain</label>
                    <p className="text-gray-900">{car.detailedSpecs.drivetrain}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Fuel Type</label>
                    <p className="text-gray-900">{car.detailedSpecs.fuel_type}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Seating Capacity</label>
                    <p className="text-gray-900">{car.detailedSpecs.seating_capacity}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Cargo Space</label>
                    <p className="text-gray-900">{car.detailedSpecs.cargo_space}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Warranty</label>
                    <p className="text-gray-900">{car.detailedSpecs.warranty}</p>
                  </div>
                </div>
              </div>

              {/* Performance & Safety */}
              <div className="mt-6 space-y-4">
                {car.detailedSpecs.acceleration && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Acceleration (0-100 km/h)</label>
                    <p className="text-gray-900">{car.detailedSpecs.acceleration}</p>
                  </div>
                )}
                {car.detailedSpecs.top_speed && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Top Speed</label>
                    <p className="text-gray-900">{car.detailedSpecs.top_speed}</p>
                  </div>
                )}
                {car.detailedSpecs.ground_clearance && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Ground Clearance</label>
                    <p className="text-gray-900">{car.detailedSpecs.ground_clearance}</p>
                  </div>
                )}
                {car.detailedSpecs.towing_capacity && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Towing Capacity</label>
                    <p className="text-gray-900">{car.detailedSpecs.towing_capacity}</p>
                  </div>
                )}
                {car.detailedSpecs.safety_features && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Safety Features</label>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {car.detailedSpecs.safety_features.map((feature, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Dealer Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Dealer Information</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium">Sample Dealer</p>
              <p className="text-gray-600">Nairobi, Kenya</p>
              <p className="text-gray-600">+254 700 123 456</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 font-medium">
              📞 Call
            </button>
            <button className="flex-1 bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 font-medium">
              💬 WhatsApp
            </button>
            <button className="flex-1 bg-gray-600 text-white py-3 px-6 rounded-md hover:bg-gray-700 font-medium">
              🗺️ View Location
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
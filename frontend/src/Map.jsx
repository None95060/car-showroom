import React, { useEffect, useState } from 'react';

const Map = () => {
  const [dealers, setDealers] = useState([]);
  const [filteredDealers, setFilteredDealers] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  // Sample dealer data for Kenya
  const sampleDealers = [
    {
      id: 1,
      name: 'Nairobi Auto Motors',
      city: 'Nairobi',
      lat: -1.2864,
      lng: 36.8172,
      contact: '+254 700 123456',
      cars: ['Toyota Camry', 'Honda Civic', 'BMW X3']
    },
    {
      id: 2,
      name: 'Mombasa Car Hub',
      city: 'Mombasa',
      lat: -4.0435,
      lng: 39.6682,
      contact: '+254 701 234567',
      cars: ['Mazda CX-5', 'Nissan Patrol', 'Ford Ranger']
    },
    {
      id: 3,
      name: 'Kisumu Motors Ltd',
      city: 'Kisumu',
      lat: -0.0917,
      lng: 34.7679,
      contact: '+254 702 345678',
      cars: ['Subaru Forester', 'Toyota Prado', 'Mitsubishi Pajero']
    },
    {
      id: 4,
      name: 'Eldoret Auto Dealers',
      city: 'Eldoret',
      lat: 0.5143,
      lng: 35.2698,
      contact: '+254 703 456789',
      cars: ['Volkswagen Golf', 'Audi A4', 'Mercedes C-Class']
    },
    {
      id: 5,
      name: 'Nakuru Car World',
      city: 'Nakuru',
      lat: -0.3031,
      lng: 36.0800,
      contact: '+254 704 567890',
      cars: ['Hyundai Tucson', 'Kia Sportage', 'Suzuki Swift']
    }
  ];

  useEffect(() => {
    setDealers(sampleDealers);
    setFilteredDealers(sampleDealers);
  }, []);

  useEffect(() => {
    if (selectedCity) {
      setFilteredDealers(dealers.filter(dealer => dealer.city === selectedCity));
    } else {
      setFilteredDealers(dealers);
    }
  }, [selectedCity, dealers]);

  useEffect(() => {
    // Load Google Maps API
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }
  }, []);

  const initMap = () => {
    if (!window.google) return;

    const mapOptions = {
      center: { lat: -0.0236, lng: 37.9062 }, // Center of Kenya
      zoom: 7,
      styles: [
        {
          featureType: 'poi',
          stylers: [{ visibility: 'off' }]
        }
      ]
    };

    const mapInstance = new window.google.maps.Map(document.getElementById('map'), mapOptions);
    setMap(mapInstance);

    // Add markers for dealers
    const newMarkers = filteredDealers.map(dealer => {
      const marker = new window.google.maps.Marker({
        position: { lat: dealer.lat, lng: dealer.lng },
        map: mapInstance,
        title: dealer.name
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div class="p-2">
            <h3 class="font-bold text-lg">${dealer.name}</h3>
            <p class="text-sm text-gray-600">${dealer.city}</p>
            <p class="text-sm">${dealer.contact}</p>
            <p class="text-sm font-medium mt-2">Available Cars:</p>
            <ul class="text-sm list-disc list-inside">
              ${dealer.cars.map(car => `<li>${car}</li>`).join('')}
            </ul>
            <button onclick="getDirections(${dealer.lat}, ${dealer.lng})" class="mt-2 bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
              Get Directions
            </button>
          </div>
        `
      });

      marker.addListener('click', () => {
        infoWindow.open(mapInstance, marker);
      });

      return marker;
    });

    setMarkers(newMarkers);
  };

  useEffect(() => {
    if (map) {
      // Clear existing markers
      markers.forEach(marker => marker.setMap(null));

      // Add new markers
      const newMarkers = filteredDealers.map(dealer => {
        const marker = new window.google.maps.Marker({
          position: { lat: dealer.lat, lng: dealer.lng },
          map: map,
          title: dealer.name
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div class="p-2">
              <h3 class="font-bold text-lg">${dealer.name}</h3>
              <p class="text-sm text-gray-600">${dealer.city}</p>
              <p class="text-sm">${dealer.contact}</p>
              <p class="text-sm font-medium mt-2">Available Cars:</p>
              <ul class="text-sm list-disc list-inside">
                ${dealer.cars.map(car => `<li>${car}</li>`).join('')}
              </ul>
              <button onclick="getDirections(${dealer.lat}, ${dealer.lng})" class="mt-2 bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                Get Directions
              </button>
            </div>
          `
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });

        return marker;
      });

      setMarkers(newMarkers);
    }
  }, [filteredDealers, map]);

  const getDirections = (lat, lng) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const origin = `${position.coords.latitude},${position.coords.longitude}`;
        const destination = `${lat},${lng}`;
        const url = `https://www.google.com/maps/dir/${origin}/${destination}`;
        window.open(url, '_blank');
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  // Make getDirections available globally for info window buttons
  window.getDirections = getDirections;

  const cities = [...new Set(dealers.map(dealer => dealer.city))];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Car Dealerships in Kenya</h1>

      <div className="mb-6">
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">All Cities</option>
          {cities.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>

      <div id="map" className="w-full h-96 bg-gray-200 rounded-lg"></div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Dealer List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDealers.map(dealer => (
            <div key={dealer.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">{dealer.name}</h3>
              <p className="text-gray-600 mb-1">{dealer.city}</p>
              <p className="text-sm mb-2">{dealer.contact}</p>
              <p className="text-sm font-medium mb-2">Available Cars:</p>
              <ul className="text-sm list-disc list-inside mb-3">
                {dealer.cars.slice(0, 3).map((car, index) => (
                  <li key={index}>{car}</li>
                ))}
                {dealer.cars.length > 3 && <li>...and {dealer.cars.length - 3} more</li>}
              </ul>
              <button
                onClick={() => getDirections(dealer.lat, dealer.lng)}
                className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
              >
                Get Directions
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Map;
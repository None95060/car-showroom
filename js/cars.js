// API service functions for car data

const API_BASE = '/api';

export async function fetchCars() {
  try {
    const response = await fetch(`${API_BASE}/cars`);
    if (!response.ok) {
      throw new Error('Failed to fetch cars');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
}

export async function addCar(carData) {
  try {
    const response = await fetch(`${API_BASE}/cars`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(carData),
    });
    if (!response.ok) {
      throw new Error('Failed to add car');
    }
    return await response.json();
  } catch (error) {
    console.error('Error adding car:', error);
    throw error;
  }
}

// Filter functions
export function filterCarsBySearch(cars, searchTerm) {
  if (!searchTerm) return cars;
  const term = searchTerm.toLowerCase();
  return cars.filter(car =>
    car.make.toLowerCase().includes(term) ||
    car.model.toLowerCase().includes(term) ||
    car.year.toString().includes(term)
  );
}

export function filterCarsByCondition(cars, condition) {
  if (!condition) return cars;
  return cars.filter(car => car.condition === condition);
}

export function filterCarsByPriceRange(cars, minPrice, maxPrice) {
  return cars.filter(car => {
    const price = car.price;
    if (minPrice && price < minPrice) return false;
    if (maxPrice && price > maxPrice) return false;
    return true;
  });
}
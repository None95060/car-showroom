const mongoose = require('mongoose');
const User = require('./models/User');

async function viewUsers() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/company-portal');
    console.log('Connected to MongoDB');

    const users = await User.find({});
    console.log('Registered Users:');
    users.forEach(user => {
      console.log(`- Full Name: ${user.fullname}, Email: ${user.email}, Created: ${user.createdAt}`);
    });

    if (users.length === 0) {
      console.log('No users found.');
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
  }
}

viewUsers();

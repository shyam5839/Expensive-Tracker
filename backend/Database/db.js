const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            family: 4, // Force IPv4 only
        });
        console.log('✅ MongoDB connected');
    } catch (error) {
        console.error('❌ Connection failed:', error);
    }
};

module.exports = connectDB;

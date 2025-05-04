const express = require('express');
const dotenv = require('dotenv');


dotenv.config();
const cors = require('cors');
const connectDB = require('./Database/db');
const app = express();
const path = require('path');


connectDB();
app.use(cors());
app.use(express.json());
app.use('/uploads',express.static(path.join(__dirname,'uploads')));

const signupRoute = require('./Routes/signup');
app.use('/api/signup',signupRoute);


app.get('/', (req, res) => {
    res.send('API Running');
  });
  
  // Start server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
const express = require('express');
const axios = require('axios');
const app = express();

// Set EJS sebagai view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

// Rute untuk homepage
app.get('/', async (req, res) => {
  
    res.render('index');
 
});

// Jalankan server di port 3000
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});

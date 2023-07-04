const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const port = 3000;

// Set up Handlebars as the template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
  res.render('home', {
    pageTitle: 'Home',
    message: 'Welcome to the homepage!'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    pageTitle: 'About',
    message: 'This is the about page.'
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

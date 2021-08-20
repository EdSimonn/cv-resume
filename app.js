const express = require('express');
const path = require('path');
const { Console } = require('console');

const app = express();

// View engine setup
app.set('view engine', 'ejs');

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('home');
}); 

app.post('/send', (req, res) => {
  res.render('success')
  console.log(req.body);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
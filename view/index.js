const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.set('views', path.join(___dirname, 'views'));
app.set('view engine', ejs);

app.use(express.static('public'));


app.get('/', function(req, res){
    res.send('Hello, World!');

});

app.get('/about', function(req, res){
    res.send('Hello, saya verry!');

});
app.listen(PORT);
console.log('Server running on Port' +PORT);
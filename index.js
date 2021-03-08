const express = require('express')
const app = express();
const port = 3000;
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('hola')
});

app.get('/usuario', (req, res) => {
    res.send('usuario: Patricio')
});

app.post('/', (req, res) => {
    res.send('POST del path /')
});

app.listen(3000, () => {
    console.log(`Server listen on Port ${port}`);
})
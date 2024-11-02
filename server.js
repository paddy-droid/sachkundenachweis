const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Statische Dateien
app.use(express.static('public'));
app.use('/pages', express.static('pages'));

// Hauptroute
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Bundesländer Routen
app.get('/bundesland/:name', (req, res) => {
    const bundesland = req.params.name;
    res.sendFile(path.join(__dirname, 'pages', 'bundeslaender', `${bundesland}.html`));
});

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});



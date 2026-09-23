const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const db = new sqlite3.Database('./script.db');

app.use(cors());
app.use(express.json());

app.get('/api/produtos', (req, res) => {
    db.all('SELECT * FROM produtos', [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

app.listen(3000, () => console.log('Althman Parts API rodando na porta 3000'));
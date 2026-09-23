const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./script.db');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS produtos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        preco DECIMAL(10,2) NOT NULL,
        categoria TEXT,
        marca TEXT
    )`);

    const stmt = db.prepare("INSERT INTO produtos (nome, preco, categoria, marca) VALUES (?, ?, ?, ?)");
    const produtos = [
        ['Escapamento Esportivo', 850.00, 'Performance', 'Akrapovic'],
        ['Pneu Diablo Rosso II', 620.00, 'Pneus', 'Pirelli'],
        ['Kit Relação Gold', 350.00, 'Transmissão', 'DID'],
        ['Pastilha de Freio', 120.00, 'Freios', 'Brembo'],
        ['Óleo 7100 4T', 95.00, 'Lubrificantes', 'Motul'],
        ['Capacete Carbono', 1800.00, 'Acessórios', 'AGV'],
        ['Amortecedor Ohlins', 1200.00, 'Suspensão', 'Ohlins'],
        ['Retrovisor Rizoma', 150.00, 'Estética', 'Rizoma'],
        ['Manete Articulado', 220.00, 'Controles', 'Spencer'],
        ['Filtro de Ar K&N', 280.00, 'Performance', 'K&N']
    ];

    produtos.forEach(p => stmt.run(p));
    stmt.finalize();
    console.log("Banco de dados Althman Parts criado!");
});
db.close();
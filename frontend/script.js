async function carregarProdutos() {
    try {
        const response = await fetch('http://localhost:3000/api/produtos');
        const produtos = await response.json();
        
        const vitrine = document.getElementById('vitrine');
        vitrine.innerHTML = produtos.map(p => `
            <div class="card">
                <h3>${p.nome}</h3>
                <p>${p.marca} | ${p.categoria}</p>
                <div class="price">R$ ${p.preco.toFixed(2)}</div>
                <button>Comprar</button>
            </div>
        `).join('');
    } catch (error) {
        console.error("Erro ao conectar com a API da Althman Parts:", error);
    }
}

carregarProdutos();
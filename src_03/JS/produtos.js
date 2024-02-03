const produtos = [
    {
        id: 1,
        img: './img/Camiseta.png',
        name:'Camiseta Conforto',
        descricao: `Multicores e tamanhos. 
        Tecido de algodão 100%, fresquinho para o verão. 
        Modelagem unissex.`,
        valor: 70.00,
    },
    {
        id: 2,
        img: './img/Calça.png',
        name:'Calça Alfaiataria',
        descricao: `Modelo Wide Leg alfaiataria em linho. 
        Uma peça pra vida toda!`,
        valor: 180.00,
    },
    {
        id: 3,
        img: './img/Tenis.png',
        name:'Tênis Chunky',
        descricao: `Snicker casual com solado mais alto e modelagem robusta. 
        Modelo unissex.`,
        valor: 250.00,
    },
    {
        id: 4,
        img: './img/Jaqueta.png',
        name:'Jaqueta Jeans',
        descricao: `Modelo unissex oversized com gola de camurça. 
        Atemporal e autêntica!`,
        valor: 150.00,
    },
    {
        id: 5,
        img: './img/óculos.png',
        name:'Óculos Redondo',
        descricao: `Armação metálica em grafite com lentes arredondadas. 
        Sem erro!`,
        valor: 120.00,
    },
    {
        id: 6,
        img: './img/Bolsa.png',
        name:'Bolsa coringa',
        descricao: `Bolsa camel em couro sintético de alta duração. 
        Ideal para acompanhar você por uma vida!`,
        valor: 120.00,
    }
]

document.addEventListener('DOMContentLoaded', function () {
    produtosLoja();
    produtoSozinho();
});

function produtosLoja() {
    let containerProdutos = document.getElementById('produtos_part');

    if (!containerProdutos) {
        console.error("Elemento não encontrado.");
        return;
    }

    let produtoHTML = produtos.map((val) => `
        <div id="produtos_espec">
            <img src="${val.img}" alt="${val.name}">
            <div id='produtoDetalhes'>
                <strong>${val.name}</strong>
                <div id='produtoDescricao'>
                    <p>${val.descricao}</p>
                    <strong>R$ ${val.valor},00</strong>
                </div>
                <a href="./produto.html?id=${val.id}" id='verMais' data-id='${val.id}'>Ver mais</a>
            </div>
        </div>
    `);

    containerProdutos.innerHTML = produtoHTML.join('');
}

function produtoSozinho(){
    let produtoSinglePag = document.getElementById('produtoSinglePag')

    // Obtém o ID do produto da URL
    const urlParams = new URLSearchParams(window.location.search);
    const produtoId = urlParams.get('id');

    // Busca as informações do produto pelo ID
    const produtoSelecionado = produtos.find(produto => produto.id.toString() === produtoId);

    if (produtoSelecionado) {
        // Preenche a página com as informações do produto
        produtoSinglePag.innerHTML = `
            <img src="${produtoSelecionado.img}" alt="${produtoSelecionado.name}">
            <div id='produtoDetalhesJanelaSingleUnique'>
                <strong>${produtoSelecionado.name}</strong>
                <div id='produtoDescricaoJanelaSingle'>
                    <p>${produtoSelecionado.descricao}</p>
                    <strong>R$ ${produtoSelecionado.valor.toFixed(2)}</strong>
                    <span>Vendido e entregue por Riachuelo<span>
                </div>
                    <div id="escolhendoDetalhes">
                        <strong>Cores:</strong>
                        <div id="escolhendoCores">
                            <div>
                                <input type="radio" name="checkCor" id="checkCorAzulClaro">
                                <br>
                                <label for="checkCorAzulClaro">Azul Claro</label><br>
                            </div>

                            <div>
                                <input type="radio" name="checkCor" id="checkCorOffwhite">
                                <br>
                                <label for="checkCorOffwhite">Offwhite</label><br>
                            </div>

                            <div>
                                <input type="radio" name="checkCor" id="checkCorPreto">
                                <br>
                                <label for="checkCorPreto">Preto</label><br>
                            </div>
                        </div>
                    </div>

                    <div id="janelaSelecionarTamanho">
                        <strong>Tamanhos</strong>
                        <div id="escolhendoTamanhos">
                                <div>
                                    <input type="radio" name="checkTamanho" id="checkTamanhoP">
                                    <br>
                                    <label for="checkTamanhoP">P</label><br>
                                </div>

                                <div>
                                    <input type="radio" name="checkTamanho" id="checkTamanhoPP">
                                    <br>
                                    <label for="checkTamanhoPP">PP</label><br>
                                </div>

                                <div>
                                    <input type="radio" name="checkTamanho" id="checkTamanhoM">
                                    <br>
                                    <label for="checkTamanhoM">M</label><br>
                                </div>

                                <div>
                                    <input type="radio" name="checkTamanho" id="checkTamanhoG">
                                    <br>
                                    <label for="checkTamanhoG">G</label><br>
                                </div>

                                <div>
                                    <input type="radio" name="checkTamanho" id="checkTamanhoGG">
                                    <br>
                                    <label for="checkTamanhoGG">GG</label><br>
                                </div>
                        </div>
                </div>

                <button id='adccSacola'>Adicionar à sacola</button>
            </div>
        `;
    } else {
        // Se o produto não for encontrado, exibe uma mensagem de erro
        produtoSinglePag.innerHTML = '<p>Produto não encontrado.</p>';
    }
}

function selecionarTamanho() {
    let inputs = document.querySelectorAll('input[name="checkTamanho"]');
    
    inputs.forEach(function(input) {
        input.addEventListener('click', function() {
            inputs.forEach(function(otherInput) {
                otherInput.parentElement.classList.remove('selecionado');
            });

            if (input.checked) {
                input.parentElement.classList.add('selecionado');
            }
        });
    });

}

let fecharJanelaDesc = document.querySelector('#janelaProdutoDescFechar')

fecharJanelaDesc.addEventListener('click', fecharJanelaProduto)

function fecharJanelaProduto(){
    let janelaDesc = document.querySelector('#janelaProdutoSingle')

    if(janelaDesc.style.display === 'block'){
        window.location.href = 'index.html';
    }

    console.log('fechando')

}
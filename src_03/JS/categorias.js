const categorias = [
    {
        id: 1,
        img: './img/Categoria camiseta.png',
        name: 'Camiseta'
    },
    {
        id: 2,
        img: './img/Categoria Bolsa.png',
        name: 'Bolsas'
    },
    {
        id: 3,
        img: './img/Categoria Calçados.png',
        name: 'Calçados'
    },
    {
        id: 4, 
        img: './img/Categoria Calças.png',
        name: 'Calças'
    },
    {
        id: 5,
        img: './img/Categoria Casacos.png',
        name: 'Casacos'
    },
    {
        id: 6,
        img: './img/Categoria Oculos.png',
        name: 'Óculos'
    }
]

document.addEventListener('DOMContentLoaded', function () {
    categoriasLoja()
});



function categoriasLoja(){
    let containerCategorias = document.querySelector('#categorias_part')
    let categoriaHTML = categorias.map((val) => `
        <div id="categoria_img">
            <img src="${val.img}" alt="${val.name}">
            <p>${val.name}</p>
        </div>
    `);

    containerCategorias.innerHTML = categoriaHTML.join('');
}

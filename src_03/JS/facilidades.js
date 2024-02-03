const facilidades = [
    {
        img: './img/x-diamond.png',
        titulo: 'PAGUE PELO PIX',
        descricao: `Ganhe 5% OFF em pagamentos via PIX`
    },
    {
        img: './img/arrow-repeat.png',
        titulo: 'TROCA GRÁTIS',
        descricao: `Fique livre para trocar em até 30 dias.`
    },
    {
        img: './img/Subtract.png',
        titulo: 'SUSTENTABILIDADE',
        descricao: `Moda responsável, que respeita o meio ambiente.`
    }
]

document.addEventListener('DOMContentLoaded', function(){
    verificarFacilidades()
})

function verificarFacilidades(){
    const facilidadesContainer = document.querySelector('#facilidades')

    let facilidadesHTML = facilidades.map((val) => `
        <div id="facilidades_img_desc">
            <img src="${val.img}" alt="facilidades">
            <div id="facilidades_Desc">
            <strong>${val.titulo}</strong>
            <p>${val.descricao}</p>
            </div>
        </div>
    `);

    facilidadesContainer.innerHTML = facilidadesHTML.join('');
}


document.querySelector('#enviarEmail').addEventListener('click', enviarEmailJoja)
document.querySelector('#fecharMensagem').addEventListener('click', fecharMensagem)

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

function enviarEmailJoja(){
    const email = String(document.querySelector('#emailPromocao').value)
    const mensagemCadastroEmail = document.querySelector('#mensagemCadastradoEmail')
    

    if (validarEmail(email)) {
        
        mensagemCadastroEmail.style.display = 'block';
        setTimeout(function() {
            mensagemCadastroEmail.style.display = 'none';
        }, 4000);

        document.querySelector('#emailPromocao').value = ''
    } else {
        alert('Digite um email válido')
        document.querySelector('#emailPromocao').value = ''
    };

};

function fecharMensagem(){
    const mensagemCadastroEmail = document.querySelector('#mensagemCadastradoEmail')

    if( mensagemCadastroEmail.style.display === 'block'){
       return mensagemCadastroEmail.style.display = 'none'
    }
}

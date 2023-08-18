const erroNome = document.getElementById('aviso-nome')
const erroEmail = document.getElementById('aviso-email')
const erroTelefone = document.getElementById('aviso-telefone')
const erroMensagem = document.getElementById('aviso-mensagem')

// Evento no formulario
const form = document.getElementById('form')

form.addEventListener('submit', function(event) {
    event.preventDefault()

    validarNome()
    validarEmail()
    validarTelefone()
    validarMensagem()
    
})

 // Validar nome
 function exibirMensagemErroNome(mensagem) {
    erroNome.textContent = mensagem;
    erroNome.classList.add('erro');
}
function esconderMensagemErroNome() {
    erroNome.classList.remove('erro');
}

function validarNome() {
    const nome = document.querySelector('.nome')
    const input = document.querySelector('#nome')
    const adicionarClaseErro = nome.classList.add('erro')

    if(input.value.trim() === ""){
        adicionarClaseErro
        exibirMensagemErroNome('campo obrigatorio')
    }else if(input.value !== "") {
        nome.classList.add('sucesso')
        esconderMensagemErroNome()
    }else {
        nome.classList.remove('erro')
        esconderMensagemErroNome()
}
}

// validar email

function exibirMensagemErroEmail(mensagem) {
    erroEmail.textContent = mensagem
    erroEmail.classList.add('erro');
}

function esconderMensagemErroEmail() {
    erroEmail.classList.remove('erro');
}

function validarEmail() {
    const email = document.querySelector('.email')
    const meuEmail = document.getElementById('email')

    if(meuEmail.value.trim() === ""){
        email.classList.add('erro')
        exibirMensagemErroEmail('campo obrigatorio')
    }else if(!isValidEmail(meuEmail.value)) {
        email.classList.add('erro')
        exibirMensagemErroEmail('Email inválido')
    }else { 
        email.classList.remove('erro')
        esconderMensagemErroEmail()
        email.classList.add('sucesso')
    }
}

function isValidEmail(email) { //Função para validar email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

const meuEmail = document.getElementById('email');
meuEmail.addEventListener('blur', validarEmail);


// validar telefone
function exibirMensagemErroTelefone(mensagem) {
    erroTelefone.textContent = mensagem;
    erroTelefone.classList.add('erro');
}

function esconderMensagemErroTelefone() {
    erroTelefone.classList.remove('erro');
}

function validarTelefone() {
    const telefone = document.querySelector('.telefone')
    const numeroTelefone = document.getElementById('telefone')

    if(numeroTelefone.value.trim() === "") {
        telefone.classList.add('erro')
        exibirMensagemErroTelefone('campo obrigatorio')
    }else if(numeroTelefone.value.trim() !== ""){  
        telefone.classList.add('sucesso')
        esconderMensagemErroTelefone()
    }else {
        esconderMensagemErroTelefone()
    }

}

// validar mensagem
function exibirMensagemErroMensagem(mensagem) {
    erroMensagem.textContent = mensagem;
    erroMensagem.classList.add('erro');
}

function esconderMensagemErroMensagem() {
    erroMensagem.classList.remove('erro');
}

function validarMensagem() {
    const mensagem = document.querySelector('.msg')
    const campoMensagem = document.getElementById('mensagem')

    if (campoMensagem.value === "") {
        mensagem.classList.add('erro')
        exibirMensagemErroMensagem('campo obrigatorio')
    }else {
        mensagem.classList.add('sucesso')
        esconderMensagemErroMensagem()
    }
}
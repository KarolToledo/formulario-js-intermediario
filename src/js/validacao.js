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
let exibirMensagemErroNome = (mensagem) =>{
    erroNome.textContent = mensagem;
    erroNome.classList.add('erro');
}
let esconderMensagemErroNome = function() {
    erroNome.classList.remove('erro');
}

function validarNome() {
    const nome = document.querySelector('.nome')
    const input = document.querySelector('#nome')
    const adicionarClaseErro = nome.classList.add('erro')

    if(input.value.trim() === ""){
        adicionarClaseErro
        exibirMensagemErroNome('campo obrigatorio')
        nome.classList.remove('sucesso')
    }else if(input.value !== "") {
        nome.classList.remove('erro')
        nome.classList.add('sucesso')
        esconderMensagemErroNome()
    }
}

// validar email
const exibirMensagemErroEmail = (mensagem) => {
    erroEmail.textContent = mensagem
    erroEmail.classList.add('erro');
}

const esconderMensagemErroEmail = function() {
    erroEmail.classList.remove('erro');
}

function validarEmail () {
    const email = document.querySelector('.email')
    const meuEmail = document.getElementById('email')
    meuEmail.addEventListener('blur', validarEmail);

    if(meuEmail.value.trim() === ""){
        email.classList.add('erro')
        exibirMensagemErroEmail('campo obrigatorio')
        email.classList.remove('sucesso')
    }else if(!isValidEmail(meuEmail.value) !== "") {
        email.classList.remove('erro')
        email.classList.add('sucesso')
        esconderMensagemErroEmail()
    }
}

function isValidEmail(email) { //Função para validar  se email é válido
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// validar telefone
let exibirMensagemErroTelefone = (mensagem) => {
    erroTelefone.textContent = mensagem;
    erroTelefone.classList.add('erro');
}

const esconderMensagemErroTelefone = function() {
    erroTelefone.classList.remove('erro');
}

function validarTelefone() {
    const telefone = document.querySelector('.telefone')
    const numeroTelefone = document.getElementById('telefone')

    if(numeroTelefone.value.trim() === "") {
        telefone.classList.add('erro')
        exibirMensagemErroTelefone('campo obrigatorio')
        telefone.classList.remove('sucesso')
    }else if(numeroTelefone.value.trim() !== ""){  
        telefone.classList.remove('erro')
        telefone.classList.add('sucesso')
        esconderMensagemErroTelefone()
    }

}

// validar mensagem
const exibirMensagemErroMensagem = (mensagem) => {
    erroMensagem.textContent = mensagem;
    erroMensagem.classList.add('erro');
}

let esconderMensagemErroMensagem = function() {
    erroMensagem.classList.remove('erro');
}

function validarMensagem() {
    const mensagem = document.querySelector('.msg')
    const campoMensagem = document.getElementById('mensagem')

    if (campoMensagem.value.trim() === "") {
        mensagem.classList.add('erro')
        exibirMensagemErroMensagem('campo obrigatorio')
        mensagem.classList.remove('sucesso')
    }else if (campoMensagem.value.trim() !== ""){
        mensagem.classList.remove('erro')
        mensagem.classList.add('sucesso')
        esconderMensagemErroMensagem()
    }
}
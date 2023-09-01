const camposFormulario = document.querySelectorAll('.dados')
const botaoEnviar = document.querySelector('.botao')

botaoEnviar.addEventListener('click', (e) => {
    e.preventDefault()

    camposFormulario.forEach((divCampo) => {
        const input = divCampo.querySelector('input, textarea');
        const mensagemErro = divCampo.querySelector('.obrigatorio');
        
        if (input.value.trim() === '') {
            divCampo.classList.add('erro');
            mensagemErro.classList.add('mostrar-msg-erro')
            divCampo.classList.remove('sucesso')
        } else {
            divCampo.classList.remove('erro');
            mensagemErro.classList.remove('mostrar-msg-erro')
            divCampo.classList.add('sucesso');
        }
    });

})
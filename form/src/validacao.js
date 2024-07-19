function enviar() {
    let nome = document.getElementById('nome');
    if (nome.value === '') {
        alert('nome não informado');
        nome.style.borderColor = 'red';
        nome.focus();
    } else {
        nome.style.borderColor = 'black';
    }

    let number = document.getElementById('number');
    if (number.value === '') {
        alert('Telefone não informado');
        number.style.borderColor = 'red';
        number.focus();
    } else {
        number.style.borderColor = 'black'
    }

    let email = document.getElementById('email');
    if (email.value === '') {
        alert('E-mail não informado');
        email.style.borderColor = 'red';
        email.focus();
    } else {
        email.style.borderColor = 'black';
    }

    let senha = document.getElementById('senha');
    if (senha.value === '') {
        alert('Senha não informado');
        senha.style.borderColor = 'red';
        senha.focus();
    } else {
        senha.style.borderColor = 'black';
    }

    let confirmaSenha = document.getElementById('confirmaSenha');
    if (confirmaSenha.value === '') {
        alert('Confirme sua senha, por favor');
        confirmaSenha.style.borderColor = 'red';
        confirmaSenha.focus();
    } else {
        confirmaSenha.style.borderColor = 'black';
    }

}
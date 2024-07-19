function enviar() {
    let nome = document.getElementById('nome');

    if (nome.value === '') {
        alert('nome não informado');
        nome.style.borderColor = 'red';
        nome.focus();
    } else {
        nome.style.borderColor = 'black';
    }
}
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById('client-name').value;
    let telephone = document.getElementById('telefone').value;
    let address = document.getElementById('address').value;

    let data = {
        name,
        telephone,
        address
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

    let content = document.getElementById('content');

    let carregando = '<p>Carregando...</p>'

    let pronto = '<p>Parabéns, você foi Cadastrado!</p>'

    content.innerHTML = carregando;

    setTimeout(() => {
        content.innerHTML = pronto

    }, 1000)
})
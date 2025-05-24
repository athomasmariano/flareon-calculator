document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Coletando os valores dos inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validação simples dos campos
    if (name && email && message) {
        document.getElementById('responseMessage').textContent = 'Mensagem enviada com sucesso!';
        document.getElementById('responseMessage').style.color = 'green';
        
        // Limpar os campos após o envio
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('responseMessage').textContent = 'Por favor, preencha todos os campos!';
        document.getElementById('responseMessage').style.color = 'red';
    }
});

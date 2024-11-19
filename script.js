// Exemplo simples de validação de formulário de contato
document.getElementById("contact-form").addEventListener("submit"), function(event) {
    event.preventDefault(); // Previne o envio do formulário

    let nome = event.target.querySelector("input[type='text']").value;
    let email = event.target.querySelector("input[type='email']").value;
    let mensagem = event.target.querySelector("textarea").value;

    if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    event.target
}
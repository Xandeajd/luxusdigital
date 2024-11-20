// Exemplo simples de envio de formulário via WhatsApp
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio tradicional do formulário

    // Captura os valores dos campos usando IDs
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefone = document.getElementById("telefone").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();

    // Validação: verifica se todos os campos estão preenchidos
    if (!nome || !email || !telefone || !mensagem) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Monta a mensagem para enviar via WhatsApp
    let mensagemWhatsApp = `Olá, meu nome é ${nome}. 
Meu e-mail é ${email} e meu telefone é ${telefone}.
Minha mensagem é: ${mensagem}`;

    // Codifica a mensagem para usar em uma URL
    let mensagemCodificada = encodeURIComponent(mensagemWhatsApp);

    // Define o link do WhatsApp com os dados do formulário
    let linkWhatsApp = `https://wa.me/5551991210808?text=${mensagemCodificada}`;

    // Redireciona para o link do WhatsApp
    window.open(linkWhatsApp, "_blank"); // Abre o WhatsApp em uma nova aba
});
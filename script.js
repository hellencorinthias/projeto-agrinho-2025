// Função para rolagem suave ao clicar nos links do menu
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o comportamento padrão do link

        const targetId = this.getAttribute('href'); // Obtém o ID do elemento de destino (ex: #home)
        const targetElement = document.querySelector(targetId); // Seleciona o elemento alvo

        if (targetElement) {
            // Calcula a posição de rolagem, descontando a altura do cabeçalho fixo
            const headerOffset = document.querySelector('header').offsetHeight;
            const elementPosition = targetElement.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth' // Rola suavemente
            });
        }
    });
});

// Adicionar uma classe ao header ao rolar a página para torná-lo mais compacto ou mudar cor
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 80) { // Se rolar mais de 80px
        header.classList.add('scrolled'); // Adiciona a classe 'scrolled'
    } else {
        header.classList.remove('scrolled'); // Remove a classe
    }
});

// Exemplo de CSS para a classe 'scrolled' (adicione em style.css)
/*
header.scrolled {
    padding: 10px 0; // Diminui o padding
    background-color: #218838; // Um verde um pouco mais escuro ao rolar
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

header.scrolled .logo {
    height: 50px; // Diminui o logo ao rolar
}
*/

// Adicionar validação simples para o formulário de contato (opcional)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;

    if (name && email && message) {
        alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
        this.reset(); // Limpa o formulário
    } else {
        alert('Por favor, preencha todos os campos do formulário.');
    }
});
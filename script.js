document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o comportamento padrão do link

        const targetId = this.getAttribute('href'); // Pega o ID do elemento de destino (ex: #home)
        const targetElement = document.querySelector(targetId); // Seleciona o elemento

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('header').offsetHeight, // Ajusta para a altura do cabeçalho fixo
                behavior: 'smooth' // Rola suavemente
            });
        }
    });
});

// Exemplo simples de como você pode adicionar um efeito ao rolar a página
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Se rolar mais de 50px
        header.classList.add('scrolled'); // Adiciona uma classe ao header
    } else {
        header.classList.remove('scrolled'); // Remove a classe
    }
});

// Adicione esta regra CSS ao seu `style.css` para ver o efeito da classe 'scrolled':
/*
header.scrolled {
    background-color: rgba(0, 123, 255, 0.95); // Um pouco transparente ao rolar
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
*/
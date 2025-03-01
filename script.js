// Função para exibir a mensagem dos corações
function mostrarMensagem(mensagem) {
    const mensagemElemento = document.getElementById('mensagem');
    mensagemElemento.textContent = mensagem;
    
    // Exibe a mensagem
    mensagemElemento.classList.add('show');
    
    // Esconde a mensagem após 3 segundos
    setTimeout(() => {
        mensagemElemento.classList.remove('show');
    }, 3000);
}

// Contador de dias desde 01/09/2024
function atualizarContador() {
    const dataInicial = new Date('2024-09-01'); // ---> não alterar
    const dataAtual = new Date();
    
    // Calcular a diferença em milissegundos
    const diferenca = dataAtual - dataInicial;
    
    // Converter a diferença para dias
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24)); // --> não alterar
    
    // Exibir no contador
    const contadorElemento = document.getElementById('contador');
    contadorElemento.textContent = `${dias} dias incríveis ao seu lado❤️`;
}

// --> Essa parte fica responável pelo funcionamento do slide
let index = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    index += step;

    if (index < 0) {
        index = totalSlides - 1;
    } else if (index >= totalSlides) {
        index = 0;
    }

    // Move the carousel to the correct position
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${index * 100}%)`;
}


// Atualiza o contador ao carregar a página
window.onload = atualizarContador;

const motivos = [
    "O seu sorriso alegra meu dia",
    "Você tem um olhar apaixonante .",
    "Você é a minha pessoa favorita no mundo.",
    "Sempre me faz sentir especial.",
    "Sua risada é a melhor música.",
    "você pe o amor a minha vida.",
    "Você melhora os meus dias.",
    "Seu carinho é único.",
    "Você é minha inspiração diária.",
    "Sua presença é a melhor coisa.",
    "Amar Você é com ter toda a felicidade do mundo em um lugar só.",
    "Você me faz me apaixonar todos os dias.",
    "Você me faz enxergar o mundo de uma maneira melhor.",
    "Você é a pessoa mais linda do mundo.",
    "Contigo, toda ocasião é uma ocasião especial.",
    "Seu senso de humor é incrível.",
    "Você tem curvas lindas e....",
    "Uma bunda extremamente gostosa 👌",
    "Cada momento com você é único.",
    "Você me faz sentir confortável em qualquer ocasião",
    "Com você, tudo é extremamente real e seguro.",
    "Você me faz sentir seguro.",
    "Você me surpreende cada vez mais, com seus atos de romantismo.",
    "Você me entende sem precisar de palavras.",
    "Você ama o juninho e e minha bunda na mesma maneira que me ama.",
    "Você é uma pessoa incrível.",
    "Sua companhia é a melhor coisa.",
    "Você é a razão do meu sorriso.",
    "Seu abraço faz tudo ficar bem.",
    "Teus beijos são como combustível para o meu fogo."
];

const mural = document.querySelector('.mural');

// Adicionando os post-its ao mural
for (let i = 0; i < 30; i++) {
    const postIt = document.createElement('div');
    postIt.classList.add('post-it');
    postIt.textContent = (i + 1);
    postIt.setAttribute('title', motivos[i]);

    postIt.addEventListener('click', () => mostrarMensagem(motivos[i]));
    
    mural.appendChild(postIt);
}


// Função para mostrar os textos com animação de transição suave
function initObserver() {
    const textos = document.querySelectorAll('.texto-0, .texto-1, .texto-2, .texto-3, .texto-4, .texto-5');
    
    // Função que será chamada quando o elemento entrar ou sair da tela
    const options = {
        root: null, // Observa a visibilidade dentro da janela de visualização
        threshold: 0.5, // O elemento precisa estar 50% visível na tela
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Quando o texto entra na tela, adiciona a classe "show"
                entry.target.classList.add('show');
            } else {
                // Quando o texto sai da tela, remove a classe "show"
                entry.target.classList.remove('show');
            }
        });
    }, options);
    
    // Observa todos os elementos da classe .texto-...
    textos.forEach(texto => observer.observe(texto));
}

// Chama a função para inicializar o observer assim que a página carregar
window.onload = () => {
    atualizarContador();
    initObserver(); // Inicializa o observador de interseção
};



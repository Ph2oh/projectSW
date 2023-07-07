// Selecionando os botões
var btnCanaa = document.getElementById('btnCanaa');
var btnParauapebas = document.getElementById('btnParauapebas');
var btnMaraba = document.getElementById('btnMaraba');
var cityInfo = document.getElementById('city-info');

// Adicionando os ouvintes de evento de clique para cada botão
btnCanaa.addEventListener('click', function() {
  exibirInfoCidade('Canaã dos Carajás', 'Informações sobre Canaã dos Carajás.');
});

btnParauapebas.addEventListener('click', function() {
  exibirInfoCidade('Parauapebas', 'Informações sobre Parauapebas.');
});

btnMaraba.addEventListener('click', function() {
  exibirInfoCidade('Marabá', 'Informações sobre Marabá.');
});

// Função para exibir informações da cidade
function exibirInfoCidade(cidade, informacoes) {
  cityInfo.innerHTML = '<h2>' + cidade + '</h2><p>' + informacoes + '</p>';
}

// Selecionando o formulário
var cityForm = document.getElementById('city-form');

// Adicionando o ouvinte de evento de envio do formulário
cityForm.addEventListener('submit', function(event) {
  event.preventDefault();
  exibirCidadeSelecionada(event.target.elements.city.value);
});

// Função para exibir a cidade selecionada
function exibirCidadeSelecionada(cidade) {
  var cityName = document.getElementById('city-name');
  var cityInfo = document.getElementById('city-info');

  cityName.textContent = cidade;
  cityInfo.textContent = obterInformacoesCidade(cidade);
}

// Função para obter as informações da cidade
function obterInformacoesCidade(cidade) {
  switch (cidade) {
    case 'Canaã dos Carajás':
      return 'Informações sobre Canaã dos Carajás.';
    case 'Parauapebas':
      return 'Informações sobre Parauapebas.';
    case 'Marabá':
      return 'Informações sobre Marabá.';
    default:
      return '';
  }
}
// Função para exibir a cidade selecionada
function exibirCidadeSelecionada(cidade) {
  var cityName = document.getElementById('city-name');
  var cityInfo = document.getElementById('city-info');

  cityName.textContent = cidade;
  cityInfo.textContent = obterInformacoesCidade(cidade);
}

// Função para obter as informações da cidade
function obterInformacoesCidade(cidade) {
  switch (cidade) {
    case 'Canaã dos Carajás':
      return 'Informações sobre Canaã dos Carajás.';
    case 'Parauapebas':
      return 'Informações sobre Parauapebas.';
    case 'Marabá':
      return 'Informações sobre Marabá.';
    default:
      return '';
  }
}

// Verificando se a página é a city.html
if (window.location.pathname.includes('city.html')) {
  var cidade = window.location.search.substring(1);
  exibirCidadeSelecionada(cidade);
}



// Carrossel de imagens

const carouselSlide = document.querySelector('.carousel-slide');

// Clone os slides para criar uma transição contínua
carouselSlide.innerHTML += carouselSlide.innerHTML;

// Inicialize a variável slideIndex
let slideIndex = 0;

// Obtenha a largura do slide
const slideWidth = carouselSlide.children[0].offsetWidth;

// Defina a transição do carrossel para a largura do slide
carouselSlide.style.transition = `transform 0.5s ease-in-out`;

function transitionEndHandler() {
  if (slideIndex >= carouselSlide.children.length / 2) {
    slideIndex = 0;
    carouselSlide.style.transform = `translateX(0)`;
  }
}

carouselSlide.addEventListener('transitionend', transitionEndHandler);

// Inicie o intervalo de tempo para movimentar o carrossel
setInterval(() => {
  slideIndex++;
  carouselSlide.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}, 3000);

const whatsappButtons = document.querySelectorAll(".whatsapp-button");

whatsappButtons.forEach(button => {
  button.addEventListener("click", () => {
    const whatsappLink = button.getAttribute("href");
    window.open(whatsappLink, "_blank");
  });
});

function loadPage() {
  const overlay = document.querySelector('.transition-overlay');
  overlay.classList.add('fade-out');
  setTimeout(() => {
    window.location.href = 'page.html';
  }, 500);
}




function renderBotaoSelecionarTudo(customToolbar, document) {
  const botaoSelecionarTudo = criarBotaoSelecionarTudo();
  customToolbar.appendChild(botaoSelecionarTudo);
  botaoSelecionarTudo.addEventListener('click', (event) => handleSelecionarTudo(event, document));
  return botaoSelecionarTudo;
};

function criarBotaoSelecionarTudo() {
  const botaoSelecionarTudo = document.createElement("BUTTON");
  botaoSelecionarTudo.id = "botao-selecionar-tudo";
  botaoSelecionarTudo.className = "botao-selecionar-tudo";
  botaoSelecionarTudo.innerHTML = 'Selecionar Tudo';
  return botaoSelecionarTudo;
}

function toggleBotaoSelecionarTudo(botaoSelecionarTudo) {
  botaoSelecionarTudo.classList.toggle('botao-selecionar-tudo');
  botaoSelecionarTudo.classList.toggle('botao-desselecionar-tudo');
  botaoSelecionarTudo.innerHTML = 'Desselecionar Tudo';
  
  if (botaoSelecionarTudo.classList.contains('botao-selecionar-tudo')) {
    botaoSelecionarTudo.innerHTML = 'Selecionar Tudo';
  }
}

function handleSelecionarTudo(event, document) {
  event.preventDefault();
  toggleBotaoSelecionarTudo(event.target);
  const checkboxes = document.querySelectorAll('td .List input[type=checkbox]');
  for(let i = 0, n = checkboxes.length; i < n; i++) {
    const row = checkboxes[i].parentNode.parentNode;
    toggleCheckbox(row, checkboxes[i]);
  }
}

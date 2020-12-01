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

function toggleBotaoSelecionarTudo() {
  const botaoSelecionarTudo = document.getElementById("botao-selecionar-tudo");
  if(botaoSelecionarTudo.className == "botao-selecionar-tudo") {
    botaoSelecionarTudo.className = "botao-desselecionar-tudo";
    botaoSelecionarTudo.innerHTML = 'Desselecionar Tudo';
  }
  else {
    botaoSelecionarTudo.className = "botao-selecionar-tudo";
    botaoSelecionarTudo.innerHTML = 'Selecionar Tudo';
  }
}

function handleSelecionarTudo(event, document) {
  toggleBotaoSelecionarTudo();
  event.preventDefault();
  const checkboxes = document.querySelectorAll('td .List input[type=checkbox]');
  for(let i = 0, n = checkboxes.length; i < n; i++) {
    const row = checkboxes[i].parentNode.parentNode;
    toggleCheckbox(row, checkboxes[i]);
  }
}
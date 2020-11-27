botaoSelecionarTudoStyles = `
  .botao-selecionar-tudo {
    background-color: #343a40;
    border-color: #343a40;
    border-radius: .25rem;
    box-shadow: 0 0.125rem 0.625rem rgba(52,58,64,0.4), 0 0.0625rem 0.125rem rgba(52,58,64,0.5);
    color: #fff;
    cursor: pointer;
    font-weight: 500;
    line-height: 1.5;
    padding: .375rem .75rem;
    text-align: center;
    text-transform: uppercase;
    vertical-align: middle;
  }
`;

function renderBotaoSelecionarTudo(customToolbar, viewerDocument) {
  addStyleToFrame(botaoSelecionarTudoStyles, iframeViewer);
  const botaoSelecionarTudo = criarBotaoSelecionarTudo();
  customToolbar.appendChild(botaoSelecionarTudo);
  botaoSelecionarTudo.addEventListener('click', (event) => handleSelecionarTudo(event, viewerDocument));
  return botaoSelecionarTudo;
};

function criarBotaoSelecionarTudo() {
  const botaoSelecionarTudo = document.createElement("BUTTON");
  botaoSelecionarTudo.classList.add('botao-selecionar-tudo');
  botaoSelecionarTudo.innerHTML = 'Selecionar Tudo';
  return botaoSelecionarTudo;
}

function handleSelecionarTudo(event, viewerDocument) {
  event.preventDefault();
  const checkboxes = viewerDocument.querySelectorAll('td .List input[type=checkbox]');
  console.log(checkboxes);
  for(let i = 0, n = checkboxes.length; i < n; i++) {
    checkboxes[i].checked = !checkboxes[i].checked;
  }
}
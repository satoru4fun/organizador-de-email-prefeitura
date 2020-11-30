// Este script é executado para cada iframe existente
// Dessa forma, é necessário identificar qual o iframe em questão para chamar somente as funções relacionadas
const currentFrame = window.frameElement?.name;

// Ações relacionadas ao painel de visualização de e-mails (direita)
if (currentFrame == 'viewer') {
  customToolbar = renderCustomToolbar(document);
  renderBotaoSelecionarTudo(customToolbar, document);
  clicarCheckbox(document);
}

// Ações relacionadas ao menu de navegação (esquerda)
if (currentFrame == 'navbar') {
  aplicarBadges(document);
}

// Ajusta os framesets
if (!currentFrame) {
  ajustarFramesets(document);
}
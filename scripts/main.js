const iframeViewer = document.querySelector('frame[name=viewer]');
iframeViewer.contentWindow.addEventListener("DOMContentLoaded", start, true);

function start() {
  const viewerDocument = iframeViewer.contentDocument || iframeViewer.contentWindow.document;
  customToolbar = renderCustomToolbar(iframeViewer, viewerDocument);
  renderBotaoSelecionarTudo(customToolbar, viewerDocument);
};
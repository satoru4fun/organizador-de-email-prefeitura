function aplicarBadges(document) {
  const caixaEntrada = document.querySelector('table.nbBg td.nbButton:first-child');
  const badge = criarBadge();
  getTotalEmailsNaoLidos(document)
    .then(totalEmailsNaoLidos => badge.innerHTML = totalEmailsNaoLidos);
  caixaEntrada.appendChild(badge);
}

function criarBadge() {
  const badge = document.createElement('div');
  badge.classList.add('badge');
  return badge;
}

function getTotalEmailsNaoLidos(document) {
  const caixaEntradaUrl = document.querySelector('table.nbBg td.nbButton:first-child a').href;
  return fetch(caixaEntradaUrl)
    .then(res => res.text())
    .then(getTotalPaginas)
    .then(totalPaginas => contarEmailsNaoLidos(caixaEntradaUrl, totalPaginas));
}

function getTotalPaginas(html) {
  const regex = /<font size="2" color="white"><b>&nbsp;de&nbsp;(.*)<\/b><\/font>/i;
  const match = regex.exec(html);
  return match[1] ? match[1] : 1;
}

function contarEmailsNaoLidos(caixaEntradaUrl, totalPaginas) {
  let url;
  const promises = [];
  const baseUrl = caixaEntradaUrl.split('&Page=')[0];
  for (i = 1; i <= totalPaginas; i++) {
    url = `${baseUrl}&Page=${i}`;
    promises.push(obterEmailsNaoLidoPorPagina(url));
  }
  return Promise.all(promises)
    .then(arrayTotais => arrayTotais.reduce((a, b) => (a + b)));
}

function obterEmailsNaoLidoPorPagina(url) {
  return fetch(url)
    .then(res => res.text())
    .then(html => html.split('unread.gif').length - 1);
}
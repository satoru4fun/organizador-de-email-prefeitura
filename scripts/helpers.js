// Função para injetar CSS dentro do iFrame (não adianta utilizar css da extensão)
const addStyleToFrame = (cssStr, frmNode) => {
  var D               = frmNode.contentDocument;
  var newNode         = D.createElement ('style');
  newNode.textContent = cssStr;

  var targ = D.getElementsByTagName ('head')[0] || D.body || D.documentElement;
  targ.appendChild (newNode);
};
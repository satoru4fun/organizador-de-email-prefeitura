function retornaCampoDe (linha) {
  return (linha.getElementsByTagName('td')[5])?linha.getElementsByTagName('td')[5].textContent:null
}

function marcaCheckbox (linha) {
  var inputs = linha.getElementsByTagName('input');
  for (var i = 0, input; input = inputs[i]; i++) {
    (input.getAttribute('type')=='checkbox')?input.checked=true:null;
  }
}

function organizaEmail () {
  var linhas = document.firstElementChild.children[1].children[1].contentDocument.getElementsByTagName('tr');
  for (var i = 5, linha; linha = linhas[i]; i++) {
    (retornaCampoDe(linha)=='SMIT - COMUNICAÇÃO')?marcaCheckbox(linha):null;
  }
}

let botaoOrganiza = document.getElementById('botaoOrganiza');

botaoOrganiza.onclick = function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'console.log("teste")'});
    });
  };
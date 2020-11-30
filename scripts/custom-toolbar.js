function renderCustomToolbar(document) {
  const customToolbar = criarCustomToolbar();
  const folderBar = document.querySelector('table .tblFolderBar');
  folderBar.parentNode.insertBefore(customToolbar, folderBar);
  return customToolbar;
};

function criarCustomToolbar() {
  const customToolbar = document.createElement("DIV");
  customToolbar.classList.add('custom-toolbar');
  return customToolbar;
}
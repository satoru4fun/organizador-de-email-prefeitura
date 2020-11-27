customToolbarStyles = `
  .custom-toolbar {
    background-color: #fafbfc;
    height: 35px;
    padding: 5px;
    width: 100%;
  } 
`;

function renderCustomToolbar(iframeViewer, viewerDocument) {
  addStyleToFrame(customToolbarStyles, iframeViewer);
  const customToolbar = criarCustomToolbar();
  const folderBar = viewerDocument.querySelector('table .tblFolderBar');
  folderBar.parentNode.insertBefore(customToolbar, folderBar);
  return customToolbar;
};

function criarCustomToolbar() {
  const customToolbar = document.createElement("DIV");
  customToolbar.classList.add('custom-toolbar');
  return customToolbar;
}
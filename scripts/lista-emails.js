function clicarCheckbox(document) {
  const rows = document.querySelectorAll('table.tblView > tbody > tr > td > table:nth-child(4) tr');
  rows.forEach(email => {
    email.addEventListener('click', (e) => {
      const row = e.target.parentNode;
      const checkbox = row.firstChild.firstChild;
      toggleCheckbox(row, checkbox);
    });
  });
}

function toggleCheckbox(row, checkbox) {
  checkbox.checked = !checkbox.checked;
  if (checkbox.checked) {
    row.classList.add('vwSelItm');
  } else {
    row.classList.remove('vwSelItm');
  }
}
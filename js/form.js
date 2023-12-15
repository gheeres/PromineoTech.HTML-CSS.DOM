(function() {
  'use strict'
  feather.replace({ 'aria-hidden': 'true' });

  const addButton = document.querySelector('#add-vehicle');
  const textMake = document.getElementById('make');
  const textModel = document.getElementById('model');
  const textYear = document.getElementById('year');
  const tableCars = document.getElementById('cars');
  const tableCarsBody = document.querySelector('#cars tbody');
  console.log(addButton, textMake, textModel, textYear, tableCars);

  /*
  console.log(document.querySelectorAll('div').length);
  for(let element of document.querySelectorAll('div')) {
    //console.log(element);
    //element.remove();
    element.classList.add('bg-danger');
  }
  */
 
  //document.addEventListener('click', (e) => {
  //  console.log(e.target);
  //});
  tableCars.addEventListener('click', (e) => {
    //console.log(e.target);
    //console.log(e.target.parentNode.parentNode);
    //let row = e.target.parentNode.parentNode;
    let row = e.target.closest('tr');
    if (row) {
      row.remove();
    }
  });

  addButton.addEventListener('click', (e) => {
    e.preventDefault();

    //console.log(textMake.value);
    //console.log(textModel.value);
    //console.log(textYear.value);

    const body = tableCars.querySelector('tbody');
    const row = createHTMLElement(`<tr>
      <td>${ textMake.value }</td>
      <td>${ textModel.value }</td>
      <td>${ textYear.value }</td>
      <td><i class="bi bi-trash-fill text-danger"></i></td>
    </tr>`);
    body.append(row);
  });


  // ----------------------------------------------------------------------

  /**
   * Create an HTML element without defining new element / class.
   * @param {String} innerHTML The inner HTML contents
   * @returns An HTML element.
   */
  function createHTMLElement(innerHTML) {
    const template = document.createElement('template');
    template.innerHTML = innerHTML;
    return template.content.firstElementChild;
  }

  /**
   * Generates a random number.
   * @param {Number} max The maximum value to include.
   * @returns The random number
   */
  function random(max) {
    return Math.floor(Math.random() * max);
  }
})();
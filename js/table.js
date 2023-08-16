(function() {
  'use strict'
  feather.replace({ 'aria-hidden': 'true' });

  //const addButton = document.querySelector('.btn');
  const addButton = document.querySelector('#add-button');
  const emailAddress = document.querySelector('#exampleFormControlInput1');
  const comment = document.querySelector('#exampleFormControlTextarea1');
  const comments = document.querySelector('.comments');
  //const comments = document.querySelector('.comments tbody');

  //console.log(comment);
  //console.log(comments);
  addButton.addEventListener('click', (e) => {
    let emailValue = emailAddress.value;
    if (emailValue) {
      //console.log(emailValue);
      let commentValue = comment.value;
      //console.log(commentValue);
      let row = createHTMLElement(`
        <tr>
          <td>${ emailValue }</td>
          <td>${ commentValue }</td>
        </tr>`
      );
      //console.log(row);

      //comments.appendChild(row);
      let body = comments.querySelector('tbody');
      body.appendChild(row);
      emailAddress.value = '';
      comment.value = '';
    }
  });
  
  function createHTMLElement(html) {
    let template = document.createElement('template');
    template.innerHTML = html;
    return template.content.firstElementChild;
  }  
})();
  
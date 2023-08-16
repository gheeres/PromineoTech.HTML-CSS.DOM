(function() {
  'use strict'
  feather.replace({ 'aria-hidden': 'true' });

  //const buttonCaptureEvents = document.getElementById('buttonCaptureEvents');
  const buttonCaptureEvents = document.querySelector('#buttonCaptureEvents');
  const gridElement = document.querySelector('#gridElement');
  const enableBubbling = document.querySelector('#enableBubbling');

  console.log(buttonCaptureEvents);
  buttonCaptureEvents.addEventListener('click', (e) => {
    console.log('click', e);
    buttonCaptureEvents.remove(); //e.target.remove();

    if (enableBubbling.checked) {
      gridElement.addEventListener('click', (e) => {
        if ((e.target.innerHTML === 'A') ||
            (e.target.innerHTML === 'B') ||
            (e.target.innerHTML === 'C')) {
          e.target.innerHTML = 'X';
        }
        else {
          e.target.innerHTML = 'O';
        }

      });
    }
    else {
      // Inefficient implementation. More memory
      const columns = gridElement.querySelectorAll('[class*=col]');
      columns.forEach((column,index) => {
        column.addEventListener('click', (e) => {
          // console.log('cell-click', e);
          console.log(e.target.innerHTML);
          e.target.innerHTML = index;
        });
      })
    }
  });
  // let mouseOverCount = 0;
  // buttonCaptureEvents.addEventListener('mouseover', (e) => {
  //   console.log(`mouseover(${ ++mouseOverCount })`);
  // });
  // let mouseMoveCount = 0;
  // buttonCaptureEvents.addEventListener('mousemove', (e) => {
  //   console.log(`mousemove(${ ++mouseMoveCount })`);
  // });
})();
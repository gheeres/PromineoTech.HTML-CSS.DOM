(function() {
  'use strict'
  feather.replace({ 'aria-hidden': 'true' });

  /**
   * Generates a random number.
   * @param {Number} max The maximum value to include.
   * @returns The random number
   */
  function random(max) {
    return Math.floor(Math.random() * max);
  }

  /**
   * Adds the specified event to the table.
   * @param {Event} event 
   * @param {HtmlElement} table 
   */
  function addEventToTable(event, table) {
    const row = document.createElement('template');
    row.innerHTML = `<tr>
                       <td>${table.childElementCount+1}</td>
                       <td>${event.type}</td>
                       <td>{ target: #${ event.target.id || event.target.tagName },
                             currentTarget: #${ event.currentTarget.id || event.currentTarget.tagName }
                           }</td>
                     </tr>`
    table.insertBefore(row.content.firstElementChild, table.firstElementChild);
  }

  const canvasElement = document.getElementById('canvasElement');
  const buttonCaptureEvents = document.getElementById('buttonCaptureEvents');
  const buttonClearEvents = document.getElementById('buttonClearEvents');
  const eventsTable = document.getElementById('eventsTable');

  const events = [ 
    'click', 
    'mousedown', 
    'mouseenter', 
    'mouseleave', 
    'mousemove', 
    'mouseover', 
    'mouseout', 
    'mouseup', 
  ];

  buttonCaptureEvents.addEventListener('click', () => {
    events.forEach((event) =>  {
      canvasElement.addEventListener(event, (e) => {
        addEventToTable(e, eventsTable);
      });
    })

    buttonCaptureEvents.remove();
  });

  buttonClearEvents.addEventListener('click', (e) => {
    while(eventsTable.firstChild) {
      eventsTable.removeChild(eventsTable.firstChild);
    }
  });
})();
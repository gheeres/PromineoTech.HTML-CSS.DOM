(function() {
  'use strict'
  feather.replace({ 'aria-hidden': 'true' });

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

  const nestedElement = document.getElementById('nestedElement');
  const enableBubbling = document.getElementById('enableBubbling');
  const buttonCaptureEvents = document.getElementById('buttonCaptureEvents');
  const buttonClearEvents = document.getElementById('buttonClearEvents');
  const eventsTable = document.getElementById('eventsTable');

  buttonCaptureEvents.addEventListener('click', () => {
    if (! enableBubbling.checked) {
      console.log('Binding events on each element...');
      [...nestedElement.getElementsByTagName('div')].forEach((child) => {
        events.forEach((event) => {
          child.addEventListener(event, (e) => {
            addEventToTable(e, eventsTable);
          });
        });
      });
    }
    else {
      // Listen on parent... bubble up.
      console.log('Binding single event on parent...');
      events.forEach((event) => {
        nestedElement.addEventListener(event, (e) => {
         addEventToTable(e, eventsTable);
        }) 
      });
    }

    buttonCaptureEvents.remove();
  });

  
  buttonClearEvents.addEventListener('click', (e) => {
    while(eventsTable.firstChild) {
      eventsTable.removeChild(eventsTable.firstChild);
    }
  });
})();
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
   * Creates an icon of the specified name/value.
   * @param {String} name The name of the icon to retrieve.
   * @param {Number} size The size of the icon.
   * @returns The HTMLElement
   */
  function createIcon(name, size) {
    const defaultSize = 24;
    const icon = document.createElement('template');
    icon.innerHTML = `<svg
      width=${ size || defaultSize }
      height=${ size || defaultSize }
      fill="none"
        stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <use href="node_modules/feather-icons/dist/feather-sprite.svg#${ name }"/>
    </svg>`
    return icon.content.firstElementChild;
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

  /**
   * Randomly places the content into the column replacing any existing content.
   * @param {HtmlElement} column The column
   * @param {ClickEvent} column The associated event.
   */
  function setRandomColumnContent(column, e) {
    if (column) {
      e.target.style.backgroundColor = `rgb(${ random(255) },${ random(255) },${ random(255) })`;
         
      while(column.firstChild) {
        column.removeChild(column.firstChild);
      }
      const icon = createIcon(random(2) % 2 ? "x" : "circle", column.style.height);
      column.appendChild(icon);
    }
  }

  const buttonCaptureEvents = document.getElementById('buttonCaptureEvents');
  const gridElement = document.getElementById('gridElement');
  const enableBubbling = document.getElementById('enableBubbling');
  const buttonClearEvents = document.getElementById('buttonClearEvents');
  const eventsTable = document.getElementById('eventsTable');

  buttonCaptureEvents.addEventListener('click', () => {
    if (! enableBubbling.checked) {
      const columns = gridElement.querySelectorAll('[class*=col]');
      columns.forEach((column) => {
        column.onclick = (e) => {
          addEventToTable(e, eventsTable);
          setRandomColumnContent(column, e);
        };
      });
    }
    else {
      gridElement.addEventListener('click', (e) => {
        addEventToTable(e, eventsTable);
        let column = e.target.closest('[class*=col]');
        setRandomColumnContent(column, e);
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
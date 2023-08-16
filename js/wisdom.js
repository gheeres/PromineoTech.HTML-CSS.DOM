(function() {
  'use strict'
  feather.replace({ 'aria-hidden': 'true' });

  function createHTMLElement(html) {
    let template = document.createElement('template');
    template.innerHTML = html;
    return template.content.firstElementChild;
  }

  // function createAlert(quote) {
  //   let div = document.createElement('div');
  //   div.className = "alert alert-primary";
  //   div.role = "alert";
  //   div.innerHTML = quote;
  //   return div;
  // }

  const speak = document.getElementById('speak');
  const wisdom = document.querySelector('#wisdom');

  speak.addEventListener('click', (e) => {
    let quote = quotes[random(quotes.length - 1)];
    //console.log(quote);
    //let alert = createAlert(quote);
    let alert = createHTMLElement(`
      <div class="alert alert-primary" role="alert">
      ${ quote }
      </div>`
    );
    //console.log(alert);
    wisdom.appendChild(alert);
  });

  const quotes = [
    'Never let your best friends get lonely, keep disturbing them.',
    'Sometimes I wish I was an octopus, so I could slap eight people at once.',
    'If Cinderella’s shoe fit perfectly, then why did it fall off?',
    'If you’re hotter than me, then that means I’m cooler than you.',
    'My wallet is like an onion, opening it makes me cry.',
    'My goal this weekend is to move, just enough so people don’t think I’m dead.',
    'Lazy people fact #2347827309018287. You were too lazy to read that number.',
    'Friends buy you food. Best friends eat your food.',
    'Papercut: A tree’s final moment of revenge.',
    'Common sense is like deodorant, those who need it the most never use it.',
    'I don’t need a hair stylist, my pillow gives me a new hairstyle every morning.',
    'Life always offers you a second chance. It’s called tomorrow.',
    'My six pack is protected by a layer of fat.',
    'When nothing is going right, go left.',
  ];


  // ----------------------------------------------------------------------

  /**
   * Generates a random number.
   * @param {Number} max The maximum value to include.
   * @returns The random number
   */
  function random(max) {
    return Math.floor(Math.random() * max);
  }
})();
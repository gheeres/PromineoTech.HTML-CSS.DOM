(function() {
  'use strict'
  feather.replace({ 'aria-hidden': 'true' });

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

  const speakButton = document.getElementById('speak');
  //const speakButton = document.querySelectorAll('#speak')[0];
  //console.log(speakButton);
  speakButton.addEventListener('click', function(e) {
    console.log(e);
    const quote = quotes[random(quotes.length - 1)];
    console.log(quote);
    const wisdomContainer = document.getElementById('wisdom');
    //console.log(wisdomContainer);

    // const quoteElement = document.createElement('div');
    // quoteElement.innerHTML = `<div class="alert alert-primary" role="alert">
    //   ${ quote }
    // </div>`;
    const quoteElement = createHTMLElement(`<div class="alert alert-primary" role="alert">
      ${ quote }
    </div>`);

    //console.log(quoteElement);
    wisdomContainer.appendChild(quoteElement);

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
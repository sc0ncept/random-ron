const quote = document.querySelector('#quote');
const btn = document.querySelector('#get-quote');
const quotes = [];

const showQuote = function () {

  fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(response);
      }
    }).then(function (data) {

      // Course way
      if (quotes.indexOf(data[0]) > -1) {
        showQuote();
        return;
      }

      quote.textContent = data[0];
      quotes.push(data[0]);

      if (quotes.length >= 50) {
        quotes.length = 0; // quotes = []; did not work properly
      }

      // My way
      // if (quotes.length >= 50) {
      //   quotes.length = 0;
      //   showQuote();
      // } else {

      //   if (quotes.indexOf(data[0]) === -1) {
      //     quotes.push(data[0]);
      //     quote.textContent = quotes[quotes.length - 1];
      //   } else {
      //     showQuote();
      //   }
      // }

    }).catch(function (err) {
      quote.textContent = '[Something went wrong, sorry!] I have a joke for you... The government in this town is excellent, and uses your tax dollars efficiently.';
      console.warn('Something went wrong, sorry!', err);
    });

}

showQuote();

btn.addEventListener('click', showQuote, false);
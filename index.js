const quote = document.querySelector('#quote');
const btn = document.querySelector('#get-quote');

// My solution
const showQuote = function () {

  fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(response);
      }
    }).then(function (data) {
      quote.textContent = data[0];
    }).catch(function (err) {
      quote.textContent = '[Something went wrong, sorry!] I have a joke for you... The government in this town is excellent, and uses your tax dollars efficiently.';
      console.warn('Something went wrong, sorry!', err);
    });

}

showQuote();

btn.addEventListener('click', showQuote, false);
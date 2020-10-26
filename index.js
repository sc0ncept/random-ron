const quote = document.querySelector('blockquote');
const btn = document.querySelector('button');

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
      quote.textContent = data;
    }).catch(function (err) {
      console.warn('Something went wrong!', err);
    });

}

showQuote();

btn.addEventListener('click', showQuote, false);
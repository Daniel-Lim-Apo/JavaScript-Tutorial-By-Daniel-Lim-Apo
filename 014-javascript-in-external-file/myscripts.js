let counter = 0;
let res = document.querySelector("section#result");
// As variáveis declaradas aqui fora são consideradas GLOBAIS e funcionam dentro do programa inteiro

function count() {
  counter++; // it increases counter
  res.innerHTML = `<p>The counting is <mark>${counter}</mark> clicks.</p>`;
}

function reset() {
  counter = 0;
  res.innerHTML = "<p>The counting is <mark>0</mark> clicks.";
}

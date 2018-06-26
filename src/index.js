import printMe from './print.js';
import './scss/main.scss';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  // Lodash, now imported by this script
  element.innerHTML = 'Hello shit'
  element.classList.add('hello')

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}
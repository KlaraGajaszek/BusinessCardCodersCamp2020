import './style/imports.scss';
// get element from exampleButton.js

import ExampleButton from './Components/exampleButton';

const setup = () => {
  //create new instance of our button
  new ExampleButton();
};

window.addEventListener('load', setup);

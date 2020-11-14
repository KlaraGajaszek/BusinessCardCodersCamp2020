import './style/imports.scss';
import ExampleButton from './Components/exampleButton'

const setup = () => {
  new ExampleButton();
};

window.addEventListener('load', setup);

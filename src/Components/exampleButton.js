class ExampleButton {
  constructor() {
    this.render();
    //get element from DOM and then we will do click event and we will induce exampleText function
    document.querySelector('#button1').addEventListener('click', () => this.exampleText());
  }
  // create function which will render the text
  exampleText() {
    // create h1 tag which we will see in index.html
    const newh1 = document.createElement('h1');
    //get div element by id from index.html
    const component = document.querySelector('.text');
    // create child which will be newh1's child. Parent will be caomponent which we created in 12 line
    const child = component.appendChild(newh1);
    // add text to our child component
    child.innerHTML = `
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque blanditiis qui, repellat neque natus doloremque voluptates ipsum, vitae dolorum perferendis rerum dolores vero, provident ullam deleniti excepturi beatae rem! Perferendis!
        `;
  }

  render() {
    // get button from index.html by id
    const component = document.querySelector('#exampleButton');
    // create button in JS and then it will be sent to html
    component.innerHTML = `
            <button id="button1">Button</button>
        `;
  }
}

export default ExampleButton;

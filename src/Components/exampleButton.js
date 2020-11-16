class ExampleButton {
    constructor(){
        this.render();
        document.querySelector('#button1').addEventListener('click', () => this.exampleText());
    }

    exampleText(){
        const newh1 = document.createElement("h1");
        const component = document.querySelector('.text');
        const child = component.appendChild(newh1);
        child.innerHTML = `
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque blanditiis qui, repellat neque natus doloremque voluptates ipsum, vitae dolorum perferendis rerum dolores vero, provident ullam deleniti excepturi beatae rem! Perferendis!
        `
    }

    render(){
        const component = document.querySelector('#exampleButton');
        component.innerHTML = `
            <button id="button1">Button</button>
        `;
    }
}

export default ExampleButton
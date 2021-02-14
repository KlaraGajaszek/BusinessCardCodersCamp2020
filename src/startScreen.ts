class StartGame {


  constructor() {


  }

  public promoteRender() {
    const startContainer = document.getElementById('start');
    const preTittle = document.createElement('h3');
    preTittle.innerText = "CodersCamp VI"
    startContainer?.appendChild(preTittle);
    const tittle = document.createElement('h1');
    tittle.innerText = "Chess Game"
    startContainer?.appendChild(tittle);
    const startBtn = document.createElement('button');
    startBtn.textContent = "Play";
    startContainer?.appendChild(startBtn);
  }

  public startGame() {
    const startContainer = document.getElementById('start');
    const startBtn = document.querySelector('#start button')! as HTMLButtonElement;
    startBtn.addEventListener('click', () => {
      if (startContainer)
        startContainer.style.zIndex = '-1';
    })
  }



  public render() {
    this.promoteRender();
  }

}

export default StartGame;
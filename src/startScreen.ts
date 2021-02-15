class StartGame {

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

  //TODO Może z tej funkcji renderujmy new Game() po wcisnieciu start, a wywołanie tego możemy dać do main.ts

  startGame() {
    const startContainer = document.getElementById('start')! as HTMLDivElement;
    const startBtn = document.querySelector('#start button')! as HTMLButtonElement;
    startBtn.addEventListener('click', () => {
      startContainer.style.opacity = '0';
      setTimeout(() => {
        startContainer.style.zIndex = '-1';

      }, 2000);
    });
  }

  render() {
    this.promoteRender();
  }

}

export default StartGame;
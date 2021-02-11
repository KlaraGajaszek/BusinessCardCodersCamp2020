class GameOver {
  winner: string;

  constructor() {
    this.winner = "white",
      this.render
  }

  public gameOverRender() {
    const container = document.getElementById('game-over');
    const tittle = document.createElement('p');
    tittle.innerText = "GAME OVER !!!";
    container?.appendChild(tittle);
    const winner = document.createElement('p');
    winner.innerText = "Winner:   ";
    container?.appendChild(winner);
    const winnerSide = document.createElement('span');
    winnerSide.innerText = this.winner;
    winner.appendChild(winnerSide);
    const restart = document.createElement('a');
    restart.innerText = "Play again!";
    restart.setAttribute('href', 'javascript:location.reload()');
    container?.appendChild(restart);
  }

  public gameOverScreenTrigger() {
    const wrapper = document.getElementById('wrapper')! as HTMLDivElement;
    const gameOver = document.getElementById('game-over')! as HTMLDivElement;
    const whiteClock = document.querySelector('.whiteClock')! as HTMLDivElement;
    whiteClock.addEventListener('click', () => {
      wrapper.style.filter = 'blur(10px)';
      gameOver.style.zIndex = '1';
      gameOver.style.opacity = '1';

    })

  }

  public render() {
    this.gameOverRender();
  }

}

export default GameOver;
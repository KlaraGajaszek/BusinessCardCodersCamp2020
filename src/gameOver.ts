class EndGame {
  winner: string;

  constructor(winner: string) {
    this.winner = winner;
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
    wrapper.style.filter = 'brightness(0.4) blur(10px';
    gameOver.style.zIndex = '1';
    setTimeout(() => {
      gameOver.style.opacity = '1';
    }, 200);
  }


  public render() {
    this.gameOverRender();
  }

}

export default EndGame;
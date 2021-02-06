class Clock {
  public side: string;
  public seconds: number;
  public minutes: number
  public turn: string;
  public styleName: string;
  public run: any;

  constructor(side: string, minutes: number, seconds: number, styleName: string, turn: string) {
    this.side = side,
      this.minutes = minutes,
      this.seconds = seconds,
      this.render
    this.styleName = styleName,
      this.turn = turn
  }

  public clockRender() {
    const container = document.getElementById('wrapper');
    const clock = document.createElement('div');
    clock.setAttribute('class', this.styleName);
    container?.appendChild(clock);
    const clockFace = document.createElement('div');
    clockFace.classList.add('clockFace');
    clock?.appendChild(clockFace);
    const timer = document.createElement('div');
    timer.classList.add('timer');
    timer.textContent = (this.minutes <= 9 ? "0" + this.minutes : this.minutes) + ":" + (this.seconds <= 9 ? "0" + this.seconds : this.seconds);
    clock?.appendChild(timer);
  }

  countDown() {
    const timer = document.querySelector(`.${this.styleName} .timer`);
    if (this.seconds === 0) {
      this.seconds = 59;
      this.minutes--;
    } else {
      this.seconds--;
    }
    const sec = this.seconds <= 9 ? "0" + this.seconds : this.seconds;
    const min = this.minutes <= 9 ? "0" + this.minutes : this.minutes;
    if (timer !== null) timer.textContent = `${min}:${sec}`;
  };
  public startClock() {
    this.run = setInterval(this.countDown.bind(this), 1000)
  }
  public stopClock() {
    clearInterval(this.run);
  }

  public render() {
    this.clockRender();
  }

}

export default Clock;
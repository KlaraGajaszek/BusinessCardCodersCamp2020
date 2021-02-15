class Clock {
  side: string;
  seconds: number;
  minutes: number;
  styleName: string;
  interval: any;

  constructor(side: string, minutes: number, seconds: number, styleName: string) {
    this.side = side,
      this.minutes = minutes,
      this.seconds = seconds,
      this.render,
      this.styleName = styleName
  }

  public clockRender() {
    const container = document.getElementById('clock-wrapper');
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
    this.interval = setInterval(this.countDown.bind(this), 1000);
    const clock = document.querySelector(`.${this.styleName}`)! as HTMLDivElement;
    const propeller = document.querySelector(`.${this.styleName} .clockFace`)! as HTMLDivElement;
    clock.style.boxShadow = "0 0px 30px 5px rgb(46, 46, 82)";
    if (propeller !== null) {
      propeller.style.filter = 'none';
      propeller.style.animation = 'rotate 3s infinite linear';
    }
  }

  public stopClock() {
    clearInterval(this.interval);
    const clock = document.querySelector(`.${this.styleName}`)! as HTMLDivElement;
    const propeller = document.querySelector(`.${this.styleName} .clockFace`)! as HTMLDivElement;
    clock.style.boxShadow = "none";
    if (propeller !== null) {
      propeller.style.filter = "grayscale()";
      propeller.style.animation = 'rotate 3s paused linear'
    }
  }

  public render() {
    this.clockRender();
  }

}

export default Clock;
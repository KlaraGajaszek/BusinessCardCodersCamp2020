class Promo {
  constructor() {
    this.render()
  }

  promoteRender() {
    const promoContainer = document.getElementById('promoContainer');
    promoContainer?.classList.add('dark');
    const promoTittle = document.createElement('p');
    promoTittle.textContent = "What is your choice?";
    promoContainer?.appendChild(promoTittle);
    const container = document.createElement('div');
    container.classList.add('promo');
    promoContainer?.appendChild(container);
    const rook = document.createElement('div');
    rook.innerHTML = `<i class="fas fa-chess-rook white"></i>`;
    container?.appendChild(rook);
    const bishop = document.createElement('div');
    bishop.innerHTML = `<i class="fas fa-chess-bishop white"></i>`;
    container?.appendChild(bishop);
    const knight = document.createElement('div');
    knight.innerHTML = `<i class="fas fa-chess-knight white"></i>`;
    container?.appendChild(knight);
    const queen = document.createElement('div');
    queen.innerHTML = `<i class="fas fa-chess-queen white"></i>`;
    container?.appendChild(queen);

  }

  promoScreenTrigger() {
    const wrapper = document.getElementById('wrapper')! as HTMLDivElement;
    const promo = document.getElementById('promoContainer')! as HTMLDivElement;
    wrapper.style.filter = 'blur(10px)';
    promo.style.zIndex = '1';
    promo.style.opacity = '1';
  }

  promoScreenClose() {
    const wrapper = document.getElementById('wrapper')! as HTMLDivElement;
    const promo = document.getElementById('promoContainer')! as HTMLDivElement;
    wrapper.style.filter = 'none';
    promo.style.zIndex = '-1';
    promo.style.opacity = '-1';
  }

  render() {
    this.promoteRender();
  }

}

export default Promo;
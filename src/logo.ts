class Logo {

  public logoRender() {
    const container = document.getElementById('logo-wrapper');
    const pretittle = document.createElement('h3');
    pretittle.innerText = "CodersCamp VI";
    container?.appendChild(pretittle);
    const tittle = document.createElement('h1');
    tittle.innerText = "Chess Game";
    container?.appendChild(tittle);
  }

  public render() {
    this.logoRender();
  }

}

export default Logo;
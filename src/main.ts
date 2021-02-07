import Game from './Game';

export let game: Game;

const App = () => {
    game = new Game();
};

window.onload = App;

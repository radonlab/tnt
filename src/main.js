const { NES } = require('jsnes');

function getCanvas() {
  const root = document.getElementById('root');
  const canvas = document.createElement('canvas');
  root.appendChild(canvas);
}

function main() {
  const nes = new NES();

  const nextFrame = () => {
    nes.frame();
    requestAnimationFrame(nextFrame);
  };
  nextFrame();
}

main();

const { NES } = require('jsnes');

function getCanvas() {
  const root = document.getElementById('root');
  const canvas = document.createElement('canvas');
  root.appendChild(canvas);
  return canvas;
}

function main() {
  const canvas = getCanvas();
  const ctx = canvas.getContext('2d');
  const nes = new NES({
    onFrame: (frameBuffer) => {
      console.log(frameBuffer);
    },
  });

  const nextFrame = () => {
    nes.frame();
    requestAnimationFrame(nextFrame);
  };
  nextFrame();
}

main();

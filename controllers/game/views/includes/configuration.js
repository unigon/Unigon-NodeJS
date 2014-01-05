var gameConfiguration = {
  keyUp: 87,
  keyDown: 88, // was 83
  keyLeft: 65,
  keyRight: 68,
  keyUpLeft: 81,
  keyUpRight: 69,
  keyDownLeft: 90,
  keyDownRight: 67,
  keyActionPrimary: 83,
  keyCenter: 220,
  canvas: {
    width: 600,
    height: 600
  },
  player: {
    position: {
      x: 300,
      y: 300
    },
    size: {
      width: 30,
      height: 30,
      step: 30,
    },
    sprite: {      
      color: '#CCCC00',
      image: null,
    }
  }
};
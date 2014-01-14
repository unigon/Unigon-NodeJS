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
    movement:{
      speed: 15,
      acceleration: 0
    },
    sprite: {
      width:  30,
      height: 30,
      url: '/assets/sprites/player.jpg'
    },
    size: {
      width: 30,
      height: 30,
      step: 30,
    },
    color: {
      red: 255,
      green: 0,
      blue: 255,
    },
    points: {
      current: 200,
      maximum: 200
    }
  }
};
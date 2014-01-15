var gameConfiguration = {
  canvas: {
    width: 600,
    height: 600
  }
};

var playerConfiguration = {
  controls: {
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
  },
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
  color: {
    red: 255,
    green: 0,
    blue: 255,
  },
  points: {
    current: 200,
    maximum: 200
  }
};

var npcs = [
  {
    position: {
      x: 150,
      y: 450
    },
    sprite: {
      width: 30,
      height: 30,
      url: '/assets/sprites/npc.jpg'
    },
    color: {
      red: 0,
      green: 255,
      blue: 255,
    }
  },
  {
    position: {
      x: 200,
      y: 200
    },
    sprite: {
      width: 30,
      height: 30,
      url: '/assets/sprites/npc.jpg'
    },
    color: {
      red: 0,
      green: 255,
      blue: 255,
    }
  }
];

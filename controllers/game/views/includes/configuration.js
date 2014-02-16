var gameConfiguration = {
  canvas: {
    width: 512,
    height: 480
  },
  camera: {
    x: 0,
    y: 0,
    width: 512,
    height: 480,
    padding: {
      top: 128,
      bottom: 128,
      left: 128,
      right: 128,
    }
  },
  map:{
    height: 4800,
    width: 5120,
  }
};

var layersConfiguration = {
  layer_background: [
    {
      sprite_map: {
        position: {
          x: 0,
          y: 0
        },
        color: {
          red: 0,
          green: 255,
          blue: 0,
        },
        size: {
          width: 32,
          height: 32,
        },
        sprites: {
          tree: {
            width: 32,
            height: 32,
            url: '/game01/assets/tree.png',
          },
          grass: {
            width: 32,
            height: 32,
            url: '/game01/assets/grass.png',
          } 
        },
        map: [
          ['grass;160'],
          ['grass;160'],
          ['grass;160'],
          ['grass;160'],
          ['grass;160'],
          ['grass;160'],
          ['grass;160'],
          ['grass;160'],
          ['grass;160'],
          ['grass;160'],
          ['grass;160'],
          ['grass;160'],
          ['grass;160'],
          ['grass;160'],
          ['grass;160'],
          ['grass;160'],
          ['grass;160'],
          ['grass;160'],
          ['grass;160'],
          ['grass;160'],
          ['grass;160'],
          ['grass;160'],
          ['grass;160'],
          ['grass;160'],
          ['grass;160'],
          ['grass;160'],
        ]
      }      
    }
  ],
  layer_player: [
    {
      controller: {
        keyUp: 87,
        keyDown: 83, // was 83
        keyLeft: 65,
        keyRight: 68,
        keyUpLeft: 81,
        keyUpRight: 69,
        keyDownLeft: 90,
        keyDownRight: 67,
        keyActionPrimary: 88,
        keyCenter: 220,
      },
      position: {
        x: 256,
        y: 256
      },
      movement:{
        speed: 500,
        acceleration: 0
      },
      render:{
        sprite: {
          width:  32,
          height: 32,
          url: '/game01/assets/hero.png'
        },
        color: {
          red: 255,
          green: 0,
          blue: 255,
        }
      },
      points: {
        current: 200,
        maximum: 200
      }
    },
    {
      position: {
        x: 150,
        y: 300
      },
      render:{
        sprite: {
          width: 30,
          height: 30,
          url: '/game01/assets/monster.png'
        },
        color: {
          red: 0,
          green: 255,
          blue: 255,
        }
      }
    },
    {
      position: {
        x: 200,
        y: 200
      },
      render: {
        sprite: {
          width: 30,
          height: 30,
          url: '/game01/assets/monster.png'
        },
        color: {
          red: 0,
          green: 255,
          blue: 255,
        }
      }
    },
    {
      position: {
        x: 120,
        y: 260
      },
      render: {
        sprite: {
          width: 20,
          height: 20,
          url: '/game01/assets/coins.png',
          frames: {
            sequence: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            width: 44,
            height: 40,
            speed: 1/12,
          }
        },
        color: {
          red: 0,
          green: 255,
          blue: 255,
        }
      }
    },    
    {
      position: {
        x: 320,
        y: 360
      },
      render: {
        sprite: {
          width: 32,
          height: 32,
          url: '/game01/assets/tree.png'
        },
        color: {
          red: 0,
          green: 255,
          blue: 255,
        }
      }
    }  
  ]
}


module.exports = {
  create: function(gameBoardArray, PLAYER, MONSTER, HEALTH, WEAPON, DOOR, FLOOR) {
    var tileObjectArray = [];
    tileObjectArray.push(this.createPlayerTile(gameBoardArray, PLAYER, FLOOR));
    tileObjectArray.push(this.createMonsterTiles(tileObjectArray[0].gameBoardArray, MONSTER, FLOOR));
    tileObjectArray.push(this.createHealthTiles(tileObjectArray[1].gameBoardArray, HEALTH, FLOOR));
    tileObjectArray.push(this.createWeaponTiles(tileObjectArray[2].gameBoardArray, WEAPON, FLOOR));
    tileObjectArray.push(this.createDoorTile(tileObjectArray[3].gameBoardArray, DOOR, FLOOR));
    return tileObjectArray;
  },
  createPlayerTile: function(gameBoardArray, PLAYER, FLOOR) {
    var playerCreated = false;

    while(!playerCreated) {
      var x = Math.ceil(Math.random() * 98);
      var y = Math.ceil(Math.random() * 98);

      if (gameBoardArray[y][x] === FLOOR) {
        gameBoardArray[y][x] = PLAYER;
        playerCreated = true;

      }
    }

    return {
      gameBoardArray: gameBoardArray,
      x: x,
      y: y
    };
  },
  createMonsterTiles: function(gameBoardArray, MONSTER, FLOOR) {
    var monsterCount = 0;

    while( monsterCount < 7) {
      var x = Math.ceil(Math.random() * 98);
      var y = Math.ceil(Math.random() * 98);

      if (gameBoardArray[y][x] === FLOOR) {
        gameBoardArray[y][x] = MONSTER;
        monsterCount++;

      }
    }

    return {
      gameBoardArray: gameBoardArray,
      x: x,
      y: y
    };
  },
  createHealthTiles: function(gameBoardArray, HEALTH, FLOOR) {
    var healthCount = 0;

    while( healthCount < 3) {
      var x = Math.ceil(Math.random() * 98);
      var y = Math.ceil(Math.random() * 98);

      if (gameBoardArray[y][x] === FLOOR) {
        gameBoardArray[y][x] = HEALTH;
        healthCount++;

      }
    }

    return {
      gameBoardArray: gameBoardArray,
      x: x,
      y: y
    };
  },
  createWeaponTiles: function(gameBoardArray, WEAPON, FLOOR) {
    var weaponCount = 0;

    while( weaponCount < 2) {
      var x = Math.ceil(Math.random() * 98);
      var y = Math.ceil(Math.random() * 98);

      if (gameBoardArray[y][x] === FLOOR) {
        gameBoardArray[y][x] = WEAPON;
        weaponCount++;

      }
    }

    return {
      gameBoardArray: gameBoardArray,
      x: x,
      y: y
    };
  },
  createDoorTile: function(gameBoardArray, DOOR, FLOOR) {
    var doorCreated = false;

    while(!doorCreated) {
      var x = Math.ceil(Math.random() * 98);
      var y = Math.ceil(Math.random() * 98);

      if (gameBoardArray[y][x] === FLOOR) {
        gameBoardArray[y][x] = DOOR;
        doorCreated = true;

      }
    }

    return {
      gameBoardArray: gameBoardArray,
      x: x,
      y: y
    };
  }
};

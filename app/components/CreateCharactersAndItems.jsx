module.exports = {
  create: function(gameBoardArray, PLAYER, MONSTER, HEALTH, WEAPON, DOOR, FLOOR, BOSSMONSTER, monsterArray, bossMonster) {
    var tileObjectArray = [];
    // create a player tile and place them on a random coordinate. Will be in position 0 of array
    tileObjectArray.push(this.createPlayerTile(gameBoardArray, PLAYER, FLOOR));
    // create 7 monster tiles and place them on random coordinates. Will be in position 1 of array.
    tileObjectArray.push(this.createMonsterTiles(tileObjectArray[0].gameBoardArray, MONSTER, FLOOR, monsterArray));
    // create 3 health tiles and place them on random coordinates. Will be in position 2 of array.
    tileObjectArray.push(this.createHealthTiles(tileObjectArray[1].gameBoardArray, HEALTH, FLOOR));
    // create 2 weapon tiles and place them on random coordinates. Will be in position 3 of array.
    tileObjectArray.push(this.createWeaponTiles(tileObjectArray[2].gameBoardArray, WEAPON, FLOOR));
    // create a door tile and place them on a random coordinate. Will be in position 4 of array
    tileObjectArray.push(this.createDoorTile(tileObjectArray[3].gameBoardArray, DOOR, FLOOR, bossMonster));

    // if bossMonster was passed in and not undefined, push the return statement of the function onto the tileObjectArray
    if (bossMonster) {
      tileObjectArray.push(this.createBossMonsterTile(tileObjectArray[4].gameBoardArray, BOSSMONSTER, FLOOR));
    }

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
  createMonsterTiles: function(gameBoardArray, MONSTER, FLOOR, monsterArray) {
    var monsterCount = 0;
    var monsterCoordinatesArray = [];

    while( monsterCount < monsterArray.length) {
      var x = Math.ceil(Math.random() * 98);
      var y = Math.ceil(Math.random() * 98);

      if (gameBoardArray[y][x] === FLOOR) {
        gameBoardArray[y][x] = MONSTER;
        monsterCoordinatesArray.push({
          x: x,
          y: y,
          monster: monsterArray[monsterCount]
        });

        monsterCount++;
      }
    }

    return {
      gameBoardArray: gameBoardArray,
      monsterCoordinatesArray: monsterCoordinatesArray
    };
  },
  createHealthTiles: function(gameBoardArray, HEALTH, FLOOR) {
    var healthCount = 0;
    var healthArray = [];

    while( healthCount < 3) {
      var x = Math.ceil(Math.random() * 98);
      var y = Math.ceil(Math.random() * 98);

      if (gameBoardArray[y][x] === FLOOR) {
        gameBoardArray[y][x] = HEALTH;
        healthArray.push({
          x: x,
          y: y
        });
        healthCount++;

      }
    }

    return {
      gameBoardArray: gameBoardArray,
      healthArray: healthArray
    };
  },
  createWeaponTiles: function(gameBoardArray, WEAPON, FLOOR) {
    var weaponCount = 0;
    var weaponArray = [];

    while( weaponCount < 2) {
      var x = Math.ceil(Math.random() * 98);
      var y = Math.ceil(Math.random() * 98);

      if (gameBoardArray[y][x] === FLOOR) {
        gameBoardArray[y][x] = WEAPON;
        weaponArray.push({
          x: x,
          y: y
        });
        weaponCount++;

      }
    }

    return {
      gameBoardArray: gameBoardArray,
      weaponArray: weaponArray
    };
  },
  createDoorTile: function(gameBoardArray, DOOR, FLOOR, bossMonster) {
    var doorCreated = false;

    // if bossMonster was passed in, which is in dungeonLevel 4, do not render a door
    if (bossMonster) {
      doorCreated = true;
    }

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
  },
  createBossMonsterTile: function(gameBoardArray, BOSSMONSTER, FLOOR) {
    var bossMonsterCreated = false;

    while(!bossMonsterCreated) {
      var x = Math.ceil(Math.random() * 98);
      var y = Math.ceil(Math.random() * 98);

      if (gameBoardArray[y][x] === FLOOR) {
        gameBoardArray[y][x] = BOSSMONSTER;
        bossMonsterCreated = true;

      }
    }

    return {
      gameBoardArray: gameBoardArray,
      x: x,
      y: y
    };
  }
};

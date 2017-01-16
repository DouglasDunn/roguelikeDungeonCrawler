module.exports = {
  move: function(keyCode, tileObjectArray, FLOOR, PLAYER, WALL, MONSTER, HEALTH, WEAPON, DOOR, BOSSMONSTER, player, bossMonster) {
    if (keyCode === 37) {

      // if tile to the left is a wall return from the function
      if (tileObjectArray[4].gameBoardArray[tileObjectArray[0].y][tileObjectArray[0].x - 1] === WALL) {
        return tileObjectArray;
      // if tile to the left is a monster
      } else if (tileObjectArray[4].gameBoardArray[tileObjectArray[0].y][tileObjectArray[0].x - 1] === MONSTER) {
        console.log("monster");

        // iterate through the monter array to see which monster is on the left
        for (var i = 0; i < 7; i++) {

          // if the right monster is found with the correct coordinates
          if (tileObjectArray[1].monsterCoordinatesArray[i].x === tileObjectArray[0].x - 1 &&  tileObjectArray[1].monsterCoordinatesArray[i].y === tileObjectArray[0].y) {

            // decrease player and monster's health by each other's attack strength
            player.decreaseHealth(tileObjectArray[1].monsterCoordinatesArray[i].monster)
            tileObjectArray[1].monsterCoordinatesArray[i].monster.decreaseHealth(player);

            // if player dies, push the string reset onto the tileObjectArray
            if (player.health <= 0) {
              tileObjectArray.push("resetLose");
              return tileObjectArray;

            // else if monster's health is still greater than 0, return from the function
            } else if (tileObjectArray[1].monsterCoordinatesArray[i].monster.health > 0) {
              console.log("monster health: ", tileObjectArray[1].monsterCoordinatesArray[i].monster.health);
              return tileObjectArray;

            // else if monster is killed, decrease the player's experienceLeft
            } else {
              player.decreaseExperienceLeft();

              // if player levels up, reset experienceLeft to 100, increment the player's level, increase health and increase attack
              if (player.experienceLeft === 0) {
                player.resetExperienceLeft();
                player.incrementLevel();
                player.increaseHealth();
                player.increaseAttack();
              }
            }
          }
        }

      } else if (tileObjectArray[4].gameBoardArray[tileObjectArray[0].y][tileObjectArray[0].x - 1] === HEALTH) {
        console.log("health");
        player.increaseHealth();
      } else if (tileObjectArray[4].gameBoardArray[tileObjectArray[0].y][tileObjectArray[0].x - 1] === WEAPON) {
        console.log("weapon");
        player.increaseAttack();
        // player goes through a door, push the string nextDungeon onto the tileObjectArray
      } else if (tileObjectArray[4].gameBoardArray[tileObjectArray[0].y][tileObjectArray[0].x - 1] === DOOR) {
        console.log("door");
        tileObjectArray.push("nextDungeon");
        return tileObjectArray;
      } else if (tileObjectArray[4].gameBoardArray[tileObjectArray[0].y][tileObjectArray[0].x - 1] === BOSSMONSTER) {
        console.log("BOSSMONSTER");
        player.decreaseHealth(bossMonster)
        bossMonster.decreaseHealth(player);

        // if player dies, push the string reset onto the tileObjectArray
        if (player.health <= 0) {
          tileObjectArray.push("resetLose");
          return tileObjectArray;

        // else if bossMonster's health is still greater than 0, return from the function
        } else if (bossMonster.health > 0) {
          console.log("monster health: ", bossMonster.health);
          console.log(tileObjectArray);
          return tileObjectArray;

        // else you win the game!!! reset to the beginning
        } else {
          console.log("You win!!!");
          tileObjectArray.push("resetWin");
          console.log(tileObjectArray);
          return tileObjectArray;
        }
      }

      tileObjectArray[4].gameBoardArray[tileObjectArray[0].y][tileObjectArray[0].x - 1] = PLAYER;
      tileObjectArray[4].gameBoardArray[tileObjectArray[0].y][tileObjectArray[0].x] = FLOOR;
      tileObjectArray[0].x -= 1;
      return tileObjectArray;

    } else if (keyCode === 38) {

      // if tile on top is a wall return from the function
      if (tileObjectArray[4].gameBoardArray[tileObjectArray[0].y - 1][tileObjectArray[0].x] === WALL) {
        return tileObjectArray;
      } else if (tileObjectArray[4].gameBoardArray[tileObjectArray[0].y - 1][tileObjectArray[0].x] === MONSTER) {
        console.log("monster");

        // iterate through the monter array to see which monster is on the left
        for (var i = 0; i < 7; i++) {

          // if the right monster is found with the correct coordinates
          if (tileObjectArray[1].monsterCoordinatesArray[i].x === tileObjectArray[0].x &&  tileObjectArray[1].monsterCoordinatesArray[i].y === tileObjectArray[0].y - 1) {

            // decrease player and monster's health by each other's attack strength
            player.decreaseHealth(tileObjectArray[1].monsterCoordinatesArray[i].monster)
            tileObjectArray[1].monsterCoordinatesArray[i].monster.decreaseHealth(player);

            // if player dies, push the string reset onto the tileObjectArray
            if (player.health <= 0) {
              tileObjectArray.push("resetLose");
              return tileObjectArray;

            // else if monster's health is still greater than 0, return from the function
            } else if (tileObjectArray[1].monsterCoordinatesArray[i].monster.health > 0) {
              console.log("monster health: ", tileObjectArray[1].monsterCoordinatesArray[i].monster.health);
              return tileObjectArray;
            // else if monster is killed, decrease the player's experienceLeft
            } else {
              player.decreaseExperienceLeft();

              // if player levels up, reset experienceLeft to 100, increment the player's level, increase health and increase attack
              if (player.experienceLeft === 0) {
                player.resetExperienceLeft();
                player.incrementLevel();
                player.increaseHealth();
                player.increaseAttack();
              }
            }
          }
        }

      } else if (tileObjectArray[4].gameBoardArray[tileObjectArray[0].y - 1][tileObjectArray[0].x] === HEALTH) {
        console.log("health");
        player.increaseHealth();
      } else if (tileObjectArray[4].gameBoardArray[tileObjectArray[0].y - 1][tileObjectArray[0].x] === WEAPON) {
        console.log("weapon");
        player.increaseAttack();
        // player goes through a door, push the string nextDungeon onto the tileObjectArray
      } else if (tileObjectArray[4].gameBoardArray[tileObjectArray[0].y - 1][tileObjectArray[0].x] === DOOR) {
        console.log("door");
        tileObjectArray.push("nextDungeon");
        return tileObjectArray;
      } else if (tileObjectArray[4].gameBoardArray[tileObjectArray[0].y - 1][tileObjectArray[0].x] === BOSSMONSTER) {
        console.log("BOSSMONSTER");
        player.decreaseHealth(bossMonster)
        bossMonster.decreaseHealth(player);

        // if player dies, push the string reset onto the tileObjectArray
        if (player.health <= 0) {
          tileObjectArray.push("resetLose");
          return tileObjectArray;

        // else if bossMonster's health is still greater than 0, return from the function
        } else if (bossMonster.health > 0) {
          console.log("monster health: ", bossMonster.health);
          console.log(tileObjectArray);
          return tileObjectArray;

        // else you win the game!!! reset to the beginning
        } else {
          console.log("You win!!!");
          tileObjectArray.push("resetWin");
          console.log(tileObjectArray);
          return tileObjectArray;
        }
      }

      tileObjectArray[4].gameBoardArray[tileObjectArray[0].y - 1][tileObjectArray[0].x] = PLAYER;
      tileObjectArray[4].gameBoardArray[tileObjectArray[0].y][tileObjectArray[0].x] = FLOOR;
      tileObjectArray[0].y -= 1;
      return tileObjectArray;

    } else if (keyCode === 39) {

      // if tile to the right is a wall return from the function
      if (tileObjectArray[4].gameBoardArray[tileObjectArray[0].y][tileObjectArray[0].x + 1] === WALL) {
        return tileObjectArray;
      } else if (tileObjectArray[4].gameBoardArray[tileObjectArray[0].y][tileObjectArray[0].x + 1] === MONSTER) {
        console.log("monster");

        // iterate through the monter array to see which monster is on the left
        for (var i = 0; i < 7; i++) {

          // if the right monster is found with the correct coordinates
          if (tileObjectArray[1].monsterCoordinatesArray[i].x === tileObjectArray[0].x + 1 &&  tileObjectArray[1].monsterCoordinatesArray[i].y === tileObjectArray[0].y) {

            // decrease player and monster's health by each other's attack strength
            player.decreaseHealth(tileObjectArray[1].monsterCoordinatesArray[i].monster)
            tileObjectArray[1].monsterCoordinatesArray[i].monster.decreaseHealth(player);

            // if player dies, push the string reset onto the tileObjectArray
            if (player.health <= 0) {
              tileObjectArray.push("resetLose");
              return tileObjectArray;

            // else if monster's health is still greater than 0, return from the function
            } else if (tileObjectArray[1].monsterCoordinatesArray[i].monster.health > 0) {
              console.log("monster health: ", tileObjectArray[1].monsterCoordinatesArray[i].monster.health);
              return tileObjectArray;
            // else if monster is killed, decrease the player's experienceLeft
            } else {
              player.decreaseExperienceLeft();

              // if player levels up, reset experienceLeft to 100, increment the player's level, increase health and increase attack
              if (player.experienceLeft === 0) {
                player.resetExperienceLeft();
                player.incrementLevel();
                player.increaseHealth();
                player.increaseAttack();
              }
            }
          }
        }

      } else if (tileObjectArray[4].gameBoardArray[tileObjectArray[0].y][tileObjectArray[0].x + 1] === HEALTH) {
        console.log("health");
        player.increaseHealth();
      } else if (tileObjectArray[4].gameBoardArray[tileObjectArray[0].y][tileObjectArray[0].x + 1] === WEAPON) {
        console.log("weapon");
        player.increaseAttack();
        // player goes through a door, push the string nextDungeon onto the tileObjectArray
      } else if (tileObjectArray[4].gameBoardArray[tileObjectArray[0].y][tileObjectArray[0].x + 1] === DOOR) {
        console.log("door");
        tileObjectArray.push("nextDungeon");
        return tileObjectArray;
      } else if (tileObjectArray[4].gameBoardArray[tileObjectArray[0].y][tileObjectArray[0].x + 1] === BOSSMONSTER) {
        console.log("BOSSMONSTER");
        player.decreaseHealth(bossMonster)
        bossMonster.decreaseHealth(player);

        // if player dies, push the string reset onto the tileObjectArray
        if (player.health <= 0) {
          tileObjectArray.push("resetLose");
          return tileObjectArray;

        // else if bossMonster's health is still greater than 0, return from the function
        } else if (bossMonster.health > 0) {
          console.log("monster health: ", bossMonster.health);
          console.log(tileObjectArray);
          return tileObjectArray;

        // else you win the game!!! reset to the beginning
        } else {
          console.log("You win!!!");
          tileObjectArray.push("resetWin");
          console.log(tileObjectArray);
          return tileObjectArray;
        }
      }

      tileObjectArray[4].gameBoardArray[tileObjectArray[0].y][tileObjectArray[0].x + 1] = PLAYER;
      tileObjectArray[4].gameBoardArray[tileObjectArray[0].y][tileObjectArray[0].x] = FLOOR;
      tileObjectArray[0].x += 1;
      return tileObjectArray;

    } else if (keyCode === 40) {

      // if tile on the bottom is a wall return from the function
      if (tileObjectArray[4].gameBoardArray[tileObjectArray[0].y + 1][tileObjectArray[0].x] === WALL) {
        return tileObjectArray;
      } else if (tileObjectArray[4].gameBoardArray[tileObjectArray[0].y + 1][tileObjectArray[0].x] === MONSTER) {
        console.log("monster");

        // iterate through the monter array to see which monster is on the left
        for (var i = 0; i < 7; i++) {

          // if the right monster is found with the correct coordinates
          if (tileObjectArray[1].monsterCoordinatesArray[i].x === tileObjectArray[0].x &&  tileObjectArray[1].monsterCoordinatesArray[i].y === tileObjectArray[0].y + 1) {

            // decrease player and monster's health by each other's attack strength
            player.decreaseHealth(tileObjectArray[1].monsterCoordinatesArray[i].monster)
            tileObjectArray[1].monsterCoordinatesArray[i].monster.decreaseHealth(player);

            // if player dies, push the string reset onto the tileObjectArray
            if (player.health <= 0) {
              tileObjectArray.push("resetLose");
              return tileObjectArray;

            // else if monster's health is still greater than 0, return from the function
            } else if (tileObjectArray[1].monsterCoordinatesArray[i].monster.health > 0) {
              console.log("monster health: ", tileObjectArray[1].monsterCoordinatesArray[i].monster.health);
              return tileObjectArray;
            // else if monster is killed, decrease the player's experienceLeft
            } else {
              player.decreaseExperienceLeft();

              // if player levels up, reset experienceLeft to 100, increment the player's level, increase health and increase attack
              if (player.experienceLeft === 0) {
                player.resetExperienceLeft();
                player.incrementLevel();
                player.increaseHealth();
                player.increaseAttack();
              }
            }
          }
        }

      } else if (tileObjectArray[4].gameBoardArray[tileObjectArray[0].y + 1][tileObjectArray[0].x] === HEALTH) {
        console.log("health");
        player.increaseHealth();
      } else if (tileObjectArray[4].gameBoardArray[tileObjectArray[0].y + 1][tileObjectArray[0].x] === WEAPON) {
        console.log("weapon");
        player.increaseAttack();
        // player goes through a door, push the string nextDungeon onto the tileObjectArray
      } else if (tileObjectArray[4].gameBoardArray[tileObjectArray[0].y + 1][tileObjectArray[0].x] === DOOR) {
        console.log("door");
        tileObjectArray.push("nextDungeon");
        return tileObjectArray;
      } else if (tileObjectArray[4].gameBoardArray[tileObjectArray[0].y + 1][tileObjectArray[0].x] === BOSSMONSTER) {
        console.log("BOSSMONSTER");
        player.decreaseHealth(bossMonster)
        bossMonster.decreaseHealth(player);

        // if player dies, push the string reset onto the tileObjectArray
        if (player.health <= 0) {
          tileObjectArray.push("resetLose");
          return tileObjectArray;

        // else if bossMonster's health is still greater than 0, return from the function
        } else if (bossMonster.health > 0) {
          console.log("monster health: ", bossMonster.health);
          console.log(tileObjectArray);
          return tileObjectArray;

        // else you win the game!!! reset to the beginning
        } else {
          console.log("You win!!!");
          tileObjectArray.push("resetWin");
          console.log(tileObjectArray);
          return tileObjectArray;
        }
      }

      tileObjectArray[4].gameBoardArray[tileObjectArray[0].y + 1][tileObjectArray[0].x] = PLAYER;
      tileObjectArray[4].gameBoardArray[tileObjectArray[0].y][tileObjectArray[0].x] = FLOOR;
      tileObjectArray[0].y += 1;
      return tileObjectArray;

    } else {
      return tileObjectArray;
    }
  }
};

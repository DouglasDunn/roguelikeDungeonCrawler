module.exports = {
  move: function(keyCode, tileObjectArray, FLOOR, PLAYER, WALL) {
    if (keyCode === 37) {
      console.log("left");
      console.log(tileObjectArray);

      if (tileObjectArray[4].gameBoardArray[tileObjectArray[0].y][tileObjectArray[0].x - 1] === WALL) {
        return tileObjectArray;
      }

      tileObjectArray[4].gameBoardArray[tileObjectArray[0].y][tileObjectArray[0].x - 1] = PLAYER;
      tileObjectArray[4].gameBoardArray[tileObjectArray[0].y][tileObjectArray[0].x] = FLOOR;
      tileObjectArray[0].x -= 1;
      return tileObjectArray;

    } else if (keyCode === 38) {
      console.log("up");
      console.log(tileObjectArray);

      if (tileObjectArray[4].gameBoardArray[tileObjectArray[0].y - 1][tileObjectArray[0].x] === WALL) {
        return tileObjectArray;
      }

      tileObjectArray[4].gameBoardArray[tileObjectArray[0].y - 1][tileObjectArray[0].x] = PLAYER;
      tileObjectArray[4].gameBoardArray[tileObjectArray[0].y][tileObjectArray[0].x] = FLOOR;
      tileObjectArray[0].y -= 1;
      return tileObjectArray;

    } else if (keyCode === 39) {
      console.log("right");
      console.log(tileObjectArray);

      if (tileObjectArray[4].gameBoardArray[tileObjectArray[0].y][tileObjectArray[0].x + 1] === WALL) {
        return tileObjectArray;
      }

      tileObjectArray[4].gameBoardArray[tileObjectArray[0].y][tileObjectArray[0].x + 1] = PLAYER;
      tileObjectArray[4].gameBoardArray[tileObjectArray[0].y][tileObjectArray[0].x] = FLOOR;
      tileObjectArray[0].x += 1;
      return tileObjectArray;

    } else if (keyCode === 40) {
      console.log("down");
      console.log(tileObjectArray);

      if (tileObjectArray[4].gameBoardArray[tileObjectArray[0].y + 1][tileObjectArray[0].x] === WALL) {
        return tileObjectArray;
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

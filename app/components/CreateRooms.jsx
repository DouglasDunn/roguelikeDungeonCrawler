module.exports = {
  create: function(gameBoardArray, WALL, FLOOR, PLAYER) {
    var roomWidth,
        roomHeight,
        floorPath,
        roomCreated,
        halfWidthOfRoom,
        halfHeightOfRoom;

    //create 20 rooms
    for (var j = 0; j < 20; j++) {
      floorPath = "";
      roomCreated = false;

      while (!roomCreated) {
        var x = Math.ceil(Math.random() * 98);
        var y = Math.ceil(Math.random() * 98);

        // if random coordinate is a wall tile and one of it's neighbors are floor, create a room if theres enough space on the map for one
        if ( gameBoardArray[y][x] === WALL) {

          if (gameBoardArray[y + 1][x] === FLOOR) {
            floorPath = "top";

          } else if (gameBoardArray[y - 1][x] === FLOOR) {
            floorPath = "bottom";

          } else if (gameBoardArray[y][x + 1] === FLOOR) {
            floorPath = "left";

          } else if (gameBoardArray[y][x - 1] === FLOOR) {
            floorPath = "right";

          }

          // if one of the chosen wall's neighbors is a floor tile
          if (floorPath !== "") {

            //generate a random width and height for the room
            roomWidth = (Math.ceil(Math.random() * 10)) + 5;
            roomHeight = (Math.ceil(Math.random() * 10)) + 5;
            halfWidthOfRoom = Math.floor(roomWidth / 2);
            halfHeightOfRoom = Math.floor(roomHeight / 2);

            if (floorPath === "top") {
              roomCreated = true;
              gameBoardArray[y][x] = FLOOR;

              for (var k = 1; k <= roomHeight; k++) {

                for (var l = 1; l <= roomWidth; l++) {

                  // if room is going to be created outside of the map boundaries, break out of this loop
                  if ((y - k) <= 0 || (x - halfWidthOfRoom + l) <= 0 || (x - halfWidthOfRoom + l) >= 99) {
                    break;

                  }
                  gameBoardArray[y - k][x - halfWidthOfRoom + l] = FLOOR;

                }
              }
            } else if(floorPath === "bottom") {
              roomCreated = true;
              gameBoardArray[y][x] = FLOOR;

              for (var k = 1; k <= roomHeight; k++) {

                for (var l = 1; l <= roomWidth; l++) {

                  // if room is going to be created outside of the map boundaries, break out of this loop
                  if ((y + k) >= 99 || (x - halfWidthOfRoom + l) <= 0 || (x - halfWidthOfRoom + l) >= 99) {
                    break;

                  }
                  gameBoardArray[y + k][x - halfWidthOfRoom + l] = FLOOR;

                }
              }
            } else if(floorPath === "left") {
              roomCreated = true;
              gameBoardArray[y][x] = FLOOR;

              for (var k = 1; k <= roomHeight; k++) {

                for (var l = 1; l <= roomWidth; l++) {

                  // if room is going to be created outside of the map boundaries, break out of this loop
                  if ((x - l) <= 0 || (y - halfHeightOfRoom + k) <= 0 || (y - halfHeightOfRoom + k) >= 99) {
                    break;

                  }
                  gameBoardArray[y - halfHeightOfRoom + k][x - l] = FLOOR;

                }
              }
            } else if (floorPath === "right") {
              roomCreated = true;
              gameBoardArray[y][x] = FLOOR;

              for (var k = 1; k <= roomHeight; k++) {

                for (var l = 1; l <= roomWidth; l++) {

                  // if room is going to be created outside of the map boundaries, break out of this loop
                  if ((x + l) >= 99 || (y - halfHeightOfRoom + k) <= 0 || (y - halfHeightOfRoom + k) >= 99) {
                    break;

                  }
                  gameBoardArray[y - halfHeightOfRoom + k][x + l] = FLOOR;

                }
              }
            }
          }
        }
      }
    }
    return gameBoardArray;
  }
};

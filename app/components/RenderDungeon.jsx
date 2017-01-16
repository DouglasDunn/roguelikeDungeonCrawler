var React = require("react");

var RenderGameBoard = React.createClass({
  createColumns: function(i) {
    var {WIDTH, gameBoardArray} = this.props;
    var columns = [];

    for (var j = 0; j < WIDTH; j++) {
      if (gameBoardArray[i][j] === 0) {
        columns.push(<div className="wall"></div>);
      } else if (gameBoardArray[i][j] === 1) {
        columns.push(<div className="floor"></div>);
      } else if (gameBoardArray[i][j] === 2) {
        columns.push(<div className="player"></div>);
      } else if (gameBoardArray[i][j] === 3) {
        columns.push(<div className="monster"></div>);
      } else if (gameBoardArray[i][j] === 4) {
        columns.push(<div className="health"></div>);
      } else if (gameBoardArray[i][j] === 5) {
        columns.push(<div className="weapon"></div>);
      } else if (gameBoardArray[i][j] === 6) {
        columns.push(<div className="door"></div>);
      } else if (gameBoardArray[i][j] === 7) {
        columns.push(<div className="bossMonster"></div>);
      }
    }

    return columns;
  },
  createDarkColumns: function(i, playerXCoordinate, playerYCoordinate) {
    var {WIDTH, gameBoardArray} = this.props;
    var columns = [];
    var xRange,
        yRange = playerYCoordinate - i;

    // for (var k = 0; k < gameBoardArray.length; k++) {
    //
    //   for (var l = 0; l < gameBoardArray[k].length; l++) {
    //
    //     if (gameBoardArray[k][l] === 2) {
    //       console.log(k, l);
    //     }
    //   }
    // }

    for (var j = 0; j < WIDTH; j++) {
      xRange = playerXCoordinate - j;

      if ( (xRange > -5 && xRange < 5) && (yRange > -5 && yRange < 5) ) {

        if (gameBoardArray[i][j] === 0) {
          columns.push(<div className="wall"></div>);
        } else if (gameBoardArray[i][j] === 1) {
          columns.push(<div className="floor"></div>);
        } else if (gameBoardArray[i][j] === 2) {
          columns.push(<div className="player"></div>);
        } else if (gameBoardArray[i][j] === 3) {
          columns.push(<div className="monster"></div>);
        } else if (gameBoardArray[i][j] === 4) {
          columns.push(<div className="health"></div>);
        } else if (gameBoardArray[i][j] === 5) {
          columns.push(<div className="weapon"></div>);
        } else if (gameBoardArray[i][j] === 6) {
          columns.push(<div className="door"></div>);
        } else if (gameBoardArray[i][j] === 7) {
          columns.push(<div className="bossMonster"></div>);
        }
      } else {
        columns.push(<div className="darkness"></div>);
      }
    }

    return columns;
  },
  createRows: function() {
    var {HEIGHT} = this.props;
    var rows = [];

    for (var i = 0; i < HEIGHT; i++) {
      rows.push(<div className="row">{this.createColumns(i)}</div>);
    }

    return rows;
  },
  createDarkRows: function(playerXCoordinate, playerYCoordinate) {
    var {HEIGHT} = this.props;
    var rows = [];

    for (var i = 0; i < HEIGHT; i++) {
      rows.push(<div className="row">{this.createDarkColumns(i, playerXCoordinate, playerYCoordinate)}</div>);
    }

    return rows;
  },
  render: function() {
    var {toggleDarkness} = this.props;

    if (!toggleDarkness) {
      var gameBoard = this.createRows();

      return (
        <div className="gameBoard">
          {gameBoard}
        </div>
      );
    } else {
      var {playerXCoordinate, playerYCoordinate} = this.props;
      var darkGameBoard = this.createDarkRows(playerXCoordinate, playerYCoordinate);

      console.log("player coordinates: ", playerXCoordinate, playerYCoordinate);

      return (
        <div className="gameBoard">
          {darkGameBoard}
        </div>
      );
    }
  }
});

module.exports = RenderGameBoard;

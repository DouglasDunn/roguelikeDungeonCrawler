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
  render: function() {
    var gameBoard = this.createRows();

    return (
      <div className="gameBoard">
        {gameBoard}
      </div>
    );
  }
});

module.exports = RenderGameBoard;

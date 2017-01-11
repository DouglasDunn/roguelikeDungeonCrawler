var React = require("react");
var RenderDungeon = require("RenderDungeon");
var CreateRooms = require("CreateRooms");
var CreateCharactersAndItems = require("CreateCharactersAndItems");
var MovePlayer = require("MovePlayer");

var Main = React.createClass({
  getDefaultProps: function() {
    return {
      WIDTH: 100,
      HEIGHT: 100,
      WALL: 0,
      FLOOR: 1,
      PLAYER: 2,
      MONSTER: 3,
      HEALTH: 4,
      WEAPON: 5,
      DOOR: 6
    };
  },
  getInitialState: function() {
    return {
      tileObjectArray: this.createDungeon()
    };
  },
  componentDidMount: function() {
    $(document.body).on("keydown", this.handleKeyDown);
  },
  handleKeyDown: function(e) {
    // e.preventDefault();
    var {FLOOR, PLAYER, WALL} = this.props;
    var tileObjectArray = this.state.tileObjectArray;
    // console.log(e.keyCode);
    tileObjectArray = MovePlayer.move(e.keyCode, tileObjectArray, FLOOR, PLAYER, WALL);

    this.setState({
      tileObjectArray: tileObjectArray
    });
  },
  createDungeon: function() {
    var {WIDTH, HEIGHT, WALL, FLOOR, PLAYER, MONSTER, HEALTH, WEAPON, DOOR} = this.props;
    var gameBoardArray = [],
        x1 = 45,
        y1 = 45,
        x2 = 54,
        y2 = 54,
        tileObjectArray;

    // Create a dungeon with one room
    for (var i = 0; i < HEIGHT; i++) {
      gameBoardArray.push([]);

      for (var j = 0; j < WIDTH; j++) {

        if ( i >= y1 && i <= y2 && j >= x1 && j <= x2 ) {
          gameBoardArray[i].push(FLOOR);

        } else {
          gameBoardArray[i].push(WALL);

        }
      }
    }

    // generate 20 more rooms
    gameBoardArray = CreateRooms.create(gameBoardArray, WALL, FLOOR);
    tileObjectArray = CreateCharactersAndItems.create(gameBoardArray, PLAYER, MONSTER, HEALTH, WEAPON, DOOR, FLOOR);
    return tileObjectArray;

  },
  render: function() {
    var {WIDTH, HEIGHT} = this.props;
    var gameBoardArray = this.state.tileObjectArray[4].gameBoardArray;

    return (
      <div>
        <RenderDungeon WIDTH={WIDTH} HEIGHT={HEIGHT} gameBoardArray={gameBoardArray}/>
      </div>
    );
  }
});

module.exports = Main;

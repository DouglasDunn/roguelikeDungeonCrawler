var React = require("react");
var RenderDungeon = require("RenderDungeon");
var CreateRooms = require("CreateRooms");
var CreateCharactersAndItems = require("CreateCharactersAndItems");
var MovePlayer = require("MovePlayer");
var Player = require("Player");
var Monster = require("Monster");
var BossMonster = require("BossMonster");
var GameData = require("GameData");
var Modal = require("Modal");

var Main = React.createClass({
  getDefaultProps: function() {
    return {
      dungeonLevel: 1,
      boolModal: false,
      winnerModal: false,
      loserModal: false,
      toggleDarkness: true,
      WIDTH: 100,
      HEIGHT: 100,
      WALL: 0,
      FLOOR: 1,
      PLAYER: 2,
      MONSTER: 3,
      HEALTH: 4,
      WEAPON: 5,
      DOOR: 6,
      BOSSMONSTER: 7
    };
  },
  getInitialState: function() {
    return this.createDungeonAndCharacters();
  },
  // set an event listener for when the user presses or holds a key down
  componentDidMount: function() {
    $(document.body).on("keydown", this.handleKeyDown);
  },
  // when user presses or holds the key down, handle the player's actions when they try to move to a new tile
  handleKeyDown: function(e) {
    e.preventDefault();
    var {FLOOR, PLAYER, WALL, MONSTER, HEALTH, WEAPON, DOOR, BOSSMONSTER} = this.props;
    var {tileObjectArray, player, bossMonster} = this.state;
    tileObjectArray = MovePlayer.move(e.keyCode, tileObjectArray, FLOOR, PLAYER, WALL, MONSTER, HEALTH, WEAPON, DOOR, BOSSMONSTER, player, bossMonster);

    // if tileObjectArray's 5th or 6th element is "resetWin", reset the whole game
    if (tileObjectArray[5] === "resetWin" || tileObjectArray[6] === "resetWin") {
      this.setState(this.createDungeonAndCharacters("resetWin"));

    // else if tileObjectArray's 5th or 6th element is "resetLose", reset the whole game
    } else if(tileObjectArray[5] === "resetLose" || tileObjectArray[6] === "resetLose") {
      this.setState(this.createDungeonAndCharacters("resetLose"));

    // else if tileObjectArray's 6th element is "nextDungeon", go on to the next dungeon
    } else if (tileObjectArray[5] === "nextDungeon") {
      this.setState(this.createDungeonAndCharacters("nextDungeon", player));

    // else continue with the game
    } else {
      this.setState({
        tileObjectArray: tileObjectArray,
        player: player,
        bossMonster: bossMonster
      });
    }
  },
  createDungeonAndCharacters: function(newDungeon, player) {
    if (newDungeon === "resetWin") {
      var {dungeonLevel, boolModal, winnerModal, loserModal} = this.state;
      dungeonLevel = 1;
      boolModal = true;
      winnerModal = true;
      loserModal = false;

    } else if (newDungeon === "resetLose") {
      var {dungeonLevel, boolModal, loserModal, winnerModal} = this.state;
      dungeonLevel = 1;
      boolModal = true;
      loserModal = true;
      winnerModal = false;

    } else if(newDungeon === "nextDungeon") {
      var {dungeonLevel} = this.state;
      dungeonLevel++;

    } else {
      var {dungeonLevel, boolModal, winnerModal, loserModal, toggleDarkness} = this.props;

    }

    var {WIDTH, HEIGHT, WALL, FLOOR, PLAYER, MONSTER, HEALTH, WEAPON, DOOR, BOSSMONSTER} = this.props;
    var gameBoardArray = [],
        x1 = 45,
        y1 = 45,
        x2 = 54,
        y2 = 54,
        tileObjectArray,
        bossMonster;

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

    var monsterArray = [];

    for (var i = 0; i < 7; i++) {
      monsterArray.push(new Monster(dungeonLevel));
    }

    // if (dungeonLevel === 4) {
    //   monsterArray.push(new BossMonster());
    // }

    // if dungeonLevel equals to 4, create a boss monster
    if (dungeonLevel === 4) {
      bossMonster = new BossMonster();
    }

    // generate 20 more rooms
    gameBoardArray = CreateRooms.create(gameBoardArray, WALL, FLOOR);
    //generate the player, monster, health, weapon, and door tiles in random coordinates
    tileObjectArray = CreateCharactersAndItems.create(gameBoardArray, PLAYER, MONSTER, HEALTH, WEAPON, DOOR, FLOOR, BOSSMONSTER, monsterArray, bossMonster);

    // if dungeon level is 1, create a new instance of the player class
    if (dungeonLevel === 1) {
      var player = new Player();
    }

    return {
      tileObjectArray: tileObjectArray,
      player: player,
      dungeonLevel: dungeonLevel,
      bossMonster: bossMonster,
      toggleDarkness: toggleDarkness,
      boolModal: boolModal,
      winnerModal: winnerModal,
      loserModal: loserModal
    };

  },
  handleClick: function() {
    var {toggleDarkness} = this.state;
    this.setState({
      toggleDarkness: !toggleDarkness
    });
    console.log(toggleDarkness);
  },
  handleModalClick: function() {
    this.setState({
      boolModal: false,
      winnerModal: false,
      loserModal: false
    });
  },
  render: function() {
    var {WIDTH, HEIGHT} = this.props;
    var gameBoardArray = this.state.tileObjectArray[4].gameBoardArray;
    var {player, toggleDarkness, dungeonLevel, boolModal, winnerModal, loserModal} = this.state;
    var playerXCoordinate = this.state.tileObjectArray[0].x;
    var playerYCoordinate = this.state.tileObjectArray[0].y;

    console.log("health: ", player.health);
    console.log("attack: ", player.attack);
    console.log("experience left: ", player.experienceLeft);

    return (
      <div>
        <h3>React Roguelike Dungeon Crawler</h3>
        <GameData handleClick={this.handleClick} player={player} dungeonLevel={dungeonLevel}/>
        <RenderDungeon WIDTH={WIDTH} HEIGHT={HEIGHT} gameBoardArray={gameBoardArray} playerXCoordinate={playerXCoordinate} playerYCoordinate={playerYCoordinate} toggleDarkness={toggleDarkness}/>
        <Modal boolModal={boolModal} winnerModal={winnerModal} loserModal={loserModal} handleModalClick={this.handleModalClick}/>
      </div>
    );
  }
});

module.exports = Main;

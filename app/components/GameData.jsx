var React = require("react");

var GameData = React.createClass({
  buttonClicked: function() {
    this.props.handleClick();
  },
  buttonDown: function() {
    this.refs.toggle.style.background = "#ffb4d9";
  },
  buttonUp: function() {
    this.refs.toggle.style.background = "white";
  },
  render: function() {
    var {health, attack, level, experienceLeft} = this.props.player;
    var {dungeonLevel} = this.props;

    return (
      <div id="gameData">
        <p>Health: {health}</p>
        <p>Attack: {attack}-{attack + 5}</p>
        <p>Level: {level}</p>
        <p>Experience Left: {experienceLeft}</p>
        <p>Dungeon Level: {dungeonLevel}</p>
        <button ref="toggle" onMouseDown={this.buttonDown} onMouseUp={this.buttonUp} onClick={this.buttonClicked}>Toggle Darkness</button>
      </div>
    );
  }
});

module.exports = GameData;

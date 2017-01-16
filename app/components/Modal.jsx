var React = require("react");

var Modal = React.createClass({
  buttonClicked: function() {
    this.props.handleModalClick();
  },
  render: function() {
    var {boolModal, winnerModal, loserModal} = this.props;

    if (boolModal) {
      if (winnerModal){
        return (
          <div id="overlay">
            <p className='modalP'>You Win!</p>
            <button onClick={this.buttonClicked} className='okButton btn btn-primary'>OK</button>
          </div>
        );
      } else if (loserModal) {
        return (
          <div id="overlay">
            <p className='modalP'>You Lose!</p>
            <button onClick={this.buttonClicked} className='okButton btn btn-primary'>OK</button>
          </div>
        );
      }
    } else {
      return (
        <div>

        </div>
      );
    }

  }
});

module.exports = Modal;

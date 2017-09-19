import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {

  render() {
    return <div >
      { this.props.children }
    </div>
  }
}

module.exports = Main;

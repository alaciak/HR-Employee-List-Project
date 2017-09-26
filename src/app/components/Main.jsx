import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../components/Nav.jsx';

class Main extends React.Component {

  render() {
    return (
      <div>
        <Nav/>
        {this.props.children}
      </div>
    );
  }
}

module.exports = Main;

import React from 'react';
import ReactDOM from 'react-dom';
import { Nav } from '../components/Nav.jsx';

export const Main = props => {
  return (
    <div>
      <Nav/>
      { props.children }
    </div>
  );
}

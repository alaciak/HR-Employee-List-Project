import React from 'react';
import Nav from '../components/Nav.jsx';

export const Main = props => {
  return (
    <div>
      <Nav/>
      { props.children }
    </div>
  );
}

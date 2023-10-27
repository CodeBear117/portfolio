import React from 'react';
import { Link } from 'react-router-dom';
import './GridButton.css';

function GridButton({ label, btnClass, to }) { // accept a button label prop, a button class prop and a button link to prop.
  return (
    <Link to={to} className={`grid-button ${btnClass}`}>
      {label}
    </Link>
  );
}

export default GridButton;
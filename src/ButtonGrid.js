import React from 'react';
import GridButton from './GridButton'; 
import './ButtonGrid.css'; 

function ButtonGrid() { // pass a label prop as well as a btnClass prop to apply an individual style to each button
  return (
    <div className="row-2col-2">
      <GridButton label="Blog" btnClass="btn-1" to="/blog"/> 
      <GridButton label="Resume" btnClass="btn-2"/>
      <GridButton label="Hobbies" btnClass="btn-3" to="/Hobbies"/>
      <GridButton label="Projects" btnClass="btn-4" to="Projects"/>
      <GridButton label="Contact" btnClass="btn-5"/>
      <GridButton label="Me-ChatGPT" btnClass="btn-6"/>
    </div>
  );
}

export default ButtonGrid;
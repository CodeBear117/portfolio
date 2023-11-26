import React from "react";
import GridButton from "./GridButton";
import "./styles/ButtonGrid.css";

function ButtonGrid() {
  // pass a label prop as well as a btnClass prop to apply an individual style to each button
  return (
    <div className="row-2col-2">
      <GridButton label="Blog" btnClass="btn-1" to="/blog" />
      <GridButton label="Projects" btnClass="btn-2" to="Projects" />
    </div>
  );
}

export default ButtonGrid;

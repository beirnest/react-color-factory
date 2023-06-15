import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";

function Color(colors) {
  const color = useParams();
  console.log(color);
  const currentColor = colors.colors.find(c => c.color.toLowerCase() === color.color.toLowerCase());
  console.log(currentColor);

  return (currentColor != undefined) ? (
    <div>
      <div style={{backgroundColor:currentColor.code}}>
        <h2>This is {currentColor.color}</h2>
      </div>
      <Link to="/colors">Go Back</Link>
    </div>
  ) : <Redirect to="/" />;
}

export default Color;
import React from "react";
import { Link } from "react-router-dom";

const ColorList = (colors) => {
    console.log(colors);
    return (
        <div>
            <div>
                <h1>Welcome to the Color Factory!</h1>
            </div>
            <div>
                <Link to='/colors/new'>Add a Color</Link>
            </div>
            {colors.colors.map(c => (
            <div className="color" key={c.color}>
                <h3>
                    <Link to={`/colors/${c.color.toLowerCase()}`}>{c.color}</Link>
                </h3>
            </div>
            ))}
        </div>
    )
};

export default ColorList;
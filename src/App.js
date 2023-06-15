import React, { useState } from 'react';
import './App.css';
import ColorList from './ColorList';
import Color from './Color'
import NewColorForm from './NewColorForm'
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

function App() {
  const [allColors, setAllColors] = useState(colors.colors);
  const addColor = (newColor) => {
    console.log(allColors);
    setAllColors(allColors => [ {...newColor }, ...allColors])
    }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/colors">
            <ColorList colors={allColors} />
          </Route>
          <Route exact path="/colors/new">
            <NewColorForm addColor={addColor}/>
          </Route>
          <Route exact path="/colors/:color">
            <Color colors={allColors} />
          </Route>
          <Redirect to="/colors" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export const colors = {
  colors: [
    {
      color: "blue",
      code: "#0000FF"
    },
    {
      color: "red",
      code: "#FF0000"
    },
    {
      color: "teal",
      code: "#008080"
    }
  ]
}

export default App;

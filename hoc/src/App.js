import "./App.css";

import React from "react";
import Button from "./components/Button";
import * as ButtonStyle from "./components/ButtonStyle";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Button text="No Style" onClick={() => alert("I am not styled yet")} />
        <ButtonStyle.NewButton
          text="Styled Button"
          onClick={() => alert("I am the default style")}
        />
        <ButtonStyle.ReactButton
          text="React"
          onClick={() => alert("I have react color")}
        />
        <ButtonStyle.InfoButton
          text="Info"
          onClick={() => alert("I am styled with info color")}
        />
        <ButtonStyle.SuccessButton
          text="Success"
          onClick={() => alert("I am successful")}
        />
        <ButtonStyle.WarningButton
          text="Warning"
          onClick={() => alert("I warn you many times")}
        />
        <ButtonStyle.DangerButton
          text="Danger"
          onClick={() => alert("Oh no, you can not restore it")}
        />
      </div>
    );
  }
}

export default App;

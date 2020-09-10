import React, { Component } from "react";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";
import "./App.css";

class App extends Component {
  state = {
    inputText: "",
    characters: [],
  };

  inputChangeHandler = (Event) => {
    let str = this.state.inputText;
    str = Event.target.value;
    this.setState({
      inputText: str,
    });
    // this.getUniqueCharacters(str);
    let chars = new Map();
    for (let i = 0; i < str.length; i++) {
      if (!chars.has(str[i])) {
        chars.set(str[i], 1);
      } else {
        chars.set(str[i], chars.get(str[i]) + 1);
      }
    }
    let unique = [];
    chars.forEach((value, key) => {
      unique.push(key);
    });
    this.setState({ characters: unique });
  };

  removeCharacter = (char, index) => {
    let str = this.state.inputText;
    str = str.replaceAll(char, '');
    this.setState({inputText: str});
    let characters = this.state.characters;
    characters.splice(index, 1);
    this.setState({characters: characters});
  };

  render() {
    // render a dynamic list of components
    let charactList = null;
    if (this.state.inputText.length > 0) {
      charactList = (
        <div>
          {this.state.characters.map((char, index) => {
            return (
              <CharComponent
                char={char}
                charClicked={() => this.removeCharacter(char, index)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.inputText}
        />
        {this.state.inputText.length > 0 ? (
          <div>
            <p>{this.state.inputText.length}</p>
            <p>{this.state.inputText}</p>
          </div>
        ) : null}
        <ValidationComponent textLength={this.state.inputText.length} />
        {charactList}
      </div>
    );
  }
}

export default App;

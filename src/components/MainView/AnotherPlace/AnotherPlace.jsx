import React from "react";
import AnotherPlaceCss from "./AnotherPlace.module.css";

class AnotherPlace extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dictionary: props.dictionary };
  }

  addWord(dictionary) {
    let ruValue = document.getElementById('ru').value;
    let enValue = document.getElementById('en').value;

    if (enValue.length > 1 && ruValue.length > 1) {
      dictionary.push(
        {
          word: enValue,
          translation: ruValue
        }
      );
    }
  }

  render() {
    return (
      <div>
        <div className={AnotherPlaceCss.textArea}>
          <div><p>Ru - </p></div>
          <div><input id="ru" type="text" /></div>
          <div><p>En - </p></div>
          <div><input id="en" type="text" /></div>
        </div>
        <div onClick={() => this.addWord(this.state.dictionary)} className={AnotherPlaceCss.addButton}>Add</div>
      </div>
    );
  }
}

export { AnotherPlace };

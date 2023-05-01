import React from "react";
import AnotherPlace from "./AnotherPlace.module.css";

const RenderAnotherPlace = (props) => {
  return (
    <div>
      <div className={AnotherPlace.textArea}>
        <div><p>Ru - </p></div>
        <div><input id="ru" type="text" /></div>
        <div><p>En - </p></div>
        <div><input id="en" type="text" /></div>
      </div>      
      <div onClick={() => AddWord(props.dictionary)} className={AnotherPlace.addButton}>Add</div>
    </div>
  );
}

function AddWord(dictionary) {
  let ruValue = document.getElementById('ru').value;
  let enValue = document.getElementById('en').value;

  if (enValue.length > 1 && ruValue.length > 1){
    dictionary.push(
      {
        word: enValue,
        translation: ruValue
      }
    );
    
  }
}

export default RenderAnotherPlace;

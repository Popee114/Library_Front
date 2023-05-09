import React from 'react'
import { AnotherPlace } from './AnotherPlace/AnotherPlace';
import { NavBar } from './NavBar/NavBar';
import { Workspace } from './Workspace/Workspace';
import MainViewCss from './MainView.module.css';

class MainView extends React.Component {
  constructor() {
    super();
    var dictionary = [
      {
        word: "hi",
        translation: "привет"
      },
      {
        word: "one",
        translation: "один"
      },
      {
        word: "two",
        translation: "два"
      },
      {
        word: "three",
        translation: "три"
      },
      {
        word: "four",
        translation: "четыре"
      },
      {
        word: "five",
        translation: "пять"
      },
      {
        word: "six",
        translation: "шесть"
      },
      {
        word: "seven",
        translation: "семь"
      },
      {
        word: "eight",
        translation: "восемь"
      },
      {
        word: "nine",
        translation: "девять"
      },
      {
        word: "ten",
        translation: "десять"
      },
      {
        word: "eleven",
        translation: "одинадцать"
      },
      {
        word: "twelve",
        translation: "двенадцать"
      },
      {
        word: "thirteen",
        translation: "тринадцать"
      },
      {
        word: "fourteen",
        translation: "четырнадцать"
      },
      {
        word: "fifteen",
        translation: "пятнадцать"
      },
      {
        word: "sixteen",
        translation: "шеснадцать"
      }
    ];

    this.state = { dictionary: dictionary };
  }

  render() {
    return (
      <div className={MainViewCss.mainView}>
        <NavBar />
        <AnotherPlace dictionary={this.state.dictionary} />
        <Workspace dictionary={this.state.dictionary} />
      </div>
    );
  }
}

export { MainView };
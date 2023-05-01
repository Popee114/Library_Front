import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import MainView from './components/MainView/MainView';
import NotFoundPage from "./components/NotFoundView/NotFoundPage";

const dictionary = [
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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/words" element={<MainView dictionary={dictionary} />} />
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

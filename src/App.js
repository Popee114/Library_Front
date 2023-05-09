import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { MainView } from './components/MainView/MainView';
import { NotFoundPage } from "./components/NotFoundView/NotFoundPage";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/words" element={<MainView />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { localNumbers: [] }
//   }

//   addNum = () => {
//     var min = new Date().getSeconds();
//     this.state.localNumbers.push(min);
//     this.setState(this.state.localNumbers);
//   }

//   render() {
//     return (
//       <div >
//         <button onClick={() => this.addNum()}> Click on me! </button>
//         {
//           this.state.localNumbers.map((num, i) => <p key={i}> {num} </p>)
//         }
//       </div>
//     );
//   }
// }

export { App };

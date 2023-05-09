import React from 'react'
import { AnotherPlace } from './AnotherPlace/AnotherPlace';
import { NavBar } from './NavBar/NavBar';
import { Workspace } from './Workspace/Workspace';
import MainViewCss from './MainView.module.css';

class MainView extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className={MainViewCss.mainView}>
        <NavBar />
        <AnotherPlace dictionary={this.props.dictionary} />
        <Workspace dictionary={this.props.dictionary} />
      </div>
    );
  }
}

export { MainView };
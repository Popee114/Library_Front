import React from 'react'
import RenderAnotherPlace from './AnotherPlace/AnotherPlace';
import NavBar from './NavBar/NavBar';
import Workspace from './Workspace/Workspace';
import MainViewCss from './MainView.module.css';

const MainView = (props) => {
    return (
        <div className={MainViewCss.mainView}>
          <NavBar />
          <RenderAnotherPlace dictionary={props.dictionary} />
          <Workspace dictionary={props.dictionary} />
        </div>
    );
}

export default MainView;
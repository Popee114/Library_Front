import React from 'react';
import NotFoundPageCss from './NotFoundPage.module.css';
import { NavLink } from 'react-router-dom';

class NotFoundPage extends React.Component {
    render() {
        return (
            <div className={NotFoundPageCss.notFound}>
                <div />
                <div />
                <div />
                <div />
                <div className={NotFoundPageCss.someBlock}>
                    <p>Not Found &gt;_&lt;</p>
                    <NavLink to="/words"> Words </NavLink>
                </div>
                <div />
                <div />
                <div />
                <div />
            </div>
        );
    }
}

export { NotFoundPage }
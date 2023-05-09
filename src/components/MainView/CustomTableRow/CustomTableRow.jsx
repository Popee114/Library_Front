import React from 'react';
import CustomTableRow from './CustomTableRow.module.css';

class CustomRows extends React.Component{
    render(){
        return this.props.dictionary.map((element, index) => (
            <div key={index} className='customRow'>
                <div key={element.word} className={CustomTableRow.customCell}>{element.word}</div>
                <div key={element.translation} className={CustomTableRow.customCell}>{element.translation}</div>
            </div>));
    }
}

export { CustomRows };
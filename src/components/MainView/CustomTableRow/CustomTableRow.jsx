import React from 'react';
import CustomTableRow from './CustomTableRow.module.css';

const RenderRows = (props) => {
    return props.dictionary.map((element, index) => (
        <div key={index} className='customRow'>
            <div key={element.word} className={CustomTableRow.customCell}>{element.word}</div>
            <div key={element.translation} className={CustomTableRow.customCell}>{element.translation}</div>
        </div>))
}

export default RenderRows;
import React from 'react';
import CustomTableRow from './CustomTableRow.module.css';

class CustomRows extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dictionary: props.dictionary };
    }

    render() {
        return this.state.dictionary.map((element, index) => (
            <div key={index} className='customRow'>
                <div key={element.word} className={CustomTableRow.customCell}>{element.word}</div>
                <div key={element.translation} className={CustomTableRow.customCell}>{element.translation}</div>
            </div>));
    }
}

export { CustomRows };
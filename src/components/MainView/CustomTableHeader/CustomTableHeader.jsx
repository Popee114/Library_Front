import React from "react";
import headerModul from './CustomTableHeader.module.css';

class CustomTableHeader extends React.Component {
  render() {
    return (
      <div className='customRow'>
        <div className={headerModul.customCell}> English </div>
        <div className={headerModul.customCell}> Русский </div>
      </div>
    );
  }
}

export { CustomTableHeader };
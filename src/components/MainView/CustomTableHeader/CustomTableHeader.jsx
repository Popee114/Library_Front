import React from "react";
import headerModul from './CustomTableHeader.module.css';

const RenderHeader = () => (
  <div className='customRow'>
    <div className={headerModul.customCell}> English </div>
    <div className={headerModul.customCell}> Русский </div>
  </div>
);

export default RenderHeader;
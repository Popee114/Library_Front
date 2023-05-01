import React from "react";
import RenderHeader from "../CustomTableHeader/CustomTableHeader";
import RenderRows from "../CustomTableRow/CustomTableRow";
import WorkspaceCss from "./Workspace.module.css"

const Workspace = (props) => {
    return (
        <div className={WorkspaceCss.workspace}>
            <CustomTable dictionary={props.dictionary}/>
        </div>
    );
}

const CustomTable = (props) => {
    return (
        <div className={WorkspaceCss.customTable}>
            <RenderHeader />
            <RenderRows dictionary={props.dictionary}/>
        </div>
    );
}

export default Workspace;

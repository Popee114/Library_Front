import React from "react";
import { CustomTableHeader } from "../CustomTableHeader/CustomTableHeader";
import { CustomRows } from "../CustomTableRow/CustomTableRow";
import WorkspaceCss from "./Workspace.module.css"

class Workspace extends React.Component {
    render() {
        return (
            <div className={WorkspaceCss.workspace}>
                <div className={WorkspaceCss.customTable}>
                    <CustomTableHeader />
                    <CustomRows dictionary={this.props.dictionary} />
                </div>
            </div>
        );
    }
}

export { Workspace };

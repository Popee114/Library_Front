import React from "react";
import { CustomTableHeader } from "../CustomTableHeader/CustomTableHeader";
import { CustomRows } from "../CustomTableRow/CustomTableRow";
import WorkspaceCss from "./Workspace.module.css"

class Workspace extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dictionary: props.dictionary };
    }

    render() {
        return (
            <div className={WorkspaceCss.workspace}>
                <div className={WorkspaceCss.customTable}>
                    <CustomTableHeader />
                    <CustomRows dictionary={this.state.dictionary} />
                </div>
            </div>
        );
    }
}

export { Workspace };

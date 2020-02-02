import React, {Component} from "react";

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canEdit: false,
            showPlain: false,
            plain: this.props.plain,
            original: this.props.plain,
            latex: props.latex,
            editMode: "Start Editing",
            latexMode: "Show Original LaTex Format"
        };
        this.switchPlain = this.switchPlain.bind(this);
        this.switchEditMode = this.switchEditMode.bind(this);
        this.copyResult = this.copyResult.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleReset(event) {
        this.setState({
            plain: this.state.original,
        });
    }

    handleChange(event) {
        this.setState({
            plain: event.target.value,
        });
    }
    switchPlain() {
        var show = this.state.showPlain;
        alert("SWITCHING");
        this.setState({
            showLatex: !show,
            latexMode: !show ? "Show Original LaTex Format" : "Hide Original LaTex Format"
        });
    }

    switchEditMode() {
        var edit = this.state.canEdit;
        this.setState({
            canEdit: !edit,
            editMode: !edit ? "Start Editing" : "Done Editing"
        });
    }

    copyResult(event) {
        alert("Result: "+ this.state.plain + " copied!")
        event.preventDefault();
    }

    render() {
        return (<div className="result-group">
					<div className="text-tools">
                        {/* <form onSubmit={this.copyResult}> */}
                        <h3>Result</h3>
                            Plain Text:
                            <input type="text" readOnly={this.state.canEdit} value={this.state.plain} name="plain" onChange={this.handleChange}/>
                            {this.state.canEdit}
                            <button onClick={this.switchEditMode}>{this.state.editMode}</button>
                            <button onClick={this.handleReset}>Reset plaintext</button>
                            {/* <button onClick={this.copyResult}>Copy Result</button>
                             */}
                        <form onSubmit={this.copyResult}>
                             <input type="submit" value="Copy Result" />
                        </form>
                    </div>
				<button onClick={this.switchPlain}>{this.state.latexMode}</button><br />
				{ this.state.showPlain ? <input type="text" readOnly={true} value={this.state.latex} name="latex" /> : null}
		</div>);
    }
}

export default Result
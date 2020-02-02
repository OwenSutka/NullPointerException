import React, {Component} from "react";

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canEdit: false,
            showLatex: false,
            plain: this.props.plain,
            original: this.props.plain,
            latex: props.latex,
            editMode: "Start Editing",
            latexMode: "Show Original LaTex Format"
        };
        this.handleLatex = this.handleLatex.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleCopy = this.handleCopy.bind(this);
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

    handleLatex() {
        var show = this.state.showLatex;
        this.setState({
            showLatex: !show,
            latexMode: show ? "Show Original LaTex Format" : "Hide Original LaTex Format"
        });
    }

    handleEdit() {
        var edit = this.state.canEdit;
        alert(this.state.canEdit);
        this.setState({
            canEdit: !edit,
            editMode: !edit ? "Start Editing" : "Done Editing"
        });
    }

    handleCopy(event) {
        alert("Result: "+ this.state.plain + " copied!")
        event.preventDefault();
    }

    render() {
        return (<div className="result-group">
					<div className="text-tools">
                        <h3>Result</h3>
                        Plain Text:
                        <input type="text" readOnly={this.state.canEdit} value={this.state.plain} name="plain" onChange={this.handleChange} />
                        <button onClick={this.handleEdit}>{this.state.editMode}</button>
                        <button onClick={this.handleReset}>Reset plaintext</button>
                        <form onSubmit={this.handleCopy}>
                             <input type="submit" value="Copy Result" />
                        </form>
                    </div>
                <div className="latex">
				    <button onClick={this.handleLatex}>{this.state.latexMode}</button><br />
				    <p className="output">{ this.state.showLatex ? this.state.latex : null}</p>
                </div>
		</div>);
    }
}

export default Result
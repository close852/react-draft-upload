import React from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js';
import './MWEditor.css'
class PlainTextEditorExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editorState: EditorState.createEmpty() };
        this.onChange = (editorState) => this.setState({ editorState });
        this.logState = () => console.log(this.state.editorState.toJS());
        this.setDomEditorRef = ref => this.domEditor = ref;
    }

    componentDidMount() {
        this.domEditor.focus()
    }

    render() {
        const _onBoldClick = () => {
            this.domEditor.focus()
            this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
        }

        return (
            <div style={styles.root}>
                <button onClick={_onBoldClick}>Bold</button>
                <div style={styles.editor} onClick={this.focus}>
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        placeholder="Enter some text..."
                        ref={this.setDomEditorRef}
                    />
                </div>
                <input
                    onClick={this.logState}
                    style={styles.button}
                    type="button"
                    value="Log State"
                />
            </div>
        );
    }
}
const styles = {
    root: {
        fontFamily: '\'Helvetica\', sans-serif',
        padding: 20,
        width: 600,
    },
    editor: {
        border: '1px solid #ccc',
        cursor: 'text',
        minHeight: 80,
        padding: 10,
    },
    button: {
        marginTop: 10,
        textAlign: 'center',
    },
};

export default PlainTextEditorExample
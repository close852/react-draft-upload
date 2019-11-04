import React, { useState, useRef, useEffect } from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js';
import { stateToHTML } from "draft-js-export-html";
import './MWEditor.css'
function MWEditor() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [editorContentHtml, setEditorContentHtml] = useState('');

    const editor = useRef(null);

    function focusEditor() {
        if (editor) {
            editor.current.focus();
            return true;
        }
        return false;
    }
    useEffect(() => {
        return focusEditor();
    }, []);


    const handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }
    const onChange = (editState) => {
        setEditorState(editState);
        // setEditorContentHtml(stateToHTML(editorState.getCurrentContent()));
    }
    const _onBoldClick = () => {
        onChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));

    }
    const _onTextAlign = (align) => {
        console.log('_onTextAlign', align)
        onChange(RichUtils.toggleBlockType(editorState, align));
    }
    const styles = {
        editor: {
            border: '1px solid black',
            width: '700px',
            height: '500px',
            overflow: 'scroll'
        },
        toolbar: {
            position: 'relative',
            width: '80%',
            'background-color': 'lightsteelblue',
            padding: ' 10px 20px',
            margin: 'auto',
            top: ' 45px',
            'text-align': 'right'
        },
        button: {
            border: '1px solid black',
            padding: '5px',
            'margin-right': '4px',
            'background-color': 'black',
            color: 'white'
        }

    }
    const isReadOnly = false;
    //readonly일때는 1. 버튼영역 가리고, 2. overflow 하면 안되고 editor 영역에 맞게 다시 그려져야 함.


    return (
        <div>
            <div style={{ display: `${isReadOnly}?'none':''` }}>
                <button onClick={_onBoldClick}>Bold</button>
                <button onClick={() => { _onTextAlign('leftAlign') }}>LEFT</button>
                <button onClick={() => { _onTextAlign('centerAlign') }}>CENTER</button>
                <button onClick={() => { _onTextAlign('rightAlign') }}>RIGHT</button>
            </div>
            <div style={styles.editor} onClick={focusEditor}>
                <Editor ref={editor} editorState={editorState} onChange={onChange} handleKeyCommand={handleKeyCommand} readOnly={isReadOnly} textAlignment="right" />
            </div>
        </div>
    )
}

export default MWEditor
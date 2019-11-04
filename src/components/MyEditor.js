import Editor from 'draft-js-plugins-editor';
import { EditorState, RichUtils } from 'draft-js';
import createImagePlugin from 'draft-js-image-plugin';
import React, { useState } from 'react';

const imagePlugin = createImagePlugin();

// The Editor accepts an array of plugins. In this case, only the imagePlugin
// is passed in, although it is possible to pass in multiple plugins.
function MyEditor() {
    let [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onChange = (editState) => {
        setEditorState(editState);
        // setEditorContentHtml(stateToHTML(editorState.getCurrentContent()));
    }
    return (
        <Editor
            editorState={editorState}
            onChange={onChange}
            plugins={[imagePlugin]}
        />
    );
};

export default MyEditor;

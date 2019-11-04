import React from 'react';
import MWEditor from './components/MWEditor';
import { EditorState } from 'draft-js'
import MyEditor from './components/MyEditor';
function App() {
  const editorState = EditorState.createEmpty();
  const onChange = () => {
    alert('onChange');
  }
  return (
    <div>
      Editor 실행
      {/*<MWEditor editorState={editorState} onChange={onChange} /> */}
      <MyEditor />
    </div>
  );
}

export default App;

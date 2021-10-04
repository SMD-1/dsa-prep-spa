import Editor, { useMonaco } from "@monaco-editor/react";
import { Container } from "@mui/material";
import { Fab } from "@mui/material";
import PlayArrow from "@mui/icons-material/PlayArrow";
const CustomEditor = () => {
  const monaco = useMonaco();
  console.log(monaco);
  function handleEditorDidMount(editor, monaco) {
    console.log(monaco);
  }
  function valueChanged(value) {
    console.log(value);
  }

  return (
    <div>
      <Container>
        <Editor
          height="calc(90vh - 75px)"
          defaultLanguage="javascript"
          defaultValue="console.log('hello')"
          theme="vs-dark"
          onMount={handleEditorDidMount}
          onChange={valueChanged}
        />
        <Fab color="primary" aria-label="play-arrow">
          <PlayArrow />
        </Fab>
      </Container>
    </div>
  );
};

export default CustomEditor;

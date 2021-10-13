import Editor, { useMonaco } from "@monaco-editor/react";
import axios from "axios";

import { Fab } from "@mui/material";
import PlayArrow from "@mui/icons-material/PlayArrow";
import RightHeader from "./RightHeader";

import "./right.css";
import api from "../../api-config";

const CustomEditor = () => {
  const monaco = useMonaco();
  console.log(monaco);

  function handleEditorDidMount(editor, monaco) {
    monaco.editor.defineTheme("myTheme", {
      base: "vs-dark",
      inherit: true,
      rules: [{ background: "1d3240" }],
      colors: {
        "editor.foreground": "#000",
        "editor.background": "#1F2937", // editor background
        "editorCursor.foreground": "#FF4C29",
        "editor.lineHighlightBackground": "#0000FF20",
        "editorLineNumber.foreground": "#008800",
        "editor.selectionBackground": "#88000030",
        "editor.inactiveSelectionBackground": "#88000015",
      },
    });
    monaco.editor.setTheme("myTheme");
    // console.log(monaco);
  }
  function valueChanged(value) {
    console.log(value);
  }
  async function runCode() {
    try {
      const payload = {
        code: `#include<stdio.h>
        int main(){
        for(int i=0;i<10;i++){
          printf("%d, ",i);
        } 
        return 0;
        }`,
        lang: "c",
      };
      console.log(payload, api);

      const res = await axios.post(api.compiler, payload);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="rightSide">
      <RightHeader />

      <div className="top">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          defaultValue="console.log('hello')"
          theme="vs-dark"
          onMount={handleEditorDidMount}
          onChange={valueChanged}
        />
        <div className="icon">
          <Fab
            color="primary"
            aria-label="play-arrow"
            className="play"
            onClick={runCode}
          >
            <PlayArrow />
          </Fab>
        </div>
      </div>
      <div className="bottom">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          defaultValue="console.log('hello')"
          theme="vs-dark"
          onMount={handleEditorDidMount}
          onChange={valueChanged}
        />
      </div>
    </div>
  );
};

export default CustomEditor;

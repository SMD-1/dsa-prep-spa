import "./Splitter.css";
import React, { useRef } from "react";
// import Editor from "../CustomEditor";
// import LeftText from "../LeftText";

const Splitter = () => {
  const width = 500;
  const height = 500;

  const leftSide = useRef(null);
  const rightSide = useRef(null);
  const bottomSide = useRef(null);
  const topSide = useRef(null);
  const splitter = useRef(null);
  const nestedSplitter = useRef(null);

  function dragHorizontal(e) {
    // console.log(e.pageX)
    if (e.clientX === 0 || e.pageY === 0 || e.clientX > width * 2) return;
    // console.log(e)
    leftSide.current.style.width = e.clientX + "px";
    rightSide.current.style.width = width * 2 - e.clientX + "px";
    nestedSplitter.current.style.width = width * 2 - e.clientX + "px";

    // console.log(e.x)
    // bottomText.innerHTML = `${leftSide.style.width}, ${rightSide.style.width}`;
  }
  function dragVertical(e) {
    if (e.pageX === 0 || e.clientY === 0 || e.clientY > height - 10) return;
    console.log(e.clientY);
    topSide.current.style.height = e.clientY + "px";
    bottomSide.current.style.height = height - e.clientY + "px";
  }

  return (
    <div>
      <div className="container">
        <div ref={leftSide} className="box a"></div>
        <div ref={splitter} onDrag={dragHorizontal} className="splitter"></div>
        <div ref={rightSide} className="box b">
          <div ref={topSide} className="nested-box c"></div>
          <div
            ref={nestedSplitter}
            onDrag={dragVertical}
            className="nested-splitter"
          >
            <div className="nested-splitter-img"></div>
          </div>
          <div ref={bottomSide} className="nested-box d"></div>
        </div>
      </div>
      <div className="bottom-text"></div>
    </div>
  );
};
export default Splitter;

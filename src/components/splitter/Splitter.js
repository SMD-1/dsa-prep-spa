import "./Splitter.css";
import React from "react";
// import Editor from "../CustomEditor";
// import LeftText from "../LeftText";

const Splitter = () => {
  Constructor(props){
    super(props);
    this.splitter = React.createRef()
    console.log(this.splitter)
  }

  const nestedSplitter = document.querySelector(".nested-splitter");
  const leftSide = document.querySelector(".a");
  const rightSide = document.querySelector(".b");
  const topSide = document.querySelector(".c");
  const bottomSide = document.querySelector(".d");

  const bottomText = document.querySelector(".bottom-text");

  const width = 500;
  const height = 500;

  this.splitter.addEventListener("drag", (e) => {
    if (e.x === 0 || e.y === 0 || e.x > width * 2) return;
    // console.log(e)
    leftSide.style.width = e.x + "px";
    rightSide.style.width = width * 2 - e.x + "px";
    nestedSplitter.style.width = width * 2 - e.x + "px";

    // console.log(e.x)
    bottomText.innerHTML = `${leftSide.style.width}, ${rightSide.style.width}`;
  });
  nestedSplitter.addEventListener("drag", (e) => {
    if (e.x === 0 || e.y === 0 || e.y > height - 10) return;
    console.log(e.y);
    topSide.style.height = e.y + "px";
    bottomSide.style.height = height - e.y + "px";
  });

  return (
    <div>
      <div class="container">
        <div class="box a"></div>
        <div class="splitter"></div>
        <div class="box b">
          <div class="nested-box c"></div>
          <div class="nested-splitter">
            <div class="nested-splitter-img"></div>
          </div>

          <div class="nested-box d"></div>
        </div>
      </div>
      <div class="bottom-text"></div>
    </div>
  );
};
export default Splitter;

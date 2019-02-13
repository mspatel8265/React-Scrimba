// import React from "react";
// import ReactDOM from "react-dom";

// // ReactDOM.render(WHAT DO I WANT TO RENDER, WHERE DO I WANT TO RENDER);

// ReactDOM.render(
//   <div>
//     <h1>Hello World</h1>
//     <p>This is a paragraph.</p>
//   </div>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";

function MyApp() {
  return (
    <ul>
      <li>Margi</li>
      <li>An expert coder</li>
      <li>A kind person</li>
    </ul>
  );
}

function MyInfo() {
  return (
    <div>
      <h1>Margi Patel</h1>
      <p>
        I am a software engineer and I love learning new technologies. Currently
        I am learning React, unfortunatley I haven't been able to develop
        anything or finish anything of my project but that's not the end, I will
        work really hard to finish my all the assignments.
      </p>
      <ul>
        <li>Switzerland - land of wonderful chocolates.</li>
        <li>Paris - love destination, after learning French.</li>
        <li>London - visit my brother.</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<MyInfo />, document.getElementById("root"));

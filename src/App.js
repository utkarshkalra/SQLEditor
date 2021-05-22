import React from "react";

import "./App.css";
import OutputArea from "./outputarea/outputarea";
import Title from "./title";
import SideBar from "./sidebar/sidebar";
import CodeArea from "./codearea/codearea";

function App() {
  return (
    <>
      <Title />
      <SideBar />
      <main>
        <CodeArea />
        <OutputArea />
      </main>
    </>
  );
}

export default App;

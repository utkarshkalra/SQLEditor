import React from "react";

import "./App.css";
import OutputArea from "./outputarea/outputarea";
import Title from "./title/title";
import SideBar from "./sidebar/sidebar";
import CodeArea from "./codearea/codearea";
import { useGlobalContext } from "./context";

function App() {
  const { showSidebar } = useGlobalContext();
  return (
    <>
      <Title />
      <SideBar />
      <main className={showSidebar ? "" : "changemargin"}>
        <CodeArea />
        <OutputArea />
      </main>
    </>
  );
}

export default App;

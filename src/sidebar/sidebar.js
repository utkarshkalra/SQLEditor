import React, { useState } from "react";
import "../sidebar.css";
import { AiOutlineFile } from "react-icons/ai";
import Files from "./files";
const SideBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <aside className="sidebar">
      <div className="iconbar">
        <button
          className="btn icon"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <AiOutlineFile />
        </button>
      </div>
      {showSidebar && (
        <div className="content" id="files">
          <Files />
        </div>
      )}
    </aside>
  );
};

export default SideBar;

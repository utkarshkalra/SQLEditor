import React from "react";
import "./sidebar.css";
import { AiOutlineFile } from "react-icons/ai";
import Files from "./files";
import { useGlobalContext } from "../context";
const SideBar = () => {
  const { showSidebar, setShowSidebar } = useGlobalContext();
  return (
    <aside className="sidebar">
      <div className="iconbar">
        <button
          className={showSidebar ? "btn icon active-icon" : "btn icon"}
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

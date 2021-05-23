import React, { useState } from "react";
import { AiOutlineFolder } from "react-icons/ai";
import { GrDocumentCsv } from "react-icons/gr";
import csvfiles from "./csvfiles";
import { useGlobalContext } from "../context";

const Files = () => {
  const [showFiles, setShowFiles] = useState(true);
  const { setFilename, setOutputTitle } = useGlobalContext();

  return (
    <div className="filearea">
      <p className="foldername" onClick={() => setShowFiles(!showFiles)}>
        <AiOutlineFolder /> CSV files
      </p>
      {showFiles && (
        <ul className="filenames">
          {csvfiles.map((csvfile, index) => {
            return (
              <li key={index}>
                <button
                  className="file btn"
                  onClick={() => {
                    setFilename(csvfile);
                    setOutputTitle(`${csvfile}.csv`);
                  }}
                >
                  <GrDocumentCsv />
                  {csvfile}.csv
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default Files;

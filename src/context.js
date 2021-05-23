import React, { useState, useContext, useEffect, useCallback } from "react";
import * as Papa from "papaparse";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filename, setFilename] = useState("");
  const [outputTitle, setOutputTitle] = useState("Output");
  const [loading, setLoading] = useState(false);

  const showData = useCallback(() => {
    const url = `https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/${filename}.csv`;
    if (filename !== "") {
      setLoading(true);
      Papa.parse(url, {
        download: true,
        complete: function (items) {
          let itemarr = items.data;
          console.log(itemarr.length);
          const n = itemarr.length;
          itemarr = itemarr.slice(0, n - 1);
          setData(itemarr);
          setLoading(false);
        },
      });
    }
  }, [filename]);

  useEffect(() => {
    showData();
  }, [filename, showData]);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        data,
        setFilename,
        outputTitle,
        setOutputTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

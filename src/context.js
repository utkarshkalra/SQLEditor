import React, { useState, useContext, useEffect, useCallback } from "react";
import * as Papa from "papaparse";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filename, setFilename] = useState("");
  const [outputTitle, setOutputTitle] = useState("Output");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [history, setHistory] = useState(false);
  const [query, setQuery] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);

  const showData = useCallback(() => {
    const url = `https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/${filename}.csv`;
    if (filename !== "") {
      setLoading(true);
      Papa.parse(url, {
        download: true,
        complete: function (items) {
          let itemarr = items.data;
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
        setData,
        setFilename,
        outputTitle,
        setOutputTitle,
        error,
        setError,
        history,
        setHistory,
        query,
        setQuery,
        showSidebar,
        setShowSidebar,
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

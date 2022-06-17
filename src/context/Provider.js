import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './Context';

function AppProvider({ children }) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(url);
      const data = await response.json();
      setInfo(data.results);
    };
    fetchAPI();
  }, []);

  const context = {
    info,
    setInfo,
  };

  return (
    <AppContext.Provider value={ context }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default AppProvider;

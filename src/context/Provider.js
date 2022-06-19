import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './Context';

function AppProvider({ children }) {
  const [info, setInfo] = useState([]);
  const [filter, setFilter] = useState([]);
  const [namePlanet, setNamePlanet] = useState([]);
  const [columnFilter, setColumnFilter] = useState('population');
  const [operatorFilter, setOperatorFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);
  const [saveValueFiltered, setSaveValueFiltered] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(url);
      const data = await response.json();
      setInfo(data.results);
      setFilter(data.results);
    };
    fetchAPI();
  }, []);

  useEffect(() => {
    const nameFilter = info.filter((planet) => planet.name.toLowerCase()
      .includes(namePlanet));

    const multipleFilter = saveValueFiltered.reduce((acc, filt) => acc.filter((e) => {
      switch (filt.operatorFilter) {
      case 'maior que':
        return e[filt.columnFilter] > Number(filt.valueFilter);
      case 'menor que':
        return e[filt.columnFilter] < Number(filt.valueFilter);
      case 'igual a':
        return Number(e[filt.columnFilter]) === Number(filt.valueFilter);
      default:
        return true;
      }
    }), nameFilter);

    setFilter(multipleFilter);
  }, [namePlanet, saveValueFiltered]);

  const context = {
    info,
    setInfo,
    filter,
    setFilter,
    namePlanet,
    setNamePlanet,
    columnFilter,
    setColumnFilter,
    operatorFilter,
    setOperatorFilter,
    valueFilter,
    setValueFilter,
    saveValueFiltered,
    setSaveValueFiltered,
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

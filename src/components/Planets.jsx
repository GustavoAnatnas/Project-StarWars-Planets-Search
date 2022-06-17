import React, { useContext } from 'react';
import AppContext from '../context/Context';

function Planets() {
  const { info, filter, setFilter } = useContext(AppContext);
  const handleFilterChange = ({ target }) => {
    const nameFilter = info.filter((planet) => planet.name.includes(target.value));
    setFilter(nameFilter);
  };

  return (
    <div>
      <form>
        <input
          data-testid="name-filter"
          type="text"
          onChange={ handleFilterChange }
        />
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {
            filter.map((infor) => (
              <tr key={ infor.name }>
                <td>{ infor.name }</td>
                <td>{ infor.rotation_period }</td>
                <td>{ infor.orbital_period }</td>
                <td>{ infor.diameter }</td>
                <td>{ infor.climate }</td>
                <td>{ infor.gravity }</td>
                <td>{ infor.terrain }</td>
                <td>{ infor.surface_water }</td>
                <td>{ infor.population }</td>
                <td>{ infor.films }</td>
                <td>{ infor.created }</td>
                <td>{ infor.edited }</td>
                <td>{ infor.url }</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Planets;

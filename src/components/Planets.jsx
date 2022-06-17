import React, { useContext } from 'react';
import AppContext from '../context/Context';

function Planets() {
  const { info } = useContext(AppContext);
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Rotation Period</td>
          <td>Orbital Period</td>
          <td>Diameter</td>
          <td>Climate</td>
          <td>Gravity</td>
          <td>Terrain</td>
          <td>Surface Water</td>
          <td>Population</td>
          <td>Films</td>
          <td>Created</td>
          <td>Edited</td>
          <td>URL</td>
        </tr>
      </thead>
      <tbody>
        {
          info.map((infor) => (
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
  );
}

export default Planets;

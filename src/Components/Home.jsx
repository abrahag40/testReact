import React, { Component, useState, useEffect, useRef } from "react";
// import people from '../people.js'
import axios from "axios";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({text}: any) => <div>{text}</div>;

function Home() {
  var peopleJSON = localStorage.getItem("people");

  const URL_API =
    "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyC7fn14KqyerEmWYRAk9KAIcdn4y6jSS4M&address=";

  let iAddress = useRef([React.createRef(), React.createRef()]);
  const [center, setCenter] = useState([{lat: 19.3681455, lng: -99.15299879999999 }]);

  const handleAdd = (e) => {
    const addAdd = !e == "" ? `${URL_API + e.replace(/ /g, "")}` : null;
    if (addAdd != null) {
      axios
        .get(addAdd, {
          params: {
            headers: { 'Content-Type': 'application/json' },
            mode: 'no-cors',
          }
        })
        .then((res) => {
          setCenter(
            res.data.results.map((coordenadas, index) => {
              return {
                lat: coordenadas.geometry.location.lat,
                lng: coordenadas.geometry.location.lng,
              };
            })
          );
        })
        .catch((err) => {
          return console.log(err);
        });
    }
  };

  return (
    <div className="container table-responsive fixed-table-body">
      <div className="d-flex justify-content-center m-5 table-responsive fixed-table-body">
        <h3>Registro de Personas</h3>
      </div>
      <div className="row">
        <div className="col-12">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Email</th>
                <th scope="col">Fecha de Nacimiento</th>
                <th scope="col">Dirección</th>
              </tr>
            </thead>
            <tbody>
              {JSON.parse(peopleJSON).map((p, i) => {
                return (
                  <>
                    <tr>
                      <td>{p.name}</td>
                      <td>{p.email}</td>
                      <td> {p.dateBirth} </td>
                      <td>
                        <input
                          ref={iAddress.current[i]}
                          type="text"
                          style={{ display: "none" }}
                          defaultValue={p.address}
                        />
                        <span
                          onClick={() => {
                            handleAdd(p.address);
                          }}
                          style={{ color: "blue", cursor: "pointer" }}
                        >
                          {p.address}
                        </span>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
          {
              console.log(JSON.stringify(center))

          }
          {console.log('---', center[0].lat)}

          {`Latitud: ${center[0].lat} - Longitud ${center[0].lng}`}
          <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyC7fn14KqyerEmWYRAk9KAIcdn4y6jSS4M' }}
              defaultCenter={center[0]}
              defaultZoom={13}
            >
              <AnyReactComponent
                lat={center[0].lat}
                lng={center[0].lng}
                text="My Marker"
              />
            </GoogleMapReact>
        </div>
      </div>
    </div>
  );
}

export default Home;

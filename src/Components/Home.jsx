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
  const [count, setCount] = useState("");
  const [address, setAddress] = useState([]);
  const [center, setCenter] = useState([]);
  const [lat, setLat] = useState([]);

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
                long: coordenadas.geometry.location.lng,
              };
            })
          );
        })
        .catch((err) => {
          return console.log(err, address);
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
                            setCount(p.address);
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
          {address ? `Dirección: ${address}` : "Esperando dirección... "}
        </div>
      </div>
      <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC7fn14KqyerEmWYRAk9KAIcdn4y6jSS4M' }}
          defaultCenter={center}
          defaultZoom={13}
        >
          <AnyReactComponent
            lat={11.0168}
            lng={76.9558}
            text="My Marker"
          />
        </GoogleMapReact>
    </div>
  );
}

export default Home;

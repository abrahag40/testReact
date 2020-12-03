import React, { Component, useState, useEffect, useRef } from "react";
// import people from '../people.js'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { JsonToTable } from "react-json-to-table";

var peopleJSON = localStorage.getItem("people");

function Home() {

    let iAddress = useRef([React.createRef(), React.createRef()]);
    const [count, setCount] = useState('');
    const [address, setAddress] = useState([])

    useEffect(() => {
        iAddress.current[0].current.focus()
      }, []);
    
    useEffect(() => {
        const location = {
            address: count,
            lat: 0,
            lng: 0,
          };
        setAddress(location)
    }, [count])
    
  return (
    <div className="container">
      <div className="d-flex justify-content-center m-5">
        <h1>Registro de Personas</h1>
      </div>
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
                    <input ref={iAddress.current[i]} type="text" style={{ display: "none" }} defaultValue={p.address}/>
                    <span onClick={() => setCount(p.address)} style={{ color: "blue", cursor: "pointer" }} > {p.address} </span>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      {address.address ? (`Dirección: ${address.address}`) : ('Esperando dirección... ')}
      {console.log(address)}
      {/* <Map google={this.props.google} zoom={14}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map> */}
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAQPnZejBYRD2iypvAUcMLNAVQZ8zlOR1M",
})(Home);

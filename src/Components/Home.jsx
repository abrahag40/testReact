import React from 'react'
// import people from '../people.js'
import { JsonToTable } from "react-json-to-table";

var peopleJSON = localStorage.getItem('people');

function Home() {
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
                { JSON.parse(peopleJSON).map(p => {
                    return (
                        <>
                            <tr>
                            <td>{p.name}</td>
                            <td>{p.email}</td>
                            <td>{p.dateBirth}</td>
                            <td>{p.address}</td>  
                            </tr>                          
                        </>
                    )
                })}
                </tbody>
            </table>

            {/* <JsonToTable json={Personas} /> */}
        </div>
    )
}

export default Home

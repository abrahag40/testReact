import React, { useState, useRef } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import people from "../people.js";

registerLocale("es", es);

function Registro() {
  var peopleJSON = localStorage.getItem("people");
  let newpeopleJSON = JSON.parse(peopleJSON);

  var dateFormat = require("dateformat");

  const iName = useRef(null);
  const iEmail = useRef(null);
  const iFechaNacimiento = useRef(null);
  const iDireccion = useRef(null);

  const [startDate, setStartDate] = useState(new Date());

  const sendData = () => {
    const name = iName.current.value;
    const email = iEmail.current.value;
    const fechaNacimiento = dateFormat(startDate, "dd/mm/yyyy");
    const direccion = iDireccion.current.value;

    if (name === "") {
      alert("Favor de llenar el nombre");
      return;
    } else if (email === "") {
      alert("Favor de llenar email");
      return;
    } else if (fechaNacimiento === "") {
      alert("Favor de llenar fecha");
      return;
    } else if (direccion === "") {
      alert("Favor de llenar dirección");
    } else {
        newpeopleJSON = [
        ...newpeopleJSON,
        {
          id: 10,
          name: name,
          email: email,
          address: direccion,
          dateBirth: fechaNacimiento
        },
      ];
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("fechaNacimiento", fechaNacimiento);
      localStorage.setItem("direccion", direccion);
      localStorage.removeItem("people");
      localStorage.setItem("people", JSON.stringify(newpeopleJSON));
      alert("Usuario agregado");
    }
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center mt-5">
        <h1>Registro de empleado</h1>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="form-group row mt-5">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
              Nombre
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="nombre"
                ref={iName}
                required
              />
            </div>
          </div>
          <div className="form-group row mt-5">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="staticEmail"
                ref={iEmail}
                required
              />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="form-group row mt-5">
            <label htmlFor="staticEmail" className="col-sm-4 col-form-label">
              Fecha de nacimiento
            </label>
            <div className="col-sm-5 justify-content-center ml4">
              <DatePicker
                className="form-control "
                selected={startDate}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                onChange={(date) => setStartDate(date)}
                dateFormat="dd-MMMM-yyyy"
                ref={iFechaNacimiento}
              />
            </div>
          </div>
          <div className="form-group row mt-5">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
              Dirección
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="address"
                ref={iDireccion}
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex pt-5 justify-content-center">
          <button type="submit" className="btn btn-primary" onClick={sendData}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registro;

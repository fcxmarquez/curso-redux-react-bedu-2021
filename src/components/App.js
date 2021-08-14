import React, { Component } from "react";

class App extends Component {
  constructor() {
    super(); /* Super hace que se herede de component */
    this.state = {
      users: [
        {
          nombre: "Rodolgo",
          correo: "Rodolgo@saldivar.com",
          enlace: "Rodolfo.com",
        },
        {
          nombre: "Platzi",
          correo: "platzi@platzi.com",
          enlace: "platzi.com",
        },
      ],
    };
  }

  putRows = () => (
    this.state.users.map((item) => (
      <tr>
        <td>{item.nombre}</td>
        <td>{item.correo}</td>
        <td>{item.enlace}</td>
      </tr>
    ))
  )

  render() {
    return (
      <div className="margin">
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Enlace</th>
            </tr>
          </thead>
          <tbody>{this.putRows()}</tbody>
        </table>
      </div>
    );
  }
}

export default App;

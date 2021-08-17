import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import * as usersActions from "../../actions/usersActions"; /* El asterisco significa que importara todos las funciones de ese lugar y lo llamara como un objeto userActions */

class Users extends Component {
  componentDidMount() {
    /* const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.setState({
      users: response.data,
    }); */
    this.props.getAll();
  }

  putRows = () =>
    this.props.users.map((item) => (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.website}</td>
      </tr>
    ));

  render() {
    console.log(this.props);
    return (
      <div>
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
const mapStateToProps = (state) => {
  /* Este reducer proviene del combineReducer */
  return state.usersReducer;
};

export default connect(mapStateToProps, usersActions)(Users);
// En el primer parametro es para el state que el provedor le entregara a los usuarios
//El segundo es todo los metodos (los actions) que por medio de ellos entregaremos informacion de nuestro componente a redux

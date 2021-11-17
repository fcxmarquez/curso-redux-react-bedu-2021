import React, { Component } from "react";
import { connect } from "react-redux";
import * as usersActions from "../../actions/usersActions"; /* El asterisco significa que importara todos las funciones de ese lugar y lo llamara como un objeto userActions */
import Spinner from "../general/Spinner";
import Fatal from "../general/Fatal";
import Table from "./Table";

class Users extends Component {
  componentDidMount() {
    if (!this.props.users.length) {
      this.props.getAll();
    }
  }

  putContent = () => {
    if (this.props.loading) {
      return <Spinner />;
    }

    if (this.props.error) {
      return <Fatal msg={this.props.error} />;
    }

    return <Table />;
  };

  render() {
    return (
      <>
        <h1>Users</h1> {this.putContent()}
      </>
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

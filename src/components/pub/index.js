import React, { Component } from "react";
import { connect } from "react-redux";
import * as usersActions from "../../actions/usersActions";
import * as publicationsActions from "../../actions/publicationsActions";

class Publications extends Component {
  componentDidMount() {
    if (!this.props.usersReducer.users.length) {
      this.props.getAll();
    } /* con esto evitamos volver a traer los props en caso de que ya existan porque provenimos de una pestaña donde ya los cargo */
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Publicaciones de</h1>
        {this.props.match.params.key}
      </div>
    ); /* Como sabemos este match.params proviene de react-router y nos sirve para mostrar la direccion de url que coincida con la direccion key */
  }
}

const mapStateToProps = ({ usersReducer, publicationsReducer }) => {
  return {
    usersReducer,
    publicationsReducer,
  };
};

const mapDispatchToProps = {
  ...usersActions,
  ...publicationsActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Publications);

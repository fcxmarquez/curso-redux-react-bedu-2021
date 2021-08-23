import React, { Component } from "react";
import { connect } from "react-redux";
import * as usersActions from "../../actions/usersActions";
import * as publicationsActions from "../../actions/publicationsActions";

const { getAll: usersGetAll } = usersActions;
const { getUser: publicationsGetUser } = publicationsActions;

class Publications extends Component {
  async componentDidMount() {
    /* Lo hacemos asincrono para asegurarnos de que primero se ejecute traer todos los usuarios y despues sus publicaciones */
    if (!this.props.usersReducer.users.length) {
      await this.props.usersGetAll();
    } /* con esto evitamos volver a traer los props en caso de que ya existan porque provenimos de una pestaña donde ya los cargo */
    this.props.publicationsGetUser(this.props.match.params.key);
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
  usersGetAll,
  publicationsGetUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Publications);

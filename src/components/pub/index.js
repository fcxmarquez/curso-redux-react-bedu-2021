import React, { Component } from "react";
import { connect } from "react-redux";
import * as usersActions from "../../actions/usersActions";
import * as publicationsActions from "../../actions/publicationsActions";
import Loading from "../general/Spinner";
import Fatal from "../general/Fatal";

const { getAll: usersGetAll } = usersActions;
const { getUser: publicationsGetUser, openClose } = publicationsActions;

class Publications extends Component {
  async componentDidMount() {
    /* Lo hacemos asincrono para asegurarnos de que primero se ejecute traer todos los usuarios y despues sus publicaciones */
    const {
      usersGetAll,
      publicationsGetUser,
      match: {
        params: { key },
      },
    } = this.props;

    if (!this.props.usersReducer.users.length) {
      await usersGetAll();
    } /* con esto evitamos volver a traer los props en caso de que ya existan porque provenimos de una pestaña donde ya los cargo */
    if (this.props.usersReducer.error) {
      return;
    }
    if (!("keysPublications" in this.props.usersReducer.users[key])) {
      publicationsGetUser(key);
    } /* En caso de que no este esa informacion, la completamos, asi evitamos la sobrescritura */
  }

  putUser = () => {
    const {
      usersReducer,
      match: {
        params: { key },
      },
    } = this.props;

    if (usersReducer.error) {
      return <Fatal msg={usersReducer.error} />;
    }

    if (!usersReducer.users.length || usersReducer.loading) {
      return <Loading />;
    }

    const name = usersReducer.users[key].name;
    return <h1>Publicaciones de {name}</h1>;
  };

  putPublications = () => {
    const {
      usersReducer,
      usersReducer: { users },
      publicationsReducer,
      publicationsReducer: { publications },
      match: {
        params: { key },
      },
    } = this.props;

    if (!users.length) return "";
    if (usersReducer.error) return "";
    if (publicationsReducer.loading) {
      return <Loading />;
    }
    if (publicationsReducer.error) {
      return <Fatal msg={publicationsReducer.error} />;
    }
    if (!publications.length)
      return; /* En caso que no haya publicaciones, no hagas nada, para esperar hasta que se cargen estos */
    if (!("keysPublications" in users[key])) return;

    const { keysPublications } = users[key];

    return this.showInfo(publications[keysPublications], keysPublications);
  };

  showInfo = (publications, keyPublication) =>
    publications.map((item, commentKey) => (
      <div
        className="pub-title"
        key={item.id}
        onClick={() => this.props.openClose(keyPublication, commentKey)}
      >
        <h2>{item.title}</h2>
        <h3> {item.body} </h3>
        {item.open ? "open" : "cerrado"}
      </div>
    ));

  render() {
    console.log(this.props);
    return (
      <div>
        {this.putUser()}
        {this.putPublications()}
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
  openClose,
};

export default connect(mapStateToProps, mapDispatchToProps)(Publications);

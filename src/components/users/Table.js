import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Table = (props) => {
  const putRows = () =>
    props.users.map((item, key) => (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.website}</td>
        <td>
          <Link to={`/pub/${key}`}>
            <div className="eye-solid icon"></div>
          </Link>
        </td>
      </tr>
    ));

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Enlace</th>
        </tr>
      </thead>
      <tbody>{putRows()}</tbody>
    </table>
  );
};

const mapStateToProps = (state) => {
  return state.usersReducer;
};

export default connect(mapStateToProps, null)(Table);

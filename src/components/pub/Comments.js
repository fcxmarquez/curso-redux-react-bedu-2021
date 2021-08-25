import React from "react";
import Spinner from "../general/Spinner";
import Fatal from "../general/Fatal";
import { connect } from "react-redux";

const Comments = (props) => {
  if (props.Loading) {
    return <Spinner />;
  }

  if (props.Error) {
    return <Fatal />;
  }

  const putComments = () => {
    props.comments.map((item) => (
      <li>
        <b>
          <u>{item.email}</u>
        </b>
        <br />
        {item.body}
      </li>
    )); /* Esta funcion no pude ejecutarla directamente en el return */
  };

  return (
    <ul>
      {props.comments.map((item) => (
        <li>
          <b>
            <u>{item.email}</u>
          </b>
          <br />
          {item.body}
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = ({ publicationsReducer }) => publicationsReducer;

export default connect(mapStateToProps)(Comments);

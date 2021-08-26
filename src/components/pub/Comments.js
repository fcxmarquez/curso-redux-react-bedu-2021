import React from "react";
import Spinner from "../general/Spinner";
import Fatal from "../general/Fatal";
import { connect } from "react-redux";

const Comments = (props) => {
  if (props.commentError) {
    return <Fatal msg={props.commentError} />;
  }

  if (props.commentLoading && !props.comments.length) {
    return <Spinner />;
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
        <li key={item.id}>
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

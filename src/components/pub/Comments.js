import React from "react";
import Spinner from "../general/Spinner";
import Fatal from "../general/Fatal";
import { connect } from "react-redux";

const Comments = (props) => {
  if (props.loading) {
    return <Spinner />;
  }

  if (props.error) {
    return <Fatal />;
  }

  console.log(props);
  const putComments = () => {
    props.comments.map((item) => (
      <li>
        <b>
          <u>{item.email}</u>
        </b>
        <br />
        {item.body}
      </li>
    ));
  };

  return <ul>{putComments()}</ul>;
};

const mapStateToProps = ({ publicationsReducer }) => publicationsReducer;

export default connect(mapStateToProps)(Comments);

import React from "react";
import { connect } from "react-redux";
import * as tasksActions from "../../actions/tasksActions";

class Tasks extends React.Component {
  componentDidMount() {
    this.props.getAll()
  }

  render() {
    console.log(this.props);
    return <div>Tareas</div>;
  }
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer;

export default connect(mapStateToProps, tasksActions)(Tasks);

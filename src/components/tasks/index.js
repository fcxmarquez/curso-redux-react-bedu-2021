import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as tasksActions from "../../actions/tasksActions";
import Spinner from "../general/Spinner";
import Fatal from "../general/Fatal";
class Tasks extends React.Component {
  componentDidMount() {
    if (!Object.keys(this.props.tasks).length) {
      this.props.getStateTasks();
    }
  }

  componentDidUpdate() {
    if (!Object.keys(this.props.tasks).length) {
      this.props.getStateTasks();
    }
  } /* Este ciclo permite volver a traer los mismos elementos en caso de que se actualice algun tipo de informacion */

  showInfo = () => {
    const { tasks, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <Fatal msg={error} />;
    }

    return Object.keys(tasks).map((item) => (
      <div key={item}>
        <h2>Usuario {item}</h2>
        <div className="tasks-container">{this.putTasks(item)}</div>
      </div>
    ));
  };

  putTasks = (userId) => {
    const { tasks, changeCheck, remove } = this.props;
    const forUser = { ...tasks[userId] };

    return Object.keys(forUser).map((item) => (
      <div key={item}>
        <input
          type="checkbox"
          defaultChecked={forUser[item].completed}
          onChange={() => changeCheck(userId, item)}
        />
        {forUser[item].title}
        <button className="m-left">
          <Link to={`/tasks/save/${userId}/${item}`}>Edit</Link>
        </button>
        <button className="m-left" onClick={() => remove(item)}>
          Remove
        </button>
      </div>
    ));
  };

  render() {
    console.log(this.props.tasks);
    return (
      <div>
        <button>
          <Link to={"/tasks/save"}>Add</Link>
        </button>
        {this.showInfo()}
      </div>
    );
  }
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer;

export default connect(mapStateToProps, tasksActions)(Tasks);

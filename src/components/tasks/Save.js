import React from "react";
import { connect } from "react-redux";
import * as tasksActions from "../../actions/tasksActions";
import Spinner from "../general/Spinner";
import Fatal from "../general/Fatal";
import { Redirect } from "react-router";

class Save extends React.Component {
  componentDidMount() {
    const {
      match: {
        params: { userParamsId, taskParamsId },
      },
      tasks,
      changeUserId,
      changeUserTitle,
      cleanForm
    } = this.props;

    if (userParamsId && taskParamsId) {
      const task = tasks[userParamsId][taskParamsId];
      changeUserId(task.userId);
      changeUserTitle(task.title);
    }else {
      cleanForm();
    }
  }

  handleUserId = (e) => {
    this.props.changeUserId(e.target.value);
  };

  handleTitle = (e) => {
    this.props.changeUserTitle(e.target.value);
  };

  handleSave = () => {
    const {
      match: {
        params: { userParamsId, taskParamsId },
      },
      userId,
      title,
      addTask,
      editTask,
      tasks,
    } = this.props;

    const newTask = {
      userId: userId,
      title: title,
      completed: false,
    };

    if (userParamsId && taskParamsId) {
      const task = tasks[userParamsId][taskParamsId];
      const editedTask = {
        ...newTask,
        completed: task.completed,
        id: task.id,
      };
      editTask(editedTask);
    } else {
      addTask(newTask);
    }

  };

  handleDisabled = () => {
    const { userId, title, loading } = this.props;

    if (loading) {
      return true;
    }

    if (!userId || !title) {
      return true;
    }

    return false;
  };

  showAction = () => {
    const { error, loading } = this.props;
    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <Fatal msg={"error"} />;
    }
  };

  render() {
    return (
      <div>
        {this.props.return && <Redirect to="/tasks" />}
        <h1>Save Task</h1>
        User id:
        <input
          type="number"
          value={this.props.userId}
          onChange={this.handleUserId}
        />
        <br />
        <br />
        Title:
        <input
          type="text"
          value={this.props.title}
          onChange={this.handleTitle}
        />
        <br />
        <br />
        <button onClick={this.handleSave} disabled={this.handleDisabled()}>
          Save
        </button>
        {this.showAction()}
      </div>
    );
  }
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer;

export default connect(mapStateToProps, tasksActions)(Save);

import React from "react";
import { connect } from "react-redux";
import * as tasksActions from "../../actions/tasksActions";
import Spinner from "../general/Spinner";
import Fatal from "../general/Fatal";
import { Redirect } from "react-router";

class Save extends React.Component {
  handleUserId = (e) => {
    this.props.changeUserId(e.target.value);
  };

  handleTitle = (e) => {
    this.props.changeUserTitle(e.target.value);
  };

  handleSave = () => {
    const { userId, title } = this.props;
    const newTask = {
      userId: userId,
      title: title,
      completed: false,
    };
    this.props.newTask(newTask);
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
    console.log(this.props);
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

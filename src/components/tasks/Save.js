import React from "react";
import { connect } from "react-redux";
import * as tasksActions from "../../actions/tasksActions";

class Save extends React.Component {
  handleUserId = (e) => {
    this.props.changeUserId(e.target.value);
  };

  handleTitle = (e) => {
    this.props.changeUserTitle(e.target.value);
  };

  render() {
    return (
      <div>
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
        <button>Save</button>
      </div>
    );
  }
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer;

export default connect(mapStateToProps, tasksActions)(Save);

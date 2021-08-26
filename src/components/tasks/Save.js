import React from "react";

class Save extends React.Component {
  render() {
    return (
      <div>
        <h1>Save Task</h1>
        User id:
        <input type="number" />
        <br />
        <br />
        Title:
        <input type="text" />
        <br />
        <br />
        <button>Save</button>
      </div>
    );
  }
}

export default Save;

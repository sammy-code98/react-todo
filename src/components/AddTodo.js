import React, { Component } from "react";
export class AddTodo extends Component {
  state = {
    title: "",
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    // console.log('submited');
    e.preventDefault();

    if (this.state.title !== "") {
      this.props.addTodo(this.state.title);
    }
    // pass the addTodo mthd as props to the app comp
    // this clears the input filed after submit
    this.setState({ title: "" });
  };
  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        style={{ display: "flex", padding: "20px" }}
      >
        <input
          type="text"
          name="title"
          placeholder="Please Add Todo"
          value={this.state.title}
          style={{
            outline: "none",
            flex: "10",
            padding: "2px  7px",
            marginRight: "12px",
            marginTop: "20px",
            border: "1px solid  grey",
            borderRadius: "12px",
          }}
          onChange={this.onChange}
        />{" "}
        <input
          type="submit"
          value="Add"
          className="btn"
          style={{
            outline: "none",
            flex: "1",
            marginTop: "20px",
            borderRadius: "12px",
            font: "10px",
          }}
        />
      </form>
    );
  }
}

export default AddTodo;

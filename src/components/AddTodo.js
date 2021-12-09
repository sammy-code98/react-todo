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
        style={{ }}
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

// import React, { useState, useEffect } from "react";

// function AddTodo(props) {
//   // styles
//   const styleBtn = {
//     outline: "none",
//     flex: "1",
//     marginTop: "20px",
//     borderRadius: "12px",
//     font: "10px",
//   };
//   const input = {
//     outline: "none",
//     flex: "10",
//     padding: "2px  7px",
//     marginRight: "12px",
//     marginTop: "20px",
//     border: "1px solid  grey",
//     borderRadius: "12px",
//   };
//   const formStyle = {
//     display: "flex",
//     padding: "20px",
//   };

//   // state
//   const [title, setTitle] = useState("");
//   const onchange = (e) => setTitle({ [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (title !== "") {
//       props.addTodo(title);
//     }
//     setTitle({ title: "" });
//     console.log("kekek");
//   };
//    useEffect(()=>{
// console.log('keilosoo');
//    },[])
//   return (
//     <div>
//       <form style={formStyle} onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="title"
//           placeholder="Please Add Todo"
//           style={input}
//           onChange={onchange}
//         />{" "}
//         <input type="submit" value="Add" className="btn" style={styleBtn} />
//       </form>
//     </div>
//   );
// }

// export default AddTodo;

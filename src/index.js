import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ToDoList from "./ToDoList";
  
var destination = document.querySelector("#container")
  
class List extends React.Component {
    render() {
        return (
            <div className="inner">
                <ToDoList/>
            </div>
        )
    }
}

ReactDOM.render(
    <List />
    ,destination
);
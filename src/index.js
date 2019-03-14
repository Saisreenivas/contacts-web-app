import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ContactsList from "./ContactsList";
  
var destination = document.querySelector("#container")
  
class List extends React.Component {
    render() {
        return (
            <div className="inner">
                <ContactsList/>
            </div>
        )
    }
}

ReactDOM.render(
    <List />
    ,destination
);
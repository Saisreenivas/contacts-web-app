import React, { Component } from "react";
 
class ContactItems extends Component {
    constructor(props) {
        super(props);
     
        this.createTasks = this.createTasks.bind(this);
      }
     
      delete(key) {
        this.props.delete(key);
      }


    createTasks(item) {
        return (
        <tr  key={item.key}>
            <td>{item.name}</td>
            <td>{item.number}</td>
            <td><button className="delBtn" onClick={() => this.delete(item.key)} 
            key={item.key}>DELETE</button></td>
        </tr>
        // return <li onClick={() => this.delete(item.key)} 
        //             key={item.key}>{item.name}</li>
        );
      }
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <table className="theList">
        <thead>
            <tr>
                <td>NAME</td><td>PHONE</td><td></td>
            </tr>
        </thead>
        <tbody>
          {listItems}
        </tbody>
      </table>
    );
  }
};
 
export default ContactItems;
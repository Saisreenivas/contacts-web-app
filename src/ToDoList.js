import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";
 
class TodoList extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      items: [],
      page: 'allItems',
      name: '',
      number: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
   
  handleChange(e){
    this.setState({[e.target.id]: e.target.value});
  }
  addItem(e) {
    if (this._inputName.value !== "") {
      var newItem = {
        name: this._inputName.value,
        number: this._inputNumber.value,
        key: Date.now()
      };
   
      this.setState((prevState) => {
        return { 
          items: prevState.items.concat(newItem) 
        };
      });
     
      this._inputName.value = "";
      this._inputNumber.value = "";
      this.setState({page: 'allItems', name: '', number:''});
    }
     
    console.log(this.state.items);
       
    e.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });
   
    this.setState({
      items: filteredItems
    });
  }

  newPage(e){


    e.preventDefault();
  }
  
  render() {
    if(this.state.page === 'allItems'){
      return (
        <div className="todoListMain">
          <div className="top-bar">
            <p>PHONE DIRECTORY</p>
          </div>
          <div className="header">
          <button className='addBtn'
          // onClick={() => this.delete(item.key)}
          onClick={() => this.setState({
            page: 'addPage'
            })}>ADD</button>
          
          </div>
          <TodoItems entries={this.state.items} delete={this.deleteItem}/>
        </div>
      );
          }
    else if(this.state.page === 'addPage'){
      return (
        <div className="todoListMain">
          <div className="top-bar">
            <p>ADD SUBSCRIBER</p>
          </div>
          <div className="header">
            <button className="backBtn"
            // onClick={() => this.delete(item.key)}
            onClick={() => this.setState({
              page: 'allItems'
              })}>BACK</button>
              <form onSubmit={this.addItem}>
              <p>Name:</p>
              <input 
              id = "name"
              onChange={this.handleChange}
              ref={(a) => this._inputName = a} 
                      >
                </input>
              <p>Phone Number:</p>
              <input 
              id = "number"
              onChange={this.handleChange} 
              ref={(a) => this._inputNumber = a} 
                       >
                </input>
                
                <h4>Subscriber to be Added:</h4>
                <p>Name: {this.state.name}</p>
                <p>Number: {this.state.number}</p>
                <button className="addBtn" type="submit">ADD</button>
              </form> 
            </div>
        </div>
      )
    }
  }
}
 
export default TodoList;
import React, { Component } from 'react';
import TodoItem from './TodoItem';



class Todos extends Component {

  
  render() {
  let todoItems;
  if(this.props.todos){
    todoItems = this.props.todos.map(todo => {
      //console.log(project);
      return(
        <TodoItem  key={todo.title} todo={todo} />
      );
    });
  }

    return (
      <div className="Todos">
        <br/>
         <h3>Todo List</h3>
         {todoItems}
      </div>
    );
  }
}
Todos.prototypes ={
}


export default Todos;
 
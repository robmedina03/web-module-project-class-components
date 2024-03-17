import React from 'react'
import TodoList from './TodoList'




export default class App extends React.Component {
 constructor(props) {
  super(props);
  this.state ={
    todos:[],
    inputValue:'',
  }
 }

 handleInputChange= (event) =>{
  this.setState({inputValue:event.target.value})
 }

 handleSubmit = (e) =>{
  e.preventDefault();

  if(this.state.inputValue.trim() !== ''){

    const newTodo = {
      id: Date.now(),
      task: this.state.inputValue,
      completed: false,
    };

    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
      inputValue: '',
    }))
  }
 }

 toggleTodo =(id) =>{

  this.setState((prevState) => ({
    todos:prevState.todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo)
  }))
 }

      clearCompleted = () => {
        this.setState((prevState) => ({
          todos:prevState.todos.filter((todo) => !todo.completed)
        }))
      }

  render() {
    return (
      <div>
       <h2>Todos:</h2>
      <TodoList todos={this.state.todos} toggleTodo= {this.toggleTodo} />
      <form onSubmit={this.handleSubmit}>

      <input placeholder='type todo'
      value={this.state.inputValue}
      onChange={this.handleInputChange} />

      <button type= "submit">Submit</button>
      </form>
      <button onClick={this.clearCompleted}>clear Completed</button>
      </div>
    )
  }
}

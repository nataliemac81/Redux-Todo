import React, { Component } from "react"
import {connect} from "react-redux"
import Todo from "./Todo"
import { ADD_TODO, TOGGLE_TODO } from "../actions";

class TodoList extends Component{
    constructor(props) {
			super(props)
			this.state = {
				task: ""
			}
		}

		handleSubmit = (e) => {
			e.preventDefault();
			this.props.dispatch({
				type: ADD_TODO,
				task: this.state.task
			})
			e.target.reset();
		}

		handleChange = (e) => {
			this.setState({
				[e.target.name]: e.target.value
			})
		}

		toggleTodo = (id) => {
			this.props.dispatch({
				type: TOGGLE_TODO,
				id: id
			})
		}
		
		render() {
			let todos = this.props.todos.map((value, index) => (
				<Todo toggleTodo={this.toggleTodo} task={value.task} key={index.id}/>
				))
			return(
				<div>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="task"> What needs to get done? </label>
					<input type="text" name="task" id="task" onChange={this.handleChange}/>
					<button>Add a Todo</button>
				</form>
					<ul>{todos}</ul>
				</div>
			)
		}
}

const mapStateToProps = state => {
  return {
		todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoList)
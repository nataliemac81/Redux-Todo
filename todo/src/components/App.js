import React, { Component } from 'react';
import './App.css';
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

class App extends Component {
  render() {
		return (
			<div className="App">
				<h1>React-Redux Todo List</h1>
				<AddTodo />
    		<VisibleTodoList />
    		<Footer />
			</div>
		);
	}
}

export default App;


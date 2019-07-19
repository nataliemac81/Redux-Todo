import { ADD_TODO, TOGGLE_TODO } from "../actions/index"

const initialState = {
	todos: [],
	id: 0
}

export default function rootReducer(state = initialState, action) {
	switch(action.type) {
		case ADD_TODO:
			let newState = {...state}
			newState.id++
			return {
				...newState,
				todos: [...newState.todos, {task: action.task, id: newState.id}]
			}
		case TOGGLE_TODO:
			let todos = state.todos.filter(value => value.id !== action.id)
			return {...state, todos}
		default:
			return state
	}
}
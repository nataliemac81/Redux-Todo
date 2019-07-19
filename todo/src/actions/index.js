export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';


export function addTodo(task) {
	return {
		type: ADD_TODO, 
		task
	}
}

export function toggleTodo(id) {
	return {
		type: TOGGLE_TODO, 
		id
	}
}
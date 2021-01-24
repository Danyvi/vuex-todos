import axios from 'axios';

const state = {
	todos: []
};

const getters = {
	getTodos: (state) => state.todos
};

const actions = {
	async fetchTodos({ commit }) {
		const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    console.log("🚀 ~ file: todos.js ~ line 14 ~ fetchTodos ~ response.data", response.data)
		commit('setTodos', response.data)
	},
	async addTodo({ commit }, title) {
		const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
			title,
			completed: false
		})
		
		commit('newTodo', response.data)
	},
	async deleteTodo({ commit }, id) {
		await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

		commit('removeTodo', id)
	},
	async filterTodos({ commit },e) {
		// get selected number
		const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);

		const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);

		commit('setTodos', response.data)
	},
	async updateTodo({ commit }, updatedTodo) {
		const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${ updatedTodo.id }`, updatedTodo);

		commit('mUpdateTodo', response.data)
	}
};

const mutations = {
	setTodos: (state, todos) => (state.todos = todos),
	newTodo: (state, todo) => (state.todos.unshift(todo)),
	removeTodo: (state, id) => (state.todos = state.todos.filter( todo => todo.id !== id)),
	mUpdateTodo: (state, updatedTodo) => {
		const index = state.todos.findIndex( todo => todo.id === updatedTodo.id )

		if (index !== -1) {
			state.todos.splice(index,1, updatedTodo)
		}
	} 
};

export default {
	state: state,
	getters: getters,
	actions: actions,
	mutations: mutations
}
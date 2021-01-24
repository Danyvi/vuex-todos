<template>
	<div>
		<h3>Todos</h3>

		<div class="legend">
			<span>Double Click To Mark as Complete</span>
			<span>
				<span class="incomplete-box"></span> = Incomplete
			</span>
			<span>
				<span class="complete-box"></span> = Complete
			</span>
		</div>

		<div class="todos">
			<div 
				v-for="todo in getTodos" :key="todo.id" 
				class="todo"
				@dblclick="onDblClick(todo)"
				:class="{'is-complete': todo.completed}"
			>
				{{ todo.title }}
				<i 
					class="fas fa-trash-alt"
					@click="deleteTodo(todo.id)"
				></i>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	name: 'Todos',
	computed: {
		...mapGetters(['getTodos']),
	},
	methods: {
		...mapActions([
				'fetchTodos',
				'deleteTodo',
				'updateTodo'
		]),
		onDblClick(todo) {
			const updtTodo = {
				id: todo.id,
				title: todo.title,
				completed: !todo.completed
			}

			this.updateTodo(updtTodo);
		}
	},
	created() {
		this.fetchTodos();
	}

}
</script>

<style scoped>
.todos {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 1rem;
}

.todo {
	border: 1px solid #ccc;
	background: #41b883;
	color: black;
	padding: 1rem;
	border-radius: 5px;
	text-align: center;
	position: relative;
	cursor: pointer;
}

i {
	position: absolute;
	bottom: 10px;
	right: 10px;
	color: #fff;
	cursor: pointer;
}

.legend {
	display: flex;
	justify-content: space-around;
	margin-bottom: 1rem;
}

.complete-box {
	display: inline-block;
	width: 10px;
	height: 10px;
	background: #35495e;
}

.incomplete-box {
	display: inline-block;
	width: 10px;
	height: 10px;
	background: #41b883;
}

.is-complete {
	background: #35495e;
	color: #fff;
}

@media (max-width: 500px) {
	.todos {
		grid-template-columns: 1fr;
	}
}

</style>
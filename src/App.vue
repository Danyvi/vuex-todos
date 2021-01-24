<template>
  <div id="app">
		<div class="container">
			<add-todo></add-todo>
			<filter-todos></filter-todos>
			<todos></todos>
		</div>
  </div>
</template>

<script>
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import FilterTodos from './components/FilterTodos';


export default {
  name: 'App',
  components: {
		Todos,
		AddTodo,
		FilterTodos
  }
}
</script>

<st
    FilterTodosyle>
body {
	line-height: 1.6;
	/* background: #e8f7f0; */
	background: black;
	color: white;
}

.container {
	max-width: 1100px;
	margin: auto;
	overflow: auto;
	padding: 0 2rem;
}
</style>

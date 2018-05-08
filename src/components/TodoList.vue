<template>
  <div id="app">
    <form @submit.prevent="addTodo">
      <input type="text" v-model="text">
      <button>Add todo</button>
    </form>
    <ul>
      <li 
        :key="todo.id" 
        @click="deleteTodo(todo.id)" 
        v-for="todo in todos">{{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    text: '',
    todos: [],
  }),
  methods: {
    addTodo() {
      this.todos.push({
        id: Date.now(),
        text: this.text
      }) 
      this.text = ''
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>

<template>
  <div id="app">
    <TodoHeader :addTodo="addTodo"/>
    <TodoMain :todos='todos' :delTodo="delTodo"/>
    <TodoFooter :todos='todos' :delCheck="delCheck" :checkAll="checkAll"/>
  </div>
</template>

<script>
import TodoFooter from '@/components/todoFooter'
import TodoMain from '@/components/todoMain'
import TodoHeader from '@/components/todoHeader'

export default {
  name: 'App',
  components: {TodoHeader, TodoMain, TodoFooter},
  data () {
    return {
      todos: JSON.parse(window.localStorage.getItem('todo_key') || '[]')
    }
  },
  watch: {
    todos: {
      deep: true,
      handler: function (value) {
        window.localStorage.setItem('todo_key', JSON.stringify(value))
      }
    }

  },
  methods: {
    addTodo (todo) {
      this.todos.unshift(todo)
    },
    delTodo (index) {
      this.todos.splice(index, 1)
    },
    delCheck () {
      this.todos = this.todos.filter(todo => !todo.complete)
    },
    checkAll (isCheck) {
      this.todos.forEach(todo => {
        todo.complete = isCheck
      })
    }
  }
}
</script>

<style>
#app {
  width: 50%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin: 160px auto;
}
</style>

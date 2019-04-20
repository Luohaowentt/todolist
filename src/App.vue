<template>
  <div id="app">
    <TodoHeader :addTodo="addTodo"/>
    <TodoMain :todos='todos' :delTodo="delTodo"/>
    <TodoFooter :todos='todos'/>
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
      todos: [
        {title: '吃饭', complete: true},
        {title: '睡觉', complete: false},
        {title: '玩游戏', complete: true}
      ]
    }
  },
  methods: {
    addTodo (todo) {
      this.todos.unshift(todo)
    },
    delTodo (index) {
      this.todos.splice(index, 1)
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

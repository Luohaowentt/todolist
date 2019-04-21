<template>
<div class="main">
  <el-card class="box-card">
    <span v-if="todos.length===0"> 没有待做事件，请添加</span>
    <TodoItem v-for="(todo,index) in todos" :key="index" :todo="todo" :index="index" :delTodo="delTodo" class="text item" />
  </el-card>
</div>
</template>

<script>
import TodoItem from '@/components/todoItem'
export default {
  name: 'todoMain',
  components: {TodoItem},
  props: {
    todos: Array,
    delTodo: Function
  }
}
</script>

<style scoped>
  .main{
    margin-top: 30px;
  }

</style>

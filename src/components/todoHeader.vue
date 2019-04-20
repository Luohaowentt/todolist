<template>
<div class="header">
  <h2>Todolist</h2>
  <el-input v-model="input" placeholder="请输入内容,按回车结束" @keyup.enter.native="addItem"></el-input>
</div>
</template>

<script>
export default {
  name: 'todoHeader',
  props: {
    addTodo: Function
  },
  data () {
    return {
      input: ''
    }
  },
  methods: {
    addItem () {
      const title = this.input
      if (!title) {
        this.$message({
          message: '输入内容不能为空',
          type: 'warning'
        })
        return
      }
      const todo = {
        'title': this.input,
        'complete': false
      }
      this.addTodo(todo)
      // 清除输入
      this.input = ''
    }
  }
}
</script>

<style scoped>

</style>

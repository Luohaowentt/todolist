<template>
<div class="footer">
  <el-checkbox  name="type" class="footer-checkbox" v-model="isCheckAll"></el-checkbox>
  <span>已完成 {{checkSize}} 件，总共 {{todos.length}} 件</span>
  <el-button type="danger" plain class="btn_del_all" @click="delCheck" v-if="checkSize">清除已完成事件</el-button>
</div>
</template>

<script>
export default {
  name: 'todoFooter',
  props: {
    todos: Array,
    checkAll: Function,
    delCheck: Function
  },
  computed: {
    checkSize () {
      return this.todos.reduce((total, todo) => total + (todo.complete ? 1 : 0), 0)
    },
    isCheckAll: {
      get () {
        return this.checkSize === this.todos.length
      },
      set (value) {
        this.checkAll(value)
      }
    }
  }
}
</script>

<style scoped>
.footer{
  padding-left: 40px;
  margin-top: 20px;
}

.btn_del_all{
  float: right;
}

</style>

<template>
<div class="footer">
  <el-checkbox  name="type" class="footer-checkbox"></el-checkbox>
  <span>已完成 2 件，总共 {{todos.length}} 件</span>
  <el-button type="danger" plain class="btn_del_all">清除已完成事件</el-button>
</div>
</template>

<script>
export default {
  name: 'todoFooter',
  props: {
    todos: Array
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

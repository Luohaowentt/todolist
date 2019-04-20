<template>
  <div class="todo_item" @mouseenter="isEnter(true)" @mouseleave="isEnter(false)" >
    <div class="btn_del">
      <el-button type="danger" icon="el-icon-delete" size="mini" v-show="isShow" @click="delItem()" circle></el-button>
    </div>
    <div class="content">
      <el-checkbox  name="type" v-model="todo.complete" :checked="todo.complete"><span>{{todo.title}}</span></el-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todoItem',
  props: {
    todo: Object,
    index: Number,
    delTodo: Function
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    isEnter (enterFlag) {
      if (enterFlag) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    },
    delItem: function () {
      const {todo, index, delTodo} = this
      if (window.confirm(`确认要删除${todo.title}吗?`)) {
        delTodo(index)
      }
    }
  }
}
</script>

<style scoped>

  .btn_del{
    float: right;
    width: 15%;
  }
  .todo_item{
    padding: 0 20px;
    min-height: 30px;
    line-height: 30px;
    transition: .3s;
  }

  .content{
    width: 85%;
  }

  .todo_item:hover{
    background: beige;
  }

</style>

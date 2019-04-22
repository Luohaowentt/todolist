const TODO_KEY = 'todo_key'
export default {
  saveTodos (value) {
    window.localStorage.setItem(TODO_KEY, JSON.stringify(value))
  },
  readTodos () {
    return JSON.parse(window.localStorage.getItem(TODO_KEY) || '[]')
  }
}

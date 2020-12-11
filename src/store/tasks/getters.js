export function getTaskFromId (state) {
  return function (id) {
    return state.tasks.find(task => task.id === id)
  }
}

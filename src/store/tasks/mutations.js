export function ADD_NEW_TASK (state, payload) {
  state.tasks.push(payload)
}
export function DELETE_TASK_BY_ID (state, payload) {
  const tasks = [...state.tasks]
  state.tasks = tasks.filter(task => task.id !== payload)
}

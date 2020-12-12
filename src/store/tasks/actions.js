export function ADD_TASK ({ commit }, payload) {
  const task = {
    id: '_' + Math.random().toString(36).substr(2, 9),
    name: payload.name,
    tags: payload.tags,
    time: 60,
    color: '#' + String(Math.random().toString(16).slice(2, 8).toUpperCase()).replace(/[^0-9a-f]/gi, '')
  }
  commit('ADD_NEW_TASK', task)
}
export function DELETE_TASK ({ commit }, payload) {
  commit('DELETE_TASK_BY_ID', payload.id)
}

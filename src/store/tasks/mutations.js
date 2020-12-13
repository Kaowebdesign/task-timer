export const SET_TASKS = 'SET_TASKS'
export const ADD_NEW_TASK = 'ADD_NEW_TASK'
export const DELETE_TASK_BY_ID = 'DELETE_TASK_BY_ID'

export const mutations = {
  [`${SET_TASKS}`] (state, payload) {
    state.tasks = payload
  },
  [`${ADD_NEW_TASK}`] (state, payload) {
    state.tasks.unshift(payload)
  },
  [`${DELETE_TASK_BY_ID}`] (state, payload) {
    const tasks = [...state.tasks]
    state.tasks = tasks.filter(task => task.id !== payload)
  }
}

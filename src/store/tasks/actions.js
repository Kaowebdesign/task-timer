import { LocalStorage, Notify } from 'quasar'
import { SET_TASKS, ADD_NEW_TASK, DELETE_TASK_BY_ID } from './mutations'

export const SAVE_TASKS = 'SAVE_TASKS'
export const LOAD_TASKS = 'LOAD_TASKS'
export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'

export const actions = {
  [`${SAVE_TASKS}`] ({ state }) {
    const tasks = state.tasks
    LocalStorage.set('tasks', tasks)
  },
  [`${LOAD_TASKS}`] ({ commit }) {
    const tasks = LocalStorage.getItem('tasks')
    if (tasks.length) {
      commit(`${SET_TASKS}`, tasks)
    }
  },
  [`${ADD_TASK}`] ({ commit, dispatch }, payload) {
    return new Promise((resolve) => {
      const task = {
        id: '_' + Math.random().toString(36).substr(2, 9),
        name: payload.name,
        tags: payload.tags,
        time: payload.time,
        color: '#' + String(Math.random().toString(16).slice(2, 8).toUpperCase()).replace(/[^0-9a-f]/gi, '')
      }
      commit(`${ADD_NEW_TASK}`, task)
      dispatch(`${SAVE_TASKS}`)
      Notify.create({
        message: `Task <span style="color:#ede7f6;text-decoration:underline;">"${payload.name}"</span> successfully created!`,
        html: true
      })
      resolve(task.id)
    })
  },
  [`${DELETE_TASK}`] ({ commit, dispatch }, payload) {
    commit(`${DELETE_TASK_BY_ID}`, payload.id)
    dispatch(`${SAVE_TASKS}`)
    Notify.create('Task successfully deleted!')
  }
}

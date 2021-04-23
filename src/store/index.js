import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: {
      'ID1': {
        name: 'Task 1',
        completed: false,
        dueDate: '01-05-2021',
        dueTime: '00:00'
      },
      'ID2': {
        name: 'Task 2',
        completed: false,
        dueDate: '02-05-2021',
        dueTime: '23:00'
      },
      'ID3': {
        name: 'Task 3',
        completed: false,
        dueDate: '03-05-2021',
        dueTime: '23:59'
      }
    }
  },
  mutations: {
    updateTask(state, payload) {
      Object.assign(state.tasks[payload.id], payload.updates);
    }
  },
  actions: {
    updateTask({ commit }, payload) {
      commit('updateTask', payload)
    }
  },
  getters: {

  },
  modules: {

  }
});

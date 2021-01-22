import Vue from 'vue'
import Vuex from 'vuex'
import { myManuals } from '@/api/user'

Vue.use(Vuex)

const state = {
  numbers: [1, 2, 3],
  manualList: []
}

const mutations = {
  ADD_NUMBER(state, payload) {
    state.numbers.push(payload)
  },
  CHANGE_MANUAL_LIST(state, list) {
    state.manualList = list
  },
}

const actions = {
  addNumber(context, number) {
    context.commit('ADD_NUMBER', number)
  },
  getManualList({commit}, list) {
    return new Promise((resolve,reject)=>{
      myManuals().then((res)=>{
        resolve(res.data || [])
        commit('CHANGE_MANUAL_LIST', res.data || [])
      }).catch((err)=>{
        reject(err)
      })
    })
  },

}

const getters = {
  getNumbers(state) {
    return state.numbers
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

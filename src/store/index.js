import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const module_question = {
    state,
    getters,
    mutations,
    actions
}

// 单模块
export default new Vuex.Store(module_question)

// 多模块
// export default new Vuex.Store({
//     modules: {
//         question: module_question
//     }
// })
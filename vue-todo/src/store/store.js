import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp'

Vue.use(Vuex); // use는 프로젝트 전역에 플러그인을 설치하는 거

export const store = new Vuex.Store({
    modules: {
        todoApp
    }
});
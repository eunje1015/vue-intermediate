import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex); // use는 프로젝트 전역에 플러그인을 설치하는 거

const storage = {
    fetch() {
        const arr = [];
        if(localStorage.length > 0) {
            for(let i=0; i<localStorage.length; i++) {
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    const localItem = JSON.parse(localStorage.getItem(localStorage.key(i)));
                    //LocalStorage에 JSON.stringity로 저장했으면 parse로 꺼내와야함
                    arr.push(localItem);
                }
            }
        }
        return arr;
    },
}

export const store = new Vuex.Store({
    //store 변수는 다른 파일에서 접근할 수 있도록 export로 선언

    state: {
        todoItems: storage.fetch()
    },
    getters: {
        storedTodoItems(state) {
            return state.todoItems;
        }
    },
    mutations: {
        addOneItem(state, todoItem) {
            let obj = {completed : false, item: todoItem};
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeOneItem(state, payload) {
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1);
        },
        toggleOneItem(state, payload) {
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        clearAllItems(state){
            localStorage.clear();
            state.todoItems = [];
        }
    }
});
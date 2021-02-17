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
};

const state = {
    todoItems: storage.fetch()
};

const getters = {
    storedTodoItems(state){
        return state.todoItems;
    }
};

const mutations = {
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
    clearAllItems(state) {
        localStorage.clear();
        state.todoItems = [];
    }
};

export default {
    state,
    getters,
    mutations
}
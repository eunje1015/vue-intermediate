<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input v-on:addTodoItem="addOneItem"></todo-input>
    <todo-list v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></todo-list>
    <todo-footer v-on:clearAll="clearAllItems"></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data() {
      return {
        todoItems: []
      }
  },
  methods: {
    addOneItem(todoItem) {
        const obj = {completed : false, item: todoItem};
        localStorage.setItem(todoItem, JSON.stringify(obj)); // 로컬 스토리지에 저장, key:value
        this.todoItems.push(obj); // 로컬 스토리지와 화면의 item 동기화
    },
    removeOneItem(todoItem, index) {
        localStorage.removeItem(todoItem.item);
        this.todoItems.splice(index, 1);
        //splice : 자바스크립트 배열 methods로 특정 index부터 지울 수 있다.
    },
    toggleOneItem(todoItem, index) {
        this.todoItems[index].completed = !this.todoItems[index].completed
        // localStorage의 update 로직이 없음
        // localStorage.removeItem(todoItem.item);
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems(){
        localStorage.clear();
        this.todoItems = [];
    }
  },
  created() {
      //vue 인스턴스의 라이프 사이클 중에서 인스턴스가 생성되었을 때 불리는 훅
      if(localStorage.length > 0) {
          for(let i=0; i<localStorage.length; i++) {
              if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                  const localItem = JSON.parse(localStorage.getItem(localStorage.key(i)));
                  //LocalStorage에 JSON.stringity로 저장했으면 parse로 꺼내와야함
                  this.todoItems.push(localItem);
              }
          }
      }
  },
  components: {
    // 'TodoHeader' : TodoHeader,
    // 'TodoInput' : TodoInput,
    // 'TodoList' : TodoList,
    // 'TodoFooter' : TodoFooter
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
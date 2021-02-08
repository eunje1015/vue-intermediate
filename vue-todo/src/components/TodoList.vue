<template>
  <div>
      <ui>
          <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem" class="shadow">
            <i class="checkBtn fas fa-check" v-on:click="toggleComplete"></i>
            {{ todoItem }}
            <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
                <i class="fas fa-trash-alt"></i>
            </span>
          </li>
      </ui>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            todoItems: []
        }
    },
    methods: {
        removeTodo: function(todoItem, index) {
            //console.log(todoItem, index);
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index, 1);
            //splice : 자바스크립트 배열 methods로 특정 index부터 지울 수 있다.
        },
        toggleComplete: function() {

        }
    },
    created: function() {
        //vue 인스턴스의 라이프 사이클 중에서 인스턴스가 생성되었을 때 불리는 훅
        if(localStorage.length > 0) {
            for(let i=0; i<localStorage.length; i++) {
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    this.todoItems.push(localStorage.key(i));
                }
            }
        }
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}
li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}
.checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}
.checkBtnCompleted {
    color: #b3adad;
}
.textCompleted {
    text-decoration: line-through;
    color: #b3adad;
}
.removeBtn {
    margin-left: auto;
    color: #de4343;
}
</style>
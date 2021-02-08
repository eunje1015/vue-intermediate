<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <span class="addContainer" v-on:click="addTodo">
          <i class="fas fa-plus addBtn"></i>
      </span>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            newTodoItem: ""
        }
    },
    methods: {
        addTodo: function() {
            if(this.newTodoItem !== '') {
                let obj = {completed : false, item: this.newTodoItem};
                localStorage.setItem(this.newTodoItem, JSON.stringify(obj)); // 로컬 스토리지에 저장, key:value
                //구글 개발자 도구 - Application탭 - Local Storage로 확인
                //JSON.stringify : 자바스크립트 객체를 스트링으로 변화해서 넣어줌
                this.clearInput();
            }
        },
        clearInput: function() {
            this.newTodoItem = '';
        }
    }
}
</script>

<style scoped>
input:focus {
    outline: none;
}
.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input {
    border-style: none;
    font-size: 0.9rem;
}
.addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn {
    color: white;
    vertical-align: middle;
}

</style>
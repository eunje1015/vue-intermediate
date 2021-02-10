<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <span class="addContainer" v-on:click="addTodo">
          <i class="fas fa-plus addBtn"></i>
      </span>
    <Modal v-if="showModal" @close="showModal = false">
        <!--
        you can use custom content here to overwrite
        default content
        -->
        <h3 slot="header">경고!
            <i class="fas fa-times closeModalBtn" @click="showModal = false"></i>
        </h3>
        <div slot="body">내용을 입력하세요</div>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
    data() {
        return {
            newTodoItem: "",
            showModal: false
        }
    },
    methods: {
        addTodo() {
            if(this.newTodoItem !== '') {
                this.$emit('addTodoItem', this.newTodoItem);
                //구글 개발자 도구 - Application탭 - Local Storage로 확인
                //JSON.stringify : 자바스크립트 객체를 스트링으로 변화해서 넣어줌
                this.clearInput();
            }
            else {
                this.showModal = !this.showModal;
            }
        },
        clearInput() {
            this.newTodoItem = '';
        }
    },
    components: {
        Modal
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
.closeModalBtn {
    color: #42b983;
}
</style>
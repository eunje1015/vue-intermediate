<template>
  <header>
      <h1>
          TODO it!
      </h1>
  </header>
</template>

<script>
export default {

}
</script> 

<style scoped> /* 상위 html 요소를 상속받지 않고 해당 컴포넌트 안에서만 유효하도록 설정 */
h1 {
    color: #2F3B52;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem; /* rem? font의 크기에 따라서 같이 배율이 정해지는 단위 */
}
</style>
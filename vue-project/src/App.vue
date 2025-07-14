<template>
  <div id="app" type=module>
    <h1>{{ message }}</h1>
    <button @click="changeMessage">클릭!</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const message = ref("안녕하세요, Vue!");

const changeMessage = () => {
  message.value = "Vue는 재미있어요!";
};
</script>

<style>
h1 {
  color: #369d78
}
button {
  padding: 10px 20px;
  border: none;
  background-color: #42b983;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
}
button:hover {
  background-color: #369d78;
}
</style>
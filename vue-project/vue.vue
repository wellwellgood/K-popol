<template>
      <div id="app">
        <h1>{{ mag }}</h1>
        <button @click = "changemsg">클릭</button>
      </div>
</template>
    <script>
      export default {
        data(){
          return {
            message :"안녕하세요 , vue"
          };
        },
        method : {
          changemessage(){
            this.message = "vue 는 재밋어요";
          }
        }
      }
    </script>
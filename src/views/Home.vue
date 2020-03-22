<template>
  <div class="home">
    <b-container fluid class="p-0 m-0">
      <HelloWorld msg="Welcome to Your Vue.js App" />
      <b-row></b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
};
</script>
<style scoped></style>

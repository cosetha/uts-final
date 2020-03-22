<template>
  <div id="app" class="bg-light">
    <navbar></navbar>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Footer from './components/Footer';
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>
<style></style>

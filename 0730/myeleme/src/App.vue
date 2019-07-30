<template>
  <div id="app">
    <Home></Home>
    <!-- nav -->
    <Nav></Nav>
    <Elcontent></Elcontent>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Nav from "./components/Nav.vue";
import Elcontent from "./components/Elcontent.vue";

export default {
  name: "app",
  components: {
    Home,
    Nav,
    Elcontent
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>

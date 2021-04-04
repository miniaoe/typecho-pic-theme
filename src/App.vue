<template>
  <div id="app">
    <Navbar class="fixed z-10 px-2 md:px-16" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    Footer
  },

  methods: {}
};
</script>

<style lang="less">
body {
  letter-spacing: 0.2rem;
  font-size: 14px;
  background-color: #000;
}
html::-webkit-scrollbar {
  width: 0;
}
</style>

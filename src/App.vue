<template>
  <div id="app" class="px-2 pb-2 md:px-4 md:pb-4">
    <Navbar class="sticky top-0 z-10 px-2 md:px-16 w-full " />
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

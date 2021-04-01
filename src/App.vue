<template>
  <div id="app" class="">
    <Navbar class="fixed z-10" />
    <div class="bg-black">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  data() {
    return {};
  },
  components: {
    Navbar
  },

  methods: {}
};
</script>

<style lang="less">
body {
  letter-spacing: 0.2rem;
  font-size: 14px;
}
html::-webkit-scrollbar {
  width: 0;
}
</style>

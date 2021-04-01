<template>
  <div class="flex justify-between w-full h-24 px-16 bg-black">
    <div class="flex bd w-8/12 h-full items-center">
      <div class="logo text-4xl text-white mr-16">
        OK
      </div>
      <ul class="menu flex justify-between w-8/12 max-w-2xl text-white">
        <li><a href="#">首页</a></li>
        <li><a href="#">我的作品</a></li>
        <li><a href="#">我的简历</a></li>
        <li><a href="#">BLOG</a></li>
        <li><a href="#">首页</a></li>
      </ul>
    </div>
    <div class="h-full flex items-center text-white">
      <a href=""> INFO</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar.vue",
  data() {
    return {};
  },
  methods: {
    // 点击LOGO跳转
    onIndex() {}
  }
};
</script>

<style scoped>
.menu a {
  padding-bottom: 2px;
  padding-left: 3px;
  border-bottom: 1px solid transparent;
  transition: ease-in-out 0.3s;
}
.menu a:hover {
  border-bottom: 1px solid #fff;
}
</style>

<template>
  <div class="flex justify-between h-20 md:h-24 bg-black">
    <div class="flex bd w-8/12 h-full items-center">
      <div class="logo text-4xl text-white mr-16">
        OK
      </div>
      <ul
        class="menu relative"
        :class="{ active: mobMenu }"
        @touchmove.prevent
        @mousewheel.prevent
      >
        <li><a href="#">首页</a></li>
        <li><a href="#">我的作品</a></li>
        <li><a href="#">我的简历</a></li>
        <li><a href="#">BLOG</a></li>
        <li><a href="#">首页</a></li>
      </ul>
    </div>
    <div class="h-full flex items-center text-white">
      <a href=""> INFO</a>
      <div class="openMenu z-10" @click="openMenu()">
        <div class="px-4 py-2 rounded ml-4 bg-white">
          <svg
            v-show="!mobMenu"
            :key="1"
            class="h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="#000000"
              d="M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"
            />
          </svg>

          <svg
            v-show="mobMenu"
            :key="2"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6"
            viewBox="0 0 24 24"
          >
            <path
              fill="#000000"
              d="M15.71,8.29a1,1,0,0,0-1.42,0L12,10.59,9.71,8.29A1,1,0,0,0,8.29,9.71L10.59,12l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L13.41,12l2.3-2.29A1,1,0,0,0,15.71,8.29Zm3.36-3.36A10,10,0,1,0,4.93,19.07,10,10,0,1,0,19.07,4.93ZM17.66,17.66A8,8,0,1,1,20,12,7.95,7.95,0,0,1,17.66,17.66Z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar.vue",
  data() {
    return {
      mobMenu: false
    };
  },
  methods: {
    // 点击LOGO跳转
    openMenu() {
      this.mobMenu = !this.mobMenu;
    }
  }
};
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: space-between;
  width: 66%;
  max-width: 42rem;
}

.openMenu {
  display: none;
}

.menu a {
  color: #fff;
  padding-bottom: 2px;
  padding-left: 3px;
  border-bottom: 1px solid transparent;
  transition: ease-in-out 0.3s;
}
.menu a:hover {
  border-bottom: 1px solid #fff;
}

@media (max-width: 768px) {
  .menu {
    transition: all 0.4s;
    display: block;
    position: fixed;
    top: 0;
    left: -100%;
    height: 100%;
    width: 100vw;
    padding: 2rem;
    font-size: 1.3rem;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.9);
    max-width: 100%;
  }
  .menu > li {
    margin-bottom: 1rem;
  }
  .active {
    left: 0;
  }
  .openMenu {
    display: block;
  }
  .menu a {
    border-bottom: 2px solid transparent;
  }
  .menu a:hover {
    border-bottom: 2px solid #fff;
  }
}
</style>

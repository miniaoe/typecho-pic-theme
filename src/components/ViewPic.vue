<template>
  <div class="bg-black text-white">
    <div class="flex h-full flex-col" @touchmove.prevent @mousewheel.prevent>
      <div class="w-full px-8 h-24 flex justify-between items-center">
        <div class="font-bold">{{ info.option.title }}</div>
        <div class="cursor-pointer close" @click="close()">CLOSE</div>
      </div>
      <div class="w-full h-full px-2 pb-24 md:px-4">
        <div
          class="flex transition-all duration-300 justify-between items-center w-full h-full bg-no-repeat bg-contain bg-center"
          :style="{ backgroundImage: 'URL(' + img + ')' }"
        >
          <div
            class="flex transition-all duration-500 cursor-pointer justify-center items-center w-16 bg-black opacity-50 hover:opacity-80"
            @click="changeImg(-1)"
          >
            <svg
              class="h-12 md:h-16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffffff"
                d="M11.46,8.29a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,0,1.42l3,3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.16,12l2.3-2.29A1,1,0,0,0,11.46,8.29ZM14.66,12,17,9.71a1,1,0,0,0-1.42-1.42l-3,3a1,1,0,0,0,0,1.42l3,3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
              />
            </svg>
          </div>

          <div
            class="flex transition-all duration-500 cursor-pointer justify-center items-center w-16 bg-black opacity-50 hover:opacity-80"
            @click="changeImg(1)"
          >
            <svg
              class="h-12 md:h-16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffffff"
                d="M8.46,8.29A1,1,0,1,0,7,9.71L9.34,12,7,14.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3a1,1,0,0,0,0-1.42Zm8.5,3-3-3a1,1,0,0,0-1.42,1.42L14.84,12l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,17,11.29Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info"],
  data() {
    return {
      imgList: [],
      img: null,
      id: 0
    };
  },
  beforeMount() {
    this.imgList = this.info.option.img;
    this.img = this.imgList[0];
    this.id = 0;
  },
  methods: {
    close() {
      this.$emit("close");
    },

    changeImg(value) {
      const bg = new Image();
      this.id += value;
      if (this.id < 0) {
        this.id = this.imgList.length - 1;
      }
      if (this.id === this.imgList.length) {
        this.id = 0;
      }
      bg.src = this.imgList[this.id];
      bg.onload = () => {
        this.img = bg.src;
      };
    }
  }
};
</script>

<style scoped>
.close {
  padding-top: 3px;
  padding-left: 3px;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;
}
.close:hover {
  border-bottom: 2px solid #fff;
}
</style>

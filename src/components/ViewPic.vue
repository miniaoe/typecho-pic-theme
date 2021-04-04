<template>
  <div class="bg-black text-white">
    <div class="flex h-full flex-col">
      <div class="w-full px-8 h-24 flex justify-between items-center">
        <div class="font-bold">{{ info.option.title }}</div>
        <div class="cursor-pointer close" @click="close()">CLOSE</div>
      </div>
      <div class="flex w-full h-full pb-24">
        <div
          class="cursor-pointer previous flex justify-center items-center w-16 h-full"
          @click="changeImg(-1)"
        >
          <img src="../assets/img/Previous.png" alt="" />
        </div>

        <div
          class="flex transition-all duration-300 justify-center items-center w-full h-full bg-no-repeat bg-contain bg-center"
          :style="{ backgroundImage: 'URL(' + img + ')' }"
        ></div>

        <div
          class="cursor-pointer next flex justify-center items-center w-16 h-full"
          @click="changeImg(1)"
        >
          <img src="../assets/img/Next.png" alt="" />
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
      bg.src = this.imgList[this.id] + "?t=" + new Date().getTime();
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
.previous > img {
  border-left: 2px solid transparent;
  transition: all 0.3s;
}
.previous:hover > img {
  border-left: 2px solid #fff;
}
.next > img {
  border-right: 2px solid transparent;
  transition: all 0.3s;
}
.next:hover > img {
  border-right: 2px solid #fff;
}
</style>

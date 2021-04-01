<template>
  <div>
    <div class="relative w-full h-full slide-container">
      <div class="w-full h-full bg-green-600">
        <div
          v-for="(item, index) in imgList"
          :key="item"
          class="absolute top-0 fade h-full w-full bg-center bg-no-repeat bg-cover"
          :class="[index === picNum ? 'opacity-100' : 'opacity-0']"
          :style="{ backgroundImage: 'url(' + item + ')' }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["imgList"],
  data() {
    return {
      picNum: 0
    };
  },
  mounted() {
    this._initPicRandom();
  },
  methods: {
    _initPicRandom() {
      setInterval(() => {
        this.picNum += 1;
        if (this.picNum === this.imgList.length) {
          this.picNum = 0;
        }
      }, 5000);
    }
  }
};
</script>

<style scoped>
.fade {
  transition: all 3s ease-in-out;
}
</style>

<template>
  <section>
    <div class="relative w-full h-full slide-container">
      <transition-group name="fade">
        <div class="w-full h-full" v-if="!loading" :key="1">
          <div
            v-for="(item, index) in imgList"
            :key="index"
            class="absolute top-0 random h-full w-full bg-center bg-no-repeat bg-cover"
            :class="[index === picNum ? 'opacity-100' : 'opacity-0']"
            :style="{ backgroundImage: 'url(' + item + ')' }"
          ></div>
        </div>
        <MaskOff v-else :key="2" class="absolute top-0 random w-full h-full" />
      </transition-group>
    </div>
  </section>
</template>

<script>
import MaskOff from "@/components/MaskOff";
import { loadImage } from "@/modules/common";

export default {
  components: { MaskOff },

  props: ["imgList"],

  data() {
    return {
      picNum: 0,
      loading: true
    };
  },

  beforeMount() {
    this._initPicRandom();
  },

  methods: {
    async _initPicRandom() {
      let promise = [];
      this.imgList.forEach(val => {
        promise.push(loadImage(val));
      });
      await Promise.all(promise);
      this.loading = false;
      this._random();
    },

    _random() {
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
.random {
  transition: all 3s ease-in-out;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

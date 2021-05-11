<template>
  <div class="relative">
    <transition-group name="fade">
      <div
        v-if="loading"
        :key="1"
        class="grid grid-cols-6 gap-2 md:gap-4 w-full h-full"
      >
        <div
          v-for="item in imgList"
          class="
            w-full
            h-full
            bg-no-repeat bg-center bg-cover
            cursor-pointer
            item
            img-width
          "
          :style="{ backgroundImage: 'URL(' + item.img[0] + ')' }"
          @click="clickCid(item)"
        >
          <div
            class="
              transition-all
              duration-500
              w-full
              h-full
              bg-opacity-50
              opacity-100
              bg-black
              flex
              justify-center
              flex-col
              items-center
              md:opacity-0
            "
          >
            <p class="text-white font-bold">{{ item.title }}</p>
            <p class="text-white mt-2 tracking-norma">
              ( {{ item.img.length }} Images )
            </p>
          </div>
        </div>
      </div>
      <MaskOff v-else :key="2" class="absolute top-0 fade-min w-full h-full" />
    </transition-group>
  </div>
</template>
<script>
// 引用依赖
import { getImgUrl, loadImage } from "@/modules/common";
import APIModel from "@/modules/api";
const API = new APIModel();

// 引用组件
import MaskOff from "@/components/MaskOff";

export default {
  components: {
    MaskOff,
  },
  props: ["cidList"],
  data() {
    return {
      imgList: null,
      loading: false,
    };
  },
  beforeMount() {
    this.onGetImages();
  },
  methods: {
    clickCid(option) {
      this.$emit("event", option);
    },

    // 获取图片并重组对象用于传给 PIC组件解析
    async onGetImages() {
      let promise = [];
      for (let i = 0; i < this.cidList.length; i++) {
        promise.push(API.getEssayContent({ cid: this.cidList[i].cid }));
      }
      promise = await Promise.all(promise);
      this.imgList = promise.map((val, index) => {
        return {
          cid: val.data.data.cid,
          title: this.cidList[index].title,
          img: getImgUrl(val.data.data.text),
        };
      });
      await this._LoadImg(this.imgList);
    },

    async _LoadImg(val) {
      let img = val.map((val) => {
        return loadImage(val.img[0]);
      });
      await Promise.all(img);
      this.loading = true;
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.item:hover > div {
  opacity: 0.8;
}

.img-width {
  grid-column: span 6 / span 6;
  min-height: 35vh;
}

@media (min-width: 768px) {
  .img-width {
    grid-column: span 3 / span 3;
    min-height: 45vh;
  }
  .img-width:last-child {
    grid-column: span 6 / span 6;
  }
}

@media (min-width: 1024px) {
  .img-width {
    grid-column: span 2 / span 2;
    min-height: 50vh;
  }
  .img-width:last-child {
    grid-column: span 2 / span 2;
  }
  .img-width:nth-child(1) {
    grid-column: span 3 / span 3;
  }
  .img-width:nth-child(2) {
    grid-column: span 3 / span 3;
  }
}
</style>

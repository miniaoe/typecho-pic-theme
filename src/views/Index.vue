<template>
  <transition name="fade">
    <div v-if="loading">
      <BigPic
        :imgList="imgList"
        class="w-full h-screen bg-black px-2 md:px-4"
      />
      <PicDesc :desc="desc" class="absolute bottom-0 right-0" />
      <MorePic
        v-for="item in cidList"
        :cidList="item"
        class="px-2 pt-2 md:px-4 md:pt-4"
        @event="clickCid($event)"
      />
      <transition name="fade">
        <ViewPic
          v-if="viewImg.open"
          :info="viewImg"
          class="fixed z-10 top-0 w-screen h-screen"
          @close="closeView($event)"
        />
      </transition>
    </div>
  </transition>
</template>

<script>
// 引用依赖
import ApiModule from "@/modules/api";
const API = new ApiModule();
import { getImgUrl, handleScroll } from "@/modules/common";

// 引用组件
import BigPic from "@/components/BigPic";
import PicDesc from "@/components/PicDesc";
import MorePic from "@/components/MorePic";
import ViewPic from "@/components/ViewPic";

export default {
  data() {
    return {
      desc: {},
      imgList: [],
      cidList: [],
      loading: false,
      viewImg: {
        option: null,
        open: false
      },
      loadPage: {
        load: true,
        page: 1
      }
    };
  },

  components: {
    BigPic,
    MorePic,
    PicDesc,
    ViewPic
  },

  beforeMount() {
    Promise.all([
      this._getDesc(),
      this._getRandomPic(),
      this._getEssayList({ page: this.loadPage.page })
    ]).then(() => {
      this.loading = true;
    });
  },

  mounted() {
    addEventListener("scroll", () => {
      if (handleScroll() && this.loadPage.load === true) {
        let page = (this.loadPage.page = this.loadPage.page + 1);
        this._getEssayList({ page });
      }
    });
  },

  methods: {
    clickCid(event) {
      this.viewImg.option = event;
      this.viewImg.open = true;
    },

    closeView() {
      this.viewImg.option = null;
      this.viewImg.open = false;
    },

    async _getDesc() {
      const res = await API.getDesc();
      this.desc = res.data.data;
    },

    async _getRandomPic() {
      const res = await API.getRandomPic({ cid: "1" });
      const text = res.data.data.text;
      this.imgList = getImgUrl(text);
    },

    async _getEssayList(value) {
      let res = await API.getEssayList(value);
      res = res.data.data.dataSet;
      if (res.length !== 0) {
        let temp = res.map(val => {
          return {
            cid: val.cid,
            title: val.title
          };
        });
        this.cidList.push(temp);
      } else {
        this.loadPage.load = false;
      }
    }
  }
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
</style>

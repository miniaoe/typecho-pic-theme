<template>
  <transition name="fade">
    <div v-if="loading">
      <BigPic
        :imgList="imgList"
        class="w-full h-screen bg-black pb-2 md:pb-4"
      />
      <PicDesc :desc="desc" class="absolute bottom-0 right-0" />
      <MorePic
        v-for="(item, index) in cidList"
        :cidList="item"
        :key="index"
        class="w-full vh50 pb-2 md:pb-4"
        @event="clickCid($event)"
      />
      <transition name="fade">
        <ViewPic
          v-if="viewImg.open"
          :info="viewImg"
          class="fixed z-10 top-0 w-screen h-screen -ml-2 md:-ml-4"
          @close="closeView($event)"
        />
      </transition>
    </div>
  </transition>
</template>

<script>
// 引用依赖
import ApiModule from "../modules/api";
const API = new ApiModule();
import { getImgUrl, handleScroll, throttle } from "../modules/common";

// 引用组件
import BigPic from "../components/BigPic";
import PicDesc from "../components/PicDesc";
import MorePic from "../components/MorePic";
import ViewPic from "../components/ViewPic";

export default {
  data() {
    return {
      desc: {},
      imgList: [],
      cidList: [],
      loading: false,
      viewImg: {
        option: null,
        open: false,
      },
      loadPage: {
        load: true,
        page: 1,
      },
    };
  },

  components: {
    BigPic,
    MorePic,
    PicDesc,
    ViewPic,
  },

  beforeMount() {
    Promise.all([
      this._getDesc(),
      this._getRandomPic(),
      this._getEssayList({ page: this.loadPage.page }),
    ]).then(() => {
      this.loading = true;
    });
  },

  mounted() {
    addEventListener("scroll", this.scroll.bind(this, this));
  },

  methods: {
    scroll: throttle((self) => {
      if (handleScroll() && self.loadPage.load === true) {
        let page = (self.loadPage.page = self.loadPage.page + 1);
        self._getEssayList({ page });
      }
    }, 700),

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
        let temp = res.map((val) => {
          return {
            cid: val.cid,
            title: val.title,
          };
        });
        this.cidList.push(temp);
      } else {
        this.loadPage.load = false;
      }
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
.vh50 {
  min-height: 50vh;
}
</style>

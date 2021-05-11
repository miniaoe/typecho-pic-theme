<template>
  <div>
    <div class="flex text-center cate-list text-white mb-2 flex-wrap">
      <div
        v-for="(item, index) in cateList"
        :key="index"
        class="cate-item w-1/3 md:w-auto"
        @click="selectCate(item.slug, index)"
        :class="{ active: cateSelect === index }"
      >
        <span>{{ item.name }}</span>
      </div>
    </div>
    <div class="more">
      <MorePic
        v-for="(item, index) in cidList"
        :cidList="item"
        :key="index"
        class="w-full vh50 pb-2 md:pb-4"
        @event="clickCid($event)"
      />
    </div>
    <transition name="fade">
      <view-pic
        v-if="viewImg.open"
        :info="viewImg"
        class="fixed z-10 top-0 w-screen h-screen -ml-2 md:-ml-4"
        @close="closeView($event)"
      />
    </transition>
  </div>
</template>

<script>
import ApiModule from "../modules/api";
const API = new ApiModule();
import MorePic from "../components/MorePic";
import { handleScroll, throttle } from "../modules/common";
import ViewPic from "../components/ViewPic";
export default {
  components: { ViewPic, MorePic },
  data() {
    return {
      cateList: [],
      cidList: [],
      loading: false,
      loadPage: {
        load: true,
        page: 1,
      },
      cateSelect: {
        index: 0,
        name: "default",
      },
      viewImg: {
        option: null,
        open: false,
      },
    };
  },
  async beforeMount() {
    await this._getCategory();
    this.onGetEssay();
    window.addEventListener("scroll", this.scroll.bind(this, this));
  },
  methods: {
    scroll: throttle((self) => {
      if (handleScroll() && self.loadPage.load === true) {
        self.loadPage.page += 1;
        self.onGetEssay();
      }
    }, 700),

    closeView() {
      this.viewImg.option = null;
      this.viewImg.open = false;
    },

    clickCid(event) {
      this.viewImg.option = event;
      this.viewImg.open = true;
    },

    selectCate(val, index) {
      this.cateSelect = { index, name: this.cateList[index].slug };
      this.cidList = [];
      this.loadPage = { load: true, page: 1 };
      this.onGetEssay();
    },

    onGetEssay() {
      this._getEssayList({
        page: this.loadPage.page,
        filterType: "category",
        filterSlug: this.cateSelect.name,
      });
      console.log(this.cateSelect);
    },

    async _getCategory() {
      let res = await API.getCategory();
      this.cateList = res.data.data;
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

.more {
  min-height: 100vh;
}

.cate-item {
  flex-grow: 1;
  padding: 1rem 0;
  border: 2px solid white;
  cursor: pointer;
  transition: all 0.3s;
}
.cate-item:hover {
  background: white;
  color: black;
}
.active {
  background: white;
  color: black;
}

.vh50 {
  min-height: 50vh;
}
</style>

<template>
  <div>
    <BigPic :imgList="imgList" class="w-screen h-screen bg-black p-4 pt-0" />
    <PicDesc :desc="desc" class="absolute bottom-0 right-0" />
    <MorePic class="w-screen h-screen bg-black p-4 pt-0" />
  </div>
</template>

<script>
// 引用依赖
import ApiModule from "@/modules/api";
const API = new ApiModule();
import { getImgUrl } from "@/modules/common";

// 引用组件
import BigPic from "@/components/BigPic";
import MorePic from "@/components/MorePic";
import PicDesc from "@/components/PicDesc";

export default {
  data() {
    return {
      desc: {},
      imgList: []
    };
  },
  components: {
    BigPic,
    MorePic,
    PicDesc
  },
  beforeMount() {
    this._getDesc();
    this._getRandomPic();
  },

  methods: {
    async _getDesc() {
      const res = await API.getDesc();
      this.desc = res.data.data;
    },

    async _getRandomPic() {
      const res = await API.getRandomPic({ cid: "1" });
      const text = res.data.data.text;
      this.imgList = getImgUrl(text);
    }
  }
};
</script>

<style scoped></style>

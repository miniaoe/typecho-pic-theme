import HttpRequest from "@/lib/axios";

const URL = {
  settings: "/api/settings",
  essayList: "/api/posts",
  essayContent: "/api/post"
};

class APIModel extends HttpRequest {
  getDesc() {
    return this.request({
      url: URL.settings,
      method: "GET"
    });
  }

  getEssayList(params = {}) {
    return this.request({
      url: URL.essayList,
      method: "GET",
      params
    });
  }

  getRandomPic(params = {}) {
    return this.getEssayContent(params);
  }

  getEssayContent(params = {}) {
    return this.request({
      url: URL.essayContent,
      method: "GET",
      params
    });
  }
}

export default APIModel;

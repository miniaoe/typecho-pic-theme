function getImgUrl(value) {
  return value.match(
    /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/g
  );
}

function loadImage(url) {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.src = url;
  });
}

function handleScroll() {
  //变量scrollTop是滚动条滚动时，距离顶部的距离
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  //变量windowHeight是可视区的高度
  let windowHeight =
    document.documentElement.clientHeight || document.body.clientHeight;
  //变量scrollHeight是滚动条的总高度
  let scrollHeight =
    document.documentElement.scrollHeight || document.body.scrollHeight;
  //滚动条到底部的条件
  return scrollTop + windowHeight === scrollHeight;
}

export { getImgUrl, loadImage, handleScroll };

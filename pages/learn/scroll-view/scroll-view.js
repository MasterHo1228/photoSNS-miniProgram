// pages/learn/scroll-view/scroll-view.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleScrollX(event){
    console.log('ScrollingX');
    console.log(event.detail.scrollTop)
  },
  handleScrollY(event){
    console.log('ScrollingY');
    console.log(event.detail.scrollLeft)
  }
})
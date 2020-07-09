// pages/learn/learn/learn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  
  goToLearnText(){
    wx.navigateTo({
      url: '../text/text',
    })
  },
  goToLearnButton(){
    wx.navigateTo({
      url: '../button/button',
    })
  },
  goToLearnView(){
    wx.navigateTo({
      url: '../view/view',
    })
  },
  goToLearnImage(){
    wx.navigateTo({
      url: '../image/image',
    })
  },
  goToLearnInput(){
    wx.navigateTo({
      url: '../input/input',
    })
  },
  goToLearnScrollView(){
    wx.navigateTo({
      url: '../scroll-view/scroll-view',
    })
  }
})
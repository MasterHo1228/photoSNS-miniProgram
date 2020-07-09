// pages/learn/button/button.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading:false
  },
  startToLoadSth: function(){
    this.setData({
      isLoading:true
    })
  }
})
// pages/learn/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagesPath:[],
    showOneButtonDialog: false,
    oneButton: [{text: '确定'}]
  },
  handleSelectPhoto(){
    wx.chooseImage({
      success : (res) => {
        const path = res.tempFilePaths;
        //console.log(path);
        this.setData({
          imagesPath:path
        })
      }
    })
  },
  handleImageLoad(){
    console.log('Photo is load completed.')
  }
})
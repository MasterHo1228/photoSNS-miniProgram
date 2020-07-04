// pages/profile/profile.js
const user = getApp();
//console.log(user.globalData.name);
//console.log(user.globalData.gender);


Page({
  data:{
    list:[]
  },

  handleGetUserInfo (event){
    console.log(event);

  },

  onLoad(){
    wx.request({
      url: 'https://jsonview.com/example.json',
      success: (res) => {
        const data = res.data;
        this.setData({
          list:data
        })
        console.log(this.data.list.notLink);
      }
    })
  },

  onReachBottom(){
    console.log('You arrive the termius.')
  }
})
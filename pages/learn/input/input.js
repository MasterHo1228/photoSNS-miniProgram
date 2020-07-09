// pages/learn/input/input.js
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },
  handleInputSth(event){
    console.log('You input something;'+event.detail)
  },
  handleInputFocus(event){
    console.log('You got the input field;'+event.detail)
  },
  handleInputBlur(event){
    console.log('You left the input field;'+event.detail)
  }
})
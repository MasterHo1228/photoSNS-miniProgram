Page({
  data:{
    name: '路人X',

    students:[
      {ID:100,name:'Apple',age:18},
      {ID:101,name:'Banana',age:16},
      {ID:102,name:'Cat',age:17},
      {ID:103,name:'Dog',age:22},
      {ID:104,name:'Ewie',age:20}
    ],

    counter:0
  },

  hitCoder(){
    this.setData({
      counter:this.data.counter +1
    });
  }
})
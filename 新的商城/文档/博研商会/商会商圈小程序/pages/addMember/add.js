Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [{
        "name": "某大C",
        "telephone": "13788888888",
        "industryName": "委员会",
        "industry": "区域委员会",
        "imagePath": "../../assets/images/head1.jpg",
      },
      {
        "name": "某大C",
        "telephone": "13788888888",
        "industryName": "委员会",
        "industry": "区域委员会",
        "imagePath": "../../assets/images/head1.jpg",
      },
      {
        "name": "某大C",
        "telephone": "13788888888",
        "industryName": "委员会",
        "industry": "区域委员会",
        "imagePath": "../../assets/images/head1.jpg",
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  studentJump(e) {
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "../circleDetail/circleDetail?id=" + id,
    });
  }
})
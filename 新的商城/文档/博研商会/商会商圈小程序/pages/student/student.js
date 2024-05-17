Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [],
    dataIndustryList: [{
        "name": "某大款",
        "telephone": "13988277323",
        "industryName": "涉及行业",
        "industry": "餐饮",
        "imagePath": "../../assets/images/head.jpg",
      },
      {
        "name": "某大款",
        "telephone": "13988277323",
        "industryName": "涉及行业",
        "industry": "餐饮",
        "imagePath": "../../assets/images/head.jpg",
      },
      {
        "name": "某大款",
        "telephone": "13988277323",
        "industryName": "涉及行业",
        "industry": "餐饮",
        "imagePath": "../../assets/images/head.jpg",
      }
    ],
    dataCircleList: [{
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
    currentTab: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      dataList: this.data.dataIndustryList
    });
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
  //选择不同标签功能
  onChange: function (e) {
    let name = e.detail.name;
    this.setData({
      currentTab: name
    });
    if (name == 0) {
      this.setData({
        dataList: this.data.dataIndustryList
      });
    }
    if (name == 1) {
      this.setData({
        dataList: this.data.dataCircleList
      });
    }
  },
  //同学录中转
  studentJump: function (e) {
    let id = e.currentTarget.dataset.id;
    if (this.data.currentTab == 0)
      wx.navigateTo({
        url: "../studentDetail/studentDetail?id=" + id,
      });
    if (this.data.currentTab == 1)
      wx.navigateTo({
        url: "../circleDetail/circleDetail?id=" + id,
      });
  }
})
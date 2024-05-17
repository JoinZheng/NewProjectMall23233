// 获取应用实例
const app = getApp()

Page({
  data: {
    hotList: [{
        "time": "2022/5/20",
        "imagePath": "../../assets/images/stander.png",
        "text": "定期举办校友企业参议和线下活动会议，欢迎参观"
      },
      {
        "time": "2022/5/20",
        "imagePath": "../../assets/images/stander.png",
        "text": "定期举办校友企业参议和线下活动会议"
      },
      {
        "time": "2022/5/20",
        "imagePath": "../../assets/images/stander.png",
        "text": "定期举办校友企业参议和线下活动会议"
      },
      {
        "time": "2022/5/20",
        "imagePath": "../../assets/images/stander.png",
        "text": "定期举办校友企业参议和线下活动会议"
      }
    ],
    dataList: [{
        "time": "2022/5/20",
        "imagePath": "../../assets/images/stander.png",
        "text": "定期举办校友企业参议和商务活动，为广大羽毛球爱好者提供交流机会",
        "tit": "区域委员会"
      },
      {
        "time": "2022/5/20",
        "imagePath": "../../assets/images/stander.png",
        "text": "定期举办校友企业参议和商务活动，为广大羽毛球爱好者提供交流机",
        "tit": "区域委员会"
      },
      {
        "time": "2022/5/20",
        "imagePath": "../../assets/images/stander.png",
        "text": "定期举办校友企业参议和商务活动，为广大羽毛球爱好者提供交流机会",
        "tit": "区域委员会"
      }
    ],
    swiperList: ["../../assets/images/banner.jpg", "../../assets/images/banner.jpg", "../../assets/images/banner.jpg"],
    active: 0,
    show: true
  },
  onLoad() {

  },
  //切换标签功能
  onDataTab(e) {
    let id = e.currentTarget.dataset.id;
    this.setData({
      active: id
    });
  },
  //热门活动页面
  hotActivity() {
    wx.navigateTo({
      url: "../hotActivity/hotActivity",
    });
  },
  //跳转到圈子
  circlePage(e) {
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "../circleDetail/circleDetail?id=" + id,
    });
  },
  showTransition(e) {
    this.setData({
      show: !this.data.show
    });
  }
})
<template>
	<view class="content">
		<van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
			<van-swipe-item>
				<image src="../../static/banner.png"></image>
			</van-swipe-item>
			<van-swipe-item>
				<image src="../../static/banner.png"></image>
			</van-swipe-item>
			<van-swipe-item>
				<image src="../../static/banner.png"></image>
			</van-swipe-item>
		</van-swipe>
		<view class="dataInfo">
			<van-row type="flex" justify="space-between" align="center">
				<van-col span="6" class="areaTip">选择城市</van-col>
				<van-col span="12" class="areaTip">选择取车网点</van-col>
				<van-col span="6" class="areaTip">
					<view class="reCar">
						异地还车 <van-switch size="small" v-model="returnCar" />
					</view>
				</van-col>
			</van-row>
			<van-row class="data-margintop" type="flex" justify="space-between" align="center">
				<van-col span="6" class="areaTip">
					<view class="largerText">广州 &nbsp;<van-icon name="arrow-down" size="14" /></view>
				</van-col>
				<van-col span="12" class="areaTip">
					<view class="largerText">员村山服务点 &nbsp;<van-icon name="arrow-down" size="14" /></view>
				</van-col>
				<van-col span="6" class="areaTip">
					<view class="reCar">
						距您324m
					</view>
				</van-col>
			</van-row>
			<view class="returnTime">
				<van-row justify="center">
					<van-col span="8">取车时间</van-col>
					<van-col span="8"></van-col>
					<van-col span="8" class="textRight">还车时间</van-col>
				</van-row>
				<van-row class="data-margintop" justify="center">
					<van-col span="11" class="textDate">02月02日 12:20</van-col>
					<van-col span="4" class="dateTotal">共3天</van-col>
					<van-col span="9" class="textDate textRight">
						02月06日 12:20
					</van-col>
				</van-row>
			</view>
			<view class="data-margintop">
				<van-checkbox v-model="gateCar" shape="square">上门送取车</van-checkbox>
			</view>
			<view class="data-margintop">
				<van-button type="primary" color="linear-gradient(to right, #ffe259, #ff6034)" block
					class="btnGetCar">立即选车</van-button>
			</view>
		</view>
		<view class="data-margintop dataInfo" style="padding: 0px;" @click="this.showList=true">
			<van-cell title="优惠中心" is-link />
			<view>
				<image src="../../static/youhui.png" style="height: 80px;width: 94%;padding: 10px;"></image>
			</view>
		</view>
		<view class="data-margintop dataInfo" style="padding: 0px; background-color: transparent;">
			<van-row>
				<van-col span="6">
					<van-popover v-model:show="showPopover" :actions="actions" @select="onSelectSort">
						<template #reference>
							<van-button size="small" style="color: #000;" icon="arrow-down" icon-position="right"
								color="linear-gradient(to right, #f7f7f7, #f7f7f7)">
								车型排序
							</van-button>
						</template>
					</van-popover>
				</van-col>
				<van-col span="18">
					<scroll-view :scroll-x="true" class="scrollview-box">
						<view class="item allItem">
							<text class="allName">全部车型</text>
						</view>
						<block v-for="item in scroll_list" :key="item">
							<view class="item">
								<text class="name">{{item}}</text>
							</view>
						</block>
					</scroll-view>
				</van-col>
			</van-row>

			<view class="carAllInfo">
				<view class="carInfo">
					<image class="carImg" src="../../static/carInfo.png"></image>
					<view class="carName">
						日产轩逸
					</view>
					<view class="carKind">1.6自动|三厢|5座</view>
					<view class="carMoney"><text class="carSma">￥</text>283<text class="carSma">/日均</text></view>
					<view class="carAdd">服务点 <view class="carJu">324m</view></view>
				</view>
				<view class="carInfo">
					<image class="carImg" src="../../static/carInfo.png"></image>
					<view class="carName">
						日产轩逸
					</view>
					<view class="carKind">1.6自动|三厢|5座</view>
					<view class="carMoney"><text class="carSma">￥</text>283<text class="carSma">/日均</text></view>
					<view class="carAdd">服务点 <view class="carJu">324m</view></view>
				</view>
				<view class="carInfo">
					<image class="carImg" src="../../static/carInfo.png"></image>
					<view class="carName">
						日产轩逸
					</view>
					<view class="carKind">1.6自动|三厢|5座</view>
					<view class="carMoney"><text class="carSma">￥</text>283<text class="carSma">/日均</text></view>
					<view class="carAdd">服务点 <view class="carJu">324m</view></view>
				</view>
				<view class="carInfo">
					<image class="carImg" src="../../static/carInfo.png"></image>
					<view class="carName">
						日产轩逸
					</view>
					<view class="carKind">1.6自动|三厢|5座</view>
					<view class="carMoney"><text class="carSma">￥</text>283<text class="carSma">/日均</text></view>
					<view class="carAdd">服务点 <view class="carJu">324m</view></view>
				</view>
			</view>
		</view>

		<!-- 优惠券列表 -->
		<van-popup v-model:show="showList" round position="bottom" style="height: 90%; padding-top: 4px;">
			<van-coupon-list :coupons="coupons" :chosen-coupon="chosenCoupon" :disabled-coupons="disabledCoupons"
				@change="onChange" @exchange="onExchange" />
		</van-popup>
	</view>
</template>

<script>
	import {
		ref
	} from 'vue';
	export default {
		data() {
			return {
				returnCar: false,
				gateCar: 'a',
				showList: false,
				coupon: {
					available: 1,
					condition: '无门槛\n最多优惠12元',
					reason: '',
					value: 150,
					name: '优惠券名称',
					startAt: 1489104000,
					endAt: 1514592000,
					valueDesc: '1.5',
					unitDesc: '元',
				},
				carKinValue: 0,
				actions: [{
						text: '选项一'
					},
					{
						text: '选项二'
					},
					{
						text: '选项三'
					},
				],
				showPopover: false,
				scroll_list: ['经济型', '商务型', 'SUV', '货车', '卡车', 'MPV', '新能源', '豪华型'],
			}
		},
		onLoad() {
			//uni.hideTabBar();
		},
		methods: {
			onSelectSort(action) {
				console.log(action);
				//this.showToast(action.text)
				uni.showToast({
					title: action.text, //标题 必填
					icon: 'none', //图标
					image: '', //自定义图标的本地路径（app端暂不支持gif）
					mask: true, //是否显示透明蒙层，防止触摸穿透，默认：false
					duration: '2000', //提示的延迟时间，单位毫秒，默认：1500
					position: '', //纯文本轻提示显示位置，填写有效值后只有 title 属性生效，且不支持通过         uni.hideToast 隐藏。有效值详见下方说明。	App
					success: '', //接口调用成功的回调函数	
					fail: '', //接口调用失败的回调函数	
					complete: '', //接口调用结束的回调函数（调用成功、失败都会执行）
				});
			}
		},
	}
</script>

<style>
	.content {
		height: 100vh;
		background-color: #f7f7f7;
	}

	.content .dataInfo {
		padding: 10px;
		margin: 10px;
		border-radius: 8px;
		background-color: #fff;
	}

	.content .dataInfo .areaTip {
		font-size: 12px;
		color: #a8a8a8;
	}

	.content .dataInfo .reCar {
		float: right;
	}

	.content .dataInfo .largerText {
		font-size: 20px;
		color: #000;
		font-weight: bold;
	}

	.content .dataInfo .returnTime {
		background-color: #f7f9fd;
		padding: 10px;
		margin-top: 10px;
		font-size: 12px;
		border-radius: 8px;
		color: #a8a8a8;
	}

	.content .dataInfo .returnTime .textDate {
		font-size: 18px;
		color: #000;
		font-weight: bold;
	}

	.textRight {
		text-align: right;
	}

	.data-margintop {
		margin-top: 10px;
	}

	.btnGetCar {
		color: #000;
		border-radius: 8px;
		font-weight: 600;
		font-size: 16px;
	}

	/**/
	.scrollview-box {
		white-space: nowrap;
		/* 滚动必须加的属性 */
		width: 100%;
		padding: 0px 0px;
	}

	.scrollview-box .item {
		width: 140rpx;
		margin-right: 16rpx;
		display: inline-flex;
		/* item的外层定义成行内元素才可进行滚动 inline-block / inline-flex 均可 */
		flex-direction: column;
		align-items: center;
		background-color: #ebebeb;
	}

	.scrollview-box .allItem {
		background-color: #fadca7;
	}

	.scrollview-box .cover {
		width: 165rpx;
		height: 165rpx;
	}

	.scrollview-box .allName {
		font-size: 24rpx;
		font-weight: bold;
		padding: 10px;
		color: #fb6f6e;
		padding: 0;
		width: 90%;
		margin: 4px 0px;
		border-radius: 4px;
		text-align: center;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.scrollview-box .name {
		font-size: 24rpx;
		padding: 10px;
		color: #000000;
		padding: 0;
		width: 90%;
		margin: 4px 0px;
		border-radius: 4px;
		text-align: center;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.carAllInfo {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		background-color: #f7f7f7;
		padding-bottom: 10vh;
	}

	.carAllInfo .carInfo {
		width: 44%;
		background-color: #fff;
		border-radius: 8px;
		padding: 6px;
		margin: 1%;		
	}

	.carAllInfo .carInfo .carImg {
		width: 100%;
		height: 90px;
		margin-bottom: 4px;
	}

	.carAllInfo .carInfo .carName {
		font-size: 20px;
		font-weight: bold;
		margin-bottom: 6px;
	}

	.carAllInfo .carInfo .carKind {
		font-size: 12px;
		color: #a8a8a8;
		margin-bottom: 4px;
	}

	.carAllInfo .carInfo .carMoney {
		font-size: 24px;
		color: #fb6f6e;
		font-weight: bold;
		margin-bottom: 4px;
	}
	
	.carAllInfo .carInfo .carMoney .carSma{
		font-size: 12px;
	}

	.carAllInfo .carInfo .carAdd {
		background-color: #fadca7;
		padding: 4px;
		border-radius: 0 0 6px 6px;
		color: 18rpx;
		font-size: 12px;
	}
	.carAllInfo .carInfo .carAdd .carJu{
		float: right;
	}

	.my-swipe .van-swipe-item {
		height: 160px;
		color: #fff;
		text-align: center;
		background-color: #f7f7f7;
	}

	.my-swipe .van-swipe-item:nth-child(2n + 1) {
		background-color: #f7f7f7;
	}

	.my-swipe image {
		width: 100%;
		height: 160px;
	}
</style>
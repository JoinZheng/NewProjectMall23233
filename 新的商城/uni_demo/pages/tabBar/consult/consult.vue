<template>
	<view class="">
		<view class="uni-center" style="background-color:#61A1F1 ;">
			<image class="image" style="width: 100%;height: 320upx;" src="../../../static/zx_bg.png"></image>
			<view class="title">以免费解答<span class="">xxx</span>个问题
			</view>
			<view class="title1">免费法律咨询</view>
		</view>
		<view class="uni-grid-9 uni-common-mt">
			<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover">
				<image class="uni-grid-9-image" src="../../../static/zx_ls.png"></image>
				<text class="uni-grid-9-text">律师</text>
			</view>
			<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover">
				<image class="uni-grid-9-image" src="../../../static/zx_gz.png"></image>
				<text class="uni-grid-9-text">公证</text>
			</view>
			<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover">
				<image class="uni-grid-9-image" src="../../../static/zx_sf.png"></image>
				<text class="uni-grid-9-text">司法鉴定</text>
			</view>
			<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover">
				<image class="uni-grid-9-image" src="../../../static/zx_rmtj.png"></image>
				<text class="uni-grid-9-text">人民调解</text>
			</view>
			<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover">
				<image class="uni-grid-9-image" src="../../../static/zx_flyz.png"></image>
				<text class="uni-grid-9-text">法律援助</text>
			</view>
			<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover">
				<image class="uni-grid-9-image" src="../../../static/zx_jc.png"></image>
				<text class="uni-grid-9-text">基层法律服务</text>
			</view>
		</view>
		
		<view class="uni-flex uni-row" style="background-color:#84CE6B ;margin-top: 25upx;">
			<image class="image" style="width: 55%;height: 260upx;" src="../../../static/1234_bg.png"></image>
			<view class="uni-flex uni-column" >
				<view class="" style="color:#FFFFFF;font-size: 35upx;text-align: right;margin-top: 15upx;margin-right: 10upx;">12348法律服务热线</view>
				<view style="color:#FFFFFF;font-size: 30upx;text-align: right;margin-right: 10upx;">以服务<span class="">xxx</span>人次</view>
				<button class="" @tap="NT_12348phone" size="mini" style="margin-right: 10upx;margin-top: 8upx;color:#84CE6B;">查看详情</button>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
			NT_12348phone: function () {
				uni.navigateTo({
					url:'12348_phone/12348_phone'
				})
			}
		}
	}
</script>

<style>
	.title {
		max-height: 84upx;
		overflow: hidden;
		position: absolute;
		left: 30upx;
		top: 30upx;
		font-size: 35upx;
		font-weight: 400;
		line-height: 35upx;
		color: white;
		z-index: 11;
	}
	.title1 {
			max-height: 84upx;
			overflow: hidden;
			position: absolute;
			left: 30upx;
			top: 100upx;
			font-size: 50upx;
			font-weight: 400;
			line-height: 50upx;
			color: white;
			z-index: 11;
		}
		.title3 {
			max-height: 84upx;
			overflow: hidden;
			position: absolute;
			right: 30upx;
			top: 30upx;
			font-size: 35upx;
			font-weight: 400;
			line-height: 35upx;
			color: white;
			z-index: 11;
		}
	.uni-grid-9 {
			background-color: #FFFFFF;
		}
	
		.uni-grid-9-image {
			height: 80upx;
			width: 80upx;
		}
	
		.uni-grid-9-text {
			margin-top: 30upx;
		}
		
</style>

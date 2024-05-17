<template>
	<view>
		<view class="uni-center" style="background-color:#61A1F1 ;">
			<image class="image" style="width: 100%;height: 320upx;" src="../../../static/service_bg.png"></image>
			<view class="title">法制地图</view>
			<view class="title1">法律服务机构及人员查询</view>
			<button class="title2" @tap="NT_fzdt" size="mini">点击搜索</button>
		</view>
		<!-- 法律服务 -->
		<view class="uni-list-cell-divider">
			法律服务
		</view>
		<view class="uni-grid-9 uni-common-mt">
			<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover">
				<image class="uni-grid-9-image" src="../../../static/service_ls.png"></image>
				<text class="uni-grid-9-text">律师服务</text>
			</view>
			<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover">
				<image class="uni-grid-9-image" src="../../../static/service_sj.png"></image>
				<text class="uni-grid-9-text">司鉴服务</text>
			</view>
			<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover">
				<image class="uni-grid-9-image" src="../../../static/service_rmtj.png"></image>
				<text class="uni-grid-9-text">人民调解</text>
			</view>
		</view>
		<!-- 法援服务 -->
		<view class="uni-list-cell-divider">
			法援服务
		</view>
		<view class="uni-grid-9 uni-common-mt">
			<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover">
				<image class="uni-grid-9-image" src="../../../static/service_flyz.png"></image>
				<text class="uni-grid-9-text">在线预申请</text>
			</view>
			<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover">
				<image class="uni-grid-9-image" src="../../../static/service_fyjd.png"></image>
				<text class="uni-grid-9-text">进度查询</text>
			</view>
		</view>
		<!-- 司法考试 -->
		
		<view class="uni-list-cell-divider">
			司法考试
		</view>
		<view class="uni-grid-9 uni-common-mt">
			<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover">
				<image class="uni-grid-9-image" src="../../../static/service_cj.png"></image>
				<text class="uni-grid-9-text">成绩查询</text>
			</view>
			<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover">
				<image class="uni-grid-9-image" src="../../../static/service_zkz.png"></image>
				<text class="uni-grid-9-text">准考证查询</text>
			</view>
			<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover">
				<image class="uni-grid-9-image" src="../../../static/service_zgz.png"></image>
				<text class="uni-grid-9-text">资格证查询</text>
			</view>
		</view>
		<!-- 公证服务 -->
		<view class="uni-list-cell-divider">
			公证服务
		</view>
		<view class="uni-grid-9 uni-common-mt">
			<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover">
				<image class="uni-grid-9-image" src="../../../static/service_gz.png"></image>
				<text class="uni-grid-9-text">在线预申请</text>
			</view>
			<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover">
				<image class="uni-grid-9-image" src="../../../static/service_gz_jd.png"></image>
				<text class="uni-grid-9-text">进度查询</text>
			</view>
		</view>
		<view class="uni-list-cell-divider uni-list-bottom">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			NT_fzdt: function () {
				uni.navigateTo({
					url:'fzdt/fzdt'
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
		right: 30upx;
		top: 30upx;
		font-size: 55upx;
		font-weight: 400;
		line-height: 55upx;
		color: white;
		z-index: 11;
	}

	.title1 {
		max-height: 84upx;
		overflow: hidden;
		position: absolute;
		right: 30upx;
		top: 100upx;
		font-size: 35upx;
		font-weight: 400;
		line-height: 35upx;
		color: white;
		z-index: 11;
	}

	.title2 {
		overflow: hidden;
		position: absolute;
		right: 30upx;
		top: 180upx;
		font-size: 40upx;
		color: #61A1F1;
		z-index: 11;
	}

	.uni-grid-9 {
		background-color: #FFFFFF;
	}
	.uni-common-mt{
		margin-top: 0;
	}

	.uni-grid-9-image {
		height: 80upx;
		width: 80upx;
	}

	.uni-grid-9-text {
		margin-top: 30upx;
	}
	.uni-list-bottom{
		margin-top: 50upx;
	}
</style>

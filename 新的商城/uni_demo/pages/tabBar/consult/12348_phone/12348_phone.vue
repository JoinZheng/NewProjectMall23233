<template>
	<view>
		<view class="uni-center" style="background-color:#61A1F1 ;">
			<image class="image" style="width: 100%;height: 250upx;" src="../../../../static/12348_bg.png"></image>
			<view class="title1">12348咨询热线</view>
			<button @tap="makePhoneCall" class="title2" size="mini">立即拨打</button>
		</view>
		<view class="uni-card">
			<view class="uni-list">
				<view class="uni-list-cell-divider">
					7x24小时法律咨询
				</view>
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate uni-navigate-right">
						按1选择渭南市
					</view>
				</view>
				<view class="uni-list-cell-divider">
					周一至周五 08:00-12:00 14:00-18:00
				</view>
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate uni-navigate-right">
						按2选择临渭区
					</view>
				</view>
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate uni-navigate-right">
						按3选择韩城县
					</view>
				</view>
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate uni-navigate-right">
						按4选择华阴市
					</view>
				</view>
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate uni-navigate-right">
						按5选择华州区(华县)
					</view>
				</view>
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate uni-navigate-right">
						按6选择潼关县
					</view>
				</view>
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate uni-navigate-right">
						按7选择大荔县
					</view>
				</view>
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate uni-navigate-right">
						按8选择合阳县
					</view>
				</view>
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate uni-navigate-right">
						按9选择澄城县
					</view>
				</view>
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate uni-navigate-right">
						按01选择蒲城县
					</view>
				</view>
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate uni-navigate-right">
						按02选择白水县
					</view>
				</view>
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate uni-navigate-right">
						按03选择富平县
					</view>
				</view>
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
			makePhoneCall: function () {
				uni.makePhoneCall({
					phoneNumber: "12348",
					success: () => {
						console.log("成功拨打电话")
					}
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
		top: 50upx;
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
		top: 130upx;
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
</style>

<template>
	<view class="content">
		<view class="header">
			<van-row>
				<van-col span="5">
					<image src="../../static/kefu.png" style="height: 80px;width: 80px;"></image>
				</van-col>
				<van-col span="18">
					<view class="phone">
						{{userInfo.phone}}
					</view>
					<view class="score">
						<van-tag type="primary" class="score-become" color="#f7a700" round
							size="large">成长值{{userInfo.become}}</van-tag>
						<van-tag type="primary" color="#f7a700" round size="large">积分{{userInfo.score}}</van-tag>
					</view>
				</van-col>
			</van-row>
		</view>
		<view>
			<van-cell-group inset round>
				<van-cell icon="manager-o" title="我的资料" is-link />
				<van-cell icon="bill-o" title="我的订单" is-link />
				<van-cell icon="new-o" title="随心租" is-link />
				<van-cell icon="label-o" title="优惠卷" is-link />
				<van-cell icon="shop-o" title="微信支付分免押授权" is-link />
				<van-cell icon="order-o" title="发票" is-link />
				<van-cell icon="setting-o" title="设置" is-link />
			</van-cell-group>
			<view class="btnLogout">
				<van-button type="default" round block>退出登录</van-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				userInfo: {
					phone: '137******91',
					become: 123,
					score: 32
				}
			}
		},
		onLoad() {
			//uni.hideTabBar();
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		background-image: url('../../static/my.jpg');
		background-repeat: no-repeat;
		padding-top: 40px;
		height: 100vh;
		background-color: #f7f7f7;
	}

	.header {
		margin: 20px 16px;
	}

	.header .phone {
		margin-top: 10px;
		font-size: 20px;
		font-weight: bold;
	}

	.header .score {
		margin: 6px;
	}

	.header .score-become {
		margin-right: 10px;
	}

	.btnLogout {
		margin: 20px 16px;
	}
</style>
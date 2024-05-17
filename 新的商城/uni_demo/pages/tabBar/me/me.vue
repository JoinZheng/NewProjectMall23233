<template>
	<view class="">
		<view class="uni-flex uni-row" style="height: 150upx;background-color: #61A1F1;">
			<view class="" style="width: 70%;color: #FFFFFF;margin-top: 25upx;margin-left: 60upx;font-size: 40upx;">游客</view>
			<image src="../../../static/60x60.png" style="height: 120upx;width: 120upx;border-radius: 50%;" mode=""></image>
		</view>
		<view class="uni-card">
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate uni-navigate-right uni-navigate-badge">
						我的咨询
						<uni-badge text="123" type="success"></uni-badge>
					</view>
				</view>
				<view class="uni-list-cell uni-list-cell-last" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate uni-navigate-right uni-navigate-badge">
						我的申请
						<uni-badge text="12" type="primary"></uni-badge>
					</view>
				</view>
			</view>
		</view>
		<!-- <button type="primary" @tap="NT_login" style="margin: 30upx;">登录</button> -->
<view class="btn-row">
            <button v-if="!hasLogin" type="primary" class="primary" @tap="bindLogin">登录</button>
            <button v-if="hasLogin" type="default" @tap="bindLogout">退出登录</button>
        </view> 
	</view>
</template>
<script>
	import uniBadge from "../../../components/uni-badge.vue";
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				title: 'me'
			}
		},
		computed: {
			...mapState(['hasLogin', 'forcedLogin'])
		},
		components: {
			uniBadge
		},
		methods: {
			...mapMutations(['logout']),
			bindLogin: function () {
				uni.navigateTo({
					url:'login/login'
				})
			},
			bindLogout() {
				this.logout();
				/**
				* 如果需要强制登录跳转回登录页面
				*/
			   console.log("ddd")
				/* if (this.forcedLogin) {
					uni.reLaunch({
						url: '../login/login',
					});
				} */
			}
		}
	}
</script>

<style>
</style>

<template>
	<view class="content">
		<view class="input-group" style="height: 10000px;">
			<view class="input-row border">
				<text class="title">账号：</text>
				<input type="number" v-model="phone" placeholder="请输入手机号">
			</view>
			<view class="input-row">
				<text class="title">验证码：</text>
				<input class="code" type="number" v-model="code" placeholder="请输入密码">
				<button class="btn_code" size="mini" type="primary" plain="true" @tap="bindCode">{{ text }}</button>
			</view>
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" @tap="bindLogin">登录</button>
		</view>
	</view>
</template>

<script>
	var utils = require('../../../../common/util.js');
	var isphone = utils.isPoneAvailable;
	export default {
		data() {
			return {
				timer: null,
				text: '获取验证码',
				status: false,
				num: 60
			}
		},
		methods: {
			bindLogin() {
				if (!isphone(this.phone)) {
					uni.showToast({
						icon: 'none',
						title: '请输入正确的手机号!'
					});
					return;
				}
				if ((this.code).length < 6) {
					uni.showToast({
						icon: 'none',
						title: '请输入正确的验证码!'
					});
					return;
				}
				this.goLogin();

			},
			goLogin() {
				uni.request({
					url: "http://111.19.140.83/qt/login/phone.do",
					data: {
						phone: this.phone,
						code: this.code
					},
					success: (data) => {
						var rsp = data.data;
						console.log(data)
						console.log(JSON.stringify(rsp))
						if (rsp.code == 200) {
							plus.nativeUI.alert(rsp.msg);
						}
					},
					fail: (rsp, code) => {
						console.log('fail' + JSON.stringify(rsp));
					}
				})
			},
			bindCode() {
				uni.pageScrollTo({
					duration: 1000,
					scrollTop: 200
				});
				if (!isphone(this.phone)) {
					uni.showToast({
						icon: 'none',
						title: '请输入正确的手机号!'
					});
					return;
				}
				if (this.status) {
					return
				}

				this.status = true;
				this.loading();
				this.getCode();
				this.timer = setInterval(() => {
					if (this.num === 0) {
						this.timer && this.clearTimer();
						this.reset();
					} else {
						this.loading();
					}
				}, 1000);
			},
			reset() {
				this.num = 60;
				this.loadingStatus = false;
				this.text = '获取验证码';
			},
			loading() {
				this.num -= 1;
				this.text = '获取中(' + this.num + ')';
			},
			getCode() {
				uni.request({
					url: "http://111.19.140.83/qt/login/sendCaptcha.do",
					data: {
						phone: this.phone
					},
					success: (data) => {
						var rsp = data.data;
						if (rsp.code == 200) {
							plus.nativeUI.alert(rsp.msg);
						}
					},
					fail: (rsp, code) => {
						console.log('fail' + JSON.stringify(rsp));
					}
				})
			},
			clearTimer() {
				clearInterval(this.timer);
				this.timer = null;
			}
		},
		onUnload: function() {
			this.timer && this.clearTimer();
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: #efeff4;
		padding: 20px;
	}

	.input-group {
		background-color: #ffffff;
		margin-top: 40px;
		position: relative;
	}

	.input-group::before {
		position: absolute;
		right: 0;
		top: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.input-group::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.input-row {
		display: flex;
		flex-direction: row;
		position: relative;
	}

	.input-row .title {
		width: 20%;
		height: 50px;
		min-height: 50px;
		padding-left: 15px;
		line-height: 50px;
	}

	.input-row input {
		width: 80%;
		height: 50px;
		min-height: 50px;
		padding-right: 30px;
		line-height: 50px;
	}

	.input-row .code {
		width: 50%;
		height: 50px;
		min-height: 50px;
		line-height: 50px;
	}

	.input-row .btn_code {
		width: 30%;
		height: 50px;
		font-size: 13px;
		min-height: 50px;
		line-height: 50px;
		padding: 0;
	}

	.input-row.border::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 15px;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.btn-row {
		margin-top: 50px;
		padding: 20px;
	}

	button.primary {
		background-color: #0faeff;
	}
</style>

<template>
	<view class="">
		<view class="uni-center">
			<image class="image" style="width: 100%;height: 360upx;" mode="" src="../../../static/title_bg.jpg" />
		</view>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in listData" :key="key"
				@click="goDetail(value)">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" :src="value.icon"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{value.title}}</view>
						<view class="uni-media-list-text-bottom">
							<text>{{value.moduleName}}</text>
							<text>{{value.createTime}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="contentInfo">
			<view class="data">
				<image src="../../../static/d_new.png"></image>
				<view class="title">标题</view>
				<view class="date">2024年2月6日 15:42:32</view>
			</view>
			<view class="data">
				<image src="../../../static/d_new.png"></image>
				<view class="title">标题</view>
				<view class="date">2024年2月6日 15:42:32</view>
			</view>
			<view class="data">
				<image src="../../../static/d_new.png"></image>
				<view class="title">标题</view>
				<view class="date">2024年2月6日 15:42:32</view>
			</view>
			<view class="data">
				<image src="../../../static/d_new.png"></image>
				<view class="title">标题</view>
				<view class="date">2024年2月6日 15:42:32</view>
			</view>
		</view>
	</view>
</template>

<script>
	var dateUtils = require('../../../common/util.js').dateUtils;
	var limit = 10,
		page = 1;
	var data = {
		/* "cmsNews.moduleId": moduleId, */
		"page": page,
		"limit": limit
	}
	export default {
		data() {
			return {
				listData: [],
				reload: false
			}
		},
		onLoad() {
			this.getList();
		},
		onPullDownRefresh() {
			this.reload = true;
			this.getList();
		},
		onReachBottom() {
			this.getList();
		},
		methods: {
			getList() {
				data.page = page++;
				var url = "http://111.19.140.83/cmsNews/list.do";
				uni.request({
					url: url,
					data: data,
					success: (data) => {
						var rsp = data.data;
						if (rsp.code == 200) {
							let list = this.setTime(rsp.data);
							this.listData = this.reload ? list : this.listData.concat(list);
							this.reload = false;
						}
					},
					fail: (rsp, code) => {
						console.log('fail' + JSON.stringify(rsp));
					}
				})
			},
			goDetail: function(e) {
				let detail = {
					moduleName: e.moduleName,
					cover: e.cover,
					id: e.id,
					createTime: e.createTime,
					title: e.title
				}
				uni.navigateTo({
					url: "new_detail/new_detail?detail=" + encodeURIComponent(JSON.stringify(detail))
				})
			},
			setTime: function(items) {
				var newItems = [];
				items.forEach((e) => {
					newItems.push({
						moduleName: e.moduleName,
						icon: e.icon,
						id: e.id,
						createTime: dateUtils.format(e.createTime),
						title: e.title
					});
				});
				return newItems;
			}
		},
	}
</script>

<style>
	page {
		height: auto;
		min-height: 100%;
	}

	.uni-card {
		box-shadow: none;
	}

	.uni-list:after {
		height: 0;
	}

	.uni-list:before {
		height: 0;
	}

	.uni-media-list-logo {
		width: 180upx;
		height: 140upx;
	}

	.uni-media-list-body {
		height: auto;
		justify-content: space-around;
	}

	.uni-media-list-text-top {
		height: 74upx;
		font-size: 28upx;
		overflow: hidden;
	}

	.uni-media-list-text-bottom {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.contentInfo {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		padding: 2%;
	}

	.contentInfo .data {
		width: 47%;
		margin-top: 2%;
		background-color: #fff;
		border-radius: 6px;
	}

	.contentInfo .data image {
		width: 100%;
		height: 120px;
	}

	/* .contentInfo .data:nth-child(even) {
		margin-left: 2%;
	} */

	.contentInfo .data .title {
		text-align: center;
		font-size: 24px;
		font-weight: bold;
	}

	.contentInfo .data .date {
		padding: 4px;
	}
</style>
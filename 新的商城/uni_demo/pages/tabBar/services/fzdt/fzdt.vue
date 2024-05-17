<template>
	<view style="background-color:#efeff4 ;">
		<!-- <view class="uni-padding-wrap uni-common-mt" style="margin-top: 20upx;">
			<view class="uni-flex uni-row">
				<view class="top_view_s">所属领域</view>
				<view class="top_view_s">所属区域</view>
			</view>
		</view>	
		<view class="input-view">
			<uni-icon type="search" size="22" color="#666666"></uni-icon>
			<input confirm-type="search" @confirm="confirm" class="input" type="text" placeholder="输入搜索关键词" />
		</view> -->
		<view class="uni-list" v-for="(value,key) in listData" :key="key" @click="goDetail(value)" style="margin-top: 20upx;">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover"  style="margin-top: 10upx;">
				<view class="uni-media-list">
					<view class="uni-media-list-logo">
						<image :src="value.icon"></image>
					</view>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top" >{{value.name}}
						<uni-tag class="tagme" :text='value.typeName' type="primary" :circle="true" size="small"></uni-tag>
						</view>	
						<!-- <view class="uni-media-list-text-top" v-for="(value1,i) in value.practiceMajor" :key="i">{{value.name}}
						<uni-tag class="tagme" :text='value.typeName' type="primary" :circle="true" size="small"></uni-tag>
						<uni-tag class="tagme" :text='value1' type="success" :circle="true" size="small"></uni-tag> 
						</view>	 -->	
									
						<view class="uni-media-list-text-bottom uni-ellipsis">{{value.organizationName}}</view>
					</view>
				</view>
			</view>
			<view class="uni-grid-9 uni-common-mt">
				<view class="uni-grid-9-item" >
					<text class="uni-grid-9-text" style="color: #61A1F1;">{{value.consultNumber}}</text>
					<text class="uni-grid-9-text">服务人次</text>
				</view>
				<view class="uni-grid-9-item">
					<text class="uni-grid-9-text" style="color: #61A1F1;">{{value.degree}}</text>
					<text class="uni-grid-9-text">好评率</text>
				</view>
				<view class="uni-grid-9-item">
					<text class="uni-grid-9-text" style="color: #61A1F1;">{{value.phone}}</text>
					<text class="uni-grid-9-text">服务电话</text>
				</view>
			</view>
		</view>
	</view>
</template>
 
<script>
	import uniTag from '@/components/uni-tag.vue'
	var limit = 10,
		page = 1;
	var data = {
		/* "cmsNews.moduleId": moduleId, */
		"page": page,
		"limit": limit
	}
	export default {
		components: {
			uniTag
		},
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
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url:'map/map'
			})
		},
		methods: {
			getList() {
				data.page = page++;
				var url = "http://111.19.140.83/coreLawPerson/list.do";
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
					name: e.name,
					icon: e.icon,
					id: e.id,
					organizationName:e.organizationName,
					consultNumber:e.consultNumber,
					phone:e.phone,
					degree:e.degree,
					typeName:e.typeName
					
				}
				uni.navigateTo({
					url: "lawyer_detail/lawyer_detail?detail=" + encodeURIComponent(JSON.stringify(detail))
				})
			},
			setTime: function(items) {
				var newItems = [];
				items.forEach((e) => {
					var practiceMajors = [];
					if(e.practiceMajor!=null){
						practiceMajors = e.practiceMajor.split(",");
					}
					newItems.push({
						name: e.name,
						icon: e.icon,
						id: e.id,
						organizationName: e.organizationName,
						consultNumber: e.consultNumber,
						phone: e.phone,
						degree: e.degree,
						typeName: e.typeName,
						practiceMajor:practiceMajors // 1,2,3
					});
				});
				return newItems;
			},
		},
	}
</script>
<style>
	.top_view_s {
		width: 50%;
		text-align: center;
		font-size: 30upx;
		line-height: 30upx;
		border: 1px solid rgba(0, 0, 0, .2);
		padding: 20upx;
	}

	.input-view {
		display: flex;
		align-items: center;
		flex-direction: row;
		background-color: #e7e7e7;
		height: 30px;
		border-radius: 15px;
		padding: 0 10px;
		margin: 20upx;
		flex: 1;
	}
	.uni-grid-9{
		background-color: #FFFFFF;
		height: 110upx;
		border-bottom: none;
		border-top:none;
	}
	.uni-common-mt{
		margin-top: 0;
		padding-top: 0;
		border-top:none;
		border-bottom: none;
	}
	.uni-grid-9-item{
		height: 110upx;
		padding-top: 37upx;
	}
	.uni-grid-9-text{
		font-size: 13px;
	}
	.tagme{
		height: 30px;
	}
	
</style>

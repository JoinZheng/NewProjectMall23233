<template>
	<view style="background-color:#efeff4;padding: 15upx;">
		<view class="" style="width: 100%;text-align: center;">
			<image :src="details.icon" mode="" style="height: 80px;width: 80px;border-radius: 40px;"></image>
		</view>
		<view class="" style="text-align: center;color: #586C94;">{{details.name}}
			<uni-tag class="tagme" :text='details.typeName' type="primary" :circle="true" size="small"></uni-tag>
		</view>
		<view class="" style="text-align: center;color: #586C94;">执业机构:<text>{{details.organizationName}}</text></view>
		<view class="uni-grid-9 uni-common-mt">
			<view class="uni-grid-9-item">
				<text class="uni-grid-9-text" style="color: #61A1F1;">{{details.consultNumber}}</text>
				<text class="uni-grid-9-text">服务人次</text>
			</view>
			<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover">
				<text class="uni-grid-9-text" style="color: #61A1F1;">{{details.degree}}</text>
				<text class="uni-grid-9-text">好评率</text>
			</view>
			<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover">
				<text class="uni-grid-9-text" style="color: #61A1F1;">{{details.phone}}</text>
				<text class="uni-grid-9-text">服务电话</text>
			</view>
		</view>

		<view class="uni-card">
			<view class="uni-card-header">基本信息</view>
			<view class="uni-card-content">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate">
						性别
						<text>{{sex}}</text>
					</view>

				</view>
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate">
						民族
						<text>{{nation}}</text>
					</view>
				</view>
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate">
						学历
						<text>{{education}}</text>
					</view>
				</view>
			</view>
		</view>

		<view class="uni-card">
			<view class="uni-card-header">执业信息</view>
			<view class="uni-card-content">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate">
						执业证号
						<text>{{practiceNo}}</text>
					</view>
				</view>
				<view class="uni-list-cell">
					<view class="uni-list-cell-navigate">
						执业机构
						<text>{{organizationName}}</text>
					</view>
				</view>
				<view class="uni-list-cell">
					<view class="uni-list-cell-navigate">
						执业证获得时间
						<text>{{issueDate}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="uni-card">
			<view class="uni-card-header">业务领域</view>
			<view class="uni-card-content">
				<view class="uni-card-content-inner">
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniTag from '@/components/uni-tag.vue'
	export default {
		components: {
			uniTag
		},
		data() {
			return {
				details: {},
				sex: '',
				nation: '',
				education: '',
				practiceNo: '',
				issueDate: ''

			};
		},
		onLoad(e) {
			this.details = JSON.parse(decodeURIComponent(e.detail));
			this.getDetail();
		},
		methods: {
			getDetail() {
				uni.request({
					url: 'http://111.19.140.83/coreLawPerson/get.do?id=' + this.details.id,
					dataType: 'json',
					success: (rsp) => {
						//rsp = JSON.stringify(rsp);
						if (rsp.statusCode == 200) {
							this.sex = rsp.data.sex;
							this.nation = rsp.data.nation;
							this.education = rsp.data.education;
							this.practiceNo = rsp.data.practiceNo;
							this.issueDate = rsp.data.issueDate;
						}
					},
					fail: () => {
						console.log('fail');
					}
				})
			}

		}
	}
</script>

<style>
	.uni-grid-9 {
		background-color: #FFFFFF;
		height: 110upx;
		border-bottom: none;
		border-top: none;
	}

	.uni-common-mt {
		margin-top: 0;
		padding-top: 0;
		border-top: none;
		border-bottom: none;
	}

	.uni-grid-9-item {
		height: 110upx;
		padding-top: 37upx;
	}

	.uni-grid-9-text {
		font-size: 13px;
	}
</style>

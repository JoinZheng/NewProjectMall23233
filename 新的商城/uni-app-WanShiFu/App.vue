<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* 每个页面公共css，这个如果不引入的话会出现vant组件可以使用但是没有样式（注意后缀一定要带） */
	@import '@/node_modules/vant/lib/index.css';
</style>


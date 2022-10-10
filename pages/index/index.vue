<template>
	<view class="content">
		<view class="bg">
			<image src="../../static/bg/01.jpg" mode=""></image>
		</view>
		<!-- <image class="logo" src="/static/logo.png"></image> -->
		<image v-if="!imageurl" class="imgsurl" src="../../static/bg/1099.gif"></image>
		<image v-else class="imgsurl" v-bind:src="imageurl"></image>
		<input class="inp" type="text" v-model="text" placeholder="请输入姓名" />
		<!-- <button size="mini" @click="goto('/pages/about/about')">跳转</button> -->
		<button class="btn" @click="getName()">获取签名</button>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				text: "",
				title: 'Hello',
				imageurl: '',
			}
		},
		onLoad() {

		},
		methods: {
			goto(url) {
				console.log("按钮被点击了，且传入的参数是：" + url)
				//在起始页面跳转到test.vue页面并传递参数
				uni.navigateTo({
					url: url
				});
			},

			getName() {
				// console.log(111);
				uni.request({
					url: 'http://localhost:5677/a', // 接口地址 GET请求。
					data: {
						id: this.text,
						// zhenbi: 20191123, // 可忽略
						id1: 904, // 默认字体
						id2: '#000', // 背景颜色
						id3: '', // 颜色
						id4: '', // 描边颜色
						id5: '', // 颜色
						id6: '#ff45fc', // 名字颜色
					},
					// method: 'POST',
					// header: {
					// 	'custom-header': 'hello' //自定义请求头信息
					// },
					success: (res) => {
						console.log(res.data.data);
						// this.text = 'request success';
						this.imageurl = res.data.data
						// this.text = ''
					}
				});
			}
		}
	}
</script>

<style lang="less">
	.content {
		width: 100vw;
		height: 100vh;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.bg {
		position: absolute;
		width: 100vw;
		height: 100vh;
		// background-image: url('@/static/bg/01.jpg');
		// background-position: center;
		top: 0;
		left: 0;
		z-index: -1;
		image {
			width: 100%;
			height: 100%;
		}
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}


	.imgsurl {
		margin-top: 100rpx;
		width: 560rpx;
		height: 200rpx;
	}

	.inp {
		margin-top: 200rpx;
		text-align: center;
		width: 560rpx;
		height: 80rpx;
		border: 1rpx solid rgba(200, 200, 200, 0.6);
		background-color: #fff;

		// border-radius: 10rpx;
		&:hover {
			border-color: #8f8f94;
		}
	}


	.btn {
		margin-top: 40rpx;
		color: #940886;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>

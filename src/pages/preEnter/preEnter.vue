<template>
    <view class="container">
        <text class="title">请完善用户信息</text>
        <button open-type="chooseAvatar" @chooseavatar="onChooseAvatar" class="choose-btn">
            <image :src="userStore.avatar" mode="aspectFill" class="avatar"></image>
        </button>
        <view class="input">
            <uni-easyinput v-model="nickname" placeholder="请输入昵称"></uni-easyinput>
        </view>
        <button type="primary" class="confirm" @click="onConfirm">确定</button>
        <view class="tip">完善信息后使用丰富功能</view>
    </view>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { ref } from 'vue';

const userStore = useUserStore();
const nickname = ref<string>('');

const onChooseAvatar = (payload: any) => {
    console.log(payload)
    userStore.avatar = payload.detail.avatarUrl;
}

const onConfirm = () => {
    if (!nickname.value) {
        uni.showToast({
            title: '请输入昵称',
            mask: true,
            icon: 'error'
        })
        return;
    }
    userStore.nickname = nickname.value;
    
    // uni.showLoading({
    //     title: '请稍等',
    // })
    // uni.login({
    //     provider: 'weixin',
    //     success: res => {
    //         const jsCode = res.code;

    //         // 调用够用登录接口
    //     },
    //     fail: err => {
    //         console.log(err);
    //     },
    //     complete: obj => {
    //         uni.hideLoading();
    //     }
    // })

    uni.switchTab({
        url: '../index/index',
        success: res => {
            console.log(res)
        },
        fail: err => {
            console.log(err)
        }
    })
}

</script>

<style lang="scss" scoped>
.container {
    width: 90%;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.title {
    font-size: 22px;
    margin-bottom: 50px;
}

.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
}

.choose-btn {
    background-color: transparent;
    outline: none;
    border: none;

    &::after {
        content: '';
        border: none;
    }
}

.input {
    width: 80%;
    margin-top: 10px;
}

.confirm {
    width: 80%;
    margin-top: 50px;
}

.tip {
    margin-top: 15px;
    font-size: 12px;
}
</style>

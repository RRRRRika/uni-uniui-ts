<template>
    <view class="container">
        <view class="info">
            <image :src="user.avatar" class="info-avatar" mode="aspectFill"></image>
            <view class="info-nickname">
                {{ user.nickname }}
            </view>
        </view>
        <view class="functions">
            <view class="functions-item">
                <navigator url="../userInfor/userInfor" open-type="navigate">个人信息</navigator>
            </view>
            <view class="functions-item">
                <navigator url="../preStoreList/preStoreList" open-type="navigate">预留名单</navigator>
            </view>
            <view class="functions-item" @click="copyPCUrl">电脑端网址</view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user';

const user = useUserStore();
const copyPCUrl = () => {
    uni.setClipboardData({
        data: 'https://example.com'
    })
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.info {
    padding: 80px 0;
    padding-bottom: 200px;
    align-self: stretch;

    display: flex;
    // justify-content: space-evenly;
    background-image: linear-gradient(to bottom, #ceccf3, #dbd8f6, #e7e5f9, #f3f2fc, #ffffff);

    &-avatar {
        display: block;
        width: 100px;
        height: 100px;
        margin-left: 30px;
        border-radius: 50%;
        overflow: hidden;
    }

    &-nickname {
        align-self: center;
        max-width: 50%;
        font-size: 25px;
        font-weight: 600;
        margin-left: 35px;
    }
}

.functions {
    padding: 10px;
    width: 80%;
    transform: translateY(-150px);
    background: #F7F7F7;
    border-radius: 10px;

    &-item {
        padding: 15px;
        font-size: 25px;
        border-bottom: 3px solid #eee;

        &:last-child {
            border-bottom: none;
        }
    }
}</style>

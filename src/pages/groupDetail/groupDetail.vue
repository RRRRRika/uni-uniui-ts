<template>
    <view class="container">
        <view class="header">
            <text>{{ name }}</text>
            <button type="primary" class="setting" @click="toConfig">设置</button>
        </view>
        <view class="member-list">
            <text class="member-list__title">成员列表</text>
            <uni-list>
                <uni-list :border="true">
                    <uni-list-item thumb="https://picsum.photos/200/300" thumb-size="lg" title="草稚直哉"
                        right-text="群主"></uni-list-item>
                    <uni-list-item thumb="https://picsum.photos/200/300" thumb-size="lg" title="夏目蓝"
                        right-text="群员"></uni-list-item>
                    <uni-list-item thumb="https://picsum.photos/200/300" thumb-size="lg" title="本间心铃"
                        right-text="群员"></uni-list-item>
                    <uni-list-item thumb="https://picsum.photos/200/300" thumb-size="lg" title="咲崎樱子"
                        right-text="群员"></uni-list-item>
                    <uni-list-item thumb="https://picsum.photos/200/300" thumb-size="lg" title="鸟谷真琴"
                        right-text="群员"></uni-list-item>
                </uni-list>
            </uni-list>
        </view>
        <uni-fab horizontal="right" vertical="bottom" direction="horizontal" :content="content" />
    </view>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app';
import type { UniFabContent } from '@uni-helper/uni-ui-types';
import { ref } from 'vue';

const name = ref<string>('');
const content: UniFabContent = [
    {
        iconPath: 'pages/static/icon/paper-plane.png',
        selectedIconPath: 'pages/static/icon/paper-plane.png',
        text: '发布',
        active: false
    },
    {
        iconPath: '../../static/icon/link.png',
        selectedIconPath: '../../static/icon/link.png',
        text: '邀请',
        active: false
    }
]

const toConfig = () => {
    uni.navigateTo({
        url: '../groupConfig/groupConfig'
    })
}

onLoad((payload) => {
    name.value = payload!.name;
})
</script>

<style lang="scss" scoped>
.container {
    padding: 10px;
}

.header {
    padding: 10px;
    font-size: 30px;
    font-weight: 600;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.setting {
    font-size: 16px;
    font-weight: 400;
    margin: 0;
}

.member-list {
    padding: 10px;

    &__title {
        display: block;
        padding-left: 5px;
        padding-bottom: 10px;
    }
}
</style>

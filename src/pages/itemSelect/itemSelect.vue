<template>
    <view class="container">
        <uni-grid :column="3" @change="addItem">
            <uni-grid-item class="item" :index="1">
                <view class="item">
                    <uni-icons type="font" size="45"></uni-icons>
                    <text class="text">文本</text>
                </view>
            </uni-grid-item>
            <uni-grid-item class="item" :index="2">
                <view class="item">
                    <uni-icons type="phone" size="45"></uni-icons>
                    <text class="text">手机号</text>
                </view>
            </uni-grid-item>
            <uni-grid-item class="item" :index="3">
                <view class="item">
                    <uni-icons type="email" size="45"></uni-icons>
                    <text class="text">邮箱</text>
                </view>
            </uni-grid-item>
            <uni-grid-item class="item" :index="4">
                <view class="item">
                    <uni-icons type="image" size="45"></uni-icons>
                    <text class="text">图片</text>
                </view>
            </uni-grid-item>
            <uni-grid-item class="item" :index="5">
                <view class="item">
                    <uni-icons type="folder-add" size="45"></uni-icons>
                    <text class="text">文件</text>
                </view>
            </uni-grid-item>
            <uni-grid-item class="item" :index="6">
                <view class="item">
                    <uni-icons type="videocam" size="45"></uni-icons>
                    <text class="text">视频</text>
                </view>
            </uni-grid-item>
        </uni-grid>
    </view>
</template>

<script setup lang="ts">
import type { ItemType } from '@/types/template';
import type { UniGridOnChange } from '@uni-helper/uni-ui-types';

const addItem = (e: any) => {
    let index = e.detail.index as number;
    let label = '', required = 0, t = '';
    if (index == 1) {
        t = 'text';
        label = '自定义文本';
    } else if (index == 2) {
        t = 'phone';
        label = '手机号码';
    } else if (index == 3) {
        t = 'email';
        label = '邮箱';
    } else if (index == 4) {
        t = 'img';
        label = '图片';
    } else if (index == 5) {
        t = 'file';
        label = '文件';
    } else if (index == 6) {
        t = 'video';
        label = '视频';
    }

    uni.redirectTo({
        url: `../createTemplate/createTemplate?label=${label}&required=${required}&type=${t}`,
    })
}

</script>

<style lang="scss" scoped>
.item {
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
</style>

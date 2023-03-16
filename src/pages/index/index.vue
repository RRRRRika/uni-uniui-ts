<template>
    <view class="container">
        <image src="../../static/img/form.png" mode="aspectFit" class="img"></image>
        <view class="title">
            {{ hello }}
        </view>
        <view class="events">
            <uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="text"
                activeColor="#6c63ff"></uni-segmented-control>
            <view class="content">
                <view v-show="current === 0">
                    <!-- <text>没有数据</text> -->
                    <uni-list>
                        <uni-list :border="true">
                            <uni-list-chat title="示例事件" :time="new Date(Date.now()).toLocaleString()" badgeText="50%"></uni-list-chat>
                            <uni-list-chat title="示例事件" :time="new Date(Date.now()).toLocaleString()" badgeText="80%"></uni-list-chat>
                        </uni-list>
                    </uni-list>
                </view>
                <view v-show="current === 1">
                    <!-- <text>没有数据</text> -->
                    <uni-list>
                        <uni-list :border="true">
                            <uni-list-chat title="示例事件" :time="new Date(Date.now()).toLocaleString()"></uni-list-chat>
                            <uni-list-chat title="示例事件" :time="new Date(Date.now()).toLocaleString()"></uni-list-chat>
                            <uni-list-chat title="示例事件" :time="new Date(Date.now()).toLocaleString()"></uni-list-chat>
                            <uni-list-chat title="示例事件" :time="new Date(Date.now()).toLocaleString()"></uni-list-chat>
                            <uni-list-chat title="示例事件" :time="new Date(Date.now()).toLocaleString()"></uni-list-chat>
                        </uni-list>
                    </uni-list>
                </view>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import type { UniSegmentedControlOnClickItem } from '@uni-helper/uni-ui-types';
import { ref } from 'vue';

const hello = ref<string>('Welcome.');
const current = ref<number>(0);
const items = ['未完成/待办', '全部']

const onClickItem: UniSegmentedControlOnClickItem = (e) => {
    if (current.value !== e.currentIndex) {
        current.value = e.currentIndex;
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;

    padding: 15px;
    align-items: center;
    // margin-top: 100px;
}

.img {
    height: 150px;
}

.title {
    font-size: 30px;
    font-weight: 600;
}

.events {
    width: 100%;
    margin-top: 15px;
}

.content {
    padding: 10px;
}
</style>

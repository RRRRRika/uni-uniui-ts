<template>
<view class="container">
    <view class="item">
        <text class="item__name">我的群昵称</text>
        <uni-easyinput></uni-easyinput>
    </view>
    <view class="item">
        <text class="item__name">群名称</text>
        <uni-easyinput :disabled="true"></uni-easyinput>
    </view>
    <view class="confirm">
        <button type="primary">确定</button>
    </view>
</view>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.container {
    height: 100vh;
    padding: 15px;

    display: flex;
    flex-direction: column;
}

.item {
    display: flex;
    align-items: center;
    margin: 15px 0;

    &__name {
        min-width: 30%;
    }
}

.confirm {
    margin-top: 20px;
}
</style>

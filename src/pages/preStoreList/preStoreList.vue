<template>
    <view class="container">
        <image src="../../static/img/void.png" mode="aspectFit" class="img"></image>
        <view class="info">暂无名单</view>
    </view>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.container {
    
    display: flex;
    flex-direction: column;
    align-items: center;
}

.img {
    margin-top: 100px;
}

.info {
    padding: 10px;
    font-size: 20px;
    font-weight: 600;
}
</style>

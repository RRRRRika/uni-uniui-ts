<template>
    <view class="container" @click="add ? $emit('join') : $emit('detail')">
        <view>
            <view class="name">
                {{ summ.name }}
            </view>
        </view>
        <view class="others">
            <view class="time">
                {{ new Date(summ.createTime).toLocaleString() }}
            </view>
            <view class="size">
                {{ summ.size.toString() + '位成员' }}
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import type { Group } from '@/types/group';

const props = defineProps<{ summ: Group, add?: boolean }>();
const emit = defineEmits<{ (e: 'join'): void, (e: 'detail'): void }>();
</script>

<style lang="scss" scoped>
.container {
    min-width: 80%;
    border-radius: 8px;
    padding: 10px;
    margin-top: 15px;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, .1);

    background-color: #CECCF3;
    align-self: center;
}

.name {
    padding: 5px;
    font-size: 22.5px;
}

.others {
    padding: 5px;
    font-size: 14px;

    display: flex;
    justify-content: space-between;
}
</style>

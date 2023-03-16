<template>
    <view class="container" @click="$emit('edit')">
        <view class="name">
            {{ props.tname }}
        </view>
        <view class="type">
            {{ '模板类型: ' + props.ttype }}
        </view>
    </view>
</template>

<script setup lang="ts">

const props = defineProps<{
    tid?: string;
    tname: string;
    ttype: string;
}>();
const emit = defineEmits<{
    (e: 'edit'): void
}>();
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

    display: flex;
    flex-direction: column;
}

.name {
    align-self: flex-start;
    padding: 5px;
    font-size: 22.5px;
}

.type {
    align-self: flex-start;
    padding: 5px;
    font-size: 14px;
}
</style>

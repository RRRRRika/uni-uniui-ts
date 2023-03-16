<template>
    <view class="container">
        <uni-forms label-width="100" :model="newGroup">
            <uni-forms-item label="群组名称" name="name" required>
                <uni-easyinput v-model="newGroup.name" placeholder="请输入名称" />
            </uni-forms-item>
            <uni-forms-item label="是否公开" name="isPublic">
                <uni-data-checkbox :localdata="choice" v-model="newGroup.isPublic" />
            </uni-forms-item>
        </uni-forms>
        <button class="btn" @click="handleCreate">提交</button>
    </view>
</template>

<script setup lang="ts">
import type { Group } from '@/types/group';
import { useGroupStore } from '@/stores/group';
import { ref } from 'vue';

const group = useGroupStore();
const choice = [{ value: 0, text: '不公开' }, { value: 1, text: '公开' }];
const newGroup = ref<Group>({
    name: '',
    size: 1,
    createTime: -1,
    isPublic: 1
});

const handleCreate = () => {
    // console.log(newGroup.value);
    uni.navigateBack();
    group.groupList.push({
        name: newGroup.value.name,
        size: newGroup.value.size,
        createTime: Date.now(),
        isPublic: newGroup.value.isPublic
    })
}
</script>

<style lang="scss" scoped>
.container {
    padding: 10px;
}
.btn {
    background-color: #6C63FF;
    color: #fff;
}
</style>

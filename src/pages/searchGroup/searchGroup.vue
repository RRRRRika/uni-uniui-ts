<template>
    <uni-search-bar placeholder="群组名称" v-model="input" @confirm="search" @input=""></uni-search-bar>
    <view class="results">
        <view class="no-data" v-if="!groupList">
            <image src="../../static/img/void.png" mode="aspectFit"></image>
            <text class="no-data-info">没有数据</text>
        </view>
        <GroupItem v-for="item in groupList" :key="item.name" :summ="item" @join="join(item)" add></GroupItem>
    </view>
    <uni-popup ref="alertDialog" type="dialog">
        <uni-popup-dialog type="info" cancelText="取消" confirmText="确定" title="加入" content="确认加入该群组？" 
        @confirm="confirmJoin" @close=""></uni-popup-dialog>
    </uni-popup>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import GroupItem from '@/componet/GroupItem.vue';
import type { Group } from '@/types/group';
import type { UniPopupInstance } from '@uni-helper/uni-ui-types';
import { useGroupStore } from '@/stores/group';

let curSelect: Group;
const input = ref<string>();
const groupList = ref<Group[]>();
const alertDialog = ref<UniPopupInstance | null>();
const groups = useGroupStore();

const search = () => {
    console.log(input.value);

    groupList.value = [
        {
            name: '樱之诗',
            size: 8,
            isPublic: 1,
            createTime: Date.now() - 300000
        },
        {
            name: '樱之刻',
            size: 7,
            isPublic: 1,
            createTime: Date.now()
        }
    ]
}

const join = (item: Group) => {
    console.log('join event')
    curSelect = item;
    alertDialog.value!.open!();
}
const confirmJoin = () => {
    groups.groupList.push(curSelect);
    uni.switchTab({ url: '../group/group' });
}
</script>

<style lang="scss" scoped>
.results {
    margin: 15px auto;
    width: 90%;
}

.no-data {
    margin-top: 100px;

    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>

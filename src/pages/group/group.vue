<template>
    <view class="container">
        <view class="option" v-if="groupList.length === 0">
            <image src="../../static/img/group.png" mode="aspectFit" class="option-img"></image>
            <view class="option-info">
                <view class="option-info__main">
                    Oops，你还没有添加群组。
                </view>
                <view class="option-info__sub">
                    你可以：
                </view>
            </view>
            <button class="option-btn" @click="addGroup">加入群组</button>
            <button class="option-btn" @click="createGroup">创建群组</button>
        </view>
        <view class="list" v-else>
            <view class="btn-box">
                <button class="btn-box__btn" @click="addGroup">加入群组</button>
                <button class="btn-box__btn" @click="createGroup">创建群组</button>
            </view>
            <view class="divider">
                
            </view>
            <view class="groups">
                <GroupItem v-for="(item, index) in groupList" :key="index" :summ="item" @detail="toDetail(item.name)" />
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import GroupItem from '@/componet/GroupItem.vue';
import { useGroupStore } from '@/stores/group';
import { storeToRefs } from 'pinia';

const group = useGroupStore();
const { groupList } = storeToRefs(group);

const addGroup = () => {
    uni.navigateTo({
        url: '../searchGroup/searchGroup'
    })
}
const createGroup = () => {
    uni.navigateTo({
        url: '../createGroup/createGroup'
    });
}
const toDetail = (name: string) => {
    uni.navigateTo({
        url: `../groupDetail/groupDetail?name=${name}`
    })
}
</script>

<style lang="scss" scoped>
// .container {
//     // margin-top: 100px;
    
// }

.option {
    display: flex;
    flex-direction: column;
    
    &-img {
        margin: 0 auto;
    }
    
    &-info {
        text-align: center;
        font-size: 20px;
        
        &__main {
            font-weight: 600;
        }
        
        &__sub {
            margin: 20px 0;
            font-weight: 200;
        }
    }
    
    &-btn {
        width: 300px;
        margin-top: 30px;
        color: #fff;
        background-color: #6c63ff;
    }
}

.list {
    margin-bottom: 20px;
    
    display: flex;
    flex-direction: column;
    align-content: center;
}

.btn-box {
    padding: 20px;
    display: flex;
    
    &__btn {
        min-width: 42%;
        color: #fff;
        background-color: #6c63ff;
    }
}

.divider {
    height: 3px;
    width: 85%;
    background-color: #EEEEEE;
    
    align-self: center;
}
.groups {
    padding: 0 15px;
}
</style>

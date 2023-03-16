<template>
    <view class="container">
        <image src="../../static/img/void.png" mode="aspectFit" class="img" v-if="templates.length === 0"></image>
        <view class="template-list" v-if="templates.length !== 0">
            <template-item v-for="item in templates" :tid="item.id" :tname="item.name" :ttype="item.usefor" :key="item.id"
                @edit="edit(item.id)"></template-item>
        </view>
        <view class="info" v-else>
            这里什么也没有。
        </view>
        <uni-fab :pattern="pattern" horizontal="right" vertical="bottom" :pop-menu=false @fab-click="fabClick"></uni-fab>
    </view>
</template>

<script setup lang="ts">
import TemplateItem from '@/componet/TemplateItem.vue';
import { useTemplateStore } from '@/stores/template';
import { storeToRefs } from 'pinia';

const templateStore = useTemplateStore();
const { templates } = storeToRefs(templateStore);

const pattern = {
    color: '#6C63FF',
    selectedColor: '#007aff',
    backgroundColor: '#ffffff',
    buttonColor: '#3c3e49'
}

const edit = (id: string) => {
    // console.log(id);
    uni.navigateTo({ url: `../createTemplate/createTemplate?edit=true&id=${id}` });
}

const fabClick = () => { uni.navigateTo({ url: '../createTemplate/createTemplate?create=true' }) }
</script>

<style lang="scss" scoped>
.container {
    // margin-top: 100px;

    display: flex;
    flex-direction: column;
    align-items: center;
}

.img {
    margin-top: 100px;
}

.info {
    margin-top: 30px;
    font-size: 20px;
}

.template-list {
    width: 90%;
}
</style>

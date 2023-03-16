<template>
    <view class="container">
        <uni-forms ref="templateForms" label-position="top" label-width="100">
            <uni-forms-item label="表单名称" name="name" class="item" required>
                <uni-easyinput v-model="name" placeholder="表单名称" />
            </uni-forms-item>
            <uni-forms-item label="模板类型" name="usefor" class="item" required>
                <uni-data-select
                    :localdata="[{ value: '填表', text: '填表', disable: false }, { value: '接龙', text: '接龙', disable: false }, { value: '投票', text: '投票', disable: false }]"
                    v-model="usefor">
                </uni-data-select>
            </uni-forms-item>
            <uni-forms-item :label="'新建表单项'" :name="item.label" :required="item.requied === 1"
                v-for="(item, index) in itemList" :key="index" class="item">
                <view class="item-sub">
                    <text class="item-sub__label">表单项名称</text>
                    <uni-easyinput v-model="item.label" :placeholder="item.label" class="item-label" />
                </view>
                <view class="item-sub">
                    <text class="item-sub__label">表单项类型</text>
                    <uni-data-select :localdata="[
                        { value: 'video', text: '视频', disable: false },
                        { value: 'img', text: '图片', disable: false },
                        { value: 'text', text: '自定义文本', disable: false },
                        { value: 'phone', text: '号码', disable: false },
                        { value: 'file', text: '文件', disable: false },
                        { value: 'email', text: '邮箱', disable: false }
                    ]" v-model="item.type" :clear="false" disabled>
                    </uni-data-select>
                </view>
                <view class="item-sub">
                    <text class="item-sub__label">是否必填</text>
                    <uni-data-select
                        :localdata="[{ value: 0, text: '否', disable: false }, { value: 1, text: '是', disable: false }]"
                        v-model="item.requied">
                    </uni-data-select>
                </view>
                <view class="item-sub" v-if="item.type === 'file' || item.type === 'img' || item.type === 'video'">
                    <text class="item-sub__label">选择数量</text>
                    <uni-data-select :localdata="[
                        { value: 1, text: '1', disable: false },
                        { value: 2, text: '2', disable: false },
                        { value: 3, text: '3', disable: false },
                        { value: 4, text: '4', disable: false },
                        { value: 5, text: '5', disable: false },
                        { value: 6, text: '6', disable: false },
                        { value: 7, text: '7', disable: false },
                        { value: 8, text: '8', disable: false }
                    ]">
                    </uni-data-select>
                </view>
                <view class="item-sub">
                    <button class="item-sub__btn" @click="del(index)">删除该项</button>
                </view>
                <!-- <uni-easyinput v-model="item.content" v-if="item.type === 'text' || item.type === 'number'" />
                <uni-file-picker limit="1" title="请选则图片" file-mediatype="image" v-if="item.type === 'img'" />
                <uni-file-picker limit="1" title="请选择视频" file-mediatype="video" v-else-if="item.type === 'video'" />
                <uni-file-picker limit="1" title="请选择文件" file-mediatype="all" v-else-if="item.type === 'file'" /> -->
            </uni-forms-item>
        </uni-forms>
        <view class="button-group">
            <button type="primary" size="mini" class="btn" @click="select">新增表单项</button>
            <button type="primary" size="mini" class="btn" @click="submit">保存</button>
        </view>
    </view>
</template>

<script setup lang="ts">
import type { TemplateItem } from '@/types/template';
import type { UniForms, UniFormsInstance, UniFormsRules } from '@uni-helper/uni-ui-types';
import { useTemplateStore } from '@/stores/template';
import { onLoad } from '@dcloudio/uni-app';
import { storeToRefs } from 'pinia';
import { useTemporaryStore } from '@/stores/temporary';
import { ref } from 'vue';

const templateForms = ref<UniFormsInstance | null>();
const useTemplate = useTemplateStore();
const useTemporary = useTemporaryStore();
const { id, name, usefor, itemList } = storeToRefs(useTemporary);

const del = (index: number) => {
    itemList.value.splice(index, 1);
}
const select = () => {
    uni.navigateTo({
        url: '../itemSelect/itemSelect'
    })
}
const submit = () => {
    if (!name.value) {
        uni.showToast({
            title: '请填写表单名称',
            icon: 'error'
        })
        return;
    }
    if (!usefor.value) {
        uni.showToast({
            title: '请选择模板类型',
            icon: 'error'
        })
        return;
    }
    if (itemList.value.length === 0) {
        uni.showToast({
            title: '至少一个新增项',
            icon: 'error'
        })
        return;
    }
    itemList.value.forEach(item => {
        if (!item.label) {
            uni.showToast({
                title: '字段未填写完整',
                icon: 'error'
            })
            return;
        }
    });
    if (!useTemporary.isEdit) {
        useTemplate.templates.push({
            id: id.value,
            name: name.value,
            usefor: usefor.value,
            itemList: [...itemList.value]
        });
    }
    useTemporary.reset();
    uni.switchTab({
        url: '../template/template'
    });
}

onLoad((payload) => {
    if (payload) {
        if (payload.edit) {
            const id = payload.id;
            useTemporary.editTemplate(id);
            return;
        }
        if (payload.create) {
            useTemporary.reset();
        } else {
            itemList.value.push({
                label: payload.label,
                requied: Number.parseInt(payload.required as string),
                type: payload.type,
                content: ''
            })
        }
    }
})
</script>

<style lang="scss" scoped>
.container {
    padding: 15px 0;
    background-color: #eee;
}

.button-group {
    margin-top: 30px;

    display: flex;
    justify-content: space-around;

    .btn {
        width: 40%;
    }
}

.item {
    padding: 18px;
    background-color: #fff;

    &-sub {
        padding: 5px;
        display: flex;
        align-items: center;

        &__label {
            min-width: 25%;
        }

        &__btn {
            width: 80%;
            color: #fff;
            background-color: #dd524d;
            font-size: 12px;
        }
    }
}

.item-label {
    margin-bottom: 10px;
}
</style>

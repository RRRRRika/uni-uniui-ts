<template>
    <view class="container">
        <view class="item">
            <view class="item-text">
                头像
            </view>
            <image :src="avatar" class="item-avatar" mode="aspectFill"></image>
        </view>
        <view class="item" @click="openNickname">
            <view class="item-text">
                昵称
            </view>
            <view class="item-content">
                {{ nickname }}
            </view>
        </view>
        <view class="item" @click="openName">
            <view class="item-text">
                姓名
            </view>
            <view class="item-content">
                {{ name }}
            </view>
        </view>
        <view class="item" @click="openPhoneNumber">
            <view class="item-text">
                手机号码
            </view>
            <view class="item-content">
                {{ phone }}
            </view>
        </view>
        <view class="item" @click="openEmail">
            <view class="item-text">
                邮箱
            </view>
            <view class="item-content">
                {{ email }}
            </view>
        </view>
        <view class="item item-tip">
            点击条目即可修改信息。
            修改头像请点击按钮
        </view>
        <button class="edit-btn" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">修改头像</button>
        <uni-popup ref="ppNick" type="dialog">
            <uni-popup-dialog mode="input" placeholder="请输入昵称" title="修改昵称" @confirm="changeNick"></uni-popup-dialog>
        </uni-popup>
        <uni-popup ref="ppName" type="dialog">
            <uni-popup-dialog mode="input" placeholder="请输入姓名" title="修改姓名" @confirm="changeName"></uni-popup-dialog>
        </uni-popup>
        <uni-popup ref="ppPhone" type="dialog">
            <uni-popup-dialog mode="input" placeholder="请输入手机号码" title="修改手机号码" @confirm="changePhone"></uni-popup-dialog>
        </uni-popup>
        <uni-popup ref="ppEmail" type="dialog">
            <uni-popup-dialog mode="input" placeholder="请输入邮箱" title="修改邮箱" @confirm="changeEmail"></uni-popup-dialog>
        </uni-popup>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { UniPopupDialog, UniPopupDialogOnConfirm, UniPopupDialogOnConfirmDetail } from '@uni-helper/uni-ui-types';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';

const user = useUserStore();
const { avatar, name, nickname, email, phone } = storeToRefs(user);

const ppNick = ref<UniPopupDialog | null>(null);
const ppName = ref<UniPopupDialog | null>(null);
const ppPhone = ref<UniPopupDialog | null>(null);
const ppEmail = ref<UniPopupDialog | null>(null);

const changeName: UniPopupDialogOnConfirm = (detail: UniPopupDialogOnConfirmDetail) => {
    name.value = detail as unknown as string;
};
const changeNick: UniPopupDialogOnConfirm = (detail: UniPopupDialogOnConfirmDetail) => {
    nickname.value = detail as unknown as string;
};
const changePhone: UniPopupDialogOnConfirm = (detail: UniPopupDialogOnConfirmDetail) => {
    phone.value = detail as unknown as string;
};
const changeEmail: UniPopupDialogOnConfirm = (detail: UniPopupDialogOnConfirmDetail) => {
    email.value = detail as unknown as string;
};

const openNickname = () => { ppNick.value?.open() };
const openName = () => { ppName.value?.open() };
const openEmail = () => { ppEmail.value?.open() };
const openPhoneNumber = () => { ppPhone.value?.open() };
const onChooseAvatar = (e: any) => {
    avatar.value = e.detail.avatarUrl;
}

</script>

<style lang="scss" scoped>
.container {
    margin-top: 5px;
    padding: 5px;

    display: flex;
    flex-direction: column;

}

.item {
    padding: 5px 10px;
    margin: 8px;
    height: 50px;
    border-radius: 5px;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, .1);

    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #DEDDF1;

    &-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    &-text {
        font-size: 19px;
    }

    &-tip {
        align-self: center;
        background-color: transparent;
        box-shadow: none;
        font-size: 16px;
    }
}
.edit-btn {
    width: 80%;
}
</style>

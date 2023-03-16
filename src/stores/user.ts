import { defineStore } from 'pinia'
import type { User } from '../types/user';

export const useUserStore = defineStore('user', {
    state: (): User => ({
        avatar: '../../static/avatar.png',
        nickname: '微信用户',
        name: '',
        email: 'rrrrrikaz@example.com',
        phone: '12345678901'
    }),
    getters: {},
    actions: {}
})
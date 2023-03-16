import type { Group } from "@/types/group";
import { defineStore } from "pinia";

export const useGroupStore = defineStore('group', {
    state: () => {
        return {
            groupList: [] as Group[]
        }
    }
});
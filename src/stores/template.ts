import { defineStore } from "pinia";
import type { Template } from "@/types/template";

export const useTemplateStore = defineStore('template', {
  state: () => {
    return {
      templates: [] as Template[]
    }
  },
  actions: {}
})
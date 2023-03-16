import { defineStore } from 'pinia'
import type { Template, TemplateItem } from '@/types/template'
import { useTemplateStore } from './template';

function generateUUID(): string {
  const hexDigits = '0123456789abcdef';
  let uuid = '';

  for (let i = 0; i < 36; i++) {
    if (i === 8 || i === 13 || i === 18 || i === 23) {
      uuid += '-';
    } else if (i === 14) {
      uuid += '4';
    } else {
      uuid += hexDigits.charAt(Math.floor(Math.random() * hexDigits.length));
    }
  }

  return uuid;
}

const templateStore = useTemplateStore();

export const useTemporaryStore = defineStore('temporary', {
  state: () => {
    return {
      isEdit: false,
      id: generateUUID(),
      name: '',
      usefor: '填表',
      itemList: [] as TemplateItem[]
    }
  },
  actions: {
    addItem(item: TemplateItem) {
      this.itemList.push(item);
    },
    reset() {
      this.isEdit = false;
      this.id = generateUUID();
      this.name = '';
      this.usefor = '填表';
      this.itemList = [];
    },
    editTemplate(id: string) {
      const index = templateStore.templates.findIndex(el => el.id === id);
      this.isEdit = true;
      this.id = id;
      this.name = templateStore.templates[index].name;
      this.usefor = templateStore.templates[index].usefor;
      this.itemList = templateStore.templates[index].itemList;
    }
  }
})

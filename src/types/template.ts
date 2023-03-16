type ItemType = 'text' | 'phone' | 'email' | 'img' | 'file' | 'video';

interface Template {
    id: string;
    name: string;
    usefor: string;
    itemList: TemplateItem[];
}

interface TemplateItem {
    label: string;
    requied: number;    // 0 false, 1 true
    type: ItemType;
    content: string;
}

export type {
    ItemType,
    Template,
    TemplateItem
}

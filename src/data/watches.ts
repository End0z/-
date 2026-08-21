export type WatchTheme = {
  id: string;
  name: string;
  nameZh: string;
  concept: string;
  primary: string;
  petal: string;
  background: string;
  accent: string;
};

export const watches: WatchTheme[] = [
  { id: 'sakura', name: 'Sakura Pink', nameZh: '樱花粉', concept: '春天落在手腕上', primary: '#F6B7C8', petal: '#FBE3EA', background: '#FFF9FA', accent: '#E889A3' },
  { id: 'matcha', name: 'Matcha Green', nameZh: '抹茶绿', concept: '一口春天，一点清新', primary: '#B7D7A8', petal: '#E7F1DF', background: '#FAFCF8', accent: '#7FA56F' },
  { id: 'snow', name: 'Snow Blue', nameZh: '雪花蓝', concept: '把一场小雪戴在腕间', primary: '#B9D9EE', petal: '#E6F3FA', background: '#F8FCFF', accent: '#6EA8CF' },
  { id: 'lemon', name: 'Lemon Yellow', nameZh: '柠檬黄', concept: '把晴天留在身边', primary: '#F4D77B', petal: '#FFF1BD', background: '#FFFDF6', accent: '#C99F2E' },
  { id: 'starlight', name: 'Starlight Purple', nameZh: '星空紫', concept: '把晚安写进星光里', primary: '#C8B8E8', petal: '#EEE8FA', background: '#FBF9FF', accent: '#8067B3' }
];

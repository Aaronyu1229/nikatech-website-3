import type { LucideIcon } from 'lucide-react';
import { Factory, Briefcase, ShoppingBag, Truck, MoreHorizontal } from 'lucide-react';

export type IndustryId = 'mfg' | 'pro' | 'ecom' | 'logistics' | 'other';

export interface IndustryOption {
  id: IndustryId;
  label: string;
  icon: LucideIcon;
  hasTextInput?: boolean;
}

export const industryOptions: IndustryOption[] = [
  { id: 'mfg', label: '製造業 / 工廠', icon: Factory },
  { id: 'pro', label: '顧問 / 專業服務', icon: Briefcase },
  { id: 'ecom', label: '電商 / 零售', icon: ShoppingBag },
  { id: 'logistics', label: '物流 / 貿易', icon: Truck },
  { id: 'other', label: '其他', icon: MoreHorizontal, hasTextInput: true },
];

export interface PainOption {
  id: string;
  label: string;
}

export const painOptions: PainOption[] = [
  { id: 'no-leads', label: '客人都靠介紹，沒有新客源' },
  { id: 'no-traffic', label: '有網站但沒人看' },
  { id: 'slow-reply', label: '回覆客人太慢，常常漏掉' },
  { id: 'ad-waste', label: '花了廣告費但不知道效果' },
  { id: 'no-time', label: '什麼都要自己來，沒時間' },
];

export type TimelineId = 'asap' | '1-3months' | 'no-rush';

export interface TimelineOption {
  id: TimelineId;
  label: string;
}

export const timelineOptions: TimelineOption[] = [
  { id: 'asap', label: '急，越快越好' },
  { id: '1-3months', label: '1-3 個月內' },
  { id: 'no-rush', label: '不急，先了解' },
];

export interface RecommendedItem {
  title: string;
  desc: string;
}

export function getRecommendations(painIds: string[]): RecommendedItem[] {
  const items: RecommendedItem[] = [
    { title: '品牌網站建置', desc: '你的線上門面' },
    { title: 'SEO 自動內容系統', desc: '讓客人搜到你' },
  ];

  if (painIds.includes('slow-reply')) {
    items.push({ title: '智慧詢價回覆', desc: '不漏接任何商機' });
  }

  if (painIds.includes('ad-waste')) {
    items.push({ title: '數據分析報表', desc: '看清楚錢花在哪' });
  }

  return items;
}

import type { LucideIcon } from 'lucide-react';
import { Factory, Briefcase, ShoppingBag, Truck, MoreHorizontal } from 'lucide-react';

export interface IndustryOption {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface PainOption {
  id: string;
  label: string;
}

export interface TimelineOption {
  id: string;
  label: string;
}

export type PlanTier = 'basic' | 'advanced' | 'full';

export interface Recommendation {
  tier: PlanTier;
  tierName: string;
  tierLabel: string;
  features: string[];
}

export const industryOptions: IndustryOption[] = [
  { id: 'manufacturing', label: '製造業 / 工廠', icon: Factory },
  { id: 'consulting', label: '顧問 / 專業服務', icon: Briefcase },
  { id: 'ecommerce', label: '電商 / 零售', icon: ShoppingBag },
  { id: 'logistics', label: '物流 / 貿易', icon: Truck },
  { id: 'other', label: '其他', icon: MoreHorizontal },
];

export const painOptions: PainOption[] = [
  { id: 'no-new-customers', label: '客人都靠介紹，沒有新客源' },
  { id: 'no-traffic', label: '有網站但沒人看' },
  { id: 'slow-response', label: '回覆客人太慢，常常漏掉' },
  { id: 'wasted-ads', label: '花了廣告費但不知道效果' },
  { id: 'no-time', label: '什麼都要自己來，沒時間' },
];

export const timelineOptions: TimelineOption[] = [
  { id: 'urgent', label: '急，越快越好' },
  { id: 'moderate', label: '1-3 個月內' },
  { id: 'exploring', label: '不急，先了解' },
];

export function getRecommendation(painPoints: string[]): Recommendation {
  const hasSlowResponse = painPoints.includes('slow-response');
  const hasWastedAds = painPoints.includes('wasted-ads');

  const baseFeatures = [
    '品牌網站 SEO 架構優化',
    'SEO 自動內容系統（讓客人搜到你）',
    '每月成效報表',
    '每月目標校準會議',
  ];

  const advancedFeatures = [
    '圖片自動生成',
    '數據分析與自動優化',
    'GEO 生成式搜尋優化',
  ];

  const fullFeatures = [
    '五大平台社群監控',
    '社群口碑策略與執行',
  ];

  // Full tier: slow-response + any other 2+
  if (hasSlowResponse && painPoints.length >= 3) {
    const features = [...baseFeatures, ...advancedFeatures, ...fullFeatures, '智慧詢價自動回覆'];
    return {
      tier: 'full',
      tierName: '全配版',
      tierLabel: '內容引擎 + 數據大腦 + 社群觸角',
      features,
    };
  }

  // Advanced tier: 3+ pain points OR includes wasted-ads
  if (painPoints.length >= 3 || hasWastedAds) {
    const features = [...baseFeatures, ...advancedFeatures];
    if (hasSlowResponse) {
      features.push('智慧詢價自動回覆');
    }
    return {
      tier: 'advanced',
      tierName: '進階版',
      tierLabel: '內容引擎 + 數據大腦',
      features,
    };
  }

  // Basic tier
  const features = [...baseFeatures];
  if (hasSlowResponse) {
    features.push('智慧詢價自動回覆');
  }
  return {
    tier: 'basic',
    tierName: '基礎版',
    tierLabel: '內容引擎',
    features,
  };
}

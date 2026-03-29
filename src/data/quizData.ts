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
  { id: 'no-new-customers', label: '客人都靠朋友介紹，網路上沒有新客源' },
  { id: 'no-traffic', label: '有做網站，但根本沒人來看' },
  { id: 'slow-response', label: '客人問問題回太慢，常常錯過商機' },
  { id: 'wasted-ads', label: '有在投廣告，但不知道錢花到哪去了' },
  { id: 'no-time', label: '行銷的事全部自己來，根本忙不過來' },
];

export const timelineOptions: TimelineOption[] = [
  { id: 'urgent', label: '很急，最好馬上開始' },
  { id: 'moderate', label: '1-3 個月內看到改變' },
  { id: 'exploring', label: '不急，先了解看看' },
];

export function getRecommendation(painPoints: string[]): Recommendation {
  const hasSlowResponse = painPoints.includes('slow-response');
  const hasWastedAds = painPoints.includes('wasted-ads');

  const baseFeatures = [
    '你的品牌網站 SEO 全面優化',
    'AI 自動寫文章幫你搶排名',
    '每月一份看得懂的成效報告',
    '每月坐下來對目標、調方向',
  ];

  const advancedFeatures = [
    '文章自動配圖，不用找素材',
    '數據驅動，系統自動越做越好',
    'GEO 優化，讓 AI 搜尋也推薦你',
  ];

  const fullFeatures = [
    '五大社群平台即時監控',
    '網路口碑策略規劃 + 執行',
  ];

  // Full tier: slow-response + any other 2+
  if (hasSlowResponse && painPoints.length >= 3) {
    const features = [...baseFeatures, ...advancedFeatures, ...fullFeatures, '客人詢問自動秒回，不漏接'];
    return {
      tier: 'full',
      tierName: '全配版',
      tierLabel: '全方位引擎 — 線上的事全部搞定',
      features,
    };
  }

  // Advanced tier: 3+ pain points OR includes wasted-ads
  if (painPoints.length >= 3 || hasWastedAds) {
    const features = [...baseFeatures, ...advancedFeatures];
    if (hasSlowResponse) {
      features.push('客人詢問自動秒回，不漏接');
    }
    return {
      tier: 'advanced',
      tierName: '進階版',
      tierLabel: '內容引擎 + 數據大腦 — 越做越強',
      features,
    };
  }

  // Basic tier
  const features = [...baseFeatures];
  if (hasSlowResponse) {
    features.push('客人詢問自動秒回，不漏接');
  }
  return {
    tier: 'basic',
    tierName: '基礎版',
    tierLabel: '內容引擎 — 先讓 Google 看到你',
    features,
  };
}

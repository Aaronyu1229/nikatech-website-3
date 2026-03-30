import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  Monitor,
  CalendarCheck,
  FileBarChart,
  Users,
  Rocket,
  MessageCircle,
  ChevronDown,
  ArrowUpRight,
  Zap,
  TrendingUp,
  Shield,
  Globe,
  BarChart3,
  Bot,
  Eye,
  Bell,
  Layers,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

/* ── Animated SVG — floating hexagons for hero ── */
const HexGridIllustration = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full" fill="none">
    <style>{`
      @keyframes hexFloat1 { 0%,100% { transform: translate(0,0) rotate(0deg); } 50% { transform: translate(3px,-5px) rotate(2deg); } }
      @keyframes hexFloat2 { 0%,100% { transform: translate(0,0) rotate(0deg); } 50% { transform: translate(-4px,3px) rotate(-2deg); } }
      @keyframes hexPulse { 0%,100% { stroke-opacity: 0.15; } 50% { stroke-opacity: 0.3; } }
      .hf1 { animation: hexFloat1 7s ease-in-out infinite; }
      .hf2 { animation: hexFloat2 9s ease-in-out infinite; }
      .hp { animation: hexPulse 4s ease-in-out infinite; }
    `}</style>
    {/* Hex grid connections */}
    <line x1="120" y1="80" x2="200" y2="120" stroke="#E8944C" strokeOpacity="0.08" strokeWidth="1" />
    <line x1="200" y1="120" x2="280" y2="80" stroke="#E8944C" strokeOpacity="0.06" strokeWidth="1" />
    <line x1="200" y1="120" x2="200" y2="200" stroke="#E8944C" strokeOpacity="0.08" strokeWidth="1" />
    <line x1="120" y1="220" x2="200" y2="200" stroke="#E8944C" strokeOpacity="0.06" strokeWidth="1" />
    <line x1="280" y1="220" x2="200" y2="200" stroke="#E8944C" strokeOpacity="0.06" strokeWidth="1" />
    {/* Hexagon nodes */}
    <g className="hf1">
      <polygon points="120,65 135,73 135,88 120,96 105,88 105,73" stroke="#E8944C" strokeOpacity="0.2" strokeWidth="1" fill="none" className="hp" />
      <circle cx="120" cy="80" r="3" fill="#E8944C" fillOpacity="0.3" />
    </g>
    <g className="hf2">
      <polygon points="280,65 295,73 295,88 280,96 265,88 265,73" stroke="#E8944C" strokeOpacity="0.15" strokeWidth="1" fill="none" />
      <circle cx="280" cy="80" r="2.5" fill="#E8944C" fillOpacity="0.2" />
    </g>
    <g className="hf1" style={{ animationDelay: '1s' }}>
      <polygon points="200,105 215,113 215,128 200,136 185,128 185,113" stroke="#E8944C" strokeOpacity="0.25" strokeWidth="1.5" fill="#E8944C" fillOpacity="0.03" className="hp" />
      <circle cx="200" cy="120" r="4" fill="#E8944C" fillOpacity="0.4" />
    </g>
    <g className="hf2" style={{ animationDelay: '2s' }}>
      <polygon points="200,185 215,193 215,208 200,216 185,208 185,193" stroke="#E8944C" strokeOpacity="0.15" strokeWidth="1" fill="none" />
      <circle cx="200" cy="200" r="2.5" fill="#E8944C" fillOpacity="0.2" />
    </g>
    <g className="hf1" style={{ animationDelay: '3s' }}>
      <polygon points="120,205 135,213 135,228 120,236 105,228 105,213" stroke="#E8944C" strokeOpacity="0.12" strokeWidth="1" fill="none" />
      <circle cx="120" cy="220" r="2" fill="#E8944C" fillOpacity="0.15" />
    </g>
    <g className="hf2" style={{ animationDelay: '0.5s' }}>
      <polygon points="280,205 295,213 295,228 280,236 265,228 265,213" stroke="#E8944C" strokeOpacity="0.12" strokeWidth="1" fill="none" />
      <circle cx="280" cy="220" r="2" fill="#E8944C" fillOpacity="0.15" />
    </g>
  </svg>
);

interface PricingFeature {
  text: string;
  highlight?: boolean;
}

interface PricingPlan {
  label: string;
  title: string;
  tagline: string;
  price: string;
  features: PricingFeature[];
  suitableFor: string;
  suitableIcon: typeof Zap;
  recommended?: boolean;
  ctaText: string;
  ctaStyle: 'solid' | 'outline';
  valueMetric: string;
  includedFrom?: string;
}

const plans: PricingPlan[] = [
  {
    label: '內容引擎',
    title: '基礎版',
    tagline: '先讓 Google 認識你',
    price: 'NT$ XXX,XXX / 月',
    features: [
      { text: 'AI 找出客人真的在搜的關鍵字' },
      { text: '每月 8 篇 SEO 文章，自動寫好上架' },
      { text: 'WordPress / Shopify 自動發佈' },
      { text: '文章品質 AI 把關，不是亂寫的' },
      { text: '每月成效報表，看得到數字' },
      { text: '月度目標校準，方向不會跑偏' },
    ],
    suitableFor: '還沒開始做 SEO，想先試水溫的品牌',
    suitableIcon: Zap,
    ctaText: '開始免費評估',
    ctaStyle: 'outline',
    valueMetric: '每篇文章成本 < 請人寫的 1/3',
  },
  {
    label: '內容引擎 + 數據大腦',
    title: '進階版',
    tagline: '被搜到只是第一步，接下來越做越猛',
    price: 'NT$ XXX,XXX / 月',
    includedFrom: '包含基礎版全部功能',
    features: [
      { text: 'AI 自動幫文章配圖，省下設計費', highlight: true },
      { text: '數據自動調整策略，效果越做越好', highlight: true },
      { text: '文章品質拉到 A 級 + S 級水準' },
      { text: 'Google 信任度全面提升（E-E-A-T）' },
      { text: 'GEO 搜尋優化，AI 搜尋也推薦你', highlight: true },
      { text: '每月 12 篇高品質文章' },
    ],
    suitableFor: '認真想靠網路帶客人的成長型品牌',
    suitableIcon: TrendingUp,
    recommended: true,
    ctaText: '最多人選擇 — 立即開始',
    ctaStyle: 'solid',
    valueMetric: '平均 3-6 個月開始帶入自然流量',
  },
  {
    label: '內容引擎 + 數據大腦 + 社群雷達',
    title: '全配版',
    tagline: '線上的事，全部丟給我們',
    price: 'NT$ XXX,XXX / 月',
    includedFrom: '包含進階版全部功能',
    features: [
      { text: '五大平台社群聲量即時監控', highlight: true },
      { text: '網路口碑策略規劃 + 執行落地' },
      { text: 'S 級文章佔比最高，搶佔排名' },
      { text: '有人提到你的品牌，LINE 馬上通知', highlight: true },
      { text: '社群聲量即時看板，輿情一目了然' },
      { text: '每月 20 篇文章，全面覆蓋' },
    ],
    suitableFor: '要全面佔領網路市場的品牌',
    suitableIcon: Globe,
    ctaText: '聊聊全配方案',
    ctaStyle: 'outline',
    valueMetric: '網路聲量 + SEO 雙引擎驅動',
  },
];

const commonFeatures = [
  { icon: CalendarCheck, text: '不綁約，按月計費', sub: '覺得不行隨時喊停' },
  { icon: FileBarChart, text: '每月成效報表', sub: '用數據說話，不畫大餅' },
  { icon: Users, text: '目標校準會議', sub: '每月檢討方向' },
  { icon: Rocket, text: '兩週內上線', sub: '不用等三個月才開始' },
  { icon: MessageCircle, text: '專屬 LINE 群', sub: '有問題隨時問，即時回' },
];

const addonFeatures = [
  { icon: Monitor, text: '響應式設計 + 開發' },
  { icon: BarChart3, text: 'SEO 架構最佳化' },
  { icon: Bot, text: 'Schema Markup 結構化資料' },
  { icon: Layers, text: '自動發佈系統串接' },
];

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: '要簽約嗎？最短要用多久？',
    a: '不綁約，按月計費。我們有信心讓你看到效果，所以不需要綁約。唯一建議是至少給 3 個月的時間讓系統跑起來，因為 SEO 本來就需要時間發酵。',
  },
  {
    q: '多久可以看到效果？',
    a: '通常 2-4 週內文章就會開始上架，1-2 個月 Google 開始收錄，3-6 個月可以看到明顯的自然流量成長。每個產業競爭程度不同，我們會在月報裡追蹤進度。',
  },
  {
    q: '可以從基礎版升級到進階版嗎？',
    a: '當然可以，隨時升級。你的內容和數據會完整保留，系統無縫切換，不用重新來過。很多客戶都是從基礎版開始，看到效果後再往上加。',
  },
  {
    q: '文章品質怎麼保證？不會是 AI 垃圾文吧？',
    a: '我們的系統會用 S/A/B 三個等級評分每篇文章，確保內容有深度、有價值。進階版以上更會自動優化到 A 級和 S 級水準，比大多數人工寫的文章品質更高。',
  },
  {
    q: '我已經有網站了，可以直接用嗎？',
    a: '可以。我們支援 WordPress、Shopify 等主流平台的自動串接。如果你的網站架構需要調整，我們也可以搭配官網建置方案一起處理。',
  },
  {
    q: '跟請一個行銷人比，差在哪？',
    a: 'AI 系統 24 小時不間斷工作，每月穩定產出 8-20 篇文章、自動分析數據、即時調整策略。請一個行銷人的薪水可能是方案費用的 2-3 倍，而且還有訓練期和離職風險。',
  },
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-nika-bg text-nika-text">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#E8944C]/[0.04] rounded-full blur-[120px] pointer-events-none" />
          {/* Hex grid illustrations */}
          <div className="absolute top-8 left-0 w-[450px] h-[320px] pointer-events-none opacity-40 hidden lg:block">
            <HexGridIllustration />
          </div>
          <div className="absolute top-8 right-0 w-[450px] h-[320px] pointer-events-none opacity-40 hidden lg:block" style={{ transform: 'scaleX(-1)' }}>
            <HexGridIllustration />
          </div>

          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] text-center relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs uppercase tracking-[0.2em] text-nika-text-tertiary border border-white/[0.06] rounded-full px-4 py-1.5 inline-block"
            >
              PRICING
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl mt-6"
            >
              找一個適合你的方案
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-nika-text-secondary text-lg max-w-2xl mx-auto mt-6"
            >
              每個方案都有月報和目標校準會議。不綁約、按月算，覺得不行隨時喊停。
            </motion.p>
            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex items-center justify-center gap-6 mt-8 text-xs text-nika-text-tertiary"
            >
              <span className="flex items-center gap-1.5"><Shield size={14} className="text-nika-accent" /> 不綁約</span>
              <span className="flex items-center gap-1.5"><Rocket size={14} className="text-nika-accent" /> 兩週上線</span>
              <span className="flex items-center gap-1.5"><Eye size={14} className="text-nika-accent" /> 免費健檢</span>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-16 relative">
          {/* Dot grid background */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #E8944C 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] relative z-10">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={fadeUp}
                  className={`relative rounded-2xl p-8 flex flex-col ${
                    plan.recommended
                      ? 'bg-nika-bg-tertiary border-2 border-[#E8944C] lg:scale-105 shadow-[0_0_40px_rgba(232,148,76,0.2)] z-10'
                      : 'bg-nika-bg-secondary border border-white/[0.08] hover:border-white/[0.15] transition-colors duration-300'
                  }`}
                >
                  {plan.recommended && (
                    <>
                      <div className="absolute -inset-[2px] bg-gradient-to-b from-[#E8944C]/20 via-[#E8944C]/5 to-transparent rounded-2xl blur-xl -z-10" />
                      <motion.span
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E8944C] text-black text-sm font-bold px-5 py-1.5 rounded-full shadow-[0_4px_16px_rgba(232,148,76,0.4)]"
                      >
                        最多人選擇
                      </motion.span>
                    </>
                  )}

                  <span className="font-mono text-xs text-nika-text-tertiary uppercase tracking-wider">
                    {plan.label}
                  </span>
                  <h2 className="font-display text-2xl mt-2 mb-1">{plan.title}</h2>
                  <p className="text-nika-text-secondary text-sm mb-6">{plan.tagline}</p>

                  <p className="text-3xl font-display text-nika-text mb-2">{plan.price}</p>
                  {/* Value metric */}
                  <p className="text-xs text-[#E8944C]/70 mb-6 flex items-center gap-1.5">
                    <TrendingUp size={12} />
                    {plan.valueMetric}
                  </p>

                  <div className="border-t border-white/[0.06] pt-6 mb-6 flex-1">
                    {/* Included from indicator */}
                    {plan.includedFrom && (
                      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/[0.04]">
                        <Layers size={14} className="text-nika-accent flex-shrink-0" />
                        <span className="text-xs text-nika-accent font-medium">{plan.includedFrom}</span>
                      </div>
                    )}
                    <ul className="space-y-3">
                      {plan.features.map((f) => (
                        <li key={f.text} className="flex items-start gap-3">
                          <Check size={16} strokeWidth={2.5} className={`mt-0.5 flex-shrink-0 ${f.highlight ? 'text-[#E8944C]' : 'text-nika-accent/60'}`} />
                          <span className={`text-sm ${f.highlight ? 'text-nika-text' : 'text-nika-text-secondary'}`}>{f.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Suitable for — more prominent */}
                  <div className="flex items-center gap-2 mb-6 bg-white/[0.03] rounded-lg px-3 py-2.5">
                    <plan.suitableIcon size={14} className="text-nika-accent flex-shrink-0" />
                    <span className="text-nika-text-secondary text-xs">{plan.suitableFor}</span>
                  </div>

                  <Link
                    to="/contact"
                    className={`block text-center py-3.5 rounded-lg font-semibold text-sm no-underline transition-all duration-300 ${
                      plan.ctaStyle === 'solid'
                        ? 'btn-shimmer'
                        : 'border border-white/[0.1] hover:border-white/[0.2] hover:bg-white/[0.03]'
                    }`}
                    style={
                      plan.ctaStyle === 'solid'
                        ? { background: 'var(--accent)', color: 'var(--bg-primary)' }
                        : { color: 'var(--text-primary)' }
                    }
                  >
                    {plan.ctaText}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Add-on Card — visually distinct */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              custom={0}
              className="mt-10 relative rounded-2xl overflow-hidden"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#E8944C]/20 via-transparent to-[#E8944C]/10 rounded-2xl" />
              <div className="m-[1px] bg-nika-bg-elevated rounded-2xl p-6 md:p-8 relative">
                <div className="absolute top-4 right-4 md:top-6 md:right-8">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-nika-accent bg-[#E8944C]/10 px-3 py-1 rounded-full">加購項目</span>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-[#E8944C]/10 flex items-center justify-center">
                        <Monitor size={20} strokeWidth={1.5} className="text-nika-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">品牌官網建置</h3>
                        <p className="text-nika-text-secondary text-sm">幫你從頭做一個 SEO 友善的品牌官網，讓系統跑得更順</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-4">
                      {addonFeatures.map((f) => (
                        <span key={f.text} className="flex items-center gap-1.5 text-xs text-nika-text-tertiary bg-white/[0.03] rounded-full px-3 py-1.5">
                          <f.icon size={12} className="text-nika-accent" />
                          {f.text}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-2xl font-display text-nika-text">NT$ XXX,XXX</p>
                    <p className="text-xs text-nika-text-tertiary mt-1">一次性費用</p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-xs text-nika-accent mt-3 no-underline hover:underline"
                    >
                      了解更多 <ArrowUpRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Common Features — enhanced with cards */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E8944C]/[0.02] to-transparent pointer-events-none" />
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              custom={0}
            >
              <h3 className="text-center text-lg font-medium text-nika-text-secondary mb-10">
                所有方案都包含
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {commonFeatures.map((item, idx) => (
                  <motion.div
                    key={item.text}
                    custom={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="flex flex-col items-center text-center gap-2 bg-white/[0.02] border border-white/[0.06] rounded-xl px-4 py-5 hover:border-white/[0.1] transition-colors duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#E8944C]/10 flex items-center justify-center mb-1">
                      <item.icon size={18} strokeWidth={1.5} className="text-nika-accent" />
                    </div>
                    <span className="text-sm text-nika-text font-medium">{item.text}</span>
                    <span className="text-[11px] text-nika-text-tertiary leading-tight">{item.sub}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Upgrade Path */}
        <section className="pb-16">
          <div className="max-w-3xl mx-auto px-[var(--container-padding)]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              custom={0}
              className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#E8944C]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <TrendingUp size={20} className="text-nika-accent" />
                </div>
                <div>
                  <h3 className="text-base font-medium mb-2">隨時升級，無縫切換</h3>
                  <p className="text-sm text-nika-text-secondary leading-relaxed">
                    從基礎版開始也完全沒問題。你的內容和數據會完整保留，想升級時系統直接切換，不用重新來過。
                    很多客戶都是先試水溫，看到效果後再往上加。
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-xs text-nika-text-tertiary">
                    <span className="bg-white/[0.05] rounded px-2 py-1">基礎版</span>
                    <ArrowUpRight size={12} className="text-nika-accent" />
                    <span className="bg-white/[0.05] rounded px-2 py-1">進階版</span>
                    <ArrowUpRight size={12} className="text-nika-accent" />
                    <span className="bg-white/[0.05] rounded px-2 py-1">全配版</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 relative">
          <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #E8944C 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          <div className="max-w-3xl mx-auto px-[var(--container-padding)] relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              custom={0}
              className="text-center mb-12"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-nika-text-tertiary">FAQ</span>
              <h2 className="font-display text-2xl md:text-3xl mt-3">常見問題</h2>
            </motion.div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  custom={idx * 0.5}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="border border-white/[0.06] rounded-xl overflow-hidden bg-white/[0.01] hover:border-white/[0.1] transition-colors duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-transparent border-0 cursor-pointer"
                  >
                    <span className="text-sm font-medium text-nika-text">{faq.q}</span>
                    <motion.span
                      animate={{ rotate: openFaq === idx ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown size={16} className="text-nika-text-tertiary" />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-sm text-nika-text-secondary leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA — enhanced */}
        <section className="py-20 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#E8944C]/[0.04] via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#E8944C]/[0.06] rounded-full blur-[150px] pointer-events-none" />

          <div className="max-w-2xl mx-auto px-[var(--container-padding)] text-center relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              custom={0}
            >
              <span className="inline-flex items-center gap-2 text-xs text-nika-accent bg-[#E8944C]/10 rounded-full px-4 py-1.5 mb-6">
                <Bell size={12} />
                免費，不用付錢，不用綁約
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display mb-4">
                不知道選哪個？
              </h2>
              <p className="text-nika-text-secondary text-base mb-8 max-w-lg mx-auto">
                先做個免費網站健檢，我們會告訴你目前網站的 SEO 狀況、有哪些機會，再決定要不要開始。
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-sm no-underline transition-all duration-300 btn-shimmer"
                style={{ background: 'var(--accent)', color: 'var(--bg-primary)' }}
              >
                申請免費網站健檢
                <ArrowUpRight size={16} />
              </Link>
              <p className="text-xs text-nika-text-tertiary mt-4">
                通常 1-2 個工作天內回覆，不會有業務一直打電話給你
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
}

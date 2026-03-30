import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  FileText,
  Upload,
  ShieldCheck,
  Code,
  Eye,
  Award,
  Globe,
  TrendingUp,
  Zap,
  FileBarChart,
  Users,
  Radio,
  Bell,
  MessageCircle,
  Heart,
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

interface FeatureItem {
  icon: React.ElementType;
  title: string;
  desc: string;
}

const serviceNav = [
  { id: 'seo', label: 'SEO 自然流量', icon: '🔍' },
  { id: 'geo', label: 'GEO 生成式優化', icon: '🤖' },
  { id: 'data', label: '數據與優化', icon: '📊' },
  { id: 'social', label: '社群監控', icon: '📡' },
];

const seoFeatures: FeatureItem[] = [
  { icon: Search, title: '關鍵字研究與規劃', desc: '用 AI 分析你的產業，找出客人真的會搜的關鍵字，不是那種看起來厲害但沒人搜的字' },
  { icon: FileText, title: 'SEO 文章自動生成', desc: '根據關鍵字自動寫文章。分 S、A、B 三個等級，重要的字給高品質文章，量大的字用自動化處理' },
  { icon: Upload, title: '自動發佈', desc: '文章寫完直接發佈到你的 WordPress 或 Shopify，完全不用你動手' },
  { icon: ShieldCheck, title: '品質管理', desc: '控制發文節奏、注入專業信號，讓 Google 認為你的網站值得信任，不會被當成垃圾內容' },
];

const geoFeatures: FeatureItem[] = [
  { icon: Code, title: '結構化資料建置', desc: '幫你的網站加上結構化標記，讓 AI 搜尋引擎看得懂你在賣什麼' },
  { icon: Eye, title: 'AI 可讀性優化', desc: '調整內容格式，讓 AI 可以正確引用你的品牌資訊，而不是引用你的競爭對手' },
  { icon: Award, title: '權威信號建立', desc: '建立作者頁面和專業背景資料，讓 AI 判斷你的內容有可信度' },
  { icon: Globe, title: '多平台知識圖譜', desc: '在多個平台建立一致的品牌資訊，讓 AI 從不同來源交叉驗證' },
];

const dataFeatures: FeatureItem[] = [
  { icon: TrendingUp, title: '即時排名追蹤', desc: '你的每一個目標關鍵字，每天自動追蹤排名，有變化馬上知道' },
  { icon: Zap, title: '自動觸發優化', desc: '排名掉了？系統自動分析是什麼原因，該補文章還是調整策略，不用你操心' },
  { icon: FileBarChart, title: '每月成效報表', desc: '白話文寫的報表。來了多少人、從哪來的、排名進步幾名、幫你省了幾小時，一看就懂' },
  { icon: Users, title: '每月目標校準', desc: '每個月跟你坐下來對一次。上個月做得怎樣、下個月要衝什麼方向，一起決定' },
];

const socialFeatures: FeatureItem[] = [
  { icon: Radio, title: '五大平台即時監控', desc: 'PTT、Dcard、Facebook、YouTube、Threads，五個平台同時盯' },
  { icon: Bell, title: '品牌提及即時通知', desc: '有人提到你的品牌，不管是好評還是壞評，LINE 馬上推播通知你' },
  { icon: MessageCircle, title: '口碑策略與執行', desc: '不只被動等人講。我們幫你規劃口碑策略，主動讓好的聲音被看到' },
  { icon: Heart, title: 'KOL 矩陣 + UGC', desc: '幫你找適合的小型 KOL 合作，鼓勵真實用戶分享使用心得，自然累積好口碑' },
];

function TransitionElement({ text }: { text: string }) {
  return (
    <div className="text-center py-12">
      <div className="w-px h-12 bg-gradient-to-b from-[#E8944C]/50 to-transparent mx-auto mb-4" />
      <p className="text-sm text-[#9B978E] italic">{text}</p>
      <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#E8944C]/50 mx-auto mt-4" />
    </div>
  );
}

export default function Services() {
  const [activeSection, setActiveSection] = useState('seo');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1, rootMargin: '-200px 0px -50% 0px' }
    );

    serviceNav.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) {
        sectionRefs.current[id] = el;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-nika-bg text-nika-text">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] text-center">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs uppercase tracking-[0.2em] text-nika-text-tertiary border border-white/[0.06] rounded-full px-4 py-1.5 inline-block"
            >
              SERVICES
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl mt-6"
            >
              你的行銷，讓系統自己跑。
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-nika-text-secondary text-lg max-w-2xl mx-auto mt-6"
            >
              八個核心模塊整合成一套系統。從找關鍵字到社群監控，全部自動化，你只需要每個月花 30 分鐘看報告。
            </motion.p>
          </div>
        </section>

        {/* Sticky Service Nav */}
        <nav className="sticky top-[72px] z-40 bg-[#0f0e0d]/90 backdrop-blur border-b border-white/5">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="flex items-center justify-center gap-2 md:gap-8 overflow-x-auto scrollbar-hide">
              {serviceNav.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-4 text-sm whitespace-nowrap transition-all duration-300 border-b-2 ${
                    activeSection === item.id
                      ? 'text-[#E8944C] border-[#E8944C]'
                      : 'text-[#9B978E] border-transparent hover:text-[#c4c0b8]'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Section 01: SEO */}
        <section id="seo" className="py-20" style={{ scrollMarginTop: '140px' }}>
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="flex justify-end mb-6">
              <span className="text-xs text-[#9B978E] bg-white/5 px-3 py-1 rounded-full border border-white/5">基礎版 · 進階版 · 全配版</span>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left column */}
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="font-mono text-xs uppercase tracking-[0.2em] text-nika-text-tertiary border border-white/[0.06] rounded-full px-4 py-1.5 inline-block"
                >
                  SEARCH ENGINE OPTIMIZATION
                </motion.span>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="font-mono text-5xl font-bold text-white/[0.06] mt-4"
                >
                  01
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="text-3xl md:text-4xl font-display mt-2 mb-4"
                >
                  讓你的客人在 Google 上找到你
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-nika-text-secondary text-lg leading-relaxed"
                >
                  你的產品明明不錯，但 Google 搜不到你，客人自然也找不到。問題不是產品，是你的網站沒有在跟 Google「說話」。我們幫你解決這件事。
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-8"
                >
                  <a href="/pricing" className="text-sm text-[#E8944C] hover:underline">
                    想了解方案？ → 看報價
                  </a>
                </motion.div>
              </div>

              {/* Right column - 2x2 card grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {seoFeatures.map((item, i) => (
                  <motion.div
                    key={item.title}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                    variants={fadeUp}
                    className="bg-white/[0.02] border border-white/5 rounded-xl p-5"
                  >
                    <item.icon size={24} strokeWidth={1.5} className="text-[#E8944C] mb-3" />
                    <h3 className="text-nika-text font-body text-base font-medium mb-2">{item.title}</h3>
                    <p className="text-nika-text-secondary text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Transition 01 → 02 */}
        <TransitionElement text="內容上架了，接下來呢？" />

        {/* Section 02: GEO — STANDOUT */}
        <section id="geo" className="py-20" style={{ scrollMarginTop: '140px' }}>
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="bg-gradient-to-br from-[#E8944C]/[0.06] via-transparent to-[#E8944C]/[0.03] border border-[#E8944C]/10 rounded-3xl p-8 md:p-16">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#E8944C] text-black">差異化亮點</span>
                <span className="text-xs text-[#9B978E] bg-white/5 px-3 py-1 rounded-full border border-white/5">進階版 · 全配版</span>
              </div>

              <motion.span
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="font-mono text-xs uppercase tracking-[0.2em] text-nika-text-tertiary border border-white/[0.06] rounded-full px-4 py-1.5 inline-block"
              >
                GENERATIVE ENGINE OPTIMIZATION
              </motion.span>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-mono text-5xl font-bold text-white/[0.06] mt-4"
              >
                02
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-3xl md:text-4xl font-display mt-2 mb-4"
              >
                讓 ChatGPT 也推薦你的品牌
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-nika-text-secondary text-lg max-w-2xl leading-relaxed"
              >
                現在越來越多人直接問 ChatGPT、用 Perplexity 搜資料，不一定會開 Google。如果這些 AI 搜尋引擎不認識你的品牌，你就少了一大塊客人。
              </motion.p>

              {/* AI Search Result Mockup */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-10 bg-[#1a1917] rounded-2xl border border-white/10 p-6 max-w-xl mx-auto"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 rounded-full bg-[#E8944C]/20 flex items-center justify-center">
                    <span className="text-xs">✨</span>
                  </div>
                  <span className="text-sm text-[#9B978E]">AI 搜尋結果</span>
                </div>
                <p className="text-text-primary text-sm leading-relaxed mb-3">
                  根據您的需求，推薦以下品牌：
                </p>
                <div className="bg-[#E8944C]/5 border border-[#E8944C]/20 rounded-lg p-4 mb-3">
                  <p className="text-[#E8944C] font-medium text-sm">⭐ 你的品牌名稱</p>
                  <p className="text-[#9B978E] text-xs mt-1">「業界領先的專業服務，獲得多位用戶好評推薦...」</p>
                </div>
                <div className="bg-white/[0.02] border border-white/5 rounded-lg p-4 mb-2">
                  <p className="text-[#9B978E] text-sm">競爭對手 A</p>
                </div>
                <div className="bg-white/[0.02] border border-white/5 rounded-lg p-4">
                  <p className="text-[#9B978E] text-sm">競爭對手 B</p>
                </div>
              </motion.div>

              {/* GEO Features - horizontal compact row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                {geoFeatures.map((item, i) => (
                  <motion.div
                    key={item.title}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                    variants={fadeUp}
                    className="p-4 text-center"
                  >
                    <item.icon size={20} strokeWidth={1.5} className="text-[#E8944C] mx-auto mb-2" />
                    <h3 className="text-nika-text font-body text-sm font-medium mb-1">{item.title}</h3>
                    <p className="text-nika-text-secondary text-xs leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8 text-center"
              >
                <a href="/pricing" className="text-sm text-[#E8944C] hover:underline">
                  這是進階版以上的功能 → 看方案差異
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Transition 02 → 03 */}
        <TransitionElement text="怎麼知道做得好不好？" />

        {/* Section 03: Data & Optimization */}
        <section id="data" className="py-20" style={{ scrollMarginTop: '140px' }}>
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="flex justify-end mb-6">
              <span className="text-xs text-[#9B978E] bg-white/5 px-3 py-1 rounded-full border border-white/5">進階版 · 全配版</span>
            </div>

            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs uppercase tracking-[0.2em] text-nika-text-tertiary border border-white/[0.06] rounded-full px-4 py-1.5 inline-block"
            >
              DATA & OPTIMIZATION
            </motion.span>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-mono text-5xl font-bold text-white/[0.06] mt-4"
            >
              03
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-3xl md:text-4xl font-display mt-2 mb-4"
            >
              系統自己會進化，越跑越準
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-nika-text-secondary text-lg max-w-2xl leading-relaxed"
            >
              我們不是寫完文章就丟著不管。系統每天追蹤排名變化，自動判斷下一步該怎麼調整。就像有一個不會累的行銷主管在幫你盯著。
            </motion.p>

            {/* Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 bg-[#1a1917] rounded-2xl border border-white/10 p-6 max-w-2xl mx-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-[#9B978E]">月度成效報表</span>
                <span className="text-xs text-[#E8944C]">2026 年 3 月</span>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-text-primary">+340%</p>
                  <p className="text-xs text-[#9B978E] mt-1">自然流量成長</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#E8944C]">Top 10</p>
                  <p className="text-xs text-[#9B978E] mt-1">12 組關鍵字進入</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-text-primary">42hr</p>
                  <p className="text-xs text-[#9B978E] mt-1">本月節省時間</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-[#9B978E] w-24">害蟲防治</span>
                  <div className="flex-1 bg-white/5 rounded-full h-2"><div className="bg-[#E8944C] rounded-full h-2" style={{width: '85%'}} /></div>
                  <span className="text-xs text-[#E8944C]">#3</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-[#9B978E] w-24">除蟲推薦</span>
                  <div className="flex-1 bg-white/5 rounded-full h-2"><div className="bg-[#E8944C]/70 rounded-full h-2" style={{width: '72%'}} /></div>
                  <span className="text-xs text-[#9B978E]">#7</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-[#9B978E] w-24">白蟻處理</span>
                  <div className="flex-1 bg-white/5 rounded-full h-2"><div className="bg-[#E8944C]/50 rounded-full h-2" style={{width: '60%'}} /></div>
                  <span className="text-xs text-[#9B978E]">#11</span>
                </div>
              </div>
            </motion.div>

            {/* Data Features - horizontal compact row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              {dataFeatures.map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={fadeUp}
                  className="p-4 text-center"
                >
                  <item.icon size={20} strokeWidth={1.5} className="text-[#E8944C] mx-auto mb-2" />
                  <h3 className="text-nika-text font-body text-sm font-medium mb-1">{item.title}</h3>
                  <p className="text-nika-text-secondary text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Transition 03 → 04 */}
        <TransitionElement text="搜尋顧好了，社群上別人怎麼說你？" />

        {/* Section 04: Social Intelligence */}
        <section id="social" className="py-20" style={{ scrollMarginTop: '140px' }}>
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="flex justify-end mb-6">
              <span className="text-xs text-[#9B978E] bg-white/5 px-3 py-1 rounded-full border border-white/5">全配版</span>
            </div>

            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs uppercase tracking-[0.2em] text-nika-text-tertiary border border-white/[0.06] rounded-full px-4 py-1.5 inline-block"
            >
              SOCIAL INTELLIGENCE
            </motion.span>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-mono text-5xl font-bold text-white/[0.06] mt-4"
            >
              04
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-3xl md:text-4xl font-display mt-2 mb-4"
            >
              你的品牌被討論了，你第一個知道
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-nika-text-secondary text-lg max-w-2xl leading-relaxed"
            >
              PTT 有人推你的東西，你知道嗎？Dcard 有人在問你們的評價，你有跟上嗎？錯過一則好評是可惜，錯過一則負評可能是災難。
            </motion.p>

            {/* Platform badges */}
            <div className="flex flex-wrap gap-3 mt-6 mb-10">
              {['PTT', 'Dcard', 'Facebook', 'YouTube', 'Threads'].map(p => (
                <span key={p} className="px-4 py-2 rounded-full text-sm bg-white/5 border border-white/10 text-[#9B978E]">{p}</span>
              ))}
            </div>

            {/* Notification Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#1a1917] rounded-2xl border border-white/10 p-5 max-w-md mb-10"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E8944C]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm">🔔</span>
                </div>
                <div>
                  <p className="text-sm text-text-primary font-medium">品牌提及通知</p>
                  <p className="text-xs text-[#9B978E] mt-1">PTT 美妝版有人提到「你的品牌」—— 「這家的產品真的不錯，推薦給大家！」</p>
                  <p className="text-xs text-[#E8944C] mt-2">剛剛 · 點擊查看</p>
                </div>
              </div>
            </motion.div>

            {/* Social Features - 2x2 grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {socialFeatures.map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={fadeUp}
                  className="bg-white/[0.02] border border-white/5 rounded-xl p-5"
                >
                  <item.icon size={24} strokeWidth={1.5} className="text-[#E8944C] mb-3" />
                  <h3 className="text-nika-text font-body text-base font-medium mb-2">{item.title}</h3>
                  <p className="text-nika-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-on Banner */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#E8944C]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#E8944C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h3 className="text-lg font-display text-text-primary">還沒有網站？我們從頭幫你建。</h3>
                  <p className="text-sm text-[#9B978E] mt-1">SEO 友善架構 · 速度優化 · Schema Markup · 自動發佈串接 · 一次性費用</p>
                </div>
              </div>
              <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 border border-[#E8944C]/30 text-[#E8944C] rounded-xl hover:bg-[#E8944C]/5 transition-colors whitespace-nowrap text-sm font-medium">
                了解更多
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-display text-text-primary mb-4">不確定需要哪些服務？</h2>
            <p className="text-[#9B978E] text-lg mb-10">先做個免費評估，我們用數據告訴你從哪裡開始最有效。</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#E8944C] text-black font-semibold rounded-xl hover:bg-[#d4833f] transition-colors">
                免費網站健檢
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>
              <a href="/pricing" className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-text-primary rounded-xl hover:bg-white/5 transition-colors">
                看方案報價
              </a>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
}

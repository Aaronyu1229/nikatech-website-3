import { useState } from 'react';
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
  ArrowRight,
  Sparkles,
  BarChart3,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

/* ── Animated Abstract SVG Illustrations ── */

// Floating network nodes — Hero background
const NetworkNodesIllustration = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full" fill="none">
    <style>{`
      @keyframes nodeFloat1 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(4px,-6px); } }
      @keyframes nodeFloat2 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-5px,4px); } }
      @keyframes nodeFloat3 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(3px,5px); } }
      @keyframes pulseRing { 0%,100% { r: 18; opacity: 0.1; } 50% { r: 24; opacity: 0.05; } }
      .nf1 { animation: nodeFloat1 6s ease-in-out infinite; }
      .nf2 { animation: nodeFloat2 8s ease-in-out infinite; }
      .nf3 { animation: nodeFloat3 7s ease-in-out infinite; }
    `}</style>
    {/* Connection lines */}
    <line x1="80" y1="60" x2="200" y2="120" stroke="#E8944C" strokeWidth="0.5" strokeOpacity="0.2" />
    <line x1="200" y1="120" x2="320" y2="80" stroke="#E8944C" strokeWidth="0.5" strokeOpacity="0.15" />
    <line x1="200" y1="120" x2="280" y2="200" stroke="#E8944C" strokeWidth="0.5" strokeOpacity="0.2" />
    <line x1="120" y1="200" x2="200" y2="120" stroke="#E8944C" strokeWidth="0.5" strokeOpacity="0.15" />
    <line x1="120" y1="200" x2="280" y2="200" stroke="#E8944C" strokeWidth="0.5" strokeOpacity="0.1" />
    <line x1="80" y1="60" x2="120" y2="200" stroke="#E8944C" strokeWidth="0.5" strokeOpacity="0.1" />
    <line x1="320" y1="80" x2="350" y2="180" stroke="#E8944C" strokeWidth="0.5" strokeOpacity="0.1" />
    <line x1="280" y1="200" x2="350" y2="180" stroke="#E8944C" strokeWidth="0.5" strokeOpacity="0.15" />
    {/* Animated nodes */}
    <g className="nf1">
      <circle cx="80" cy="60" r="4" fill="#E8944C" fillOpacity="0.3" />
      <circle cx="80" cy="60" r="2" fill="#E8944C" fillOpacity="0.6" />
    </g>
    <g className="nf2">
      <circle cx="200" cy="120" r="6" fill="#E8944C" fillOpacity="0.4" />
      <circle cx="200" cy="120" r="3" fill="#E8944C" fillOpacity="0.8" />
      <circle cx="200" cy="120" r="18" stroke="#E8944C" strokeWidth="0.5" strokeOpacity="0.1" fill="none" style={{ animation: 'pulseRing 4s ease-in-out infinite' }} />
    </g>
    <g className="nf3">
      <circle cx="320" cy="80" r="3.5" fill="#E8944C" fillOpacity="0.25" />
      <circle cx="320" cy="80" r="1.5" fill="#E8944C" fillOpacity="0.5" />
    </g>
    <g className="nf1">
      <circle cx="120" cy="200" r="5" fill="#E8944C" fillOpacity="0.2" />
      <circle cx="120" cy="200" r="2.5" fill="#E8944C" fillOpacity="0.5" />
    </g>
    <g className="nf2">
      <circle cx="280" cy="200" r="4" fill="#E8944C" fillOpacity="0.3" />
      <circle cx="280" cy="200" r="2" fill="#E8944C" fillOpacity="0.6" />
    </g>
    <g className="nf3">
      <circle cx="350" cy="180" r="3" fill="#E8944C" fillOpacity="0.2" />
      <circle cx="350" cy="180" r="1.5" fill="#E8944C" fillOpacity="0.4" />
    </g>
  </svg>
);

// Animated data circuit for Layer 2
const CircuitIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
    <style>{`
      @keyframes dashFlow { 0% { stroke-dashoffset: 20; } 100% { stroke-dashoffset: 0; } }
      @keyframes junctionPulse { 0%,100% { r: 3; fill-opacity: 0.3; } 50% { r: 5; fill-opacity: 0.6; } }
      .cf { stroke-dasharray: 5 5; animation: dashFlow 3s linear infinite; }
    `}</style>
    <defs>
      <linearGradient id="circuitGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#E8944C" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#E8944C" stopOpacity="0.08" />
      </linearGradient>
    </defs>
    <path d="M20,100 L60,100 L60,40 L120,40" stroke="url(#circuitGrad)" strokeWidth="1.5" strokeLinecap="round" className="cf" />
    <path d="M20,140 L80,140 L80,100 L140,100" stroke="url(#circuitGrad)" strokeWidth="1.5" strokeLinecap="round" className="cf" style={{ animationDelay: '0.5s' }} />
    <path d="M120,40 L120,80 L180,80" stroke="url(#circuitGrad)" strokeWidth="1.5" strokeLinecap="round" className="cf" style={{ animationDelay: '1s' }} />
    <path d="M140,100 L140,160 L180,160" stroke="url(#circuitGrad)" strokeWidth="1.5" strokeLinecap="round" className="cf" style={{ animationDelay: '1.5s' }} />
    <circle cx="60" cy="100" r="3" fill="#E8944C" fillOpacity="0.4" />
    <circle cx="120" cy="40" r="3" fill="#E8944C" fillOpacity="0.3" />
    <circle cx="80" cy="140" r="3" fill="#E8944C" fillOpacity="0.3" />
    <circle cx="140" cy="100" r="4" fill="#E8944C" style={{ animation: 'junctionPulse 3s ease-in-out infinite' }} />
    <rect x="176" y="74" width="8" height="12" rx="2" fill="#E8944C" fillOpacity="0.2" stroke="#E8944C" strokeOpacity="0.3" strokeWidth="0.5" />
    <rect x="176" y="154" width="8" height="12" rx="2" fill="#E8944C" fillOpacity="0.2" stroke="#E8944C" strokeOpacity="0.3" strokeWidth="0.5" />
  </svg>
);

// Animated concentric rings for GEO section
const ConcentricRingsIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
    <style>{`
      @keyframes ringExpand1 { 0%,100% { r: 30; stroke-opacity: 0.2; } 50% { r: 34; stroke-opacity: 0.12; } }
      @keyframes ringExpand2 { 0%,100% { r: 50; stroke-opacity: 0.15; } 50% { r: 55; stroke-opacity: 0.08; } }
      @keyframes ringExpand3 { 0%,100% { r: 70; stroke-opacity: 0.1; } 50% { r: 76; stroke-opacity: 0.05; } }
      @keyframes orbitDot { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      .orbit { transform-origin: 100px 100px; animation: orbitDot 12s linear infinite; }
    `}</style>
    <defs>
      <radialGradient id="ringGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#E8944C" stopOpacity="0.12" />
        <stop offset="100%" stopColor="#E8944C" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="85" fill="url(#ringGlow)" />
    <circle cx="100" cy="100" r="70" stroke="#E8944C" strokeWidth="0.5" strokeDasharray="4 6" style={{ animation: 'ringExpand3 5s ease-in-out infinite' }} />
    <circle cx="100" cy="100" r="50" stroke="#E8944C" strokeWidth="0.7" strokeDasharray="3 5" style={{ animation: 'ringExpand2 4s ease-in-out infinite' }} />
    <circle cx="100" cy="100" r="30" stroke="#E8944C" strokeWidth="1" style={{ animation: 'ringExpand1 3s ease-in-out infinite' }} />
    <circle cx="100" cy="100" r="8" fill="#E8944C" fillOpacity="0.3" />
    <circle cx="100" cy="100" r="4" fill="#E8944C" fillOpacity="0.6" />
    {/* Orbiting dots */}
    <g className="orbit">
      <circle cx="100" cy="30" r="2.5" fill="#E8944C" fillOpacity="0.5" />
    </g>
    <g className="orbit" style={{ animationDuration: '18s', animationDirection: 'reverse' }}>
      <circle cx="150" cy="100" r="2" fill="#E8944C" fillOpacity="0.35" />
    </g>
    <g className="orbit" style={{ animationDuration: '15s' }}>
      <circle cx="65" cy="140" r="3" fill="#E8944C" fillOpacity="0.4" />
    </g>
  </svg>
);

// Animated radar sweep for Layer 4
const RadarSweepIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
    <style>{`
      @keyframes radarSweep { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      @keyframes blipPing { 0%,70%,100% { r: 3; fill-opacity: 0.6; } 80% { r: 6; fill-opacity: 0.2; } }
      .sweep { transform-origin: 100px 100px; animation: radarSweep 6s linear infinite; }
    `}</style>
    <defs>
      <linearGradient id="sweepGrad" x1="0.5" y1="0.5" x2="0.8" y2="0.1">
        <stop offset="0%" stopColor="#E8944C" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#E8944C" stopOpacity="0" />
      </linearGradient>
    </defs>
    {/* Grid circles */}
    <circle cx="100" cy="100" r="80" stroke="#E8944C" strokeWidth="0.4" strokeOpacity="0.08" />
    <circle cx="100" cy="100" r="60" stroke="#E8944C" strokeWidth="0.4" strokeOpacity="0.1" />
    <circle cx="100" cy="100" r="40" stroke="#E8944C" strokeWidth="0.4" strokeOpacity="0.12" />
    <circle cx="100" cy="100" r="20" stroke="#E8944C" strokeWidth="0.4" strokeOpacity="0.15" />
    {/* Cross lines */}
    <line x1="20" y1="100" x2="180" y2="100" stroke="#E8944C" strokeWidth="0.3" strokeOpacity="0.08" />
    <line x1="100" y1="20" x2="100" y2="180" stroke="#E8944C" strokeWidth="0.3" strokeOpacity="0.08" />
    {/* Animated sweep */}
    <g className="sweep">
      <path d="M100,100 L100,20 A80,80 0 0,1 166,55 Z" fill="url(#sweepGrad)" />
      <line x1="100" y1="100" x2="100" y2="20" stroke="#E8944C" strokeWidth="0.8" strokeOpacity="0.3" />
    </g>
    {/* Blips */}
    <circle cx="130" cy="55" r="3" fill="#E8944C" style={{ animation: 'blipPing 3s ease-in-out infinite' }} />
    <circle cx="75" cy="70" r="2" fill="#E8944C" fillOpacity="0.4" style={{ animation: 'blipPing 3s ease-in-out infinite 1s' }} />
    <circle cx="140" cy="120" r="2.5" fill="#E8944C" fillOpacity="0.35" style={{ animation: 'blipPing 3s ease-in-out infinite 2s' }} />
    <circle cx="60" cy="130" r="2" fill="#E8944C" fillOpacity="0.25" />
    {/* Center */}
    <circle cx="100" cy="100" r="3" fill="#E8944C" fillOpacity="0.5" />
  </svg>
);

// Content flow particles for Layer 1
const ContentFlowIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
    <style>{`
      @keyframes particleUp1 { 0% { transform: translateY(0); opacity: 0; } 20% { opacity: 0.6; } 80% { opacity: 0.6; } 100% { transform: translateY(-80px); opacity: 0; } }
      @keyframes particleUp2 { 0% { transform: translateY(0); opacity: 0; } 20% { opacity: 0.4; } 80% { opacity: 0.4; } 100% { transform: translateY(-60px); opacity: 0; } }
      .pu1 { animation: particleUp1 4s ease-out infinite; }
      .pu2 { animation: particleUp2 5s ease-out infinite; }
    `}</style>
    {/* Document stack */}
    <rect x="60" y="120" width="80" height="60" rx="6" fill="#E8944C" fillOpacity="0.05" stroke="#E8944C" strokeOpacity="0.15" strokeWidth="1" />
    <rect x="68" y="112" width="80" height="60" rx="6" fill="#E8944C" fillOpacity="0.08" stroke="#E8944C" strokeOpacity="0.2" strokeWidth="1" />
    <rect x="76" y="104" width="80" height="60" rx="6" fill="#E8944C" fillOpacity="0.12" stroke="#E8944C" strokeOpacity="0.25" strokeWidth="1" />
    {/* Text lines on top doc */}
    <line x1="86" y1="118" x2="130" y2="118" stroke="#E8944C" strokeWidth="1.5" strokeOpacity="0.3" strokeLinecap="round" />
    <line x1="86" y1="128" x2="146" y2="128" stroke="#E8944C" strokeWidth="1.5" strokeOpacity="0.2" strokeLinecap="round" />
    <line x1="86" y1="138" x2="120" y2="138" stroke="#E8944C" strokeWidth="1.5" strokeOpacity="0.2" strokeLinecap="round" />
    <line x1="86" y1="148" x2="140" y2="148" stroke="#E8944C" strokeWidth="1.5" strokeOpacity="0.15" strokeLinecap="round" />
    {/* Rising particles */}
    <circle cx="95" cy="95" r="2" fill="#E8944C" className="pu1" />
    <circle cx="115" cy="98" r="1.5" fill="#E8944C" className="pu2" style={{ animationDelay: '1s' }} />
    <circle cx="135" cy="92" r="2" fill="#E8944C" className="pu1" style={{ animationDelay: '2s' }} />
    <circle cx="105" cy="100" r="1" fill="#E8944C" className="pu2" style={{ animationDelay: '0.5s' }} />
    <circle cx="125" cy="96" r="1.5" fill="#E8944C" className="pu1" style={{ animationDelay: '3s' }} />
  </svg>
);

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

export default function Services() {
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-nika-bg text-nika-text">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-8 relative overflow-hidden">
          {/* Background glow orb */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#E8944C]/[0.04] rounded-full blur-[120px] pointer-events-none" />
          {/* Abstract network nodes */}
          <div className="absolute top-16 left-0 w-[500px] h-[350px] pointer-events-none opacity-40 hidden md:block">
            <NetworkNodesIllustration />
          </div>
          <div className="absolute top-16 right-0 w-[500px] h-[350px] pointer-events-none opacity-40 hidden md:block" style={{ transform: 'scaleX(-1)' }}>
            <NetworkNodesIllustration />
          </div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
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
              一套系統，四層引擎。
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-nika-text-secondary text-lg max-w-2xl mx-auto mt-6"
            >
              從內容產出到社群口碑，每一層都自動運作。你選擇要疊幾層，我們幫你跑起來。
            </motion.p>
          </div>
        </section>

        {/* Stacking Engine Diagram */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="relative max-w-2xl mx-auto">
              {/* Top label */}
              <div className="text-center mb-8">
                <p className="text-[#E8944C] text-sm font-medium mb-2">你的品牌成長</p>
                <div className="w-px h-8 bg-[#E8944C]/50 mx-auto" />
                <svg className="w-4 h-4 text-[#E8944C] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" /></svg>
              </div>

              {/* Layer 4 (top, narrowest) */}
              <motion.button
                onClick={() => scrollToSection('layer4')}
                onMouseEnter={() => setHoveredLayer(4)}
                onMouseLeave={() => setHoveredLayer(null)}
                className={`relative w-[70%] mx-auto block mb-2 rounded-xl p-4 border transition-all duration-500 cursor-pointer ${
                  hoveredLayer === 4
                    ? 'bg-[#E8944C]/10 border-[#E8944C]/40 shadow-[0_0_30px_rgba(232,148,76,0.15)] scale-105'
                    : 'bg-white/[0.03] border-white/[0.06] hover:border-white/10'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Radio size={18} className="text-[#E8944C]" />
                    <span className="text-sm font-medium text-text-primary">第四層：社群雷達</span>
                  </div>
                  <span className="text-xs text-[#9B978E] bg-white/5 px-2 py-0.5 rounded-full">全配版</span>
                </div>
              </motion.button>

              {/* Layer 3 */}
              <motion.button
                onClick={() => scrollToSection('layer3')}
                onMouseEnter={() => setHoveredLayer(3)}
                onMouseLeave={() => setHoveredLayer(null)}
                className={`relative w-[80%] mx-auto block mb-2 rounded-xl p-4 border transition-all duration-500 cursor-pointer ${
                  hoveredLayer === 3
                    ? 'bg-[#E8944C]/10 border-[#E8944C]/40 shadow-[0_0_30px_rgba(232,148,76,0.15)] scale-105'
                    : 'bg-white/[0.03] border-white/[0.06] hover:border-white/10'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Globe size={18} className="text-[#E8944C]" />
                    <span className="text-sm font-medium text-text-primary">第三層：GEO 搜尋擴展</span>
                  </div>
                  <span className="text-xs text-[#9B978E] bg-white/5 px-2 py-0.5 rounded-full">進階版 +</span>
                </div>
              </motion.button>

              {/* Layer 2 */}
              <motion.button
                onClick={() => scrollToSection('layer2')}
                onMouseEnter={() => setHoveredLayer(2)}
                onMouseLeave={() => setHoveredLayer(null)}
                className={`relative w-[90%] mx-auto block mb-2 rounded-xl p-4 border transition-all duration-500 cursor-pointer ${
                  hoveredLayer === 2
                    ? 'bg-[#E8944C]/10 border-[#E8944C]/40 shadow-[0_0_30px_rgba(232,148,76,0.15)] scale-105'
                    : 'bg-white/[0.03] border-white/[0.06] hover:border-white/10'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <TrendingUp size={18} className="text-[#E8944C]" />
                    <span className="text-sm font-medium text-text-primary">第二層：數據大腦</span>
                  </div>
                  <span className="text-xs text-[#9B978E] bg-white/5 px-2 py-0.5 rounded-full">進階版 +</span>
                </div>
              </motion.button>

              {/* Layer 1 (bottom, widest, brightest) */}
              <motion.button
                onClick={() => scrollToSection('layer1')}
                onMouseEnter={() => setHoveredLayer(1)}
                onMouseLeave={() => setHoveredLayer(null)}
                className={`relative w-full block rounded-xl p-5 border-2 transition-all duration-500 cursor-pointer ${
                  hoveredLayer === 1
                    ? 'bg-[#E8944C]/15 border-[#E8944C]/50 shadow-[0_0_40px_rgba(232,148,76,0.2)] scale-[1.02]'
                    : 'bg-[#E8944C]/[0.06] border-[#E8944C]/20 hover:border-[#E8944C]/30'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0, duration: 0.5 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Search size={20} className="text-[#E8944C]" />
                    <span className="font-medium text-text-primary">第一層：內容引擎（地基）</span>
                  </div>
                  <span className="text-xs text-[#E8944C] bg-[#E8944C]/10 px-2 py-0.5 rounded-full border border-[#E8944C]/20">所有方案</span>
                </div>
              </motion.button>

              {/* Right side: Pricing tier markers */}
              <div className="hidden md:block absolute -right-40 top-0 h-full">
                <div className="relative h-full flex flex-col justify-between py-4">
                  <div className="absolute left-0 top-4 bottom-4 w-px bg-white/10" />
                  <div className="flex items-center gap-3 relative">
                    <div className="w-2 h-2 rounded-full bg-[#E8944C]" />
                    <span className="text-xs text-[#9B978E] whitespace-nowrap">全配版</span>
                  </div>
                  <div className="flex items-center gap-3 relative" style={{ marginTop: '20%' }}>
                    <div className="w-2 h-2 rounded-full bg-[#E8944C]/60" />
                    <span className="text-xs text-[#9B978E] whitespace-nowrap">進階版</span>
                  </div>
                  <div className="flex items-center gap-3 relative">
                    <div className="w-2 h-2 rounded-full bg-[#E8944C]/40" />
                    <span className="text-xs text-[#9B978E] whitespace-nowrap">基礎版</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-center text-sm text-[#9B978E] mt-12"
            >
              往下滑，看每一層怎麼幫你 ↓
            </motion.p>
          </div>
        </section>

        {/* Layer 1: Content Engine */}
        <section id="layer1" className="py-20 border-t border-white/5 relative overflow-hidden" style={{ scrollMarginTop: '80px' }}>
          {/* Abstract content flow illustration */}
          <div className="absolute -right-8 top-20 w-[220px] h-[220px] pointer-events-none opacity-50 hidden lg:block">
            <ContentFlowIllustration />
          </div>
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-[#E8944C] font-mono text-sm">01</span>
                <span className="text-xs text-[#E8944C] bg-[#E8944C]/10 px-3 py-1 rounded-full border border-[#E8944C]/20">所有方案都包含</span>
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl font-display mb-3">內容引擎</h2>
              <p className="text-xl text-[#9B978E] mb-8">讓你的客人在 Google 上找到你</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid md:grid-cols-3 gap-6 mb-12"
            >
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6">
                <p className="text-xs text-[#E8944C] font-mono mb-3">問題</p>
                <p className="text-[#9B978E] text-sm leading-relaxed">你的產品明明不錯，但 Google 搜不到你。網站做好後就放著，沒有新內容，Google 自然不會理你。</p>
              </div>
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6">
                <p className="text-xs text-[#E8944C] font-mono mb-3">這層怎麼幫你</p>
                <p className="text-[#9B978E] text-sm leading-relaxed">AI 自動研究關鍵字 → 自動寫 SEO 文章 → 自動發佈到你的網站。每個月穩定產出，不用你動手。</p>
              </div>
              <div className="bg-[#E8944C]/[0.05] border border-[#E8944C]/10 rounded-xl p-6">
                <p className="text-xs text-[#E8944C] font-mono mb-3">結果</p>
                <p className="text-text-primary text-sm leading-relaxed font-medium">每月穩定 8 篇文章上架，3-6 個月後 Google 開始帶客人進來。你什麼都不用做。</p>
              </div>
            </motion.div>

            {/* Content Pipeline Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-[#1a1917] rounded-2xl border border-white/10 p-6 md:p-8 max-w-3xl mx-auto mb-12"
            >
              <div className="flex items-center gap-2 mb-6">
                <Sparkles size={16} className="text-[#E8944C]" />
                <span className="text-sm text-[#9B978E]">內容引擎運作流程</span>
              </div>
              <div className="grid grid-cols-3 gap-3 md:gap-4 items-center">
                {/* Step 1 */}
                <div className="text-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#E8944C]/10 border border-[#E8944C]/20 flex items-center justify-center mx-auto mb-3">
                    <Search size={22} className="text-[#E8944C]" />
                  </div>
                  <p className="text-xs md:text-sm font-medium text-text-primary">AI 研究關鍵字</p>
                  <p className="text-[10px] md:text-xs text-[#9B978E] mt-1">分析產業 + 找出機會字</p>
                </div>
                {/* Arrow */}
                <div className="flex items-center justify-center -mt-6">
                  <div className="flex items-center gap-1">
                    <div className="w-8 md:w-12 h-px bg-gradient-to-r from-[#E8944C]/20 to-[#E8944C]/60" />
                    <ArrowRight size={14} className="text-[#E8944C]/60" />
                  </div>
                </div>
                {/* Step 2 */}
                <div className="text-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#E8944C]/10 border border-[#E8944C]/20 flex items-center justify-center mx-auto mb-3">
                    <FileText size={22} className="text-[#E8944C]" />
                  </div>
                  <p className="text-xs md:text-sm font-medium text-text-primary">自動寫文章</p>
                  <p className="text-[10px] md:text-xs text-[#9B978E] mt-1">S/A/B 等級分配</p>
                </div>
              </div>
              {/* Arrow down to step 3 */}
              <div className="flex justify-end pr-[16%] my-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#E8944C]/60"><path d="M12 5v14m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="grid grid-cols-3 gap-3 md:gap-4 items-center">
                <div />
                <div />
                <div className="text-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#E8944C]/10 border border-[#E8944C]/20 flex items-center justify-center mx-auto mb-3">
                    <Upload size={22} className="text-[#E8944C]" />
                  </div>
                  <p className="text-xs md:text-sm font-medium text-text-primary">自動發佈上架</p>
                  <p className="text-[10px] md:text-xs text-[#9B978E] mt-1">WordPress / Shopify</p>
                </div>
              </div>
              {/* Result bar */}
              <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-[#9B978E]">每月產出</span>
                <span className="text-sm font-bold text-[#E8944C]">8-20 篇 SEO 文章</span>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {seoFeatures.map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-white/[0.02] border border-white/5 rounded-lg p-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E8944C]/10 border border-[#E8944C]/15 flex items-center justify-center mb-3">
                    <item.icon size={18} strokeWidth={1.5} className="text-[#E8944C]" />
                  </div>
                  <h3 className="text-text-primary text-sm font-medium mb-1">{item.title}</h3>
                  <p className="text-[#9B978E] text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="w-px h-10 bg-gradient-to-b from-[#E8944C]/40 to-transparent mx-auto mb-3" />
              <p className="text-sm text-[#9B978E] italic">有了內容，怎麼知道有沒有效？↓</p>
              <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#E8944C]/40 mx-auto mt-3" />
            </div>
          </div>
        </section>

        {/* Layer 2: Data Brain */}
        <section id="layer2" className="py-20 border-t border-white/5 relative overflow-hidden" style={{ scrollMarginTop: '80px' }}>
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E8944C]/[0.03] rounded-full blur-[150px] pointer-events-none" />
          {/* Abstract circuit illustration */}
          <div className="absolute -left-4 top-32 w-[200px] h-[200px] pointer-events-none opacity-50 hidden lg:block">
            <CircuitIllustration />
          </div>
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-[#E8944C] font-mono text-sm">02</span>
                <span className="text-xs text-[#9B978E] bg-white/5 px-3 py-1 rounded-full border border-white/5">進階版 · 全配版</span>
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl font-display mb-3">數據大腦</h2>
              <p className="text-xl text-[#9B978E] mb-8">系統自己會進化，越跑越準</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6">
                <p className="text-xs text-[#E8944C] font-mono mb-3">問題</p>
                <p className="text-[#9B978E] text-sm leading-relaxed">文章上架了，但不知道有沒有人看、排名有沒有進步。沒有數據，就只能憑感覺。</p>
              </div>
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6">
                <p className="text-xs text-[#E8944C] font-mono mb-3">這層怎麼幫你</p>
                <p className="text-[#9B978E] text-sm leading-relaxed">系統每天追蹤排名變化，自動判斷下一步該怎麼調整。每個月給你一份白話報表 + 目標校準會議。</p>
              </div>
              <div className="bg-[#E8944C]/[0.05] border border-[#E8944C]/10 rounded-xl p-6">
                <p className="text-xs text-[#E8944C] font-mono mb-3">結果</p>
                <p className="text-text-primary text-sm leading-relaxed font-medium">系統越跑越聰明。上個月哪篇有效就加碼，沒效就調整。你只要每月花 30 分鐘看報告。</p>
              </div>
            </motion.div>

            {/* Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-[#1a1917] rounded-2xl border border-white/10 p-6 md:p-8 max-w-3xl mx-auto mb-12"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm text-[#9B978E]">NikaTech 系統狀態</span>
                </div>
                <span className="text-xs text-[#E8944C] font-mono">2026 年 3 月報表</span>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white/[0.02] rounded-xl">
                  <p className="text-2xl md:text-3xl font-bold text-text-primary">+340%</p>
                  <p className="text-xs text-[#9B978E] mt-1">自然流量成長</p>
                </div>
                <div className="text-center p-4 bg-white/[0.02] rounded-xl">
                  <p className="text-2xl md:text-3xl font-bold text-[#E8944C]">Top 10</p>
                  <p className="text-xs text-[#9B978E] mt-1">12 組關鍵字進入</p>
                </div>
                <div className="text-center p-4 bg-white/[0.02] rounded-xl">
                  <p className="text-2xl md:text-3xl font-bold text-text-primary">42hr</p>
                  <p className="text-xs text-[#9B978E] mt-1">本月節省時間</p>
                </div>
              </div>

              {/* Mini trend line */}
              <div className="mb-6 p-4 bg-white/[0.02] rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-[#9B978E] font-mono flex items-center gap-2"><BarChart3 size={14} className="text-[#E8944C]" />自然流量趨勢</span>
                  <span className="text-xs text-green-400">▲ 持續成長</span>
                </div>
                <svg viewBox="0 0 300 60" className="w-full h-12">
                  <defs>
                    <linearGradient id="trendGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#E8944C" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#E8944C" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,50 L30,48 L60,45 L90,42 L120,38 L150,30 L180,24 L210,18 L240,14 L270,10 L300,6" fill="none" stroke="#E8944C" strokeWidth="2" strokeLinecap="round" />
                  <path d="M0,50 L30,48 L60,45 L90,42 L120,38 L150,30 L180,24 L210,18 L240,14 L270,10 L300,6 L300,60 L0,60 Z" fill="url(#trendGrad)" />
                </svg>
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] text-[#9B978E]/50">10 月</span>
                  <span className="text-[10px] text-[#9B978E]/50">11 月</span>
                  <span className="text-[10px] text-[#9B978E]/50">12 月</span>
                  <span className="text-[10px] text-[#9B978E]/50">1 月</span>
                  <span className="text-[10px] text-[#9B978E]/50">2 月</span>
                  <span className="text-[10px] text-[#E8944C]">3 月</span>
                </div>
              </div>

              <p className="text-xs text-[#9B978E] mb-3 font-mono">關鍵字排名追蹤</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-[#9B978E] w-20 flex-shrink-0">害蟲防治</span>
                  <div className="flex-1 bg-white/5 rounded-full h-2.5"><div className="bg-[#E8944C] rounded-full h-2.5 transition-all duration-1000" style={{width: '88%'}} /></div>
                  <span className="text-xs text-[#E8944C] font-bold w-8 text-right">#3</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-[#9B978E] w-20 flex-shrink-0">除蟲推薦</span>
                  <div className="flex-1 bg-white/5 rounded-full h-2.5"><div className="bg-[#E8944C]/70 rounded-full h-2.5 transition-all duration-1000" style={{width: '72%'}} /></div>
                  <span className="text-xs text-[#9B978E] font-bold w-8 text-right">#7</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-[#9B978E] w-20 flex-shrink-0">白蟻處理</span>
                  <div className="flex-1 bg-white/5 rounded-full h-2.5"><div className="bg-[#E8944C]/50 rounded-full h-2.5 transition-all duration-1000" style={{width: '58%'}} /></div>
                  <span className="text-xs text-[#9B978E] font-bold w-8 text-right">#11</span>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {dataFeatures.map((item, i) => (
                <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/[0.02] border border-white/5 rounded-lg p-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E8944C]/10 border border-[#E8944C]/15 flex items-center justify-center mb-3">
                    <item.icon size={18} strokeWidth={1.5} className="text-[#E8944C]" />
                  </div>
                  <h3 className="text-text-primary text-sm font-medium mb-1">{item.title}</h3>
                  <p className="text-[#9B978E] text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="w-px h-10 bg-gradient-to-b from-[#E8944C]/40 to-transparent mx-auto mb-3" />
              <p className="text-sm text-[#9B978E] italic">Google 顧好了，AI 搜尋呢？↓</p>
              <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#E8944C]/40 mx-auto mt-3" />
            </div>
          </div>
        </section>

        {/* Layer 3: GEO - STANDOUT */}
        <section id="layer3" className="py-20 relative overflow-hidden" style={{ scrollMarginTop: '80px' }}>
          {/* Abstract concentric rings */}
          <div className="absolute -right-16 top-10 w-[280px] h-[280px] pointer-events-none opacity-40 hidden lg:block">
            <ConcentricRingsIllustration />
          </div>
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="bg-gradient-to-br from-[#E8944C]/[0.06] via-transparent to-[#E8944C]/[0.03] border border-[#E8944C]/10 rounded-3xl p-8 md:p-12">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-[#E8944C] font-mono text-sm">03</span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E8944C] text-black">差異化亮點</span>
                </div>
                <span className="text-xs text-[#9B978E] bg-white/5 px-3 py-1 rounded-full border border-white/5">進階版 · 全配版</span>
              </div>

              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h2 className="text-3xl md:text-4xl font-display mb-3">GEO 搜尋擴展</h2>
                <p className="text-xl text-[#9B978E] mb-8">讓 ChatGPT 也推薦你的品牌</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-black/20 border border-white/5 rounded-xl p-6">
                  <p className="text-xs text-[#E8944C] font-mono mb-3">問題</p>
                  <p className="text-[#9B978E] text-sm leading-relaxed">現在越來越多人直接問 ChatGPT、用 Perplexity 搜資料。如果 AI 搜尋引擎不認識你的品牌，你就少了一大塊客人。</p>
                </div>
                <div className="bg-black/20 border border-white/5 rounded-xl p-6">
                  <p className="text-xs text-[#E8944C] font-mono mb-3">這層怎麼幫你</p>
                  <p className="text-[#9B978E] text-sm leading-relaxed">建立結構化資料、優化 AI 可讀性、建立權威信號，讓 AI 搜尋引擎正確引用你的品牌資訊。</p>
                </div>
                <div className="bg-[#E8944C]/[0.08] border border-[#E8944C]/15 rounded-xl p-6">
                  <p className="text-xs text-[#E8944C] font-mono mb-3">結果</p>
                  <p className="text-text-primary text-sm leading-relaxed font-medium">Google 搜到你 + ChatGPT 推薦你 + Perplexity 引用你。流量來源不只一個通道。</p>
                </div>
              </motion.div>

              {/* AI Search Result Mockup */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="bg-[#1a1917] rounded-2xl border border-white/10 p-6 max-w-lg mx-auto mb-12"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 rounded-full bg-[#E8944C]/20 flex items-center justify-center">
                    <span className="text-xs">&#10024;</span>
                  </div>
                  <span className="text-sm text-[#9B978E]">AI 搜尋結果</span>
                </div>
                <p className="text-text-primary text-sm leading-relaxed mb-3">根據您的需求，推薦以下品牌：</p>
                <div className="bg-[#E8944C]/5 border border-[#E8944C]/20 rounded-lg p-4 mb-3">
                  <p className="text-[#E8944C] font-medium text-sm">&#11088; 你的品牌名稱</p>
                  <p className="text-[#9B978E] text-xs mt-1">「業界領先的專業服務，獲得多位用戶好評推薦...」</p>
                </div>
                <div className="bg-white/[0.02] border border-white/5 rounded-lg p-3 mb-2">
                  <p className="text-[#9B978E]/60 text-sm">競爭對手 A</p>
                </div>
                <div className="bg-white/[0.02] border border-white/5 rounded-lg p-3">
                  <p className="text-[#9B978E]/60 text-sm">競爭對手 B</p>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {geoFeatures.map((item, i) => (
                  <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-black/20 border border-white/5 rounded-lg p-4">
                    <div className="w-10 h-10 rounded-xl bg-[#E8944C]/10 border border-[#E8944C]/15 flex items-center justify-center mb-3">
                      <item.icon size={18} strokeWidth={1.5} className="text-[#E8944C]" />
                    </div>
                    <h3 className="text-text-primary text-sm font-medium mb-1">{item.title}</h3>
                    <p className="text-[#9B978E] text-xs leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="w-px h-10 bg-gradient-to-b from-[#E8944C]/40 to-transparent mx-auto mb-3" />
              <p className="text-sm text-[#9B978E] italic">搜尋顧好了，網路上別人怎麼說你？↓</p>
              <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#E8944C]/40 mx-auto mt-3" />
            </div>
          </div>
        </section>

        {/* Layer 4: Social Radar */}
        <section id="layer4" className="py-20 border-t border-white/5 relative overflow-hidden" style={{ scrollMarginTop: '80px' }}>
          {/* Subtle grid pattern bg */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #E8944C 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          {/* Animated radar sweep illustration */}
          <div className="absolute -left-8 top-24 w-[240px] h-[240px] pointer-events-none opacity-40 hidden lg:block">
            <RadarSweepIllustration />
          </div>
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-[#E8944C] font-mono text-sm">04</span>
                <span className="text-xs text-[#9B978E] bg-white/5 px-3 py-1 rounded-full border border-white/5">全配版</span>
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl font-display mb-3">社群雷達</h2>
              <p className="text-xl text-[#9B978E] mb-8">你的品牌被討論了，你第一個知道</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6">
                <p className="text-xs text-[#E8944C] font-mono mb-3">問題</p>
                <p className="text-[#9B978E] text-sm leading-relaxed">PTT 有人推你的東西，你不知道。Dcard 有人抱怨你的服務，你也不知道。錯過好評是可惜，錯過負評可能是災難。</p>
              </div>
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6">
                <p className="text-xs text-[#E8944C] font-mono mb-3">這層怎麼幫你</p>
                <p className="text-[#9B978E] text-sm leading-relaxed">五大平台即時監控，有人提到你就通知你。再幫你規劃口碑策略，主動讓好評被看到。</p>
              </div>
              <div className="bg-[#E8944C]/[0.05] border border-[#E8944C]/10 rounded-xl p-6">
                <p className="text-xs text-[#E8944C] font-mono mb-3">結果</p>
                <p className="text-text-primary text-sm leading-relaxed font-medium">你的品牌不只被搜到，還被推薦。好的聲音越來越多，壞的聲音第一時間處理。</p>
              </div>
            </motion.div>

            {/* Platform badges with brand colors */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
              {[
                { name: 'PTT', color: '#4A7EBB', glow: 'rgba(74,126,187,0.15)' },
                { name: 'Dcard', color: '#00BCD4', glow: 'rgba(0,188,212,0.15)' },
                { name: 'Facebook', color: '#1877F2', glow: 'rgba(24,119,242,0.15)' },
                { name: 'YouTube', color: '#FF0000', glow: 'rgba(255,0,0,0.12)' },
                { name: 'Threads', color: '#FFFFFF', glow: 'rgba(255,255,255,0.08)' },
              ].map(p => (
                <span
                  key={p.name}
                  className="px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105"
                  style={{
                    color: p.color,
                    borderColor: `${p.color}30`,
                    backgroundColor: p.glow,
                    boxShadow: `0 0 20px ${p.glow}`,
                  }}
                >
                  <span className="inline-block w-2 h-2 rounded-full mr-2 animate-pulse" style={{ backgroundColor: p.color }} />
                  {p.name}
                </span>
              ))}
            </div>

            {/* Notification mockup */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-md mx-auto mb-12"
            >
              <div className="bg-[#1a1917] rounded-2xl border border-white/10 p-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E8944C]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bell size={16} className="text-[#E8944C]" />
                  </div>
                  <div>
                    <p className="text-sm text-text-primary font-medium">品牌提及通知</p>
                    <p className="text-xs text-[#9B978E] mt-1">PTT 美妝版有人提到「你的品牌」—— 「這家的產品真的不錯，推薦給大家！」</p>
                    <p className="text-xs text-[#E8944C] mt-2">剛剛 · 點擊查看</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {socialFeatures.map((item, i) => (
                <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/[0.02] border border-white/5 rounded-lg p-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E8944C]/10 border border-[#E8944C]/15 flex items-center justify-center mb-3">
                    <item.icon size={18} strokeWidth={1.5} className="text-[#E8944C]" />
                  </div>
                  <h3 className="text-text-primary text-sm font-medium mb-1">{item.title}</h3>
                  <p className="text-[#9B978E] text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary + Pricing + Add-on + CTA */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display mb-4">四層疊起來，就是你的成長引擎</h2>
              <p className="text-[#9B978E] text-lg">選你需要的層數，我們幫你跑起來。</p>
            </motion.div>

            {/* Mini pricing comparison */}
            <div className="grid md:grid-cols-3 gap-4 mb-16">
              {/* Basic */}
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                <p className="text-sm text-[#9B978E] mb-1">基礎版</p>
                <h3 className="text-xl font-display text-text-primary mb-4">內容引擎</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#E8944C]" /><span className="text-sm text-text-primary">第一層：內容引擎</span></div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-white/10" /><span className="text-sm text-[#9B978E]/40">第二層：數據大腦</span></div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-white/10" /><span className="text-sm text-[#9B978E]/40">第三層：GEO 擴展</span></div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-white/10" /><span className="text-sm text-[#9B978E]/40">第四層：社群雷達</span></div>
                </div>
                <a href="/pricing" className="block mt-6 text-center text-sm text-[#E8944C] hover:underline">看方案細節 →</a>
              </motion.div>

              {/* Advanced - recommended */}
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-[#E8944C]/[0.05] border-2 border-[#E8944C]/30 rounded-2xl p-6 relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E8944C] text-black text-xs font-bold px-3 py-1 rounded-full">推薦</span>
                <p className="text-sm text-[#9B978E] mb-1">進階版</p>
                <h3 className="text-xl font-display text-text-primary mb-4">三層引擎</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#E8944C]" /><span className="text-sm text-text-primary">第一層：內容引擎</span></div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#E8944C]" /><span className="text-sm text-text-primary">第二層：數據大腦</span></div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#E8944C]" /><span className="text-sm text-text-primary">第三層：GEO 擴展</span></div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-white/10" /><span className="text-sm text-[#9B978E]/40">第四層：社群雷達</span></div>
                </div>
                <a href="/pricing" className="block mt-6 text-center text-sm text-[#E8944C] hover:underline">看方案細節 →</a>
              </motion.div>

              {/* Full */}
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                <p className="text-sm text-[#9B978E] mb-1">全配版</p>
                <h3 className="text-xl font-display text-text-primary mb-4">四層全開</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#E8944C]" /><span className="text-sm text-text-primary">第一層：內容引擎</span></div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#E8944C]" /><span className="text-sm text-text-primary">第二層：數據大腦</span></div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#E8944C]" /><span className="text-sm text-text-primary">第三層：GEO 擴展</span></div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#E8944C]" /><span className="text-sm text-text-primary">第四層：社群雷達</span></div>
                </div>
                <a href="/pricing" className="block mt-6 text-center text-sm text-[#E8944C] hover:underline">看方案細節 →</a>
              </motion.div>
            </div>

            {/* Add-on banner */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-16">
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
            </motion.div>

            {/* Final CTA */}
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-display text-text-primary mb-4">不確定需要幾層？</h2>
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
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
}

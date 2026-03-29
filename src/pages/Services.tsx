import { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  Monitor,
  Check,
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

function ServiceSection({
  tag,
  heading,
  intro,
  features,
  image,
  imageLeft = true,
}: {
  tag: string;
  heading: string;
  intro: string;
  features: FeatureItem[];
  image?: string;
  imageLeft?: boolean;
}) {
  return (
    <section className="py-[var(--section-gap)]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <div data-animate>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-nika-text-tertiary border border-white/[0.06] rounded-full px-4 py-1.5 inline-block">
            {tag}
          </span>
        </div>
        <h2 data-animate data-delay="1" className="mt-6 mb-4">
          {heading}
        </h2>
        <p data-animate data-delay="2" className="text-nika-text-secondary text-lg max-w-2xl mb-12">
          {intro}
        </p>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Image side */}
          {image && (
            <div className={`relative rounded-2xl overflow-hidden border border-white/[0.06] ${imageLeft ? 'order-2 md:order-1' : 'order-2'}`}>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/80 to-transparent z-10" />
              <img src={image} alt="" className="w-full h-64 md:h-full object-cover opacity-70" loading="lazy" />
            </div>
          )}
          {/* Feature cards side */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-[var(--grid-gap)] ${imageLeft ? 'order-1 md:order-2' : 'order-1'}`}>
            {features.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                className="bg-nika-bg-secondary rounded-xl border border-white/[0.06] p-6 hover-lift"
              >
                <item.icon size={24} strokeWidth={1.5} className="text-nika-accent mb-4" />
                <h3 className="text-nika-text font-body text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-nika-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const seoFeatures: FeatureItem[] = [
  { icon: Search, title: '關鍵字研究與規劃', desc: 'AI 分析你的產業，找出客人真正在搜的字' },
  { icon: FileText, title: 'SEO 文章自動生成', desc: '三級品質制度（S/A/B 級），根據關鍵字自動撰寫' },
  { icon: Upload, title: '自動發佈', desc: '寫完直接發佈到你的 WordPress / Shopify，零人工' },
  { icon: ShieldCheck, title: '品質管理', desc: 'E-E-A-T 信號注入、發佈節奏控制，不觸發 Google 警報' },
];

const geoFeatures: FeatureItem[] = [
  { icon: Code, title: '結構化資料建置', desc: 'Schema Markup 讓搜尋引擎完整理解你的內容' },
  { icon: Eye, title: 'AI 可讀性優化', desc: '讓 AI 模型能正確擷取和引用你的資訊' },
  { icon: Award, title: '權威信號建立', desc: '作者頁面 + 專業背景 + 引用來源，建立可信度' },
  { icon: Globe, title: '多平台知識圖譜', desc: '在各大平台建立一致的品牌資訊' },
];

const dataFeatures: FeatureItem[] = [
  { icon: TrendingUp, title: '即時排名追蹤', desc: '每天自動追蹤所有目標關鍵字的排名變化' },
  { icon: Zap, title: '自動觸發優化', desc: '排名下降？系統自動分析原因並觸發調整流程' },
  { icon: FileBarChart, title: '每月成效報表', desc: '白話文報表，不是工程師看的數據表' },
  { icon: Users, title: '每月目標校準', desc: '跟你對一次目標，調整策略，確保方向正確' },
];

const socialFeatures: FeatureItem[] = [
  { icon: Radio, title: '五大平台即時監控', desc: 'PTT / Dcard / Facebook / YouTube / Threads' },
  { icon: Bell, title: '品牌提及即時通知', desc: '有人提到你的品牌，第一時間推播給你' },
  { icon: MessageCircle, title: '口碑策略與執行', desc: '主動經營口碑，不只被動等人說' },
  { icon: Heart, title: 'KOL 矩陣 + UGC', desc: '微型意見領袖合作 + 用戶生成內容激勵' },
];

const addonFeatures = [
  '品牌官網設計 + 開發',
  'SEO 友善架構 + 速度優化',
  'Schema Markup 預埋',
  '串接自動發佈系統',
  '一次性費用',
];

export default function Services() {
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
              你的行銷，從手動變自動。
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-nika-text-secondary text-lg max-w-2xl mx-auto mt-6"
            >
              從關鍵字研究到社群口碑，八大模塊整合成一套系統，全部自動運作。
            </motion.p>
          </div>
        </section>

        {/* SEO */}
        <ServiceSection
          tag="SEARCH ENGINE OPTIMIZATION"
          heading="讓客人在 Google 上搜到你"
          intro="大部分中小企業的網站，Google 上根本找不到。不是你的產品不好，是你的網站沒有告訴 Google「我在這裡」。"
          features={seoFeatures}
          image="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80"
          imageLeft={true}
        />

        <hr className="section-divider" />

        {/* GEO */}
        <ServiceSection
          tag="GENERATIVE ENGINE OPTIMIZATION"
          heading="讓 AI 搜尋引擎也推薦你"
          intro="2026 年，越來越多人不是 Google 搜尋，而是直接問 ChatGPT、Perplexity、Google AI Overview。如果你的品牌沒有被這些 AI 引擎收錄，你會失去一整塊新的流量來源。"
          features={geoFeatures}
          image="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
          imageLeft={false}
        />

        <hr className="section-divider" />

        {/* Data & Optimization */}
        <ServiceSection
          tag="DATA & OPTIMIZATION"
          heading="系統會自己學，越做越好"
          intro="不是寫完文章就結束。系統每天追蹤排名、分析數據，自動判斷哪篇要補強、哪個關鍵字要加碼、哪個方向要調整。"
          features={dataFeatures}
          image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
          imageLeft={true}
        />

        <hr className="section-divider" />

        {/* Social Intelligence */}
        <ServiceSection
          tag="SOCIAL INTELLIGENCE"
          heading="網路上說你什麼，你第一個知道"
          intro="PTT 有人推你的產品，你知道嗎？Dcard 有人抱怨你的服務，你知道嗎？"
          features={socialFeatures}
          image="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"
          imageLeft={false}
        />

        <hr className="section-divider" />

        {/* Add-on Website */}
        <section className="py-[var(--section-gap)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div data-animate>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-nika-text-tertiary border border-white/[0.06] rounded-full px-4 py-1.5 inline-block mb-8">
                ADD-ON
              </span>
            </div>
            <div
              data-animate
              data-delay="1"
              className="bg-nika-bg-tertiary rounded-2xl p-8 md:p-12 border border-white/[0.06]"
            >
              <div className="flex items-center gap-3 mb-4">
                <Monitor size={28} strokeWidth={1.5} className="text-nika-accent" />
                <h2 className="text-2xl md:text-3xl">沒有網站？我們幫你做一個。</h2>
              </div>
              <p className="text-nika-text-secondary text-lg max-w-2xl mb-8">
                SEO 需要一個好的地基。如果你目前沒有網站，或網站太舊需要重建，我們提供 SEO 友善的品牌官網建置服務。
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {addonFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <Check size={16} strokeWidth={2} className="text-nika-accent flex-shrink-0" />
                    <span className="text-sm text-nika-text-secondary">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="pb-[var(--section-gap)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] text-center">
            <div data-animate className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/pricing"
                className="px-8 py-4 rounded-lg font-semibold text-sm no-underline transition-all duration-300 btn-shimmer"
                style={{ background: 'var(--accent)', color: 'var(--bg-primary)' }}
              >
                看方案報價
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-lg font-semibold text-sm no-underline border border-white/[0.06] transition-all duration-300 hover-lift"
                style={{ color: 'var(--text-primary)' }}
              >
                免費評估
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
}

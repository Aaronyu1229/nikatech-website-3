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

        {/* SEO */}
        <ServiceSection
          tag="SEARCH ENGINE OPTIMIZATION"
          heading="讓你的客人在 Google 上找到你"
          intro="你的產品明明不錯，但 Google 搜不到你，客人自然也找不到。問題不是產品，是你的網站沒有在跟 Google「說話」。我們幫你解決這件事。"
          features={seoFeatures}
          image="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80"
          imageLeft={true}
        />

        <hr className="section-divider" />

        {/* GEO */}
        <ServiceSection
          tag="GENERATIVE ENGINE OPTIMIZATION"
          heading="讓 ChatGPT 也推薦你的品牌"
          intro="現在越來越多人直接問 ChatGPT、用 Perplexity 搜資料，不一定會開 Google。如果這些 AI 搜尋引擎不認識你的品牌，你就少了一大塊客人。"
          features={geoFeatures}
          image="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
          imageLeft={false}
        />

        <hr className="section-divider" />

        {/* Data & Optimization */}
        <ServiceSection
          tag="DATA & OPTIMIZATION"
          heading="系統自己會進化，越跑越準"
          intro="我們不是寫完文章就丟著不管。系統每天追蹤排名變化，自動判斷下一步該怎麼調整。就像有一個不會累的行銷主管在幫你盯著。"
          features={dataFeatures}
          image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
          imageLeft={true}
        />

        <hr className="section-divider" />

        {/* Social Intelligence */}
        <ServiceSection
          tag="SOCIAL INTELLIGENCE"
          heading="你的品牌被討論了，你第一個知道"
          intro="PTT 有人推你的東西，你知道嗎？Dcard 有人在問你們的評價，你有跟上嗎？錯過一則好評是可惜，錯過一則負評可能是災難。"
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
                <h2 className="text-2xl md:text-3xl">還沒有網站？我們從頭幫你建。</h2>
              </div>
              <p className="text-nika-text-secondary text-lg max-w-2xl mb-8">
                SEO 需要一個好的地基。我們幫你建一個跑得快、Google 看得懂、直接串好自動發佈系統的品牌官網。
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

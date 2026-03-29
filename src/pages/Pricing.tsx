import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Check,
  Monitor,
  CalendarCheck,
  FileBarChart,
  Users,
  Rocket,
  MessageCircle,
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

interface PricingPlan {
  label: string;
  title: string;
  tagline: string;
  price: string;
  features: string[];
  suitableFor: string;
  recommended?: boolean;
  ctaStyle: 'solid' | 'outline';
}

const plans: PricingPlan[] = [
  {
    label: '內容引擎',
    title: '基礎版',
    tagline: '讓你的網站開始被 Google 看到',
    price: 'NT$ XXX,XXX / 月',
    features: [
      '關鍵字研究與規劃',
      'SEO 文章自動生成（每月 8 篇）',
      'CMS 自動發佈',
      '基礎品質管理',
      '每月成效報表',
      '每月目標校準',
    ],
    suitableFor: '適合：剛開始想做 SEO 的品牌',
    ctaStyle: 'outline',
  },
  {
    label: '內容引擎 + 數據大腦',
    title: '進階版',
    tagline: '不只被搜到，還越做越好',
    price: 'NT$ XXX,XXX / 月',
    features: [
      '基礎版全部功能',
      '圖片自動生成',
      '數據分析與自動優化',
      '文章品質升級（A 級 + S 級）',
      '完整 E-E-A-T 信號注入',
      'GEO 生成式搜尋優化',
      '每月 12 篇文章',
    ],
    suitableFor: '適合：想認真提升流量的成長型品牌',
    recommended: true,
    ctaStyle: 'solid',
  },
  {
    label: '內容引擎 + 數據大腦 + 社群觸角',
    title: '全配版',
    tagline: '你的線上聲量，全部交給我們',
    price: 'NT$ XXX,XXX / 月',
    features: [
      '進階版全部功能',
      '五大平台社群媒體監控',
      '社群口碑策略與執行',
      'S 級文章佔比最高',
      '品牌提及即時通知',
      '完整社群儀表板',
      '每月 20 篇文章',
    ],
    suitableFor: '適合：要全面掌控線上市場的品牌',
    ctaStyle: 'outline',
  },
];

const commonFeatures = [
  { icon: CalendarCheck, text: '不綁約，按月計費' },
  { icon: FileBarChart, text: '每月成效報表' },
  { icon: Users, text: '每月目標校準會議' },
  { icon: Rocket, text: '14 天內系統上線' },
  { icon: MessageCircle, text: '專屬 LINE 群組即時溝通' },
];

const addonInline = ['設計 + 開發', 'SEO 架構', 'Schema Markup', '系統串接'];

export default function Pricing() {
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
              PRICING
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl mt-6"
            >
              選一個適合你的方案
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-nika-text-secondary text-lg max-w-2xl mx-auto mt-6"
            >
              所有方案都包含每月成效報表和目標校準會議。不綁約，按月計費。
            </motion.p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-[var(--section-gap)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="grid md:grid-cols-3 gap-6">
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
                      ? 'bg-nika-bg-tertiary border-2 border-nika-accent border-glow-pulse'
                      : 'bg-nika-bg-secondary border border-white/[0.06]'
                  }`}
                >
                  {plan.recommended && (
                    <span className="absolute -top-3 right-6 bg-nika-accent text-nika-bg font-mono text-xs px-3 py-1 rounded-full font-semibold">
                      推薦
                    </span>
                  )}

                  <span className="font-mono text-xs text-nika-text-tertiary uppercase tracking-wider">
                    {plan.label}
                  </span>
                  <h2 className="font-display text-2xl mt-2 mb-1">{plan.title}</h2>
                  <p className="text-nika-text-secondary text-sm mb-6">{plan.tagline}</p>

                  <p className="text-3xl font-display text-nika-text mb-6">{plan.price}</p>

                  <div
                    className="border-t border-white/[0.06] pt-6 mb-6 flex-1"
                  >
                    <ul className="space-y-3">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <Check size={16} strokeWidth={2} className="text-nika-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-nika-text-secondary">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-nika-text-tertiary text-xs italic mb-6">{plan.suitableFor}</p>

                  <Link
                    to="/contact"
                    className={`block text-center py-3.5 rounded-lg font-semibold text-sm no-underline transition-all duration-300 ${
                      plan.ctaStyle === 'solid'
                        ? 'btn-shimmer'
                        : 'border border-white/[0.06] hover-lift'
                    }`}
                    style={
                      plan.ctaStyle === 'solid'
                        ? { background: 'var(--accent)', color: 'var(--bg-primary)' }
                        : { color: 'var(--text-primary)' }
                    }
                  >
                    免費評估
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Add-on Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              custom={0}
              className="mt-6 bg-nika-bg-elevated rounded-2xl p-6 md:p-8 border border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Monitor size={24} strokeWidth={1.5} className="text-nika-accent" />
                  <h3 className="text-lg font-medium">品牌官網建置</h3>
                </div>
                <p className="text-nika-text-secondary text-sm mb-4">
                  SEO 友善的品牌官網，一次性建置費用
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {addonInline.map((f) => (
                    <span key={f} className="text-xs text-nika-text-tertiary">{f}</span>
                  ))}
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-2xl font-display text-nika-text">NT$ XXX,XXX</p>
                <p className="text-xs text-nika-text-tertiary mt-1">一次性費用</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Common Features */}
        <section className="pb-[var(--section-gap)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div data-animate className="border-t border-white/[0.06] pt-12">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {commonFeatures.map((item) => (
                  <div key={item.text} className="flex flex-col items-center text-center gap-3">
                    <item.icon size={20} strokeWidth={1.5} className="text-nika-accent" />
                    <span className="text-sm text-nika-text-secondary">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="pb-[var(--section-gap)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] text-center">
            <h2 data-animate className="text-2xl md:text-3xl mb-8">
              免費評估，找到最適合你的方案
            </h2>
            <div data-animate data-delay="1">
              <Link
                to="/contact"
                className="inline-block px-8 py-4 rounded-lg font-semibold text-sm no-underline transition-all duration-300 btn-shimmer"
                style={{ background: 'var(--accent)', color: 'var(--bg-primary)' }}
              >
                填寫評估表單
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
}

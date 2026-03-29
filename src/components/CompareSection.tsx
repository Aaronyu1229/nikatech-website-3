import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const comparisons = [
  {
    left: '請一個行銷人 → 月薪 5 萬 + 勞健保 + 管理成本 ≈ 7 萬/月',
    right: 'NikaTech 系統 → 每月不到 1/10 的成本，24 小時不休息',
  },
  {
    left: '傳統 SEO 代理 → 簽半年約，第四個月消失',
    right: 'NikaTech → 不綁約，每月看報表決定要不要繼續',
  },
  {
    left: '自己寫文章 → 一篇 3 小時 × 12 篇 = 36 小時/月',
    right: 'NikaTech 系統 → 自動產出，你花 30 分鐘看報告就好',
  },
];

export default function CompareSection() {
  return (
    <section className="py-[clamp(6rem,12vh,10rem)] relative" style={{ background: '#0C0C0E' }}>
      <div className="max-w-[1200px] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
        {/* Header */}
        <div className="mb-16 text-center">
          <span
            data-animate
            className="block text-xs uppercase tracking-[0.15em] mb-4"
            style={{ fontFamily: 'var(--font-mono)', color: '#5E5B55' }}
          >
            COMPARISON
          </span>
          <h2 data-animate data-delay="1">
            算一筆帳
          </h2>
        </div>

        {/* Comparison rows */}
        <div className="flex flex-col gap-6 max-w-[960px] mx-auto">
          {comparisons.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl p-6 md:p-8"
              style={{
                background: '#141416',
                border: '1px solid rgba(242,239,232,0.06)',
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 items-center">
                {/* Left - old way */}
                <p
                  className="text-sm md:text-base leading-relaxed line-through decoration-1"
                  style={{ color: '#5E5B55', textDecorationColor: 'rgba(94,91,85,0.5)' }}
                >
                  {row.left}
                </p>

                {/* VS divider */}
                <div className="hidden md:flex items-center justify-center">
                  <ArrowRight size={20} strokeWidth={1.5} style={{ color: '#E8944C' }} />
                </div>
                <div className="flex md:hidden items-center gap-2">
                  <div className="h-px flex-1" style={{ background: 'rgba(242,239,232,0.06)' }} />
                  <ArrowRight size={16} strokeWidth={1.5} style={{ color: '#E8944C' }} className="rotate-90 md:rotate-0" />
                  <div className="h-px flex-1" style={{ background: 'rgba(242,239,232,0.06)' }} />
                </div>

                {/* Right - NikaTech */}
                <p className="text-sm md:text-base leading-relaxed font-medium" style={{ color: '#E8944C' }}>
                  {row.right}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

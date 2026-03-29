import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: '免費評估',
    description: '填寫表單，我們幫你做一份網站健檢報告，告訴你現狀和機會。',
  },
  {
    number: '02',
    title: '選擇方案',
    description: '根據報告結果，選擇適合你的方案。基礎版、進階版、全配版。',
  },
  {
    number: '03',
    title: '兩週上線',
    description: '確認合作後，14 天內系統開始跑。第一批文章自動發佈。',
  },
  {
    number: '04',
    title: '每月校準',
    description: '月報告 + 目標校準會議。看數據、調策略、持續優化。',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-[clamp(6rem,12vh,10rem)] relative overflow-hidden" style={{ background: '#0C0C0E' }}>
      {/* Background decoration */}
      <div className="absolute top-1/2 -right-32 w-64 h-64 bg-[rgba(232,148,76,0.05)] rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-32 w-48 h-48 bg-[rgba(232,148,76,0.03)] rounded-full blur-3xl" />
      <div className="max-w-[1200px] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
        {/* Header */}
        <div className="mb-16 text-center">
          <span
            data-animate
            className="block text-xs uppercase tracking-[0.15em] mb-4"
            style={{ fontFamily: 'var(--font-mono)', color: '#5E5B55' }}
          >
            HOW IT WORKS
          </span>
          <h2 data-animate data-delay="1">
            四步開始
          </h2>
        </div>

        {/* Steps timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 relative">
          {/* Horizontal line connecting steps (desktop) */}
          <div
            className="hidden md:block absolute top-[2.25rem] left-[12.5%] right-[12.5%] h-px"
            style={{ background: 'rgba(242,239,232,0.08)' }}
          />
          {/* Animated connecting line */}
          <motion.div
            className="hidden md:block absolute top-[2.25rem] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent z-0"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col items-center text-center px-4"
            >
              {/* Step number */}
              <div
                className="w-[4.5rem] h-[4.5rem] rounded-full flex items-center justify-center mb-6 relative z-10"
                style={{
                  background: '#141416',
                  border: '1px solid rgba(232,148,76,0.25)',
                }}
              >
                <motion.span
                  className="text-2xl font-medium"
                  style={{ fontFamily: 'var(--font-mono)', color: '#E8944C' }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15, type: 'spring', stiffness: 200 }}
                >
                  {step.number}
                </motion.span>
              </div>

              {/* Vertical line connecting steps (mobile) */}
              {i < steps.length - 1 && (
                <div
                  className="md:hidden absolute top-[4.5rem] left-1/2 w-px h-8 -translate-x-1/2"
                  style={{ background: 'rgba(242,239,232,0.08)' }}
                />
              )}

              <h3 className="text-lg font-semibold mb-3 font-display" style={{ color: '#F2EFE8' }}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed max-w-[240px]" style={{ color: '#9B978E' }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <hr className="section-divider my-[clamp(4rem,8vh,6rem)]" />

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2 className="mb-8" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
            不確定適不適合？先做個免費測試。
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/quiz"
              className="btn-shimmer group inline-flex items-center gap-2 px-8 py-[0.875rem] rounded text-[0.9375rem] font-medium tracking-[0.03em] no-underline transition-all duration-300 hover:-translate-y-px hover:shadow-lg"
              style={{ fontFamily: 'var(--font-body)', background: '#E8944C', color: '#0C0C0E', boxShadow: '0 4px 20px rgba(232,148,76,0.25)' }}
            >
              30 秒行業測試
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-[0.875rem] rounded text-[0.9375rem] font-medium no-underline transition-all duration-300 hover:-translate-y-px"
              style={{ fontFamily: 'var(--font-body)', color: '#F2EFE8', border: '1px solid rgba(242,239,232,0.06)', background: 'transparent' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#242428')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              直接聯繫我們
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

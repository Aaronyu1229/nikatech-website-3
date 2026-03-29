import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: '聊一下',
    description: 'LINE 或電話，免費，了解你的狀況，我們評估能不能幫上忙。',
  },
  {
    number: '02',
    title: '兩週上線',
    description: '確認合作後，14 天內網站上線、系統開始跑。',
  },
  {
    number: '03',
    title: '每月看成效',
    description: '月報告寄給你，不滿意隨時停，不綁約。',
  },
];

export default function ProcessSection() {
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
            HOW IT WORKS
          </span>
          <h2 data-animate data-delay="1">
            合作超簡單，三步就開始
          </h2>
        </div>

        {/* Steps timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 relative">
          {/* Horizontal line connecting steps (desktop) */}
          <div
            className="hidden md:block absolute top-[2.25rem] left-[16.67%] right-[16.67%] h-px"
            style={{ background: 'rgba(242,239,232,0.08)' }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col items-center text-center px-6"
            >
              {/* Step number */}
              <div
                className="w-[4.5rem] h-[4.5rem] rounded-full flex items-center justify-center mb-6 relative z-10"
                style={{
                  background: '#141416',
                  border: '1px solid rgba(232,148,76,0.25)',
                }}
              >
                <span
                  className="text-2xl font-medium"
                  style={{ fontFamily: 'var(--font-mono)', color: '#E8944C' }}
                >
                  {step.number}
                </span>
              </div>

              {/* Vertical line connecting steps (mobile) */}
              {i < steps.length - 1 && (
                <div
                  className="md:hidden absolute top-[4.5rem] left-1/2 w-px h-8 -translate-x-1/2"
                  style={{ background: 'rgba(242,239,232,0.08)' }}
                />
              )}

              <h3 className="text-xl font-medium mb-3" style={{ color: '#F2EFE8', fontFamily: 'var(--font-body)' }}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed max-w-[280px]" style={{ color: '#9B978E' }}>
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
            30 秒測試一下，你的行業適合哪種方案
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/quiz"
              className="btn-shimmer group inline-flex items-center gap-2 px-8 py-[0.875rem] rounded text-[0.9375rem] font-medium tracking-[0.03em] no-underline transition-all duration-300 hover:-translate-y-px hover:shadow-lg"
              style={{ fontFamily: 'var(--font-body)', background: '#E8944C', color: '#0C0C0E', boxShadow: '0 4px 20px rgba(232,148,76,0.25)' }}
            >
              開始測試
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <a
              href="https://line.me/ti/p/nikatech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-[0.875rem] rounded text-[0.9375rem] font-medium no-underline transition-all duration-300 hover:-translate-y-px"
              style={{ fontFamily: 'var(--font-body)', color: '#fff', border: '1px solid #06C755', background: 'transparent' }}
            >
              <MessageCircle size={16} strokeWidth={1.5} style={{ color: '#06C755' }} />
              或直接加 LINE 聊聊
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Brain, Radio } from 'lucide-react';

const layers = [
  {
    number: '01',
    icon: FileText,
    title: '內容引擎',
    description: 'AI 研究你的產業關鍵字 → 自動撰寫 SEO 文章 → 自動發佈到你的網站。每月穩定產出，不需要你動手。',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80',
    imageAlt: '內容撰寫',
  },
  {
    number: '02',
    icon: Brain,
    title: '數據大腦',
    description: '追蹤每篇文章的排名表現 → 自動分析哪些有效、哪些要調整 → 下個月的策略自動優化。越做越準，不是做完就丟。',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    imageAlt: '數據分析',
  },
  {
    number: '03',
    icon: Radio,
    title: '社群觸角',
    description: '監控 PTT、Dcard、Facebook、YouTube、Threads——有人提到你的品牌，第一時間通知你。主動經營口碑，讓網路上都在說你好。',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=600&q=80',
    imageAlt: '社群媒體',
  },
];

export default function SolutionSection() {
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
            THE SOLUTION
          </span>
          <h2 data-animate data-delay="1">
            NikaTech 自動化引擎，三層架構
          </h2>
        </div>

        {/* Layer cards */}
        <div className="flex flex-col gap-8 max-w-[900px] mx-auto">
          {layers.map((layer, i) => {
            const Icon = layer.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="card-tilt p-8 md:p-12 rounded-2xl overflow-hidden hover:border-accent/20 transition-colors duration-500"
                style={{
                  background: '#141416',
                  border: '1px solid rgba(242,239,232,0.06)',
                }}
              >
                {/* Card image */}
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141416] to-transparent z-10" />
                  <img
                    src={layer.image}
                    alt={layer.imageAlt}
                    className="w-full h-full object-cover opacity-60"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-start gap-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(232,148,76,0.1)' }}
                  >
                    <Icon size={22} strokeWidth={1.5} style={{ color: '#E8944C' }} />
                  </div>
                  <div>
                    <span
                      className="text-sm mb-2 block"
                      style={{ fontFamily: 'var(--font-mono)', color: '#E8944C' }}
                    >
                      {layer.number}
                    </span>
                    <h3 className="text-xl md:text-2xl font-display mb-3" style={{ color: '#F2EFE8' }}>
                      {layer.title}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: '#9B978E' }}>
                      {layer.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA link */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-1 text-sm no-underline transition-colors duration-300"
            style={{ color: '#E8944C', fontFamily: 'var(--font-body)' }}
          >
            看完整服務內容 →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

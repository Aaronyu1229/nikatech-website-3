import { motion } from 'framer-motion';
import { ClipboardCheck, BarChart3, Target, Cpu, Sparkles, ShieldCheck } from 'lucide-react';

const cards = [
  {
    icon: ClipboardCheck,
    title: '先評估，再合作',
    description: '免費幫你做網站健檢報告，有數據基礎再決定。不盲目簽約。',
  },
  {
    icon: BarChart3,
    title: '每月看得到成效',
    description: '每月一份白話報表——來了幾個人、排名進步多少、系統幫你省了幾小時。',
  },
  {
    icon: Target,
    title: '每月校準目標',
    description: '不是做完就消失。每月跟你對一次目標，調整策略，確保方向正確。',
  },
  {
    icon: Cpu,
    title: 'AI 自動化，省一個人力',
    description: '關鍵字研究、寫文章、發佈、追蹤——全部自動跑。你省下的是一個行銷人的時間和薪水。',
  },
  {
    icon: Sparkles,
    title: 'SEO + GEO 雙引擎',
    description: '不只讓 Google 搜到你，也讓 ChatGPT、Perplexity 等 AI 搜尋引擎推薦你。',
  },
  {
    icon: ShieldCheck,
    title: '不綁約',
    description: '每月看成效決定。做得好你自然會續，做不好不該綁住你。',
  },
];

export default function WhyUsSection() {
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
            WHY US
          </span>
          <h2 data-animate data-delay="1">
            不是又一間 SEO 公司
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(1.5rem,3vw,2.5rem)]">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 rounded-xl hover-lift"
                style={{
                  background: '#141416',
                  border: '1px solid rgba(242,239,232,0.06)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-5"
                  style={{ background: 'rgba(232,148,76,0.1)' }}
                >
                  <Icon size={20} strokeWidth={1.5} style={{ color: '#E8944C' }} />
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ color: '#F2EFE8', fontFamily: 'var(--font-body)' }}>
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#9B978E' }}>
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

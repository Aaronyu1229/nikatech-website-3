import { motion } from 'framer-motion';
import { Search, MessageSquare, BarChart3 } from 'lucide-react';

const cards = [
  {
    icon: Search,
    title: '客人自己找上門',
    description: 'AI 每月自動產出 12 篇文章，針對你的產業客人會搜尋的關鍵字。3-6 個月後，Google 搜尋結果開始出現你。不用投廣告，客人自己來。',
  },
  {
    icon: MessageSquare,
    title: '詢價 2 分鐘內回覆',
    description: '客人在網站問報價，系統自動回覆。週末、半夜、過年都不漏接。你週一上班打開看，訊息都處理好了。',
  },
  {
    icon: BarChart3,
    title: '每月一份白話報表',
    description: '不給你看不懂的數據。告訴你：這個月來了幾個人、幾個人留資料、系統幫你省了幾小時。用數字跟你說值不值得。',
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
            SOLUTION
          </span>
          <h2 data-animate data-delay="1">
            你什麼都不用管，系統每天自動跑
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(1.5rem,3vw,2.5rem)]">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 rounded-2xl hover-lift card-glow"
                style={{
                  background: '#141416',
                  border: '1px solid rgba(242,239,232,0.06)',
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                  style={{ background: 'rgba(232,148,76,0.1)' }}
                >
                  <Icon size={22} strokeWidth={1.5} style={{ color: '#E8944C' }} />
                </div>

                <h3 className="text-lg font-medium mb-3" style={{ color: '#F2EFE8', fontFamily: 'var(--font-body)' }}>
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

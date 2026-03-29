import { motion } from 'framer-motion';
import { ClipboardCheck, BarChart3, Target, Cpu, Sparkles, ShieldCheck } from 'lucide-react';

const cards = [
  {
    icon: ClipboardCheck,
    title: '合作前，先給你一份免費報告',
    description: '不會叫你先簽約。我們先幫你做網站健檢，用數據告訴你值不值得做，再決定要不要開始。',
  },
  {
    icon: BarChart3,
    title: '每個月都看得到數字',
    description: '月報不是那種看不懂的工程師報表。白話告訴你：多少人來、排名進步幾名、幫你省了多少時間。',
  },
  {
    icon: Target,
    title: '每個月坐下來對目標',
    description: '不會簽完約就消失。每個月固定跟你開會，看上個月成效、討論下個月方向。有問題隨時 LINE。',
  },
  {
    icon: Cpu,
    title: '省下一個人的薪水',
    description: '請一個行銷至少 4、5 萬，還要教、還要管。我們的系統 24 小時自動跑，關鍵字研究、寫文章、發佈、追蹤全包。',
  },
  {
    icon: Sparkles,
    title: 'Google 和 AI 搜尋通吃',
    description: '不只做傳統 SEO。ChatGPT、Perplexity 這些 AI 搜尋越來越多人用，我們也幫你佈局，兩邊的流量都吃到。',
  },
  {
    icon: ShieldCheck,
    title: '不綁約，隨時可以停',
    description: '按月計費，覺得沒效果隨時喊停。我們對自己的東西有信心——做得好，你不會想走。',
  },
];

export default function WhyUsSection() {
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
            WHY US
          </span>
          <h2 data-animate data-delay="1">
            跟一般 SEO 公司哪裡不一樣？
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
                className="card-tilt p-6 rounded-xl hover:border-accent/20 transition-all duration-500 group"
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
                <div className="mt-4 h-0.5 bg-accent/0 group-hover:bg-accent/40 transition-all duration-500 rounded-full transform scale-x-0 group-hover:scale-x-100 origin-left" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

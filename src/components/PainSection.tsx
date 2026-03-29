import { motion } from 'framer-motion';

const pains = [
  '花了十幾萬做網站，結果放在那邊長灰塵，Google 上根本搜不到。',
  '找了一間 SEO 公司，前兩個月很積極，後來就已讀不回了。',
  '想請一個行銷人員，開 4、5 萬還不一定找得到好的，乾脆自己來。',
  '客人都是靠朋友介紹，網路上完全沒有新客源進來。',
  '聽說現在大家都用 ChatGPT 找資料，但完全不知道該怎麼讓 AI 推薦我們。',
];

export default function PainSection() {
  return (
    <section className="py-[clamp(6rem,12vh,10rem)] relative overflow-hidden" style={{ background: '#0C0C0E' }}>
      {/* Background decoration */}
      <div className="absolute top-1/2 -right-32 w-64 h-64 bg-[rgba(232,148,76,0.05)] rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-32 w-48 h-48 bg-[rgba(232,148,76,0.03)] rounded-full blur-3xl" />
      <div className="max-w-[1200px] mx-auto px-[clamp(1.5rem,4vw,4rem)] relative">
        {/* Header */}
        <div className="mb-16">
          <span
            data-animate
            className="block text-xs uppercase tracking-[0.15em] mb-4"
            style={{ fontFamily: 'var(--font-mono)', color: '#5E5B55' }}
          >
            THE PROBLEM
          </span>
          <h2 data-animate data-delay="1">
            這些狀況，是不是很熟悉？
          </h2>
        </div>

        {/* Pain point quotes */}
        <div className="flex flex-col gap-8 max-w-[720px]">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-8 py-4"
            >
              {/* Animated border line */}
              <motion.div
                className="absolute left-0 top-0 w-0.5 bg-accent"
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 + 0.2, ease: [0.16, 1, 0.3, 1] }}
              />
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#F2EFE8' }}>
                「{pain}」
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-xl md:text-2xl leading-relaxed max-w-[640px] font-display"
          style={{ color: '#E8944C' }}
        >
          這些問題，靠請一個人解決不了。你需要的是一套跑得動的系統。
        </motion.p>
      </div>
    </section>
  );
}

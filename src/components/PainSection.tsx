import { motion } from 'framer-motion';

const pains = [
  '知道要做 SEO，但不知道從哪開始。',
  '請了 agency，簽了半年約，第四個月就聯絡不到人。',
  '想請一個行銷，算了一下薪水，還是算了。',
  '有網站，但三年沒更新，Google 上根本搜不到。',
  '聽說 ChatGPT 搜尋會取代 Google，但完全不知道怎麼應對。',
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
            你是不是也遇到這些問題？
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
          這些問題的根本原因：你缺的不是一個人，是一套系統。
        </motion.p>
      </div>
    </section>
  );
}

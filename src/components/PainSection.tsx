import { motion } from 'framer-motion';

const pains = [
  '網站三年前做的，之後就沒動過。',
  '週末有人問報價，週一才看到，人早就找別家了。',
  '上次找人做 SEO，簽了半年約，第四個月就聯絡不到人了。',
  '知道要做數位行銷，但不知道從哪開始，也沒時間研究。',
  '想請一個行銷，算了一下薪水，還是自己來吧。',
];

export default function PainSection() {
  return (
    <section className="py-[clamp(6rem,12vh,10rem)] relative" style={{ background: '#0C0C0E' }}>
      <div className="max-w-[1200px] mx-auto px-[clamp(1.5rem,4vw,4rem)] relative">
        {/* Header */}
        <div className="mb-16">
          <span
            data-animate
            className="block text-xs uppercase tracking-[0.15em] mb-4"
            style={{ fontFamily: 'var(--font-mono)', color: '#5E5B55' }}
          >
            PAIN POINTS
          </span>
          <h2 data-animate data-delay="1">
            聽起來像你嗎？
          </h2>
        </div>

        {/* Pain point quotes */}
        <div className="flex flex-col gap-8 max-w-[720px]">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="pl-6 py-4"
              style={{
                borderLeft: '2px solid #E8944C',
              }}
            >
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
          className="mt-16 text-xl md:text-2xl leading-relaxed max-w-[640px]"
          style={{ color: '#E8944C' }}
        >
          這些問題，不是請一個人就能解決。你需要的是一套系統。
        </motion.p>
      </div>
    </section>
  );
}

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

const LINE_URL = 'https://line.me/ti/p/nikatech';

const team = [
  {
    name: '均谷',
    title: '產業策略',
    desc: '負責搞清楚你的產業——你的客人是誰、在哪裡、在找什麼。十年產業策略經驗，聊過上百個老闆，知道你在煩什麼。',
  },
  {
    name: 'Aaron',
    title: 'AI 工程',
    desc: '負責把這些變成系統——AI 自動寫文章、自動發佈、自動回覆。工程師背景，之前在物流業，知道重複的事情就該讓機器做。',
  },
];

const principles = [
  {
    num: '01',
    title: '說人話',
    desc: '不丟術語給你。月報用你看得懂的方式寫，有問題 LINE 直接問。',
  },
  {
    num: '02',
    title: '不綁約',
    desc: '每月看成效決定。做得好你自然會續，做不好不該綁住你。',
  },
  {
    num: '03',
    title: '先求有效，再求完美',
    desc: '先用最小方案驗證你的產業可行，有效再擴大。不一次賣你全套。',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-[72px]" style={{ background: '#0C0C0E' }}>

        {/* Hero */}
        <section className="py-[clamp(6rem,14vh,12rem)] relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(232,148,76,0.06), transparent 60%)' }}
          />
          <div className="max-w-[800px] mx-auto px-[clamp(1.5rem,4vw,4rem)] text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-block px-3 py-1 rounded text-xs uppercase tracking-[0.05em] mb-6"
              style={{
                fontFamily: 'var(--font-mono)',
                color: '#E8944C',
                background: 'rgba(232,148,76,0.1)',
                border: '1px solid rgba(232,148,76,0.15)',
              }}
            >
              About
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: 1.2,
                color: '#F2EFE8',
                fontWeight: 400,
              }}
            >
              兩個人，認真的。
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg"
              style={{ color: '#9B978E', maxWidth: '40ch', margin: '1.5rem auto 0' }}
            >
              我們不是一間大公司。NikaTech 就兩個人。
            </motion.p>
          </div>
        </section>

        {/* Team */}
        <div className="section-divider max-w-[1200px] mx-auto" />
        <section className="py-[clamp(5rem,10vh,8rem)]">
          <div className="max-w-[900px] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
            <div className="grid md:grid-cols-2 gap-[clamp(1.5rem,3vw,2rem)]">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={fadeUp}
                  className="relative p-8 rounded-xl overflow-hidden"
                  style={{
                    background: '#141416',
                    border: '1px solid rgba(242,239,232,0.06)',
                  }}
                >
                  <div className="mb-6">
                    <span
                      className="text-xs uppercase tracking-[0.05em]"
                      style={{ fontFamily: 'var(--font-mono)', color: '#E8944C' }}
                    >
                      {member.title}
                    </span>
                  </div>
                  <h3
                    className="text-2xl mb-4"
                    style={{ color: '#F2EFE8', fontFamily: 'var(--font-display)', fontWeight: 400 }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#9B978E' }}>
                    {member.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Story */}
        <div className="section-divider max-w-[1200px] mx-auto" />
        <section className="py-[clamp(5rem,10vh,8rem)]">
          <div className="max-w-[700px] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              custom={0}
            >
              <span
                data-animate
                className="inline-block px-3 py-1 rounded text-xs uppercase tracking-[0.05em] mb-4"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: '#E8944C',
                  background: 'rgba(232,148,76,0.1)',
                  border: '1px solid rgba(232,148,76,0.15)',
                }}
              >
                Origin
              </span>
              <h2 data-animate data-delay="1" className="mt-4 mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                為什麼叫 NikaTech？
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: '#9B978E' }}>
                <p>
                  Nika 是《海賊王》裡的太陽神，代表解放。
                </p>
                <p>
                  我們想做的事很簡單：讓你不用再一個人扛所有行銷的事。
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, rgba(232,148,76,0.3), transparent)' }} />
                <span className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: '#5E5B55' }}>est. 2024</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Principles */}
        <div className="section-divider max-w-[1200px] mx-auto" />
        <section className="py-[clamp(5rem,10vh,8rem)]">
          <div className="max-w-[1200px] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
            <div className="mb-12">
              <span
                data-animate
                className="inline-block px-3 py-1 rounded text-xs uppercase tracking-[0.05em] mb-4"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: '#E8944C',
                  background: 'rgba(232,148,76,0.1)',
                  border: '1px solid rgba(232,148,76,0.15)',
                }}
              >
                Principles
              </span>
              <h2 data-animate data-delay="1" style={{ marginTop: '1rem' }}>
                做事的<em>三個原則</em>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-[clamp(1rem,2vw,1.5rem)]">
              {principles.map((p, i) => (
                <motion.div
                  key={p.num}
                  custom={i + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={fadeUp}
                  className="group relative p-8 rounded-xl hover-lift noise-overlay overflow-hidden"
                  style={{
                    background: '#141416',
                    border: '1px solid rgba(242,239,232,0.06)',
                  }}
                >
                  <div
                    className="absolute top-4 right-6 font-display text-[5rem] leading-none select-none"
                    style={{ color: 'rgba(242,239,232,0.03)', fontWeight: 400 }}
                  >
                    {p.num}
                  </div>
                  <div className="relative">
                    <h3
                      className="text-xl mb-3"
                      style={{ color: '#F2EFE8', fontFamily: 'var(--font-display)', fontWeight: 400 }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#9B978E' }}>
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="section-divider max-w-[1200px] mx-auto" />
        <section className="py-[clamp(6rem,12vh,10rem)]">
          <div
            className="max-w-[800px] mx-auto px-[clamp(1.5rem,4vw,4rem)] relative rounded-xl py-20 overflow-hidden text-center"
            style={{ background: '#141416', border: '1px solid rgba(242,239,232,0.06)' }}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[150px] pointer-events-none"
              style={{ background: 'radial-gradient(ellipse, rgba(232,148,76,0.12), transparent 70%)' }}
            />
            <div className="absolute top-6 left-6 w-8 h-8">
              <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'rgba(242,239,232,0.1)' }} />
              <div className="absolute top-0 left-0 h-full w-px" style={{ background: 'rgba(242,239,232,0.1)' }} />
            </div>
            <div className="absolute bottom-6 right-6 w-8 h-8">
              <div className="absolute bottom-0 right-0 w-full h-px" style={{ background: 'rgba(242,239,232,0.1)' }} />
              <div className="absolute bottom-0 right-0 h-full w-px" style={{ background: 'rgba(242,239,232,0.1)' }} />
            </div>
            <h2 className="relative" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              想聊聊？
            </h2>
            <p className="relative mt-4 text-base mx-auto" style={{ color: '#9B978E', maxWidth: '30ch' }}>
              不用準備什麼，加 LINE 說聲嗨就好。
            </p>
            <div className="relative mt-10">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-[0.875rem] rounded text-[0.9375rem] font-medium no-underline transition-all duration-300 hover:-translate-y-px"
                style={{ background: '#06C755', color: '#fff', fontFamily: 'var(--font-body)' }}
              >
                <MessageCircle size={16} strokeWidth={1.5} />
                加 LINE 聊聊
              </a>
            </div>
          </div>
        </section>

      </main>
      <FooterSection />
    </>
  );
}

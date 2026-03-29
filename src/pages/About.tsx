import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, Terminal, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

const LINE_URL = 'https://line.me/ti/p/nikatech';

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
      <main className="bg-bg-primary">

        {/* Hero */}
        <section className="pt-32 pb-16 text-center">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 rounded text-xs uppercase tracking-[0.2em] mb-6 font-mono text-accent"
              style={{
                background: 'rgba(232,148,76,0.1)',
                border: '1px solid rgba(232,148,76,0.15)',
              }}
            >
              ABOUT
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl text-text-primary"
            >
              兩個人，一套系統。
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-secondary text-lg max-w-2xl mx-auto mt-6"
            >
              NikaTech 不是一間大公司。但我們的系統，能做到一整個行銷部門的事。
            </motion.p>

            {/* Hero image */}
            <div className="relative mt-12 max-w-3xl mx-auto rounded-2xl overflow-hidden border border-white/[0.06]">
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/50 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="NikaTech team"
                className="w-full h-64 md:h-80 object-cover opacity-50"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-[var(--section-gap)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="grid md:grid-cols-2 gap-[var(--grid-gap)]">

              {/* Card 1 - 均谷 */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="card-tilt bg-bg-secondary rounded-2xl border border-white/[0.06] p-8 md:p-10 hover:border-accent/20 transition-colors duration-500"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[rgba(232,148,76,0.3)] to-[rgba(232,148,76,0.05)] flex items-center justify-center mb-6 border border-[rgba(232,148,76,0.2)]">
                  <Compass className="w-8 h-8 text-accent" strokeWidth={1.5} />
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4 block">
                  產業策略
                </span>
                <h3 className="font-display text-2xl text-text-primary mb-4">均谷</h3>
                <p className="text-text-secondary leading-relaxed">
                  十年產業策略經驗，聊過上百個老闆。負責搞清楚你的產業——你的客人是誰、在哪裡、在找什麼。每個月跟你對目標、調策略。
                </p>
              </motion.div>

              {/* Card 2 - Aaron */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="card-tilt bg-bg-secondary rounded-2xl border border-white/[0.06] p-8 md:p-10 hover:border-accent/20 transition-colors duration-500"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[rgba(232,148,76,0.3)] to-[rgba(232,148,76,0.05)] flex items-center justify-center mb-6 border border-[rgba(232,148,76,0.2)]">
                  <Terminal className="w-8 h-8 text-accent" strokeWidth={1.5} />
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4 block">
                  AI 工程
                </span>
                <h3 className="font-display text-2xl text-text-primary mb-4">Aaron</h3>
                <p className="text-text-secondary leading-relaxed">
                  工程師背景，物流業出身。負責把策略變成系統——關鍵字研究、文章生成、自動發佈、數據追蹤，全部自動化。重複的事情，就該讓機器做。
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Brand Story */}
        <section className="py-[var(--section-gap)]">
          <div className="max-w-3xl mx-auto px-[var(--container-padding)]">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 rounded text-xs uppercase tracking-[0.2em] mb-6 font-mono text-accent"
              style={{
                background: 'rgba(232,148,76,0.1)',
                border: '1px solid rgba(232,148,76,0.15)',
              }}
            >
              ORIGIN
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-3xl text-text-primary mb-6"
            >
              為什麼叫 NikaTech？
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-text-secondary max-w-3xl"
            >
              <p>Nika 是《海賊王》裡的太陽神，代表解放。</p>
              <p>我們想做的事很簡單：讓你不用再一個人扛所有行銷的事。</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <div
                className="h-px w-full"
                style={{ background: 'linear-gradient(to right, #E8944C, transparent)' }}
              />
              <p className="text-right mt-3 font-mono text-text-tertiary text-sm">est. 2024</p>
            </motion.div>
          </div>
        </section>

        {/* Principles */}
        <section className="py-[var(--section-gap)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 rounded text-xs uppercase tracking-[0.2em] mb-6 font-mono text-accent"
              style={{
                background: 'rgba(232,148,76,0.1)',
                border: '1px solid rgba(232,148,76,0.15)',
              }}
            >
              PRINCIPLES
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-3xl text-text-primary mb-10"
            >
              我們的三個原則
            </motion.h2>

            <div className="flex flex-col gap-4">
              {[
                {
                  num: '01',
                  title: '先評估，再合作',
                  desc: '不盲目簽約。先看報告、看數據，確定有機會再開始。',
                },
                {
                  num: '02',
                  title: '每月對齊目標',
                  desc: '不是做完就消失。每月看成效、調策略，確保方向正確。',
                },
                {
                  num: '03',
                  title: '不綁約',
                  desc: '每月看成效決定。做得好你自然會續，做不好不該綁住你。',
                },
              ].map((p, i) => (
                <motion.div
                  key={p.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="card-tilt relative overflow-hidden bg-bg-secondary rounded-xl border border-white/[0.06] p-8 hover:border-accent/20 transition-colors duration-500"
                >
                  <span className="absolute right-8 top-1/2 -translate-y-1/2 text-[8rem] font-display text-white/[0.03] leading-none select-none pointer-events-none">
                    {p.num}
                  </span>
                  <div className="relative">
                    <h3 className="font-display text-xl text-text-primary mb-2">{p.title}</h3>
                    <p className="text-text-secondary">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-[var(--section-gap)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] text-center">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-2xl text-text-primary mb-4"
            >
              想聊聊？
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-text-secondary mb-10"
            >
              免費評估你的網站，看看我們能幫上什麼。
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-sm font-medium no-underline transition-all duration-300 hover:-translate-y-px"
                style={{
                  background: '#E8944C',
                  color: '#0C0C0E',
                  fontFamily: 'var(--font-body)',
                }}
              >
                免費評估
              </Link>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-sm font-medium no-underline transition-all duration-300 hover:-translate-y-px"
                style={{
                  background: '#06C755',
                  color: '#fff',
                  fontFamily: 'var(--font-body)',
                }}
              >
                <MessageCircle size={16} strokeWidth={1.5} />
                加 LINE 聊聊
              </a>
            </motion.div>
          </div>
        </section>

      </main>
      <FooterSection />
    </>
  );
}

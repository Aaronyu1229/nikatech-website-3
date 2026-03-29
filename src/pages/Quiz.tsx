import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, RotateCcw, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import {
  industryOptions,
  painOptions,
  timelineOptions,
  getRecommendation,
} from '@/data/quizData';

const LINE_URL = 'https://line.me/ti/p/nikatech';

const slideVariants = {
  enter: { opacity: 0, x: 20 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [industry, setIndustry] = useState<string | null>(null);
  const [otherIndustry, setOtherIndustry] = useState('');
  const [selectedPains, setSelectedPains] = useState<string[]>([]);
  const [timeline, setTimeline] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  const pickIndustry = (id: string) => {
    setIndustry(id);
    if (id !== 'other') {
      setStep(1);
    }
  };

  const confirmOtherIndustry = () => {
    if (otherIndustry.trim()) {
      setStep(1);
    }
  };

  const togglePain = (id: string) => {
    setSelectedPains((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const confirmPains = () => {
    if (selectedPains.length > 0) {
      setStep(2);
    }
  };

  const pickTimeline = (id: string) => {
    setTimeline(id);
    setStep(3);
  };

  const restart = () => {
    setStep(0);
    setIndustry(null);
    setOtherIndustry('');
    setSelectedPains([]);
    setTimeline(null);
  };

  const recommendation = getRecommendation(selectedPains);
  const totalSteps = 3;

  return (
    <>
      <Navbar />
      <main className="bg-bg-primary min-h-screen pt-32">
        <div className="max-w-2xl mx-auto px-[var(--container-padding)] pb-20">

          {/* Step indicator */}
          {step < 3 && (
            <div className="flex items-center gap-2 mb-12">
              <div className="flex gap-2 flex-1">
                {Array.from({ length: totalSteps }).map((_, i) => (
                  <div
                    key={i}
                    className="h-1 flex-1 rounded-full transition-all duration-500"
                    style={{
                      background:
                        i <= step
                          ? '#E8944C'
                          : 'rgba(255,255,255,0.1)',
                    }}
                  />
                ))}
              </div>
              <span className="font-mono text-text-tertiary text-sm ml-3">
                {step + 1}/{totalSteps}
              </span>
            </div>
          )}

          <AnimatePresence mode="wait">

            {/* Q1: Industry */}
            {step === 0 && (
              <motion.div
                key="q1"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <h2 className="font-display text-2xl md:text-3xl text-text-primary text-center mb-8">
                  你是做什麼的？
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {industryOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => pickIndustry(opt.id)}
                      className="bg-bg-secondary rounded-xl border border-white/[0.06] p-6 cursor-pointer text-left transition-colors duration-300 hover:border-accent"
                      style={{
                        ...(industry === opt.id
                          ? { borderColor: 'rgba(232,148,76,0.5)', background: 'rgba(232,148,76,0.08)' }
                          : {}),
                      }}
                    >
                      <opt.icon size={24} className="text-accent mb-4" strokeWidth={1.5} />
                      <span className="block text-text-primary text-sm font-medium">
                        {opt.label}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Other industry text input */}
                {industry === 'other' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-6"
                  >
                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={otherIndustry}
                        onChange={(e) => setOtherIndustry(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && confirmOtherIndustry()}
                        placeholder="你的行業是..."
                        className="flex-1 px-4 py-3 rounded-xl text-sm outline-none bg-bg-secondary border border-white/[0.06] text-text-primary font-body"
                        style={{ fontFamily: 'var(--font-body)' }}
                      />
                      <button
                        onClick={confirmOtherIndustry}
                        className="px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer"
                        style={{
                          background: otherIndustry.trim() ? '#E8944C' : 'rgba(232,148,76,0.2)',
                          color: '#0C0C0E',
                        }}
                      >
                        下一步
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* Q2: Pain points */}
            {step === 1 && (
              <motion.div
                key="q2"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="text-center mb-8">
                  <h2 className="font-display text-2xl md:text-3xl text-text-primary">
                    你現在最頭痛的是什麼？
                  </h2>
                  <p className="text-text-tertiary text-sm mt-3">可以選多個</p>
                </div>

                <div className="flex flex-col gap-3">
                  {painOptions.map((opt) => {
                    const selected = selectedPains.includes(opt.id);
                    return (
                      <button
                        key={opt.id}
                        onClick={() => togglePain(opt.id)}
                        className="flex items-center gap-4 bg-bg-secondary rounded-xl border p-5 cursor-pointer text-left transition-colors duration-300"
                        style={{
                          borderColor: selected
                            ? 'rgba(232,148,76,0.4)'
                            : 'rgba(255,255,255,0.06)',
                          background: selected ? 'rgba(232,148,76,0.08)' : undefined,
                        }}
                      >
                        <div
                          className="flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200"
                          style={{
                            background: selected ? '#E8944C' : 'transparent',
                            borderColor: selected ? '#E8944C' : 'rgba(255,255,255,0.2)',
                          }}
                        >
                          {selected && <Check size={12} strokeWidth={3} style={{ color: '#0C0C0E' }} />}
                        </div>
                        <span
                          className="text-sm"
                          style={{
                            color: selected ? '#F2EFE8' : '#9B978E',
                            fontFamily: 'var(--font-body)',
                          }}
                        >
                          {opt.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={confirmPains}
                  disabled={selectedPains.length === 0}
                  className="w-full mt-8 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                  style={{
                    background: selectedPains.length > 0 ? '#E8944C' : 'rgba(232,148,76,0.2)',
                    color: '#0C0C0E',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  下一步
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            )}

            {/* Q3: Timeline */}
            {step === 2 && (
              <motion.div
                key="q3"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <h2 className="font-display text-2xl md:text-3xl text-text-primary text-center mb-8">
                  你希望多快看到改變？
                </h2>

                <div className="flex flex-col gap-3">
                  {timelineOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => pickTimeline(opt.id)}
                      className="flex items-center gap-4 bg-bg-secondary rounded-xl border border-white/[0.06] p-5 cursor-pointer text-left transition-colors duration-300 hover:border-accent"
                    >
                      <div
                        className="flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                        style={{
                          borderColor: timeline === opt.id ? '#E8944C' : 'rgba(255,255,255,0.2)',
                          background: timeline === opt.id ? '#E8944C' : 'transparent',
                        }}
                      >
                        {timeline === opt.id && (
                          <div className="w-2 h-2 rounded-full bg-bg-primary" />
                        )}
                      </div>
                      <span className="text-sm text-text-primary" style={{ fontFamily: 'var(--font-body)' }}>
                        {opt.label}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Result */}
            {step === 3 && (
              <motion.div
                key="result"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-display text-2xl md:text-3xl text-text-primary text-center mb-10">
                  根據你的狀況，我們建議：
                </h2>

                {/* Recommended Plan Card */}
                <div
                  className="bg-bg-secondary rounded-2xl border p-8 mb-6"
                  style={{ borderColor: 'rgba(232,148,76,0.3)' }}
                >
                  <div className="mb-6">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                      推薦方案
                    </span>
                    <h3 className="font-display text-2xl text-accent mt-2">
                      {recommendation.tierName}
                    </h3>
                    <p className="text-text-secondary text-sm mt-1">
                      {recommendation.tierLabel}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {recommendation.features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + i * 0.06 }}
                        className="flex items-center gap-3"
                      >
                        <div
                          className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                          style={{ background: 'rgba(232,148,76,0.15)' }}
                        >
                          <Check size={12} strokeWidth={2.5} className="text-accent" />
                        </div>
                        <span className="text-sm text-text-primary">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Effect Estimates */}
                <div className="bg-bg-tertiary rounded-xl p-6 mb-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-text-secondary text-xs font-mono mb-1">3-6 個月後</p>
                      <p className="text-accent text-xl font-display">自然流量增加 200-500%</p>
                    </div>
                    <div>
                      <p className="text-text-secondary text-xs font-mono mb-1">每月</p>
                      <p className="text-accent text-xl font-display">省下約 40 小時人力</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Link
                      to="/pricing"
                      className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-medium no-underline transition-all duration-300 hover:-translate-y-px border border-white/[0.06] text-text-primary"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      看方案詳細內容
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-medium no-underline transition-all duration-300 hover:-translate-y-px"
                      style={{
                        background: '#E8944C',
                        color: '#0C0C0E',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      免費評估我的網站
                    </Link>
                  </div>
                  <a
                    href={LINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl text-base font-medium no-underline transition-all duration-300 hover:-translate-y-px"
                    style={{
                      background: '#06C755',
                      color: '#fff',
                      fontFamily: 'var(--font-body)',
                      boxShadow: '0 4px 20px rgba(6,199,85,0.25)',
                    }}
                  >
                    <MessageCircle size={18} strokeWidth={1.5} />
                    加 LINE 免費評估，我們算給你聽
                  </a>
                </div>

                {/* Restart */}
                <div className="text-center mt-8">
                  <button
                    onClick={restart}
                    className="inline-flex items-center gap-2 text-sm text-text-tertiary underline cursor-pointer transition-colors duration-300 hover:text-text-secondary"
                    style={{ background: 'none', border: 'none', fontFamily: 'var(--font-body)' }}
                  >
                    <RotateCcw size={14} />
                    重新測試
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </main>
      <FooterSection />
    </>
  );
}

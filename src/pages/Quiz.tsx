import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Check, ArrowRight, RotateCcw } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import {
  industryOptions,
  painOptions,
  timelineOptions,
  getRecommendations,
  type IndustryId,
  type TimelineId,
} from '@/data/quizData';

const LINE_URL = 'https://line.me/ti/p/nikatech';

const pageVariants = {
  enter: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [industry, setIndustry] = useState<IndustryId | null>(null);
  const [otherIndustry, setOtherIndustry] = useState('');
  const [selectedPains, setSelectedPains] = useState<string[]>([]);
  const [timeline, setTimeline] = useState<TimelineId | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  const pickIndustry = (id: IndustryId) => {
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

  const pickTimeline = (id: TimelineId) => {
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

  const recommendations = getRecommendations(selectedPains);
  const totalSteps = 3;

  return (
    <>
      <Navbar />
      <main className="pt-[72px] min-h-screen" style={{ background: '#0C0C0E' }}>
        <div className="max-w-[700px] mx-auto px-[clamp(1.5rem,4vw,4rem)] py-[clamp(4rem,8vh,6rem)]">

          {/* Progress indicator */}
          {step < 3 && (
            <div className="flex gap-2 mb-12 justify-center items-center">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <div
                  key={i}
                  className="h-1 rounded-full transition-all duration-500"
                  style={{
                    width: '60px',
                    background:
                      i < step
                        ? '#E8944C'
                        : i === step
                        ? 'rgba(232,148,76,0.5)'
                        : 'rgba(242,239,232,0.06)',
                  }}
                />
              ))}
              <span
                className="ml-3 text-xs"
                style={{ fontFamily: 'var(--font-mono)', color: '#5E5B55' }}
              >
                {step + 1}/{totalSteps}
              </span>
            </div>
          )}

          <AnimatePresence mode="wait">

            {/* Q1: Industry */}
            {step === 0 && (
              <motion.div
                key="q1"
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="text-center mb-10">
                  <h2
                    className="font-display"
                    style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#F2EFE8', fontWeight: 400 }}
                  >
                    你是做什麼的？
                  </h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {industryOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => pickIndustry(opt.id)}
                      className="p-6 rounded-xl text-left transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                      style={{
                        background: industry === opt.id ? 'rgba(232,148,76,0.08)' : '#141416',
                        border:
                          industry === opt.id
                            ? '1px solid rgba(232,148,76,0.3)'
                            : '1px solid rgba(242,239,232,0.06)',
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                        style={{
                          background: 'rgba(232,148,76,0.08)',
                          border: '1px solid rgba(232,148,76,0.15)',
                        }}
                      >
                        <opt.icon size={20} strokeWidth={1.5} style={{ color: '#E8944C' }} />
                      </div>
                      <span
                        className="text-sm font-medium"
                        style={{ color: '#F2EFE8', fontFamily: 'var(--font-body)' }}
                      >
                        {opt.label}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Text input for "other" */}
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
                        className="flex-1 px-4 py-3 rounded-xl text-sm outline-none"
                        style={{
                          background: '#141416',
                          border: '1px solid rgba(242,239,232,0.12)',
                          color: '#F2EFE8',
                          fontFamily: 'var(--font-body)',
                        }}
                      />
                      <button
                        onClick={confirmOtherIndustry}
                        className="px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:-translate-y-px cursor-pointer"
                        style={{
                          background: otherIndustry.trim() ? '#E8944C' : 'rgba(232,148,76,0.2)',
                          color: '#0C0C0E',
                          fontFamily: 'var(--font-body)',
                        }}
                      >
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* Q2: Pain points (multi-select) */}
            {step === 1 && (
              <motion.div
                key="q2"
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="text-center mb-10">
                  <h2
                    className="font-display"
                    style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#F2EFE8', fontWeight: 400 }}
                  >
                    你現在最頭痛的是什麼？
                  </h2>
                  <p className="mt-3 text-sm" style={{ color: '#5E5B55' }}>
                    可以選多個
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  {painOptions.map((opt) => {
                    const selected = selectedPains.includes(opt.id);
                    return (
                      <button
                        key={opt.id}
                        onClick={() => togglePain(opt.id)}
                        className="flex items-center gap-4 p-5 rounded-xl text-left transition-all duration-300 cursor-pointer"
                        style={{
                          background: selected ? 'rgba(232,148,76,0.08)' : '#141416',
                          border: selected
                            ? '1px solid rgba(232,148,76,0.3)'
                            : '1px solid rgba(242,239,232,0.06)',
                        }}
                      >
                        <div
                          className="flex-shrink-0 w-6 h-6 rounded flex items-center justify-center transition-all duration-200"
                          style={{
                            background: selected ? '#E8944C' : 'transparent',
                            border: selected
                              ? '1px solid #E8944C'
                              : '1px solid rgba(242,239,232,0.2)',
                          }}
                        >
                          {selected && <Check size={14} strokeWidth={2.5} style={{ color: '#0C0C0E' }} />}
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
                <div className="mt-8 text-center">
                  <button
                    onClick={confirmPains}
                    disabled={selectedPains.length === 0}
                    className="inline-flex items-center gap-2 px-8 py-[0.875rem] rounded text-[0.9375rem] font-medium transition-all duration-300 hover:-translate-y-px cursor-pointer"
                    style={{
                      background: selectedPains.length > 0 ? '#E8944C' : 'rgba(232,148,76,0.2)',
                      color: '#0C0C0E',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    下一步
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Q3: Timeline */}
            {step === 2 && (
              <motion.div
                key="q3"
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="text-center mb-10">
                  <h2
                    className="font-display"
                    style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#F2EFE8', fontWeight: 400 }}
                  >
                    你希望多快看到改變？
                  </h2>
                </div>
                <div className="flex flex-col gap-3 max-w-[500px] mx-auto">
                  {timelineOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => pickTimeline(opt.id)}
                      className="p-5 rounded-xl text-left transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                      style={{
                        background: '#141416',
                        border: '1px solid rgba(242,239,232,0.06)',
                        color: '#F2EFE8',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      <span className="text-sm">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Result */}
            {step === 3 && (
              <motion.div
                key="result"
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="text-center mb-10">
                  <span
                    className="inline-block px-3 py-1 rounded text-xs uppercase tracking-[0.05em] mb-4"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      color: '#E8944C',
                      background: 'rgba(232,148,76,0.15)',
                    }}
                  >
                    Your Plan
                  </span>
                  <h2
                    className="font-display mt-4"
                    style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#F2EFE8', fontWeight: 400 }}
                  >
                    根據你的狀況，我們建議：
                  </h2>
                </div>

                {/* Recommended items */}
                <div
                  className="rounded-xl p-8 mb-8"
                  style={{ background: '#141416', border: '1px solid rgba(242,239,232,0.06)' }}
                >
                  <div className="space-y-4">
                    {recommendations.map((item, i) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + i * 0.1 }}
                        className="flex items-start gap-4 p-4 rounded-lg"
                        style={{
                          background: 'rgba(232,148,76,0.05)',
                          border: '1px solid rgba(232,148,76,0.12)',
                        }}
                      >
                        <div
                          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5"
                          style={{ background: 'rgba(232,148,76,0.15)' }}
                        >
                          <Check size={14} strokeWidth={2.5} style={{ color: '#E8944C' }} />
                        </div>
                        <div>
                          <div className="text-sm font-medium" style={{ color: '#F2EFE8' }}>
                            {item.title}
                          </div>
                          <div className="text-xs mt-1" style={{ color: '#9B978E' }}>
                            {item.desc}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Effect estimates */}
                <div
                  className="rounded-xl p-6 mb-8"
                  style={{ background: '#141416', border: '1px solid rgba(242,239,232,0.06)' }}
                >
                  <h3
                    className="text-sm mb-4"
                    style={{ fontFamily: 'var(--font-mono)', color: '#E8944C' }}
                  >
                    預估效果
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: '#E8944C' }}
                      />
                      <span className="text-sm" style={{ color: '#F2EFE8' }}>
                        3 個月後，每月自然流量增加 200-500%
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: '#E8944C' }}
                      />
                      <span className="text-sm" style={{ color: '#F2EFE8' }}>
                        每月省下約 40 小時人力
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <a
                    href={LINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-10 py-4 rounded-xl text-base font-medium no-underline transition-all duration-300 hover:-translate-y-px"
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
                  <div className="mt-6">
                    <button
                      onClick={restart}
                      className="inline-flex items-center gap-2 text-sm transition-colors duration-300 cursor-pointer"
                      style={{
                        color: '#5E5B55',
                        background: 'none',
                        border: 'none',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      <RotateCcw size={14} />
                      重新測試
                    </button>
                  </div>
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

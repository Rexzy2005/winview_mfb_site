"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ReadMoreText = ({ text, maxLength = 250 }: { text: string, maxLength?: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = text.length > maxLength;

  return (
    <motion.div layout className="text-slate-600 font-light leading-relaxed flex flex-col items-start w-full">
      <motion.div layout className="relative overflow-hidden w-full">
        <AnimatePresence mode="wait" initial={false}>
          {(!isExpanded && shouldTruncate) ? (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(4px)" }}
              transition={{ duration: 0.25 }}
            >
              <span dangerouslySetInnerHTML={{ __html: text.slice(0, maxLength).replace(/\n\n/g, '<br/><br/>') + '...' }} />
            </motion.div>
          ) : (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(4px)" }}
              transition={{ duration: 0.35 }}
            >
              <span dangerouslySetInnerHTML={{ __html: text.replace(/\n\n/g, '<br/><br/>') }} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      {shouldTruncate && (
        <motion.button
          layout
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-5 text-[#72b90d] font-semibold text-sm hover:text-[#5a930a] transition-all flex items-center gap-1.5 group bg-[#72b90d]/10 hover:bg-[#72b90d]/20 px-4 py-2 rounded-full cursor-pointer border border-[#72b90d]/20"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 15 }}
            className="flex items-center"
          >
            <iconify-icon icon="solar:alt-arrow-down-linear" className="text-lg" />
          </motion.div>
        </motion.button>
      )}
    </motion.div>
  );
};

export default function Leadership() {
  const mdText = `At Winview Microfinance Bank, your money grows while you thrive. Earn up to 12% on savings, access quick loans from ₦10,000, all via our secure app—no queues, CBN-licensed protection. Join thousands building wealth today. Open your account now!`;

  const chairmanText = `Dear Friends and Future Partners,

At Winview Microfinance Bank, we don't just manage money, we empower dreams. Over the years, we've stood as your trusted partner in Abuja and across Nigeria, turning small savings into big opportunities for families, entrepreneurs, and businesses like yours.

Imagine opening an account today and watching your funds grow with our competitive interest rates on savings and tailored loans, with flexible repayment. Whether you're a trader scaling your market stall, a farmer investing in better yields, or a professional building wealth, our digital app lets you deposit, withdraw, and track your progress anytime, anywhere—no long queues, no hassle.

We're licensed by the CBN, backed by robust security, and committed to your success: last year alone, we disbursed over ₦500 million in loans that created 2,000+ jobs in our communities. Your money is safe, your growth is our priority, and your future starts here.`;

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#72b90d]/5 rounded-full blur-[120px] pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-[#72b90d]/5 rounded-full blur-[150px] pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f0f7e8] border border-[#c1e6a1] text-[#2a650a] text-sm font-semibold uppercase tracking-wider mb-6">
            <iconify-icon icon="solar:users-group-two-bold"></iconify-icon>
            Our Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Meet the Visionaries Leading Winview
          </h2>
        </div>

        <div className="space-y-20 md:space-y-32">
          {/* Managing Director */}
          <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="w-full lg:w-5/12 max-w-sm lg:max-w-none mx-auto"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#72b90d] to-[#2a650a] rounded-[2rem] sm:rounded-[2.5rem] transform translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 group-hover:translate-x-5 group-hover:translate-y-5 sm:group-hover:translate-x-6 sm:group-hover:translate-y-6 transition-transform duration-500 opacity-20"></div>
                <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-slate-100 aspect-[4/5] shadow-2xl border-4 border-white transform group-hover:-translate-y-2 transition-transform duration-500">
                  <img
                    src="/md_photo.png"
                    alt="Managing Director, Winview MFB"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                    <div className="w-10 sm:w-12 h-1 bg-[#72b90d] rounded-full mb-3 sm:mb-4"></div>
                    <p className="text-white/80 text-xs sm:text-sm font-medium uppercase tracking-wider mb-1">
                      Managing Director
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      The Managing Director
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
              className="w-full lg:w-7/12 flex flex-col justify-center text-center lg:text-left"
            >
              <div className="flex justify-center lg:justify-start">
                <iconify-icon icon="solar:quote-right-bold" className="text-5xl sm:text-6xl text-[#72b90d]/20 mb-4 sm:mb-6 lg:-ml-2"></iconify-icon>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
                The Managing Director, Winview Microfinance Bank, Abuja
              </h3>
              <div className="prose prose-base sm:prose-lg prose-slate text-slate-600 prose-p:leading-relaxed w-full">
                <ReadMoreText text={mdText} maxLength={180} />
              </div>
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-200">
                <p className="font-semibold text-slate-900 text-base sm:text-lg">Managing Director</p>
                <p className="text-xs sm:text-sm font-medium text-[#72b90d]">Winview MFB</p>
              </div>
            </motion.div>
          </div>

          {/* Chairman */}
          <div className="flex flex-col lg:flex-row-reverse gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="w-full lg:w-5/12 max-w-sm lg:max-w-none mx-auto"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tl from-[#72b90d] to-[#2a650a] rounded-[2rem] sm:rounded-[2.5rem] transform -translate-x-3 translate-y-3 sm:-translate-x-4 sm:translate-y-4 group-hover:-translate-x-5 group-hover:translate-y-5 sm:group-hover:-translate-x-6 sm:group-hover:translate-y-6 transition-transform duration-500 opacity-20"></div>
                <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-slate-100 aspect-[4/5] shadow-2xl border-4 border-white transform group-hover:-translate-y-2 transition-transform duration-500">
                  <img
                    src="/chairman.png"
                    alt="Chairman, Winview MFB"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                    <div className="w-10 sm:w-12 h-1 bg-[#72b90d] rounded-full mb-3 sm:mb-4"></div>
                    <p className="text-white/80 text-xs sm:text-sm font-medium uppercase tracking-wider mb-1">
                      Chairman
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      The Chairman
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
              className="w-full lg:w-7/12 flex flex-col justify-center text-center lg:text-left"
            >
              <div className="flex justify-center lg:justify-start">
                <iconify-icon icon="solar:quote-left-bold" className="text-5xl sm:text-6xl text-[#72b90d]/20 mb-4 sm:mb-6 lg:-ml-2"></iconify-icon>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
                A Message from Our Chairman
              </h3>
              <div className="prose prose-base sm:prose-lg prose-slate text-slate-600 prose-p:leading-relaxed w-full">
                <ReadMoreText text={chairmanText} maxLength={280} />
              </div>
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-200">
                <p className="font-semibold text-slate-900 text-base sm:text-lg">The Chairman</p>
                <p className="text-xs sm:text-sm font-medium text-[#72b90d]">Winview MFB</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const FallbackImage = ({ src, className, alt }: { src: string, className?: string, alt?: string }) => {
    const [error, setError] = useState(false);
    
    if (error || !src) {
        return (
            <div className={`flex items-center justify-center bg-slate-200 text-slate-400 ${className}`}>
                <iconify-icon icon="solar:user-bold" className="text-xl"></iconify-icon>
            </div>
        );
    }
    
    return <img src={src} className={className} alt={alt || "User"} onError={() => setError(true)} />;
};

const PhoneMockupUI = () => {
    const [balanceVisible, setBalanceVisible] = useState(false);
    const [activeModal, setActiveModal] = useState("none");
    const [cursor, setCursor] = useState({ x: 130, y: 400, scale: 1, opacity: 0 });

    useEffect(() => {
        let isMounted = true;
        const delay = (ms: number) => new Promise(r => setTimeout(r, ms));

        const moveCursor = async (x: number, y: number, opacity: number = 1) => {
            if (!isMounted) return;
            setCursor(prev => ({ ...prev, x, y, opacity }));
            await delay(800); // wait for move animation
        };

        const clickCursor = async () => {
            if (!isMounted) return;
            setCursor(prev => ({ ...prev, scale: 0.7 }));
            await delay(200);
            setCursor(prev => ({ ...prev, scale: 1 }));
            await delay(200);
        };

        const sequence = async () => {
            while (isMounted) {
                // Initial wait, hidden cursor
                await delay(1000);
                if (!isMounted) break;

                // Move to balance eye icon
                await moveCursor(220, 105, 1);
                await clickCursor();
                if (!isMounted) break;
                setBalanceVisible(true);
                await delay(1500);
                
                // Move to Transfer (Send Money)
                await moveCursor(38, 230, 1);
                await clickCursor();
                if (!isMounted) break;
                setActiveModal("transfer");
                await delay(2500);
                setActiveModal("none");
                await delay(800);

                // Move to Airtime/Bills
                await moveCursor(98, 230, 1);
                await clickCursor();
                if (!isMounted) break;
                setActiveModal("airtime");
                await delay(2500);
                setActiveModal("none");
                await delay(800);

                // Move to Quick Loan
                await moveCursor(218, 230, 1);
                await clickCursor();
                if (!isMounted) break;
                setActiveModal("loan");
                await delay(3000);
                setActiveModal("none");
                await delay(800);
                
                // Reset for next loop
                if (!isMounted) break;
                setBalanceVisible(false);
                await moveCursor(130, 400, 0);
                await delay(1000);
            }
        };
        sequence();
        return () => { isMounted = false; };
    }, []);

    return (
        <div 
            className="w-full h-full p-3 sm:p-5 pt-10 sm:pt-14 flex flex-col relative overflow-hidden bg-[#f9f6f6] rounded-[2rem] sm:rounded-[2.5rem]"
            style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
        >
            
            {/* The synchronized animated touch cursor */}
            <motion.div 
                className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-white/40 border-[1.5px] border-white/80 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.1)] z-[100] backdrop-blur-sm pointer-events-none origin-center"
                animate={{
                    x: cursor.x,
                    y: cursor.y,
                    scale: cursor.scale,
                    opacity: cursor.opacity
                }}
                transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                    mass: 0.8
                }}
                initial={{ x: 130, y: 400, opacity: 0, scale: 1 }}
                style={{ top: 0, left: 0 }}
            />

            {/* Inner scroll motion wrapper */}
            <motion.div 
                className="flex flex-col w-full h-full"
                animate={{ y: activeModal === "none" ? 0 : -60 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
                {/* Header */}
                <div className="flex justify-between items-center mb-4 shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-200 overflow-hidden shadow-sm border border-slate-200">
                      <FallbackImage src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=200&h=200&fit=crop&q=80" className="w-full h-full object-cover" alt="User User" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] sm:text-[10px] text-slate-500 font-medium">Good morning</span>
                      <span className="text-[11px] sm:text-xs font-semibold text-[#000000]">Chinedu</span>
                    </div>
                  </div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100">
                    <iconify-icon icon="solar:bell-linear" className="text-sm sm:text-base text-slate-600"></iconify-icon>
                  </div>
                </div>

                {/* Balance Card */}
                <div className="bg-[#000000] rounded-[1.25rem] p-4 sm:p-5 shadow-xl mb-4 relative overflow-hidden shrink-0">
                  <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[100%] bg-[#2a650a] rounded-full blur-[30px] opacity-60"></div>
                  <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[80%] bg-[#72b90d] rounded-full blur-[30px] opacity-30"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-[8px] sm:text-[9px] font-medium text-[#f9f6f6]/70 uppercase tracking-widest">Available Balance</div>
                      <motion.div 
                        animate={{ rotate: balanceVisible ? 180 : 0, scale: balanceVisible ? 1.1 : 1 }}
                        className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm shadow-inner"
                      >
                        <iconify-icon icon={balanceVisible ? "solar:eye-bold" : "solar:eye-closed-bold"} className="text-[10px] sm:text-xs text-[#f9f6f6]"></iconify-icon>
                      </motion.div>
                    </div>
                    <div className="flex items-end gap-2 mb-3">
                      <motion.span 
                        animate={{ filter: balanceVisible ? "blur(0px)" : "blur(6px)" }}
                        className="text-xl sm:text-2xl font-bold text-[#f9f6f6] tracking-tight leading-none"
                      >
                        ₦1,850,000.00
                      </motion.span>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-[#72b90d] hover:bg-[#62a00b] text-white text-[9px] sm:text-[10px] font-semibold flex items-center justify-center gap-1 py-1.5 sm:py-2 rounded-xl transition-all shadow-[0_4px_12px_rgba(114,185,13,0.3)]">
                        <iconify-icon icon="solar:add-circle-bold" /> Add Money
                      </button>
                      <motion.button 
                        animate={{ scale: activeModal === "transfer" ? 0.95 : 1 }}
                        className="flex-1 bg-white/10 hover:bg-white/20 text-[#f9f6f6] text-[9px] sm:text-[10px] flex items-center justify-center gap-1 font-semibold py-1.5 sm:py-2 rounded-xl backdrop-blur-sm transition-all"
                      >
                        <iconify-icon icon="solar:money-bag-bold" /> Transfer
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mb-4 shrink-0 px-1">
                  <motion.div animate={{ scale: activeModal === "transfer" ? 0.9 : 1 }} className="flex flex-col items-center gap-1 group cursor-pointer">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-[0.8rem] shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-slate-50 flex items-center justify-center">
                      <iconify-icon icon="solar:transfer-horizontal-linear" className="text-xl text-[#000000]"></iconify-icon>
                    </div>
                    <span className="text-[8px] sm:text-[9px] font-medium text-slate-600">Transfer</span>
                  </motion.div>
                  <motion.div animate={{ scale: activeModal === "airtime" ? 0.9 : 1 }} className="flex flex-col items-center gap-1 group cursor-pointer">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-[0.8rem] shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-slate-50 flex items-center justify-center">
                      <iconify-icon icon="solar:phone-calling-linear" className="text-xl text-[#000000]"></iconify-icon>
                    </div>
                    <span className="text-[8px] sm:text-[9px] font-medium text-slate-600">Airtime</span>
                  </motion.div>
                  <motion.div animate={{ scale: activeModal === "airtime" ? 0.95 : 1 }} className="flex flex-col items-center gap-1 group cursor-pointer">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-[0.8rem] shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-slate-50 flex items-center justify-center">
                      <iconify-icon icon="solar:lightbulb-bolt-linear" className="text-xl text-[#000000]"></iconify-icon>
                    </div>
                    <span className="text-[8px] sm:text-[9px] font-medium text-slate-600">Pay Bills</span>
                  </motion.div>
                  <motion.div animate={{ scale: activeModal === "loan" ? 0.9 : 1 }} className="flex flex-col items-center gap-1 group cursor-pointer">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-[0.8rem] shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-slate-50 flex items-center justify-center">
                      <iconify-icon icon="solar:hand-money-linear" className="text-xl text-[#000000]"></iconify-icon>
                    </div>
                    <span className="text-[8px] sm:text-[9px] font-medium text-slate-600">Loans</span>
                  </motion.div>
                </div>

                {/* Transactions */}
                <div className="flex-1 flex flex-col shrink-0 px-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-[11px] sm:text-xs font-bold text-slate-800">Recent Transactions</h3>
                    <span className="text-[8px] sm:text-[9px] text-[#72b90d] font-semibold">See all</span>
                  </div>
                  
                  <div className="flex flex-col gap-1.5 overflow-hidden pb-10">
                    <div className="bg-white p-2.5 rounded-xl shadow-[0_2px_6px_-2px_rgba(0,0,0,0.03)] border border-slate-50 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                          <iconify-icon icon="solar:shop-linear" className="text-base text-red-500"></iconify-icon>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[9px] sm:text-[10px] font-bold text-slate-800">Shoprite Ikeja</span>
                          <span className="text-[7px] sm:text-[8px] text-slate-500">Today, 14:30</span>
                        </div>
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-bold text-slate-800">-₦15,400.00</span>
                    </div>

                    <div className="bg-white p-2.5 rounded-xl shadow-[0_2px_6px_-2px_rgba(0,0,0,0.03)] border border-slate-50 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                          <iconify-icon icon="solar:wallet-money-linear" className="text-base text-green-600"></iconify-icon>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[9px] sm:text-[10px] font-bold text-slate-800">Salary Deposit</span>
                          <span className="text-[7px] sm:text-[8px] text-slate-500">Yesterday, 09:00</span>
                        </div>
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-bold text-green-600">+₦450,000.00</span>
                    </div>
                    
                    <div className="bg-white p-2.5 rounded-xl shadow-[0_2px_6px_-2px_rgba(0,0,0,0.03)] border border-slate-50 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                          <iconify-icon icon="solar:phone-calling-linear" className="text-base text-blue-500"></iconify-icon>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[9px] sm:text-[10px] font-bold text-slate-800">MTN Airtime</span>
                          <span className="text-[7px] sm:text-[8px] text-slate-500">Yesterday, 18:45</span>
                        </div>
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-bold text-slate-800">-₦2,000.00</span>
                    </div>
                  </div>
                </div>
            </motion.div>

            {/* Overlapping Bottom Nav */}
            <div className="absolute bottom-0 left-0 right-0 h-10 sm:h-12 bg-gradient-to-t from-white via-[#f9f6f6]/95 to-transparent z-40 flex items-end justify-center pb-2">
              <div className="w-[85%] bg-white border border-slate-100 shadow-[0_-2px_15px_rgba(0,0,0,0.05)] rounded-full h-10 sm:h-12 flex justify-around items-center px-3 mb-1">
                <div className="flex flex-col items-center gap-[1px] text-[#2a650a]">
                  <iconify-icon icon="solar:home-2-bold" className="text-lg sm:text-xl"></iconify-icon>
                  <div className="w-1 h-1 bg-[#2a650a] rounded-full"></div>
                </div>
                <iconify-icon icon="solar:card-linear" className="text-sm sm:text-base text-slate-400"></iconify-icon>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#000000] flex items-center justify-center -translate-y-3 sm:-translate-y-4 shadow-lg border-[3px] border-[#f9f6f6]">
                  <iconify-icon icon="solar:qr-code-linear" className="text-lg text-[#f9f6f6]"></iconify-icon>
                </div>
                <iconify-icon icon="solar:chart-square-linear" className="text-sm sm:text-base text-slate-400"></iconify-icon>
                <iconify-icon icon="solar:user-linear" className="text-sm sm:text-base text-slate-400"></iconify-icon>
              </div>
            </div>

            {/* Modals for App Features flow */}
            <AnimatePresence>
                {/* Transfer Modal */}
                {activeModal === "transfer" && (
                    <motion.div 
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="absolute bottom-0 left-0 right-0 h-[60%] sm:h-[65%] bg-white rounded-t-[1.5rem] sm:rounded-t-[2rem] z-[80] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] border-t border-slate-200 flex flex-col p-4"
                    >
                        <div className="w-8 h-1 bg-slate-200 rounded-full mx-auto mb-3"></div>
                        <h4 className="text-[11px] sm:text-xs font-bold text-center text-slate-800 mb-3">Instant Transfer</h4>
                        
                        {/* Nigerian faces verified source */}
                        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2 mb-3">
                            <div className="flex flex-col items-center gap-1 shrink-0">
                                <div className="w-10 h-10 rounded-full border-2 border-[#72b90d] p-0.5">
                                    <FallbackImage src="https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?w=150&h=150&fit=crop&q=80" className="w-full h-full rounded-full object-cover" />
                                </div>
                                <span className="text-[8px] sm:text-[9px] font-medium text-slate-600">Amaka</span>
                            </div>
                            <div className="flex flex-col items-center gap-1 shrink-0">
                                <div className="w-10 h-10 rounded-full border-2 border-slate-200 p-0.5">
                                    <FallbackImage src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=150&h=150&fit=crop&q=80" className="w-full h-full rounded-full object-cover" />
                                </div>
                                <span className="text-[8px] sm:text-[9px] font-medium text-slate-600">Tunde</span>
                            </div>
                            <div className="flex flex-col items-center gap-1 shrink-0">
                                <div className="w-10 h-10 rounded-full border-2 border-[#72b90d] p-0.5">
                                    <FallbackImage src="https://images.unsplash.com/photo-1507038749870-74e2d334581f?w=150&h=150&fit=crop&q=80" className="w-full h-full rounded-full object-cover" />
                                </div>
                                <span className="text-[8px] sm:text-[9px] font-medium text-slate-600">Emeka</span>
                            </div>
                        </div>
                        
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center justify-between mt-auto mb-2">
                           <span className="text-[9px] sm:text-[10px] text-slate-500 font-medium flex items-center gap-2"><iconify-icon icon="solar:banknotes-linear" className="text-[#72b90d] text-sm"/> Send to Bank Account</span>
                           <iconify-icon icon="solar:alt-arrow-right-linear" className="text-slate-400" />
                        </div>
                    </motion.div>
                )}

                {/* Airtime & Bills Modal */}
                {activeModal === "airtime" && (
                    <motion.div 
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="absolute bottom-0 left-0 right-0 h-[50%] sm:h-[55%] bg-[#000000] rounded-t-[1.5rem] sm:rounded-t-[2rem] z-[80] shadow-[0_-10px_40px_rgba(0,0,0,0.3)] flex flex-col p-4 relative overflow-hidden"
                    >
                        <div className="absolute top-[-50%] right-[-20%] w-[100%] h-[150%] bg-[#72b90d] rounded-full blur-[80px] opacity-20"></div>
                        <div className="w-8 h-1 bg-white/20 rounded-full mx-auto mb-4 relative z-10"></div>
                        <h4 className="text-[11px] sm:text-xs font-bold text-center text-white mb-4 relative z-10">Pay Bills & Airtime</h4>
                        
                        <div className="grid grid-cols-2 gap-2 relative z-10">
                            <div className="bg-white/10 border border-white/5 backdrop-blur-md p-3 rounded-xl flex flex-col gap-1 items-start">
                              <iconify-icon icon="solar:phone-calling-bold" className="text-yellow-400 text-xl"></iconify-icon>
                              <div className="flex flex-col mt-1">
                                <span className="text-[9px] sm:text-[10px] font-bold text-white">Buy Airtime & Data</span>
                                <span className="text-[7px] text-white/50">MTN, Airtel, Glo...</span>
                              </div>
                            </div>
                            <div className="bg-white/10 border border-white/5 backdrop-blur-md p-3 rounded-xl flex flex-col gap-1 items-start">
                              <iconify-icon icon="solar:lightbulb-bolt-bold" className="text-blue-400 text-xl"></iconify-icon>
                              <div className="flex flex-col mt-1">
                                <span className="text-[9px] sm:text-[10px] font-bold text-white">Electricity</span>
                                <span className="text-[7px] text-white/50">IKEDC, EKEDC...</span>
                              </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Loans Modal */}
                {activeModal === "loan" && (
                    <motion.div 
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="absolute bottom-0 left-0 right-0 h-[60%] sm:h-[65%] bg-white rounded-t-[1.5rem] sm:rounded-t-[2rem] z-[80] shadow-[0_-10px_40px_rgba(0,0,0,0.15)] flex flex-col p-4 border-t-2 border-[#72b90d]"
                    >
                        <div className="w-8 h-1 bg-slate-200 rounded-full mx-auto mb-3"></div>
                        <div className="flex flex-col items-center justify-center mb-3">
                           <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-2 text-[#72b90d] text-2xl">
                             <iconify-icon icon="solar:money-bag-bold-duotone" />
                           </div>
                           <h4 className="text-[12px] sm:text-xs font-bold text-slate-800">Quick Loans</h4>
                           <span className="text-[9px] sm:text-[10px] text-slate-500">Get instant access to funds</span>
                        </div>
                        
                        <div className="bg-[#f0f7e8] p-4 rounded-xl border border-[#c1e6a1] flex flex-col items-center justify-center mt-auto mb-2 text-center">
                           <span className="text-[8px] sm:text-[9px] text-[#2a650a] font-medium uppercase min-w-full tracking-wider mb-1">Eligible Amount</span>
                           <span className="text-xl sm:text-2xl font-bold text-[#000000]">₦1,500,000.00</span>
                           <button className="w-full mt-3 bg-[#000000] text-white text-[10px] sm:text-[11px] font-bold py-2 rounded-lg">Apply Now</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PhoneMockupUI;

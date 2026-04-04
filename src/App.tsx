/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import LogoImage from '../logo.jpeg';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Star, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  Send,
  Award,
  Twitter,
  Instagram,
  Trophy,
  Activity
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  ResponsiveContainer,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const TELEGRAM_LINK = "https://t.me/+TL-6ctK1M3U3MTM1";
const LOGO_IMAGE = LogoImage; 

const BAR_DATA = [
  { value: 40 },
  { value: 60 },
  { value: 80 },
  { value: 100 },
  { value: 70 },
];

const INITIAL_PROFIT_DATA = [
  { time: '10:00', profit: 1200 },
  { time: '10:05', profit: 1800 },
  { time: '10:10', profit: 1500 },
  { time: '10:15', profit: 2400 },
  { time: '10:20', profit: 2100 },
  { time: '10:25', profit: 3200 },
  { time: '10:30', profit: 2800 },
];

export default function App() {
  const [profitData] = useState(INITIAL_PROFIT_DATA);

  return (
    <div className="h-screen bg-[#020617] text-slate-200 selection:bg-[#10b981]/30 font-sans overflow-hidden relative">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="min-h-full max-w-lg mx-auto flex flex-col items-center justify-start p-4 py-8 md:p-8 gap-8 relative z-10 w-full">
        
        {/* Left Section: Profile & Identity */}
        <div className="flex flex-col items-center justify-center w-full space-y-4 md:space-y-6 flex-shrink-0">
          {/* Profile Image with Vibrant Ring */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative"
          >
            <div className="w-24 h-24 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-br from-[#10b981] to-[#0f766e] shadow-[0_0_40px_rgba(16,185,129,0.3)] flex items-center justify-center">
              <div className="w-[94%] h-[94%] rounded-full border-4 border-[#020617] overflow-hidden bg-black">
                <img 
                  src={LOGO_IMAGE} 
                  alt="CHHOTA RAJAN" 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <div className="absolute bottom-1 right-1 md:bottom-4 md:right-4 w-4 h-4 md:w-8 md:h-8 rounded-full bg-[#22c55e] border-4 border-[#020617] shadow-[0_0_15px_rgba(34,197,94,0.6)] animate-pulse" />
            </div>
          </motion.div>

          {/* Title & Subtitle */}
          <motion.div 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-center space-y-1.5 md:space-y-3"
          >
            <h1 className="text-2xl md:text-4xl font-black text-white tracking-tight uppercase flex items-center justify-center gap-2">
              <span className="text-xl md:text-3xl">🏏</span> CHHOTA RAJAN
            </h1>
            <div className="flex items-center justify-center gap-2 text-[#10b981] font-black text-[10px] md:text-sm uppercase tracking-[0.2em]">
              <Users size={14} className="md:w-5 md:h-5" />
              <span>30K+ Active Members</span>
            </div>
          </motion.div>

          {/* Pill Badges */}
          <motion.div 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex gap-2 md:gap-4"
          >
            <div className="px-4 py-1.5 md:px-8 md:py-3 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 text-[10px] md:text-sm font-black text-white flex items-center gap-2 md:gap-3 shadow-lg backdrop-blur-sm">
              <Trophy size={14} className="md:w-5 md:h-5 text-amber-400" />
              Latest Updates
            </div>
            <div className="px-4 py-1.5 md:px-8 md:py-3 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 text-[10px] md:text-sm font-black text-white flex items-center gap-2 md:gap-3 shadow-lg backdrop-blur-sm">
              <Zap size={14} className="md:w-5 md:h-5 text-amber-300" />
              Live Action
            </div>
          </motion.div>
        </div>

        {/* Right Section: Stats & CTA */}
        <div className="w-full flex flex-col justify-start items-center space-y-6 md:space-y-8 overflow-visible">
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 w-full">
            {[
              { label: "Match Schedule", value: "54,210" },
              { label: "Win Rate", value: "91%" },
              { label: "Rating", value: "4.7★" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="bg-[#1e293b]/40 border border-white/5 rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center text-center shadow-xl backdrop-blur-md group hover:border-[#10b981]/30 transition-colors"
              >
                <span className="text-xl md:text-3xl font-black text-white mb-1 tracking-tighter">{stat.value}</span>
                <span className="text-[9px] md:text-xs font-bold text-[#64748b] leading-tight uppercase tracking-wider">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Telegram CTA */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="w-full px-2 md:px-0"
          >
            <motion.a 
              href={TELEGRAM_LINK}
              className="w-full bg-gradient-to-r from-[#10b981] to-[#0f766e] text-white py-5 md:py-9 rounded-xl md:rounded-3xl font-black text-sm md:text-2xl shadow-[0_10px_40px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 md:gap-4 transition-all active:scale-[0.98] group relative overflow-hidden"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <Send size={18} className="md:w-8 md:h-8 fill-white" />
              Join Telegram Channel
            </motion.a>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="w-full bg-[#1e293b]/40 border border-white/5 rounded-xl md:rounded-2xl p-6 py-8 shadow-xl backdrop-blur-md"
          >
            <div className="grid grid-cols-4 gap-2 md:gap-4">
              {[
                { icon: CheckCircle2, label: "Verified", color: "text-slate-300" },
                { icon: ShieldCheck, label: "Secure", color: "text-slate-300" },
                { icon: TrendingUp, label: "Profitable", color: "text-[#10b981]" },
                { icon: Star, label: "Top Rated", color: "text-slate-300" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center space-y-2.5">
                  <item.icon size={26} className={cn("md:w-8 md:h-8", item.color)} strokeWidth={1.5} />
                  <span className="text-[10px] md:text-xs font-medium text-[#94a3b8] capitalize">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center justify-center gap-3 pt-6 w-full"
          >
            <p className="text-[#64748b] text-[10px] md:text-xs font-medium tracking-wide">
              © 2026 CHHOTA RAJAN. All rights reserved.
            </p>
            <p className="text-[#94a3b8] text-[10px] md:text-xs font-medium flex items-center gap-2">
              <span>🏏</span> Professional Cricket Analysis
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
}


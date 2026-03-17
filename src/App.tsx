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

const TELEGRAM_LINK = "https://t.me/+cx7L-14G2OdiYTJl";
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
    <div className="h-screen bg-[#020617] text-slate-200 selection:bg-[#5d5fef]/30 font-sans overflow-hidden relative">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="h-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center p-4 md:p-8 gap-6 md:gap-12 relative z-10">
        
        {/* Left Section: Profile & Identity */}
        <div className="flex flex-col items-center md:items-start justify-center md:w-2/5 space-y-4 md:space-y-8 flex-shrink-0">
          {/* Profile Image with Vibrant Ring */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative"
          >
            <div className="w-24 h-24 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-br from-[#5d5fef] to-[#312e81] shadow-[0_0_40px_rgba(93,95,239,0.3)] flex items-center justify-center">
              <div className="w-[94%] h-[94%] rounded-full border-4 border-[#020617] overflow-hidden bg-black">
                <img 
                  src={LOGO_IMAGE} 
                  alt="Ankit Rao Sahab" 
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
            className="text-center md:text-left space-y-1 md:space-y-3"
          >
            <h1 className="text-2xl md:text-5xl font-black text-white tracking-tight uppercase flex items-center justify-center md:justify-start gap-2">
              <span className="text-xl md:text-4xl">🏏</span> Ankit Rao Sahab
            </h1>
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#5d5fef] font-black text-[10px] md:text-sm uppercase tracking-[0.2em]">
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
            <div className="px-4 py-1.5 md:px-8 md:py-3 rounded-full bg-[#5d5fef]/10 border border-[#5d5fef]/30 text-[10px] md:text-sm font-black text-white flex items-center gap-2 md:gap-3 shadow-lg backdrop-blur-sm">
              <Trophy size={14} className="md:w-5 md:h-5 text-yellow-500" />
              Latest Updates
            </div>
            <div className="px-4 py-1.5 md:px-8 md:py-3 rounded-full bg-[#5d5fef]/10 border border-[#5d5fef]/30 text-[10px] md:text-sm font-black text-white flex items-center gap-2 md:gap-3 shadow-lg backdrop-blur-sm">
              <Zap size={14} className="md:w-5 md:h-5 text-yellow-400" />
              Live Action
            </div>
          </motion.div>
        </div>

        {/* Right Section: Stats & CTA */}
        <div className="flex-1 w-full flex flex-col justify-center space-y-4 md:space-y-8 overflow-hidden">
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-2 md:gap-6 w-full">
            {[
              { label: "Matches", value: "65K+" },
              { label: "Win Rate", value: "95%" },
              { label: "Rating", value: "4.9★" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="bg-[#1e293b]/40 border border-white/5 rounded-xl md:rounded-3xl p-3 md:p-8 flex flex-col items-center justify-center text-center aspect-square md:aspect-auto md:h-40 shadow-xl backdrop-blur-md group hover:border-[#5d5fef]/30 transition-colors"
              >
                <span className="text-2xl md:text-5xl font-black text-white mb-1 md:mb-2 tracking-tighter">{stat.value}</span>
                <span className="text-[10px] md:text-sm font-bold text-[#64748b] leading-tight uppercase tracking-widest">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Telegram CTA */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="w-full"
          >
            <a 
              href={TELEGRAM_LINK}
              className="w-full bg-gradient-to-r from-[#5d5fef] to-[#312e81] text-white py-4 md:py-8 rounded-xl md:rounded-3xl font-black text-sm md:text-2xl shadow-[0_10px_40px_rgba(93,95,239,0.3)] flex items-center justify-center gap-2 md:gap-4 transition-all active:scale-[0.98] group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <Send size={18} className="md:w-8 md:h-8 fill-white" />
              Join Telegram Channel
            </a>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="w-full bg-[#1e293b]/20 border border-white/5 rounded-xl md:rounded-3xl p-4 md:p-10 shadow-2xl backdrop-blur-sm"
          >
            <div className="grid grid-cols-4 gap-2 md:gap-8">
              {[
                { icon: CheckCircle2, label: "Verified", color: "text-[#22c55e]" },
                { icon: ShieldCheck, label: "Secure", color: "text-[#5d5fef]" },
                { icon: TrendingUp, label: "Profitable", color: "text-[#5d5fef]" },
                { icon: Star, label: "Top Rated", color: "text-yellow-500" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center space-y-2 md:space-y-4">
                  <div className="p-2 md:p-5 rounded-lg md:rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors">
                    <item.icon size={20} className={cn("md:w-10 md:h-10", item.color)} strokeWidth={2} />
                  </div>
                  <span className="text-[10px] md:text-sm font-bold text-[#64748b] uppercase tracking-tighter md:tracking-wider">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0 pt-2 md:pt-4 border-t border-white/5"
          >
            <p className="text-[#475569] text-[7px] md:text-[11px] font-bold tracking-wider opacity-60">
              © 2026 ANKIT RAO SAHAB. ALL RIGHTS RESERVED.
            </p>
            <p className="text-[#5d5fef] text-[8px] md:text-[12px] font-black flex items-center gap-1.5 uppercase tracking-widest">
              <span>🏏</span> Professional Cricket Analysis
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
}


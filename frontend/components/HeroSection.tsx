"use client";

import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50 dark:bg-slate-950">
            {/* Background Gradients - More subtle/professional */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-100 dark:bg-blue-900/10 rounded-full blur-3xl -z-10 opacity-50" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 animate-in slide-in-from-bottom-8 fade-in duration-700">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium mb-8 shadow-sm">
                        <ShieldCheck size={14} className="text-green-500" />
                        <span>Private & Secure Faculty Tool</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
                        Refine Your Teaching <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                            in Private.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed">
                        Your safe space to practice, analyze, and improve lecture delivery.
                        No student evaluations, no public scores—just objective insights for your eyes only.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                        <Link
                            href="/login"
                            className="w-full sm:w-auto px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-200 dark:shadow-none"
                        >
                            Analyze My Practice Session
                            <ArrowRight size={18} />
                        </Link>
                    </div>

                    <p className="mt-6 text-sm text-slate-500 dark:text-slate-500">
                        *Analysis is 100% private to you. We do not share data with administration or students.
                    </p>
                </div>

                {/* Professional Dashboard Visual */}
                <div className="relative mx-auto max-w-5xl animate-in slide-in-from-bottom-16 fade-in duration-1000 delay-200">
                    <div className="relative rounded-xl bg-slate-900/5 dark:bg-white/5 p-2 ring-1 ring-inset ring-slate-900/10 dark:ring-white/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                        <div className="aspect-[16/9] rounded-lg bg-white dark:bg-slate-800 shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700 relative group">
                            <div className="absolute inset-0 flex items-center justify-center bg-slate-50 dark:bg-slate-900/50">
                                <div className="text-center">
                                    <div className="w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-700 mb-4 mx-auto animate-pulse"></div>
                                    <p className="font-medium text-slate-400 dark:text-slate-500">Private Reflection Dashboard</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

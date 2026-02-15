"use client";

import React from 'react';
import { Mic2, Eye, BarChart2 } from 'lucide-react';

const features = [
    {
        icon: Mic2,
        title: "Speech Analysis",
        description: "Detect filler words, speaking rate (WPM), and tonal variety to ensure dynamic delivery."
    },
    {
        icon: Eye,
        title: "Visual Clarity",
        description: "AI analyzes your board work and slides for readability, structure, and information density."
    },
    {
        icon: BarChart2,
        title: "Actionable Metrics",
        description: "Receive a comprehensive 'Clarity Score' and specific suggestions to improve student retention."
    }
];

export default function FeaturesSection() {
    return (
        <section id="features" className="py-24 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Pedagogical Intelligence at Your Fingertips.
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        A comprehensive suite of tools designed to refine your teaching practice.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <div key={index} className="p-8 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-900 transition-all group">
                            <div className="h-14 w-14 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <feature.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

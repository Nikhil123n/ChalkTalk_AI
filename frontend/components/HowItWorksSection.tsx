"use client";

import React from 'react';
import { Video, FileSearch, LineChart } from 'lucide-react';

const steps = [
    {
        icon: Video,
        number: "01",
        title: "Upload Your Lecture",
        description: "Simply upload your MP4 file or paste a link to your video. Secure, private, and easy.",
    },
    {
        icon: FileSearch,
        number: "02",
        title: "AI Diagnostics",
        description: "Our engine maps your audio and visual cues to established pedagogical frameworks automatically.",
    },
    {
        icon: LineChart,
        number: "03",
        title: "The Debrief",
        description: "Review your private dashboard to see what went right, what missed the mark, and exactly how to tweak it.",
    }
];

export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="py-24 bg-white dark:bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        How It Works
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        A frictionless workflow designed for busy academics.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connector Line (Desktop) - simplified for clean look */}
                    <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-[2px] bg-slate-100 dark:bg-slate-800 -z-0"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                            <div className="w-16 h-16 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-bold text-xl mb-6 shadow-xl ring-4 ring-white dark:ring-slate-950">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                {step.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm max-w-xs mx-auto">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

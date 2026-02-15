"use client";

import React from 'react';
import { Presentation, Shield, LineChart } from 'lucide-react';

const benefits = [
    {
        icon: Presentation,
        title: "Mock Presentations for Faculty",
        description: "Students practice with peers before a big grade. ChalkTalk gives you that same preparation space for your lectures.",
    },
    {
        icon: Shield,
        title: "A Judgement-Free Zone",
        description: "Avoid the pressure of live student evaluations. Identify 'blind spots' in a safe environment before you step into the classroom.",
    },
    {
        icon: LineChart,
        title: "Self-Driven Growth",
        description: "You are the expert. We just provide the mirror. Use the data to validate your methods and try new pedagogical techniques.",
    }
];

export default function MotivationSection() {
    return (
        <section id="motivation" className="py-24 bg-slate-50 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-block px-4 py-1.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs tracking-wide uppercase mb-6">
                            Why We Built This
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                            Students Have <br />
                            Mock Presentations. <br />
                            <span className="text-blue-600 dark:text-blue-400">Now You Do Too.</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                            We believe every educator deserves a safe space to iterate. ChalkTalk isn't about criticizing your teaching—it's about empowering you with the same feedback loops we give our research students.
                        </p>

                        <div className="space-y-4">
                            {benefits.map((point, index) => (
                                <div key={index} className="flex gap-4 p-5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                                    <div className="text-blue-500 dark:text-blue-400 mt-1">
                                        <point.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">
                                            {point.title}
                                        </h4>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                                            {point.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative h-full min-h-[500px] bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xl flex flex-col">
                        {/* Visual metaphor for "Safe Practice" */}
                        <div className="flex-1 bg-slate-100 dark:bg-slate-900/50 flex items-center justify-center p-8 relative overflow-hidden">
                            <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-700/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
                            <div className="relative z-10 text-center">
                                <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center mx-auto mb-6 text-blue-500">
                                    <Shield size={40} />
                                </div>
                                <h3 className="font-bold text-xl mb-2 text-slate-800 dark:text-slate-200">Safe Sandbox Environment</h3>
                                <p className="text-slate-500 max-w-xs mx-auto text-sm">Upload readings, practice explanations, and get feedback without any risk.</p>
                            </div>
                        </div>
                        <div className="p-6 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
                            <div className="flex items-center gap-3 text-sm text-slate-500">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <div>Private Database</div>
                                <div className="w-2 h-2 rounded-full bg-green-500 ml-4"></div>
                                <div>Encrypted Analysis</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

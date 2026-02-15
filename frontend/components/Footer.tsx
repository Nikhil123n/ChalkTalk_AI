"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-slate-900 dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-slate-900 font-bold">
                        C
                    </div>
                    <span className="font-bold text-lg text-slate-900 dark:text-white">ChalkTalk AI</span>
                </div>

                <div className="flex flex-wrap gap-6 text-sm text-slate-600 dark:text-slate-400">
                    <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</Link>
                    <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Contact</Link>
                </div>

                <div className="text-sm text-slate-500 dark:text-slate-600">
                    © {new Date().getFullYear()} ChalkTalk AI. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

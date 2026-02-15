"use client";

import Link from 'next/link';
import { LayoutDashboard, LogOut } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '../context/AuthContext';

export default function LandingNavbar() {
    const { user, logout } = useAuth();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href={user ? "/dashboard" : "/"} className="flex items-center gap-2 group">
                    <div className="h-8 w-8 bg-slate-900 dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-slate-900 group-hover:scale-105 transition-transform">
                        <LayoutDashboard size={18} />
                    </div>
                    <span className="font-bold text-lg text-slate-900 dark:text-white">ChalkTalk AI</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="/#features" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                        Features
                    </Link>
                    <Link href="/#how-it-works" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                        How it Works
                    </Link>
                    <Link href="/#motivation" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                        Our Mission
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    {user ? (
                        <>
                            <Link
                                href="/dashboard"
                                className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2 rounded-xl text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all hover:shadow-lg hover:shadow-slate-200 dark:hover:shadow-slate-900/50"
                            >
                                Dashboard
                            </Link>
                            <button
                                onClick={logout}
                                className="text-slate-500 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                            >
                                <LogOut size={20} />
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-4 py-2 rounded-lg transition-colors"
                            >
                                Log in
                            </Link>
                            <Link
                                href="/signup"
                                className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2 rounded-xl text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all hover:shadow-lg hover:shadow-slate-200 dark:hover:shadow-slate-900/50"
                            >
                                Get Started
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}

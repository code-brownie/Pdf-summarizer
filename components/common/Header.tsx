'use client'
import React, { useState } from 'react';
import { FileText, Menu, X, } from 'lucide-react';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

interface NavItem {
    href: string;
    label: string;
}

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const navItems: NavItem[] = [
        { href: '#pricing', label: 'Pricing' },
    ];

    const handleMenuToggle = (): void => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="relative z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-teal-600 rounded-xl flex items-center justify-center">
                            <FileText className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-white">SummarizeAI</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-white/80 hover:text-white transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                        <SignedOut>
                            <Link href='/sign-up' className="bg-white/20 text-white px-6 py-2 rounded-full hover:bg-white/30 transition-all backdrop-blur-sm">
                                Sign In
                            </Link>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={handleMenuToggle}
                        aria-label="Toggle mobile menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-white/20">
                        <nav className="flex flex-col space-y-4 mt-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-white/80 hover:text-white transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <button className="bg-white/20 text-white px-6 py-2 rounded-full hover:bg-white/30 transition-all backdrop-blur-sm text-left">
                                Sign In
                            </button>
                            <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-all shadow-lg text-left">
                                Get Started
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};
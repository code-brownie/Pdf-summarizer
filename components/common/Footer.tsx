'use client'
import React, { useState } from 'react';
import { FileText, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
    const [email, setEmail] = useState<string>('');

    const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        // Handle email submission logic here
        console.log('Email submitted:', email);
        setEmail('');
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value);
    };

    const footerLinks = {
        quickLinks: [
            { href: '#features', label: 'Features' },
            { href: '#pricing', label: 'Pricing' },
            { href: '#api', label: 'API' },
            { href: '#docs', label: 'Documentation' },
        ],
        support: [
            { href: '#help', label: 'Help Center' },
            { href: '#contact', label: 'Contact Us' },
            { href: '#privacy', label: 'Privacy Policy' },
            { href: '#terms', label: 'Terms of Service' },
        ],
    };

    return (
        <footer className="relative bg-black/20 backdrop-blur-md border-t border-white/20">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-teal-600 rounded-lg flex items-center justify-center">
                                <FileText className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">SummarizeAI</span>
                        </div>
                        <p className="text-white/70 text-sm">
                            Transform your PDFs into concise, intelligent summaries with the power of AI.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            {footerLinks.quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} className="text-white/70 hover:text-white transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-sm">
                            {footerLinks.support.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} className="text-white/70 hover:text-white transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
                        <div className="space-y-4">
                            <p className="text-white/70 text-sm">Get the latest updates and features.</p>
                            <form onSubmit={handleEmailSubmit} className="flex">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder="Enter your email"
                                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-orange-500 px-4 py-2 rounded-r-lg hover:bg-orange-600 transition-colors"
                                    aria-label="Subscribe to newsletter"
                                >
                                    <ArrowRight className="w-4 h-4 text-white" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/20 mt-8 pt-8 text-center">
                    <p className="text-white/70 text-sm">
                        © 2025 SummarizeAI. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
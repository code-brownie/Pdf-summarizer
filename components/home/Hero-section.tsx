'use client';

import React, { useState } from 'react';
import { Upload, ArrowRight } from 'lucide-react';
import { DemoSection } from './Demo-section';
import { HowItWorks } from './How-it-work-section';

interface Stat {
    value: string;
    label: string;
}

export const Hero: React.FC = () => {
    const [uploadHover, setUploadHover] = useState<boolean>(false);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const file = e.target.files?.[0];
        if (file && file.type === 'application/pdf') {
            console.log('PDF uploaded:', file.name);
            // Handle file upload logic here
            // You can add your PDF processing logic or navigation here
        }
    };

    const handleStartSummarizing = (): void => {
        // Handle start summarizing button click
        console.log('Start summarizing clicked');
        // You can navigate to dashboard or open file picker
    };


    const stats: Stat[] = [
        { value: "10K+", label: "PDFs Processed" },
        { value: "99%", label: "Accuracy Rate" },
        { value: "30s", label: "Average Time" },
    ];

    return (
        <div className="relative min-h-screen">
            {/* =====================================================
          ANIMATED BACKGROUND ORBS
          ===================================================== */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* =====================================================
          HERO CONTENT
          ===================================================== */}
            <section className="relative z-10 container mx-auto px-4 py-20">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Badge */}
                    <div className="mb-8">
                        <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                            🚀 AI-Powered PDF Summarization
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Transform PDFs into
                        <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"> Smart Summaries</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Upload any PDF and get intelligent, concise summaries in seconds. Powered by advanced AI to help you digest information faster than ever.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={handleStartSummarizing}
                            className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-all shadow-2xl hover:shadow-orange-500/25 hover:scale-105"
                        >
                            Start Summarizing
                            <ArrowRight className="w-5 h-5 ml-2 inline-block" />
                        </button>
                    </div>
                </div>
                {/* How It Works Subheading */}
                <div className="mt-24 text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        🧠 How Our AI Summarizes Your PDF
                    </h2>
                    <p className="text-lg text-white/80 leading-relaxed">
                        Once you upload your PDF, our advanced AI engine reads and understands its content.
                        It identifies key sections, extracts important information, and generates an easy-to-understand summary with highlights, questions, and actions — all in under a minute.
                    </p>
                </div>

                <DemoSection />
                <HowItWorks />
            </section>
        </div>
    );
};

import React from 'react';

export const HowItWorks: React.FC = () => {
    const steps = [
        {
            icon: '📁',
            title: 'Upload Your PDF',
            description: 'Drag and drop your file or browse to upload. Our system accepts any PDF format instantly.',
        },
        {
            icon: '🤖',
            title: 'AI Analyzes the Content',
            description: 'Our powerful AI engine reads and understands your document — extracting insights, highlights, and more.',
        },
        {
            icon: '📄',
            title: 'Get Your Summary',
            description: 'In seconds, receive a clean, structured summary with all key points, questions, and next steps.',
        },
    ];

    return (
        <section className="mt-32 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-white mb-4">⚙️ How It Works</h2>
                <p className="text-white/70 text-lg mb-16 max-w-2xl mx-auto">
                    From upload to summary in under a minute — here’s how our AI transforms your document into digestible insights.
                </p>

                <div className="grid md:grid-cols-3 gap-12">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl p-8 shadow-md hover:shadow-orange-500/20 transition-all"
                        >
                            <div className="text-5xl mb-4">{step.icon}</div>
                            <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                            <p className="text-white/80 text-md leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

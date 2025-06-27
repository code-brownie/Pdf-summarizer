import React from "react";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";

const TabToDisplay = [
    {
        value: "Overview", label: "Quick Overview"
    },
    {
        value: "Highlights", label: 'Key Highlights'
    },
    {
        value: "Questions", label: 'Important Questions'
    },
    { value: 'Actions', label: 'Action Items' }
];

export const DemoSection = () => {
    return (
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mt-8 text-white max-w-3xl mx-auto shadow-lg">
            <Tabs defaultValue="Overview" className="w-full">
                <TabsList className="bg-white-200 rounded-lg flex flex-wrap justify-center mb-6">
                    {
                        TabToDisplay.map((tab, index) => {
                            return (
                                <TabsTrigger
                                    key={index}
                                    value={tab.value}
                                    className="px-4 py-2 text-white data-[state=active]:bg-orange-500 data-[state=active]:text-white rounded-full cursor-pointer border border-white/30 mx-1 my-1 hover:border-white/50 transition-colors"
                                >
                                    {tab.label}
                                </TabsTrigger>
                            )
                        })
                    }
                </TabsList>

                <TabsContent value="Overview">
                    <div className="text-white/90 text-lg leading-relaxed">
                        ✨ A concise summary of the entire PDF that gives you a bird's eye view. Ideal for getting the gist of lengthy documents in seconds.
                        <ul className="list-disc list-inside mt-4 text-white/80">
                            <li>Main topic and objective</li>
                            <li>Summary of each section</li>
                            <li>Length & tone analysis</li>
                        </ul>
                    </div>
                </TabsContent>

                <TabsContent value="Highlights">
                    <div className="text-white/90 text-lg leading-relaxed">
                        💡 Extracts of key statements, data points, or findings directly from the PDF.
                        <ul className="list-disc list-inside mt-4 text-white/80">
                            <li>Key quotes or stats</li>
                            <li>Crucial arguments or conclusions</li>
                            <li>Referenced sources (if any)</li>
                        </ul>
                    </div>
                </TabsContent>

                <TabsContent value="Questions">
                    <div className="text-white/90 text-lg leading-relaxed">
                        ❓ AI-generated questions based on your document to test understanding or prepare for discussion.
                        <ul className="list-disc list-inside mt-4 text-white/80">
                            <li>What is the main takeaway from the document?</li>
                            <li>Why is [Topic] important in this context?</li>
                            <li>How does the author support their claim?</li>
                        </ul>
                    </div>
                </TabsContent>

                <TabsContent value="Actions">
                    <div className="text-white/90 text-lg leading-relaxed">
                        📌 Actionable items or to-dos inferred from the PDF content — perfect for reports, meetings, or planning.
                        <ul className="list-disc list-inside mt-4 text-white/80">
                            <li>Summarized task list</li>
                            <li>Suggested next steps</li>
                            <li>Responsibility breakdown (if applicable)</li>
                        </ul>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
};
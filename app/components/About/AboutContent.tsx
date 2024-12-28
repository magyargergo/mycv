import React from "react";

const AboutContent: React.FC<{ paragraphs: string[] }> = ({ paragraphs }) => (
    <div className="px-4 sm:px-6 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-gray-300 overflow-y-auto">
        {paragraphs.map((paragraph, index) => (
            <p
                key={index}
                className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 text-justify"
            >
                {paragraph}
            </p>
        ))}
    </div>
);

export default AboutContent;
"use client";

import React from 'react';
import { FaUser } from 'react-icons/fa';

const About: React.FC = () => (
    <div id="about" className="flex flex-1 flex-col pt-6 sm:pt-8 md:pt-12">
        <div className="px-4 sm:px-6 flex items-center mb-4 sm:mb-6">
            <FaUser className="text-blue-700 mr-2 sm:mr-3 text-2xl sm:text-3xl md:text-4xl" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-700">About Me</h2>
        </div>

        <div className="px-4 sm:px-6 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-gray-300 overflow-y-auto max-h-[calc(100vh-200px)]">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 text-justify">
                As a Senior Software Engineer with over five years at <span className="font-semibold">Freelancer Outsourcing UK Limited</span>,
                I specialize in developing scalable, reliable solutions that drive platform stability and improve user experience.
                My role involves full-stack development across frontend and backend, using technologies like <span className="font-semibold">
                Angular</span>, <span className="font-semibold">PHP</span>, <span className="font-semibold">Python</span>, <span className="font-semibold">
                Go</span>, <span className="font-semibold">Docker</span>, and <span className="font-semibold">AWS Services</span>.
                Leading initiatives to improve platform stability, I manage incident response, conduct root cause analyses, and collaborate
                across departments to ensure our technical solutions align with business objectives.
            </p>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 text-justify">
                I have successfully driven efficiency and productivity improvements, automating infrastructure with Docker and Jenkins to
                reduce deployment time by 30% and optimizing development environments to shorten testing cycles by 20%. By creating custom
                tools for remote and local debugging, I have improved developer productivity and streamlined workflows. I am also passionate
                about mentoring team members and fostering a culture of continuous improvement, which contributes to our high-performance engineering team.
            </p>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8 text-justify">
                In previous roles, I have built a solid foundation in software development, security, and infrastructure.
                From implementing secure authentication solutions to developing RESTful web services and collaborating with
                international teams, I have gained diverse experience across various technology stacks. My career began with a
                focus on automation and optimization, allowing me to develop a results-oriented approach that leverages technology
                to solve complex problems and deliver high-quality, impactful solutions.
            </p>
        </div>
    </div>
);

export default About;

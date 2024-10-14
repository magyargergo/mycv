"use client";

import React from 'react';
import { FaUser } from 'react-icons/fa';

const About: React.FC = () => (
    <div id="about" className="py-12 px-6">
        <div className="flex items-center mb-6">
            <FaUser className="text-blue-700 mr-3 text-4xl" />
            <h2 className="text-4xl font-extrabold text-blue-700">About Me</h2>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
            As a Senior Software Engineer with over five years at <span className="font-semibold">Freelancer.com</span>, I specialize in developing scalable, reliable solutions that drive platform stability and enhance user experience. My role involves full-stack development across frontend and backend, using technologies like <span className="font-semibold">Angular</span>, <span className="font-semibold">PHP</span>, <span className="font-semibold">Python</span>, <span className="font-semibold">Go</span>, <span className="font-semibold">Docker</span>, and <span className="font-semibold">AWS Services</span>. Leading initiatives to improve platform stability, I manage incident response, conduct root cause analyses, and collaborate across departments to ensure our technical solutions align with business objectives.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
            I’ve successfully driven efficiency and productivity improvements, automating infrastructure with Docker and Jenkins to reduce deployment time by 30% and optimizing development environments to shorten testing cycles by 20%. By creating custom tools for remote and local debugging, I’ve enhanced developer productivity and streamlined workflows. I’m also passionate about mentoring team members and fostering a culture of continuous improvement, which contributes to our high-performance engineering team.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-8 text-justify">
            In previous roles, I’ve built a solid foundation in software development, security, and infrastructure. From implementing secure authentication solutions to developing RESTful web services and collaborating with international teams, I’ve gained diverse experience across various technology stacks. My career began with a focus on automation and optimization, allowing me to develop a results-oriented approach that leverages technology to solve complex problems and deliver high-quality, impactful solutions.
        </p>
    </div>
);

export default About;

"use client";

import React from 'react';
import {FaBriefcase, FaCircle} from 'react-icons/fa';

const Experience: React.FC = () => (
    <div id="experience" className="py-12">
        <div className="px-6 flex items-center mb-6">
            <FaBriefcase className="text-blue-700 mr-3 text-4xl"/>
            <h2 className="text-4xl font-extrabold text-blue-700">Experience</h2>
        </div>
        <div className="px-6 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-gray-300 overflow-y-scroll">
            <div className="border-l-4 border-blue-200">

                {/* Freelancer.com */}
                <div className="mb-8 ml-6 relative">
                    {/* Icon */}
                    <div
                        className="absolute -left-10 top-4 transform -translate-y-1/2 translate-x-0.5 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                        <FaCircle className="text-white text-xs"/>
                    </div>
                    {/* Company Header */}
                    <div className="flex items-center">
                        <h3 className="text-2xl font-semibold text-gray-800">Freelancer Outsourcing UK Limited</h3>
                        <span className="ml-4 text-sm font-medium bg-blue-100 text-blue-700 py-1 px-2 rounded-full">
                        Total Duration: 5+ years
                    </span>
                    </div>

                    {/* Senior Software Engineer */}
                    <div className="mt-4 mb-6">
                        <h4 className="text-xl font-semibold text-blue-700">Senior Software Engineer</h4>
                        <ul className="list-disc ml-6 text-gray-700 text-justify">
                            <li>Led platform stability and optimization initiatives, effectively managing incident
                                response and root cause analysis, resulting in a reduction of critical incidents by
                                25%.
                            </li>
                            <li>Designed, developed, and maintained high-performance software solutions using
                                Angular and PHP, enhancing user experience and increasing platform performance.
                            </li>
                            <li>Collaborated with cross-functional teams to align technical solutions with business
                                objectives, improving project delivery efficiency.
                            </li>
                            <li>Developed infrastructure automation with Docker and Jenkins, reducing deployment
                                time by 30%.
                            </li>
                            <li>Improved testability of development environments for email systems, reducing testing
                                time by 20%.
                            </li>
                            <li>Created custom tools for remote and local debugging, streamlining developer
                                workflows and increasing productivity.
                            </li>
                            <li>Mentored team members, fostering a culture of continuous learning and professional
                                growth.
                            </li>
                        </ul>
                    </div>

                    {/* Full Stack Software Engineer */}
                    <div className="mb-6">
                        <h4 className="text-xl font-semibold text-blue-700">Full Stack Software Engineer</h4>
                        <ul className="list-disc ml-6 text-gray-700 text-justify">
                            <li>Developed and maintained full-stack applications to enhance platform functionality
                                and user experience.
                            </li>
                            <li>Optimized existing features and integrated new ones using Angular, PHP, and Python,
                                improving system performance by 15%.
                            </li>
                            <li>Collaborated closely with the data science team to integrate data-driven features
                                and improve analytics capabilities.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Fornax */}
                <div className="mb-8 ml-6 relative">
                    {/* Icon */}
                    <div
                        className="absolute -left-10 top-4 transform -translate-y-1/2 translate-x-0.5 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                        <FaCircle className="text-white text-xs"/>
                    </div>
                    {/* Company Header */}
                    <div className="flex items-center">
                        <h3 className="text-2xl font-semibold text-gray-800">Fornax</h3>
                        <span className="ml-4 text-sm font-medium bg-blue-100 text-blue-700 py-1 px-2 rounded-full">
                        Total Duration: 7 months
                    </span>
                    </div>
                    {/* Role */}
                    <div className="mt-4 mb-6">
                        <h4 className="text-xl font-semibold text-blue-700">Full Stack Developer</h4>
                        <ul className="list-disc ml-6 text-gray-700 text-justify">
                            <li>Implemented Keycloak SSO for backend security and OAuth2 for frontend
                                authentication, enhancing application security.
                            </li>
                            <li>Developed RESTful web services using Spring Boot and configured continuous
                                deployment, accelerating release cycles.
                            </li>
                            <li>Maintained and optimized graph and relational databases (AgensGraph and PostgreSQL),
                                improving data retrieval efficiency by 20%.
                            </li>
                            <li>Standardized frontend development processes and mentored junior developers,
                                improving team productivity.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Minero IT Hungary Kft. */}
                <div className="mb-8 ml-6 relative">
                    {/* Icon */}
                    <div
                        className="absolute -left-10 top-4 transform -translate-y-1/2 translate-x-0.5 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                        <FaCircle className="text-white text-xs"/>
                    </div>
                    {/* Company Header */}
                    <div className="flex items-center">
                        <h3 className="text-2xl font-semibold text-gray-800">Minero IT Hungary Kft.</h3>
                        <span className="ml-4 text-sm font-medium bg-blue-100 text-blue-700 py-1 px-2 rounded-full">
                        Total Duration: 2 years 6 months
                    </span>
                    </div>

                    {/* Java Developer */}
                    <div className="mt-4 mb-6">
                        <h4 className="text-xl font-semibold text-blue-700">Java Developer</h4>
                        <ul className="list-disc ml-6 text-gray-700 text-justify">
                            <li>Collaborated with international teams to design and extend a specialized Java
                                compiler, enhancing language features.
                            </li>
                            <li>Implemented a custom Integrated Development Environment (IDE) with advanced
                                refactoring capabilities, improving developer efficiency.
                            </li>
                        </ul>
                    </div>

                    {/* Junior Java Developer */}
                    <div className="mb-6">
                        <h4 className="text-xl font-semibold text-blue-700">Junior Java Developer</h4>
                        <ul className="list-disc ml-6 text-gray-700 text-justify">
                            <li>Served as a liaison with German and Slovenian partner companies, facilitating
                                effective communication and collaboration.
                            </li>
                            <li>Assisted in designing and extending a Java compiler in partnership with
                                international teams.
                            </li>
                            <li>Supported the implementation of a specialized IDE featuring refactoring
                                capabilities.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* FrontEndART Software Ltd. */}
                <div className="mb-8 ml-6 relative">
                    {/* Icon */}
                    <div
                        className="absolute -left-10 top-4 transform -translate-y-1/2 translate-x-0.5 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                        <FaCircle className="text-white text-xs"/>
                    </div>
                    {/* Company Header */}
                    <div className="flex items-center">
                        <h3 className="text-2xl font-semibold text-gray-800">FrontEndART Software Ltd.</h3>
                        <span className="ml-4 text-sm font-medium bg-blue-100 text-blue-700 py-1 px-2 rounded-full">
                        Total Duration: 2 year 3 months
                    </span>
                    </div>

                    {/* Junior Software Developer */}
                    <div className="mt-4 mb-6">
                        <h4 className="text-xl font-semibold text-blue-700">Junior Software Developer</h4>
                        <ul className="list-disc ml-6 text-gray-700 text-justify">
                            <li>Transformed FxCop analysis results into user-friendly reports, improving usability
                                and developer adoption.
                            </li>
                            <li>Contributed to the development of a SonarQube plugin for visualizing code analysis
                                results, enhancing code quality monitoring.
                            </li>
                        </ul>
                    </div>

                    {/* Graduate Software Developer */}
                    <div className="mb-6">
                        <h4 className="text-xl font-semibold text-blue-700">Graduate Software Developer</h4>
                        <ul className="list-disc ml-6 text-gray-700 text-justify">
                            <li>Developed a static code analysis tool in C# using the Roslyn compiler
                                infrastructure, aiding in code quality improvement.
                            </li>
                            <li>Calculated code metrics on a language-independent model in C++, contributing to
                                performance optimization.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Experience;

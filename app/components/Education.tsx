"use client";

import React from 'react';
import {FaCircle, FaGraduationCap} from 'react-icons/fa';

const Education: React.FC = () => (
    <div id="education" className="py-12 px-6">
        <div className="flex items-center mb-6">
            <FaGraduationCap className="text-blue-700 mr-3 text-4xl"/>
            <h2 className="text-4xl font-extrabold text-blue-700">Education</h2>
        </div>

        <div className="relative border-l-4 border-blue-200">

                {/* Corvinus University of Budapest */}
                <div className="mb-8 ml-6 relative">
                    {/* Icon */}
                    <div
                        className="absolute -left-10 top-4 transform -translate-y-1/2 translate-x-0.5 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                        <FaCircle className="text-white text-xs"/>
                    </div>
                    {/* Institution Header */}
                    <h3 className="text-2xl font-semibold text-gray-800">Corvinus University of Budapest</h3>
                    <p className="text-gray-600">Master's Degree, Economist in Accountancy</p>
                    <p className="text-gray-600">(2016 - 2021)</p>
                </div>

                {/* University of Szeged */}
                <div className="mb-8 ml-6 relative">
                    {/* Icon */}
                    <div
                        className="absolute -left-10 top-4 transform -translate-y-1/2 translate-x-0.5 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                        <FaCircle className="text-white text-xs"/>
                    </div>
                    {/* Institution Header */}
                    <h3 className="text-2xl font-semibold text-gray-800">University of Szeged</h3>
                    <p className="text-gray-600">Bachelor’s Degree, Computer Science</p>
                    <p className="text-gray-600">(2012 - 2016)</p>
                </div>

                {/* József Attila Secondary Grammar School */}
                <div className="mb-8 ml-6 relative">
                    {/* Icon */}
                    <div
                        className="absolute -left-10 top-4 transform -translate-y-1/2 translate-x-0.5 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                        <FaCircle className="text-white text-xs"/>
                    </div>
                    {/* Institution Header */}
                    <h3 className="text-2xl font-semibold text-gray-800">József Attila Secondary Grammar School</h3>
                    <p className="text-gray-600">High School Diploma, Mathematics and Informatics Faculty</p>
                    <p className="text-gray-600">(2008 - 2012)</p>
                </div>

            </div>
    </div>
);

export default Education;

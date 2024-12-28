import React from "react";
import { Education } from "./types";

const EducationItemContent: React.FC<{ education: Education }> = ({ education }) => (
    <div className="ml-4 sm:ml-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
            {education.institution}
        </h3>
        <p className="text-sm sm:text-base text-gray-600">
            {education.degree}
        </p>
        <p className="text-sm sm:text-base text-gray-600">
            {education.duration}
        </p>
    </div>
);

export default EducationItemContent;
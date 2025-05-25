import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Role } from '@/components/types'; // Corrected import path

interface RoleCardProps {
  role: Role;
}

const RoleCard: React.FC<RoleCardProps> = ({ role }) => {
  return (
    <div className="bg-secondary hover:bg-accent p-4 md:p-4.5 lg:p-5 rounded-lg border-l-4 border-primary shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1">
      <h4 className="text-base md:text-[1.05rem] lg:text-lg font-semibold text-primary mb-2.5 md:mb-3 text-break-word">
        {role.title}
      </h4>
      <ul className="space-y-1.5 md:space-y-2">
        {role.responsibilities.map((item: string, i: number) => (
          <li
            key={i}
            className="flex items-center text-foreground text-xs md:text-[13px] lg:text-sm"
          >
            <FaAngleRight className="text-primary mr-1.5 md:mr-2 flex-shrink-0" />
            <span className="text-break-word">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleCard;

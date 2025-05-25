import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Role } from '@/components/types'; // Corrected import path

interface RoleCardProps {
  role: Role;
}

const RoleCard: React.FC<RoleCardProps> = ({ role }) => {
  return (
    <div className="bg-secondary hover:bg-accent p-5 rounded-lg border-l-4 border-primary shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1">
      <h4 className="text-base sm:text-lg font-semibold text-primary mb-3">{role.title}</h4>
      <ul className="space-y-2">
        {role.responsibilities.map((item: string, i: number) => (
          <li key={i} className="flex text-foreground text-xs sm:text-sm">
            <FaAngleRight className="text-primary mr-2 mt-1 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleCard;

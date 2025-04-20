'use client';

import React from 'react';

interface SectionHeaderProps {
  icon: React.ReactElement;
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ icon, title }) => {
  return (
    <div className="flex items-center mb-8 pb-2 border-b">
      <div className="text-primary mr-3">{React.cloneElement(icon, { size: 22 })}</div>
      <h2 className="text-2xl font-extrabold text-foreground">{title}</h2>
    </div>
  );
};

export default SectionHeader;

import React from 'react';
import { Timeline as FlowbiteTimeline } from 'flowbite-react';
import { TimelineProps } from './types';

export const Timeline: React.FC<TimelineProps> = ({
  children,
  className = ""
}) => {
    // The timeline container adds the vertical line and proper spacing
    return (
        <div className={`px-4 sm:px-6 overflow-y-auto ${className}`}>
            <FlowbiteTimeline>
                {children}
            </FlowbiteTimeline>
        </div>
    );
};
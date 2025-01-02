import React from 'react';
import { Timeline as FlowbiteTimeline } from 'flowbite-react';
import { TimelineItemProps } from './types';

const TimelineIcon: React.FC = () => {
    return (
        <div
            className="size-5 sm:size-6 bg-white rounded-full flex items-center justify-center shadow-[0_0_0_4px_rgba(219,234,254,1)]">
            <div className="size-3 sm:size-4 bg-blue-500 rounded-full shadow-sm flex items-center justify-center">
                <span>●</span>
            </div>
        </div>
    );
};

export const TimelineItem: React.FC<TimelineItemProps> = ({
                                                              children,
                                                              className = ""
                                                          }) => {
    // The timeline item consists of an icon on the line and content beside it
    return (
        <FlowbiteTimeline.Item className={`${className} relative`}>
            <FlowbiteTimeline.Point icon={TimelineIcon}/>
            <FlowbiteTimeline.Content>
                {children}
            </FlowbiteTimeline.Content>
        </FlowbiteTimeline.Item>
    );
};

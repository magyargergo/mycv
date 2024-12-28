import { FaCircle } from 'react-icons/fa';
import { TimelineItemProps } from './types';

export const TimelineItem: React.FC<TimelineItemProps> = ({
  children,
  icon = <FaCircle className="text-white text-[8px] sm:text-xs" />,
  className = ""
}) => {
    // The timeline item consists of an icon on the line and content beside it
    return (
        <div className={`mb-6 sm:mb-8 relative ${className}`}>
            {/* This creates the circular container for the icon */}
            <div
                className="absolute -left-[13px] sm:-left-[18px] translate-y-0.5 w-6 h-6 sm:w-8 sm:h-8 bg-gray-50 rounded-full flex items-center justify-center"
            >
                {/* Inner circle with the icon */}
                <div
                    className="w-4 h-4 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center"
                >
                    {icon}
                </div>
            </div>
            {/* Content container */}
            {children}
        </div>
    );
};

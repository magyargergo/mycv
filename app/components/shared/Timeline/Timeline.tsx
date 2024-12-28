import { TimelineProps } from './types';

export const Timeline: React.FC<TimelineProps> = ({
  children,
  className = ""
}) => {
    // The timeline container adds the vertical line and proper spacing
    return (
        <div className={`px-4 sm:px-6 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-gray-300 overflow-y-auto ${className}`}>
            <div className="border-l-2 sm:border-l-4 border-blue-200 ml-3 sm:ml-4">
                {children}
            </div>
        </div>
    );
};
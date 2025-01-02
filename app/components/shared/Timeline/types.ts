// These types define the structure of our timeline items
export interface TimelineItemProps {
    // Content to be rendered inside the timeline item
    children: React.ReactNode;
    // Custom classes for the item container
    className?: string;
}

export interface TimelineProps {
    // All timeline items will be rendered within this container
    children: React.ReactNode;
    // Optional className for the timeline container
    className?: string;
}
import React from 'react';

interface ContactInfoItemProps {
    icon: React.ReactElement;
    text: string;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, text }) => {
    return (
        <div className="flex items-center text-foreground">
            <div className="bg-accent p-1.5 sm:p-2 rounded-full mr-2 sm:mr-3">
                {React.cloneElement(icon, { className: "text-primary", size: 12 })}
            </div>
            <span className="text-xs sm:text-sm">{text}</span>
        </div>
    );
};

export default ContactInfoItem; 
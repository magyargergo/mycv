// theme.ts
import type { CustomFlowbiteTheme } from 'flowbite-react';

export const customTheme: CustomFlowbiteTheme = {
    timeline: {
        root: {
            direction: {
                vertical: "border-l-2 sm:border-l-4 border-blue-200 ml-3 sm:ml-4"
            }
        },
        item: {
            content: {
                root: {
                    base: "mb-6 sm:mb-8 ml-6",
                },
            },
            point: {
                vertical: "absolute -left-[35px] sm:-left-[38px] top-[5px]",
                marker: {
                    base: {
                        vertical: "w-6 h-6 sm:w-8 sm:h-8 bg-gray-50"
                    },
                    icon: {
                        base: "w-4 h-4 sm:w-6 sm:h-6 bg-blue-600",
                        wrapper: "text-white text-[8px] sm:text-xs"
                    }
                }
            }
        }
    }
} as const;
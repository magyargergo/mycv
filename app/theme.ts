import type { CustomFlowbiteTheme } from 'flowbite-react';

export const customTheme: CustomFlowbiteTheme = {
    // Global theme
    button: {
        base: "group flex items-center justify-center text-center font-medium relative focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300",
        color: {
            blue: "text-white bg-blue-600 hover:bg-blue-700 border-0 active:bg-blue-800 shadow-sm hover:shadow",
            green: "text-white bg-teal-500 hover:bg-teal-600 border-0 active:bg-teal-700 shadow-sm hover:shadow",
            light: "text-gray-700 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-600 shadow-sm hover:shadow"
        },
        size: {
            xs: "text-xs px-2 py-1 rounded-md",
            sm: "text-sm px-3 py-2 rounded-lg",
            md: "text-sm px-4 py-2.5 rounded-lg",
            lg: "text-base px-5 py-2.5 rounded-lg",
            xl: "text-base px-6 py-3 rounded-lg"
        }
    },

    card: {
        root: {
            base: "flex rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300",
            children: "flex h-full flex-col p-0",
            horizontal: {
                off: "flex-col",
                on: "flex-col md:flex-row"
            }
        }
    },

    badge: {
        root: {
            base: "flex h-fit items-center gap-2 font-medium transition-colors",
            color: {
                info: "bg-blue-100 text-blue-800",
                gray: "bg-gray-100 text-gray-800",
                success: "bg-green-100 text-green-800",
                purple: "bg-purple-100 text-purple-800"
            },
            size: {
                xs: "p-1 text-xs rounded-md",
                sm: "px-3 py-1.5 text-xs rounded-full"
            }
        }
    },

    tooltip: {
        base: "absolute inline-block z-50 rounded-lg py-2 px-3 text-sm font-medium shadow-md ",
        style: {
            light: "border border-gray-100 bg-white text-gray-900",
        },
        animation: "transition-opacity"
    }
} as const;
import React from "react";

// Define the types for the props
interface PlusIconProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    width?: number;
    height?: number;
}

export const PlusIcon: React.FC<PlusIconProps> = ({ size = 16, width, height, ...props }) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={size || height}
        role="presentation"
        viewBox="0 0 24 24"
        width={size || width}
        {...props}
    >
        <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        >
            <path d="M6 12h12" />
            <path d="M12 18V6" />
        </g>
    </svg>
);

import { TypeColors } from '@/app/types/pokemon';
import React from 'react';

interface BadgeProps {
    type: string;
    TYPE_COLORS: TypeColors;
}

function Badge({ type, TYPE_COLORS }: BadgeProps) {
    const getTypeColor = () => {
        if (type in TYPE_COLORS) {
            return TYPE_COLORS[type as keyof TypeColors];
        }
        return 'bg-gray-500';
    };

    const typeColor = getTypeColor();

    return (
        <span
            className={`${typeColor} text-white px-3 py-1 rounded-full text-sm font-medium`}
        >
            {type}
        </span>
    );
}

export default Badge;

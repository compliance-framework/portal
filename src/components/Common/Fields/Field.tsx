import {observer} from "mobx-react-lite";
import React from 'react';

interface FieldProps {
    label: string;
    children: React.ReactNode;
    className?: string;
    labelClassName?: string;
    valueClassName?: string;
}

export const Field = observer<FieldProps>(({label, children, className, labelClassName, valueClassName}) => { // Replaced value with children
    return (
        <div className={`flex flex-row ${className}`}>
            <label className={`w-48 text-dim flex-shrink-0 ${labelClassName}`}>{label}</label>
            <div className={`${valueClassName}`}>{children}</div>
        </div>
    );
});

import React from 'react';

const Input = ({
    label,
    value,
    onChange,
    placeholder = '',
    type = 'text',
    name,
    error = false,
    options = [],
    helperText,
    multiline = false,
    rows = 3,
    disabled = false,
}) => {
    const baseStyles = `w-full px-4 py-2 rounded-xl border text-sm shadow-sm transition focus:outline-none focus:ring-2 ${error
        ? 'border-red-500 focus:ring-red-300'
        : 'border-gray-300 focus:ring-blue-400'
        } ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}`;

    const renderInput = () => {
        switch (type) {
            case 'textarea':
                return (
                    <textarea
                        name={name}
                        rows={rows}
                        className={baseStyles}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        disabled={disabled}
                    />
                );
            case 'select':
                return (
                    <select
                        name={name}
                        className={baseStyles}
                        value={value}
                        onChange={onChange}
                        disabled={disabled}
                    >
                        <option value="" disabled>{placeholder || 'Select an option'}</option>
                        {options.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                );
            case 'date':
                return (
                    <input
                        name={name}
                        type="date"
                        className={baseStyles}
                        value={value}
                        onChange={onChange}
                        disabled={disabled}
                    />
                );
            default:
                return (
                    <input
                        name={name}
                        type={type}
                        className={baseStyles}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        disabled={disabled}
                    />
                );
        }
    };

    return (
        <div className="flex flex-col gap-1">
            {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
            {renderInput()}
            {helperText && (
                <span className={`text-xs mt-1 ${error ? 'text-red-500' : 'text-gray-500'}`}>
                    {helperText}
                </span>
            )}
        </div>
    );
}

export default Input;
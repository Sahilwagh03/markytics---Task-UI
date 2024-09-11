// utils.js

export const getSizeClass = (size) => {
    const sizeClasses = {
        xs: 'w-10 h-10',
        sm: 'w-12 h-12', // small
        md: 'w-14 h-14', // medium (default)
        lg: 'w-16 h-16', // large
        xl: 'w-20 h-20',
        '2xl': 'w-24 h-24'
    };
    return sizeClasses[size] || sizeClasses['md']; // Default to 'md' if size is not recognized
};

export default function InputLabel({value, className = '', children, isLight = false, ...props}) {
    return (
        <label {...props}
               className={`block font-medium mb-1 text-sm ${isLight ? 'text-black' : 'dark:text-gray-300'}  ` + className}>
            {value ? value : children}
        </label>
    );
}

const Button = ({ children, type = "button", className = "" }) => {
  const baseClasses = `
    cursor-pointer
    text-white bg-purple-700 hover:bg-purple-800
    focus:ring-4 focus:ring-purple-300
    font-medium rounded-lg text-sm
    dark:bg-purple-600 dark:hover:bg-purple-700
    focus:outline-none dark:focus:ring-purple-800
  `;
 
  return (
    <button type={type} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
};

export default Button;

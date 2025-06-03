const SectionDescription = ({ children, className = "" }) => {
  return (
    <p className={`font-light text-gray-500  dark:text-gray-400 ${className}`}>
      {children}
    </p>
  );
};

export default SectionDescription;

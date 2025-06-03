const SectionTitle = ({ children, className = "" }) => {
    return (
        <h2 className={`mb-4 text-3xl font-extrabold tracking-tight text-gray-900  ${className}`}>
            {children}
        </h2>
    );
};

export default SectionTitle;

const SubServices2 = ({ icon, title, description }) => {
  return (
    <div>
      <div className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500">
        {icon}
      </div>
      <h3 className="mb-2 text-2xl font-bold dark:text-white">{title}</h3>
      <p className="font-light text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default SubServices2;

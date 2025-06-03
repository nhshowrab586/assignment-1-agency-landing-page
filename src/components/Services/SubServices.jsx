import Right from "../SVG/Right";

const SubServices = ({ title, description, features, image, imageLeft = true,shortline }) => {
  return (
    <div className={`items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16 ${imageLeft ? "lg:flex-row-reverse" : ""}`}>
      {!imageLeft && (
        <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={image} alt={title} />
      )}

      <div className="text-gray-500 sm:text-lg dark:text-gray-400">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="mb-8 font-light lg:text-xl">{description}</p>

        <ul
          role="list"
          className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
        >
          {features.map((feature, index) => (
            <li className="flex space-x-3" key={index}>
             <Right/>
              <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <p className="font-light lg:text-xl">{shortline}</p>
      </div>

      {imageLeft && (
        <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={image} alt={title} />
      )}
    </div>
  );
};


export default SubServices;

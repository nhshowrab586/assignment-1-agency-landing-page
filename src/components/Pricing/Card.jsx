import GreenRight from "../SVG/GreenRight";
// comment for git push
const Card = ({ title, price, description, features, buttonText }) => {
  return (
    <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">{description}</p>
      <div className="flex items-baseline justify-center my-8">
        <span className="mr-2 text-5xl font-extrabold">${price}</span>
        <span className="text-gray-500 dark:text-gray-400">/month</span>
      </div>
      <ul role="list" className="mb-8 space-y-4 text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <GreenRight />
            <span dangerouslySetInnerHTML={{ __html: feature }} />
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4
         focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-purple-900"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default Card;

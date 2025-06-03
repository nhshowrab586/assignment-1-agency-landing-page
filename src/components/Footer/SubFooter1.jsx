const FooterColumn = ({ title, links }) => {
  return (
    <div>
      <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        {title}
      </h3>
      <ul className="text-gray-500 dark:text-gray-400">
        {links.map((link, index) => (
          <li className="mb-4" key={index}>
            <a href="#" className="hover:underline">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};


const SubFooter1 = () => {
  const footerData = [
    {
      title: "Company",
      links: ["About", "Careers", "Brand Center", "Blog"],
    },
    {
      title: "Help center",
      links: ["Discord Server", "Twitter", "Facebook", "Contact Us"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Licensing", "Terms"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Brand Center", "Blog"],
    },
    {
      title: "Download",
      links: ["iOS", "Android", "Windows", "MacOS"],
    },
  ];

  return (
    <>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
        {footerData.map((col, idx) => (
          <FooterColumn key={idx} title={col.title} links={col.links} />
        ))}
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    </>
  );
};

export default SubFooter1;

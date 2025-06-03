import dashboardFeatureImage from "../../assets/features/feature-1.png";
import featureImage2 from "../../assets/features/feature-2.png";
import SubServices from "./SubServices";
const Services1 = () => {
    return (
       <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        {/* <!-- Sub Service 1 --> */}

        <SubServices
          title="Work with tools you already use"
          description="Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease."
          features={[
            "Continuous integration and deployment",
            "Development workflow",
            "Knowledge management",
          ]}
          image={dashboardFeatureImage}
          imageLeft={true}
          shortline="Deliver great service experiences fast - without the complexity of traditional ITSM solutions."
        />

        {/* <!-- Sub Service 2 --> */}
        <SubServices
          title="We invest in the world’s potential"
          description="Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease."
          features={[
            "Dynamic reports and dashboards",
            "Templates for everyone",
            "Development workflow",
            "Limitless business automation",
            "Knowledge management",
          ]}
          image={featureImage2}
          imageLeft={false}
          shortline="Deliver great service experiences fast - without the complexity of traditional ITSM solutions."
        />
      </div>
    </section>
    );
};

export default Services1;
import Button from "../Button/Button";
import SectionDescription from "../SectionDescription";
import SectionTitle from "../SectionTitle";

const Trial = () => {
  return (
    <section class="bg-gray-50 dark:bg-gray-800">
      <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div class="max-w-screen-sm mx-auto text-center">
          <SectionTitle className="dark:text-white">
            {" "}
            Start your free trial today
          </SectionTitle>

          <SectionDescription className="mb-6 md:text-lg">
            {" "}
            Try Landwind Platform for 30 days. No credit card required.
          </SectionDescription>
          <a href="#">
  <Button className="px-5 py-2.5 mr-2 mb-2">
  Free trial for 30 days
</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Trial;

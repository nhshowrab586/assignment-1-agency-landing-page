import AirBnbIcon from "../SVG/AirBnbIcon";
import GoogleIcon from "../SVG/GoogleIcon";
import MailchimpIcpn from "../SVG/MailchimpIcpn";
import Mashable from "../SVG/Mashable";
import MicrosoftIcon from "../SVG/MicrosoftIcon";
import Spotify from "../SVG/Spotify";

const Clients = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
         <AirBnbIcon/>
          
          <GoogleIcon/>
          
           <MicrosoftIcon/>
          
           <Spotify/>
          
           <MailchimpIcpn/>
          
            <Mashable/>
          
        </div>
      </div>
    </section>
  );
};

export default Clients;

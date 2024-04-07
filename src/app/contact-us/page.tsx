import ContactForm from "@/components/ContactForm";
import "./styles.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "FashionFusion contact page",
};

function ContactUs() {
  return (
    <div className="min-h-screen">
      <div className="contact-hero-bg relative">
        <h1 className="absolute text-white bottom-5 left-[0.8rem] md:left-[3rem] lg:left-[5rem] text-[1.5rem] md:text-[2.3rem]">
          CONTACT US
        </h1>
      </div>
      <div className="mt-14 flex flex-col md:flex-row justify-between md:mt-[6rem] padding">
        <ContactForm />
        <div className="md:w-[40%] space-y-6">
          <div>
            <h1 className="text-[1.3rem] font-[600]">Visit Us</h1>
            <p className="text-[#555]">Benin City, Nigeria</p>
            <p className="text-[#555]">Phone: +234039898987</p>
          </div>
          <div>
            <h1 className="text-[1.3rem] font-[600]">Get In Touch</h1>
            <p className="text-[#555]">You can get in touch with us on this provided email. </p>
            <p className="text-[#555]">thisgooddev@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

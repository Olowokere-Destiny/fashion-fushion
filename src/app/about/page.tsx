import Image, { StaticImageData } from "next/image";
import founder1 from "../../assets/images/founder-1.png";
import founder2 from "../../assets/images/founder-2.png";
import founder3 from "../../assets/images/founder-3.png";
import founder4 from "../../assets/images/founder-4.png";
import stacy from "../../assets/images/stacy.png";
import tiffany from "../../assets/images/tiffany.png";
import james from "../../assets/images/james.png";
import quotes from "../../assets/icons/quotes.svg";
import "./styles.css";
import { arimo, nunito } from "@/utils/fontExports";
interface CardProps {
  image: StaticImageData;
  name: string;
}
interface TestimonialProps {
  image: StaticImageData;
  name: string;
  comment: string;
}
function FoundersCard({ image, name }: CardProps) {
  return (
    <div>
      <div className="h-[280px]">
        <Image
          width={100}
          height={100}
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top"
          unoptimized
        />
      </div>
      <p className={`${arimo.className} text-center font-semibold`}>{name}</p>
    </div>
  );
}

function Testimonial({ comment, name, image }: TestimonialProps) {
  return (
    <div className="px-[0.8rem] md:px-0 flex mt-[6rem] items-center md:w-3/4 mx-auto gap-x-6">
      <Image
        width={100}
        height={100}
        src={image}
        alt={name}
        className="w-[4rem] h-[4rem] md:w-[8rem] md:h-[8rem] object-cover object-top"
        unoptimized
      />
      <div className="space-y-2 md:space-y-3">
        <Image
          src={quotes}
          alt="quotes"
          width={100}
          height={100}
          className="w-4 h-4 md:w-7 md:h-7"
        />
        <p
          className={`${nunito.className} text-[0.9rem] text-[#555] font-[700]`}
        >
          {comment}
        </p>
        <p className="text-[1rem] font-semibold">{name}</p>
      </div>
    </div>
  );
}
function About() {
  return (
    <div>
      {/* Hero section */}
      <div className="hero-bg relative">
        <h1 className="absolute text-white bottom-5 left-[0.8rem] md:left-[3rem] lg:left-[5rem] text-[1.5rem] md:text-[2.3rem]">
          ABOUT FASHIONFUSION
        </h1>
      </div>
      {/* Founders section */}
      <div className="py-12 bg-[#fbfbfb]">
        <h1 className="text-center text-[1.5rem] font-[600] md:text-[2rem]">
          The Founders
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 padding gap-3 lg:gap-6 my-8">
          <FoundersCard image={founder1} name="HM Jawad" />
          <FoundersCard image={founder2} name="Furqan Abid" />
          <FoundersCard image={founder3} name="Abdullah Ah" />
          <FoundersCard image={founder4} name="Abrar Khan" />
        </div>
      </div>
      {/* Testimonials section */}
      <div className="py-12">
        <h1 className="text-center text-[1.5rem] font-[600] md:text-[2rem]">
          Testimonials
        </h1>
        <div className="mt-6">
          <Testimonial
            name="Stacy"
            comment="Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries."
            image={stacy}
          />
          <Testimonial
            name="Tiffany"
            comment="I ordered 5 shirts from them and received them in no time. The customer support was awesome!"
            image={tiffany}
          />
          <Testimonial
            name="James"
            comment="I got a wrong shirt so I contacted them and they happily offered me a refund. I will surely shop from them again."
            image={james}
          />
        </div>
      </div>
    </div>
  );
}

export default About;

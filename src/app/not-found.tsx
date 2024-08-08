import Image from "next/image";
import notFOundImg from "../assets/images/not-found.svg";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Page not found",
  description: "The requested page could not be found.",
};
function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <Image
        width={100}
        height={100}
        src={notFOundImg}
        alt="not found"
        className="w-[20rem] md:w-[30rem] h-[20rem]"
      />

      <p className="text-center text-[1rem] font-semibold text-blue">
        Sorry, this page could not be found.
      </p>
    </div>
  );
}

export default NotFound;

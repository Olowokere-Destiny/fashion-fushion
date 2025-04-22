"use client";
import { useRouter } from "next/navigation";
import { MdOutlineCancel } from "react-icons/md";
function Cancel() {
  const router = useRouter();
  return (
    <div className="min-h-screen -mt-8 flex items-center justify-center flex-col">
      <div className="w-[60vw] mx-auto flex justify-center h-[300px]">
        <MdOutlineCancel className="w-full h-full text-red-500" />
      </div>
      <div className="text-center mt-4 font-semibold text-[1.7rem]">
        Payment could not be processed!
      </div>
      <div
        onClick={() => router.replace("/")}
        className="bg-blue text-white px-4 py-2 mt-6 block w-max mx-auto cursor-pointer"
      >
        BACK TO HOME
      </div>
    </div>
  );
}

export default Cancel;

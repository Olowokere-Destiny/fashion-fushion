"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

function Success() {
    const router = useRouter();
    useEffect(()=>{
      const search = new URL(window?.location.href).searchParams.get("session_id")
        if (!search) {
            router.replace("/")
        }
    },[])
  return (
    <div className="min-h-screen -mt-8 flex items-center justify-center flex-col">
        <div className="w-[60vw] mx-auto flex justify-center h-[300px]">

        <IoIosCheckmarkCircleOutline className="w-full h-full text-green-500" />
        </div>
        <div className="text-center mt-4 font-semibold text-[1.7rem]">Payment successful!</div>
        <div onClick={()=>router.replace("/")} className="bg-blue text-white px-4 py-2 mt-6 block w-max mx-auto cursor-pointer">
          BACK TO HOME
        </div>
    </div>
  )
}

export default Success
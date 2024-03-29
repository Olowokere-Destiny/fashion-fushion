import { arimo } from "@/utils/fontExports"

function Footer() {
  return (
    <div className="bg-[#fbfbfb] padding py-6 grid gap-y-6 grid-cols-2 md:flex justify-between">
        <div>
            <h2 className={`${arimo.className} font-[700] text-[0.7rem]`}>COMPANY INFO</h2>
            <div className="mt-4 text-[0.9rem] space-y-1">
            <p>About Us</p>
            <p>Latest Posts</p>
            <p>Contact Us</p>
            <p>Shop</p>
            </div>
        </div>
        <div>
            <h2 className={`${arimo.className} font-[700] text-[0.7rem]`}>HELP LINKS</h2>
            <div className="mt-4 text-[0.9rem] space-y-1">
            <p>Tracking</p>
            <p>Order Status</p>
            <p>Delivery</p>
            <p>Shipping Info</p>
            </div>
        </div>
        <div>
            <h2 className={`${arimo.className} font-[700] text-[0.7rem]`}>USEFUL LINKS</h2>
            <div className="mt-4 text-[0.9rem] space-y-1">
            <p>Special Offers</p>
            <p>Gift Cards</p>
            <p>Advertising</p>
            <p>Terms of use</p>
            </div>
        </div>
        <div>
        <h2 className={`${arimo.className} font-[700] text-[0.7rem]`}>GET IN THE KNOW</h2>
        <div className="mt-4 text-[0.9rem] space-y-1">
            <input type="email" placeholder="Enter email" className="placeholder:text-[#555] outline-none bg-transparent border-black border-b-[1.5px]" />
        </div>

        </div>
    </div>
  )
}

export default Footer
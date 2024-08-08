import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import Image from "next/image";

function Slide({
  photos,
}: {
  photos: { url: string }[];
}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider
      {...settings}
      className="relative w-4/6 max-h-[280px] md:max-h-[350px] lg:max-h-[400px] md:w-[35vw] lg:w-[25vw] overflow-hidden"
    >
      {photos?.map((photo, i) => {
        return (
          <div key={i} className="max-h-[280px] md:max-h-[350px] lg:max-h-[400px] md:w-[35vw] lg:w-[25vw]">
            <Image
              src={"https://" + photo.url}
              width={200}
              height={200}
              alt="Product Image"
              unoptimized
              className="w-full h-full object-cover"
            />
          </div>
        );
      })}
    </Slider>
  );
}

export default Slide;

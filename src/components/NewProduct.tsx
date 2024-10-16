"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { MdMonetizationOn } from "react-icons/md";
import Button from "./Button";
import Berikutnya from "../../public/assets/img/Berikutnya.svg";
import Sebelumnya from "../../public/assets/img/Sebelumnya.svg";

const products = [
  {
    id: 1,
    title: "Machia Edwondo",
    image: "/assets/img/product/MachiaEdwondo.png",
    price: "Rp 338.000,-",
    oldPrice: "Rp 362.000,-",
    isSale: true,
    rating: 3.5,
    type: "sepatu Pria, kasual",
  },
  {
    id: 2,
    title: "Le Modiste - Sepatu Kasual Wanita",
    image: "/assets/img/product/MachiaAndora.png",
    price: "Rp 623.000,-",
    isSale: true,
    rating: 3.5,
    type: "sepatu Pria, kasual",
  },
  {
    id: 3,
    title: "Everest Sepatu Gunung Model Kinabalu",
    image: "/assets/img/product/Everest.png",
    price: "Rp 910.000,-",
    oldPrice: "Rp 1.080.000,-",
    isSale: true,
    rating: 3.5,
    type: "sepatu pria, boots",
  },
  {
    id: 4,
    title: "Playoon - Edisi Khusus Borobudur Marathon 2020",
    image: "/assets/img/product/Borobudur.png",
    price: "Rp 420.000,-",
    isSale: true,
    rating: 3.5,
    type: "sepatu pria, olahraga",
  },
  {
    id: 5,
    title: "FlattyShoe Mandalika 3",
    image: "/assets/img/product/Mandalika.png",
    price: "Rp 367.000,-",
    isSale: true,
    rating: 3.5,
    type: "sepatu Pria, kasual",
  },
  {
    id: 6,
    title: "Playoon - Merapi Jogger Shoe",
    image: "/assets/img/product/BalanciaC.png",
    price: "Rp. 288.000,-",
    oldPrice: "Rp 391.000,-",
    isSale: true,
    rating: 3.5,
    type: "sepatu Pria, olahraga",
  },
  {
    id: 7,
    title: "Playoon - K32 Jogger Shoe",
    image: "/assets/img/product/PlayoonJogger.png",
    price: "Rp 346.000,-",
    isSale: true,
    rating: 4.0,
    type: "sepatu pria, olahraga",
  },
  {
    id: 8,
    title: "El-Tegra Krakatoa 2 Sepatu  Pendaki",
    image: "/assets/img/product/ElTegra.png",
    price: "Rp 342.000,-",
    oldPrice: "Rp 562.000,-",
    isSale: true,
    rating: 3.5,
    type: "sepatu pria, boots",
  },
];

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<FaStar key={i} className="h-4 w-4 text-tersier-theme" />);
    } else if (i === Math.ceil(rating)) {
      stars.push(
        <FaStarHalfAlt key={i} className="h-4 w-4 text-tersier-theme" />
      );
    } else {
      stars.push(<FaRegStar key={i} className="h-4 w-4 text-tersier-theme" />);
    }
  }
  return stars;
};

const NewProductSlider = () => {
  return (
    <div className="container mx-auto px-2 md:hidden  md:px-16 ">
      <div className="flex justify-between items-center mb-5 px-3">
        <h2 className="text-lg font-bold md:text-3xl">Product Terbaru</h2>
        <Button
          variant="outline"
          className="rounded-[50px] w-[108px] text-kepala-6 leading-4 tracking-wider px-6 py-2.5 md:hidden"
        >
          Lainnya
        </Button>
        <Button
          variant="outline"
          className="hidden md:block rounded-[80px] w-[220px] text-base leading-4 tracking-wider px-6 py-2.5"
        >
          Produk Lainnya
        </Button>
      </div>

      {/* hp */} 
      <div className="md:hidden grid grid-cols-2 gap-4">  
        {products.map((product) => (
          <div key={product.id} className="p-2 rounded-lg relative">
            {product.isSale && (
              <span className="absolute top-6 left-6 bg-tersier-theme text-white text-xs px-2 py-1 rounded-[50px] flex items-center z-30">
                <MdMonetizationOn className="w-4 h-4 mr-1" />
                SALE
              </span>
            )}

          
            <div className="flex  z-1">
              <Image
                src={product.image}
                alt={product.title}
                width={150}
                height={150}
                className="mx-auto sm:w-full"
              />
            </div>

            <div className="text-left flex flex-col justify-center  mt-2 ">
              <p className="text-body-span text-tersier-t font-bold uppercase">
                {product.type}
              </p>
              <h2 className="text-sm font-bold mt-1">{product.title}</h2>
              <div className="flex items-center gap-1 mt-1">
                {renderStars(product.rating)}
                <span className="text-sm text-tersier-t">
                  ({product.rating})
                </span>
              </div>
              <div className="mt-2">
                {product.oldPrice && (
                  <p className="text-tersier-t line-through text-sm ">
                    {product.oldPrice}
                  </p>
                )}
                <p
                  className={`font-bold text-sm ${
                    product.isSale ? "text-primary-theme" : "text-black"
                  }`}
                >
                  {product.price}
                </p>
              </div>
            </div>

            {/* Cart */}
            <div className="flex justify-start mt-3">
              <Button
                variant="primary"                
                className="w-[150px] rounded-[50px]  sm:rounded-full font-bold text-kepala-6 leading-4 tracking-wider px-[20px] py-[6px] "
              >
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden md:block relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true,  el: '.swiper-pagination mt-2 ' }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="p-4 rounded-lg relative">
                {product.isSale && (
                  <span className="absolute top-8 left-8 bg-tersier-theme text-white text-xs px-2 py-1 rounded-[50px] flex items-center z-30">
                    <MdMonetizationOn className="w-4 h-4 mr-1" />
                    SALE
                  </span>
                )}
                <div className="flex">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={250}
                    height={250}
                    className="mx-auto  lg:w-full"
                  />
                </div>

                <div className="text-left mt-2 ">
                  <p className="text-xs text-tersier-t font-bold uppercase">
                    {product.type}
                  </p>
                  <h2 className="text-base font-bold mt-1">{product.title}</h2>
                  <div className="flex items-center gap-1 mt-1">
                    {renderStars(product.rating)}
                    <span className="text-sm text-tersier-t">
                      ({product.rating})
                    </span>
                  </div>
                  <div className="mt-2 flex flex-row justify-between ">
                    {product.oldPrice && (
                      <div className="text-tersier-t line-through text-body-base">
                        {product.oldPrice}
                      </div>
                    )}
                    <div
                      className={`font-bold text-body-base ${
                        product.isSale ? "text-primary-theme" : "text-black"
                      }`}
                    >
                      {product.price}
                    </div>
                  </div>
                </div>

                <div className="flex justify-start mt-2">
                  <Button
                    variant="primary"                    
                    className="w-[150px] rounded-[50px] font-bold text-sm leading-4 tracking-wider text-center py-2.5"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* nav */}
        <div className="swiper-button-prev absolute top-1/4 left-0 z-10 transform -translate-y-full cursor-pointer">
          <Image src={Sebelumnya} alt="Sebelumnya" width={80} height={80} />
        </div>
        <div className="swiper-button-next absolute top-1/4 right-0 z-10 transform -translate-y-full cursor-pointer">
          <Image src={Berikutnya} alt="Berikutnya" width={80} height={80} />
        </div>
      </div>
    </div>
  );
};

export default NewProductSlider;

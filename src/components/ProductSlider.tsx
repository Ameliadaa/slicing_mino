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
    title: "Playoon - Kalimutu Run Model A",
    image: "/assets/img/product/Kelimutu.png",
    price: "Rp 325.000,-",
    oldPrice: "Rp 387.000,-",
    isSale: true,
    rating: 3.5,
    type: "Sepatu Pria, Olahraga",
  },
  {
    id: 2,
    title: "Le Modiste - Sepatu Kasual Wanita",
    image: "/assets/img/product/LeModiste.png",
    price: "Rp 319.000,-",
    isSale: true,
    rating: 3.5,
    type: "Sepatu Wanita, Kasual", 
  },
  {
    id: 3,
    title: "X-Voyager Vintage Forrester",
    image: "/assets/img/product/Voyager.png",
    price: "Rp 399.000,-",
    isSale: true,
    rating: 5.0,
    type: "Sepatu Pria, kasual",
  },
  {
    id: 4,
    title: "Le Cadillac Insigma 91",
    image: "/assets/img/product/Cadillac.png",
    price: "Rp 387.000,-",
    isSale: true,
    rating: 3.5,
    type: "Sepatu Pria, Kasual",
  },
  {
    id: 5,
    title: "Balancia Sandal Kulit B",
    image: "/assets/img/product/BalanciaB.png",
    price: "Rp 180.000,-",
    isSale: true,
    rating: 3.5,
    type: "sandal, jepit pria",
  },
  {
    id: 6,
    title: "Balancia Sandal Kulit C",
    image: "/assets/img/product/BalanciaC.png",
    price: "Rp 212.000,-",
    isSale: true,
    rating: 4.5,
    type: "sandal, jepit pria",
  },
  {
    id: 7,
    title: "Playoon - Aveola Diana",
    image: "/assets/img/product/Aveola.png",
    price: "Rp 332.000,-",
    isSale: true,
    rating: 4.0,
    type: "sepatu wanita, olahraga",
  },
  {
    id: 8,
    title: "Playoon - Black Mamba",
    image: "/assets/img/product/BlackMamba.png",
    price: "Rp 342.000,-",
    isSale: true,
    rating: 3.5,
    type: "sepatu wanita, olahraga",
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

const ProductSlider = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex justify-between items-center mb-5 px-3">
        <h2 className="text-lg font-bold md:text-3xl">Pilihan Minggu Ini</h2>
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
          <div key={product.id} className="p-3 rounded-lg relative">
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
                className="mx-auto"
              />
            </div>

            <div className="text-left mt-2">
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
            <div className="flex justify-center mt-3">
              <Button
                variant="primary"                
                className="w-[150px] rounded-[50px] sm:w-full sm:rounded-full font-bold text-kepala-6 leading-4 tracking-wider px-[20px] py-[6px]"
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
                    className="mx-auto"
                  />
                </div>

                <div className="text-left mt-2 px-2">
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

export default ProductSlider;

"use client";
import Image from "next/image";
import hero2 from "../../public/assets/img/hero2.png";
import hero3 from "../../public/assets/img/hero3.png";
import Kategori2 from "../../public/assets/img/kategori/Kategori2.png";
import Kategori4 from "../../public/assets/img/kategori/Kategori4.png";

const categories = [
  {
    id: 1,
    title: "Sepatu Anak",
    image: hero2,
  },
  {
    id: 2,
    title: "Sandal",
    image: Kategori2,
  },
  {
    id: 3,
    title: "Sepatu Wanita",
    image: hero3,
  },
  {
    id: 4,
    title: "Sepatu Pria",
    image: Kategori4,
  },
];

const KategoriProduk = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:px-16 lg:px-20">
      <div className="grid grid-cols-2 gap-4">
        {categories.map((category, index) => (
          <div key={category.id} className="relative">
            <Image
              src={category.image}
              alt={category.title}
              width={150}
              height={150}
              className=" w-40 responsive-sm:w-full h-40 md:w-full md:h-full object-cover rounded-lg"
            />

            <div
              className={`absolute bottom-0  bg-opacity-50 py-2 ${
                index % 2 === 0
                  ? "left-0 ml-4 text-left"
                  : "right-6 mr-0 md:right-0 md:mr-4 text-right"
              } w-full`}
            >
              <h2 className="text-white font-bold text-sm md:text-lg">
                {category.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KategoriProduk;

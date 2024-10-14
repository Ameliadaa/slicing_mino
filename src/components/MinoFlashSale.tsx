import Button from "./Button";
import Image from "next/image";
import DaftarBank from "../../public/assets/img/DaftarBank.png";

const MinoFlashSale = () => {
  return (
    <div className=" bg-primary-theme  ">
      <div className=" container mx-auto flex flex-col p-5 md:hidden">
        <h3 className="text-lg font-bold leading-5 text-primary-1">
          MinoStore Flash Sale 12.12
        </h3>
        <p className="text-sm font-normal leading-4 mt-1 text-primary-1">
          Diskon ongkir ke seluruh Indonesia!
        </p>
        <Button
          variant="secondary"
          className="font-normal text-sm leading-4 tracking-wider w-[209px] h-[24px] mt-5 px-5 py-1"
        >
          Info Selengkapnya
        </Button>
      </div>
      <div className="bg-white px-10 py-[34px] md:py-5 text-center flex justify-center ">
        <Image src={DaftarBank} alt="DaftarBank" className="w-[280px] h-[42px] md:w-[465.23px] md:h-[70px]" />
      </div>
    </div>
  );
};

export default MinoFlashSale;

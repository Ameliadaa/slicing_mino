"use client";
import Image from "next/image";
import CTA from "../../public/assets/img/CTA.png";
import Button from "@/components/Button";

const CTAComponent = () => {
  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 mt-4">
  
      <Image
        src={CTA} 
        alt="CTA Background"
        fill 
        style={{ objectFit: 'cover' }} 
        className="absolute inset-0" 
      />
      
   
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center ">
        <div className="text-white flex flex-col justify-start text-left md:flex-row md:justify-between items-center ml-8 md:container md:mx-auto space-y-4 md:space-y-0 md:space-x-4 px-4">
          <div>
            <h2 className="text-xl md:text-2xl font-bold w-[200px] md:w-[390px]">Diskon Nggak Pake Tanggung.</h2>
            <p className="text-base leading-6 md:text-base mt-2 w-[200px] md:w-[390px]">Plus bonus ongkir ke seluruh Indonesia.</p>
          </div>

          <Button variant="primary" className="text-white font-semibold rounded-full md:w-[250px] w-[200px] text-sm md:text-base">
            INFO SELENGKAPNYA
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTAComponent;

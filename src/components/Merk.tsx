import Image from "next/image";
import wings from "../../public/assets/img/Merk/wings.png";
import footware from "../../public/assets/img/Merk/footware.png";
import maraton from "../../public/assets/img/Merk/maraton.png";
import thunder from "../../public/assets/img/Merk/thunder.png";

const Merk = () => {
  return (
    <div className="p-4 md:hidden">
      <h3 className="flex justify-center py-2 text-xl md:text-2xl font-bold">
        Merek - Merek Tergabung
      </h3>
      <div className="flex flex-row justify-center gap-x-8 py-3 md:mt-4">
        <Image src={wings} alt="wings" width={65} height={40} priority />
        <Image src={footware} alt="footware" width={65} height={40} priority />
        <Image src={maraton} alt="maraton" width={65} height={65} priority />
        <Image src={thunder} alt="thunder" width={65} height={65} priority />
      </div>
    </div>
  );
};

export default Merk;

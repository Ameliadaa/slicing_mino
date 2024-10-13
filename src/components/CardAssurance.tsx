"use client";
import Image from "next/image";
import LayananPelanggan from "../../public/assets/img/Assurance/LayananPelanggan.svg";
import Hadiah from "../../public/assets/img/Assurance/Hadiah.svg";
import Retur from "../../public/assets/img/Assurance/Retur.svg";
import Sepatu from "../../public/assets/img/Assurance/Sepatu.svg";

const assurances = [
  {
    id: 1,
    image: Sepatu,
    alt: "Sepatu",
    title: "Kualitas Terpercaya",
    description: "Produk kami dibuat dari bahan berkualitas. Kami bekerjasama dengan mereka yang paling berpengalaman dalam industri."
  },
  {
    id: 2,
    image: Hadiah,
    alt: "Hadiah",
    title: "Kirim Sebagai Hadiah",
    description: "Ingin memberi bingkisan pada orang tersayang dengan kemasan serta pesan khusus? Sampaikan saja, kami yang siapkan."
  },
  {
    id: 3,
    image: Retur,
    alt: "Retur",
    title: "Pengembalian Mudah",
    description: "Tidak puas dengan pembelian Anda (kualitas buruk atau salah ukuran)? Kami siap untuk melakukan retur barang kapanpun."
  },
  {
    id: 4,
    image: LayananPelanggan,
    alt: "Layanan Pelanggan",
    title: "Layanan Pelanggan",
    description: "Untuk semua informasi, kami selalu siap untuk melayani kebutuhan dan pertanyaan Anda."
  }
];

export default function CardAssurance() {
  return (
    <div className="p-5 container mx-auto md:px-16 lg:px-20">
      <div className="grid gap-x-4 gap-y-6 md:gap-9 grid-cols-2 py-5 md:flex flex-row">
        {assurances.map((assurance) => (
          <div
            key={assurance.id}
            className="bg-primary-1 px-4 py-8 outline outline-1 !outline-tersier-t w-[150px]  md:w-[300px] lg:w-full"
          >
            <div className="gap-y-8">
              <Image
                src={assurance.image}
                alt={assurance.alt}
                className="h-[60px] w-[60px] md:h-[100px] md:w-[100px] mx-auto"
                priority 
              />
              <div className="gap-y-4 mt-8 text-center">
                <p className="text-sm md:text-base font-bold">{assurance.title}</p>
                <p className="text-xs md:text-sm font-normal mt-4">
                  {assurance.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

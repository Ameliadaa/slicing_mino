// 'use client';

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination, Autoplay } from 'swiper/modules'; // Tambahkan Autoplay
// import Image from 'next/image';
// import Testi from "../../public/assets/img/Testi.png";
// import { StaticImageData } from 'next/image';

// interface Testimonial {
//   id: number;
//   name: string;
//   location: string;
//   message: string;
//   avatarUrl: StaticImageData;
// }

// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     name: 'Markus Sutiyoso',
//     location: 'Cirebon, Jawa Barat',
//     message: 'Mino Clean masih tergolong jasa yang baru, tapi para kru  sudah lihai. Beda jenis sepatu, beda teknik pembersihan yang digunakan. Salut.',
//     avatarUrl: Testi, // Sesuaikan dengan path avatar
//   },
//   {
//     id: 2,
//     name: 'Siti Aminah',
//     location: 'Bandung, Jawa Barat',
//     message: 'Pelayanan yang sangat memuaskan dan hasilnya benar-benar bersih. Sepatu saya seperti baru lagi.',
//     avatarUrl: Testi,
//   },
//   {
//     id: 3,
//     name: 'Reza',
//     location: 'Cirebon, Jawa Barat',
//     message: 'Mino Clean masih tergolong jasa yang baru, tapi para kru  sudah lihai. Beda jenis sepatu, beda teknik pembersihan yang digunakan. Salut.',
//     avatarUrl: Testi, // Sesuaikan dengan path avatar
//   },
//   {
//     id: 4,
//     name: 'Fahmi Pahlevi',
//     location: 'Bandung, Jawa Barat',
//     message: 'Pelayanan yang sangat memuaskan dan hasilnya benar-benar bersih. Sepatu saya seperti baru lagi.',
//     avatarUrl: Testi,
//   },
// ];

// const Testimonials: React.FC = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 pb-8">
//       <h2 className="text-center text-lg font-bold mb-6 md:text-2xl">Apa Kata Mereka?</h2>
      
//       {/* Slider untuk tampilan mobile */}
//       <div className="block md:hidden">
//         <Swiper
//           pagination={{ clickable: true}}
//           autoplay={{ delay: 5000, disableOnInteraction: false }} // Autoplay selama 5000 ms (5 detik)
//           modules={[Pagination, Autoplay]} // Tambahkan Autoplay ke modul
//           className="mySwiper"
//         >
//           {testimonials.map((testimonial) => (
//             <SwiperSlide key={testimonial.id}>
//               <div className="bg-white p-4 rounded-lg shadow-md">
//                 <p className="text-gray-700 text-sm mb-4">{testimonial.message}</p>
//                 <div className="flex items-center">
//                   <Image 
//                     src={testimonial.avatarUrl} 
//                     alt={testimonial.name} 
//                     className="w-10 h-10 rounded-full mr-3"
//                     width={40} // Tentukan lebar gambar
//                     height={40} // Tentukan tinggi gambar
//                   />
//                   <div>
//                     <h4 className="font-semibold text-sm">{testimonial.name}</h4>
//                     <p className="text-sm text-gray-500">{testimonial.location}</p>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Tampilan grid untuk desktop */}
//       <div className="hidden md:grid md:grid-cols-3 md:gap-4">
//         {testimonials.map((testimonial) => (
//           <div key={testimonial.id} className="bg-white p-4 rounded-lg shadow-md">
//             <p className="text-gray-700 mb-4">{testimonial.message}</p>
//             <div className="flex items-center">
//               <Image 
//                 src={testimonial.avatarUrl} 
//                 alt={testimonial.name} 
//                 className="w-10 h-10 rounded-full mr-3"
//                 width={40} // Tentukan lebar gambar
//                 height={40} // Tentukan tinggi gambar
//               />
//               <div>
//                 <h4 className="font-semibold">{testimonial.name}</h4>
//                 <p className="text-sm text-gray-500">{testimonial.location}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules'; 
import Image from 'next/image';
import Testi from "../../public/assets/img/Testi.png";
import { StaticImageData } from 'next/image';
import { BiSolidQuoteRight } from 'react-icons/bi';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  message: string;
  avatarUrl: StaticImageData;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Markus Sutiyoso',
    location: 'Cirebon, Jawa Barat',
    message: 'Mino Clean masih tergolong jasa yang baru, tapi para kru  sudah lihai. Beda jenis sepatu, beda teknik pembersihan yang digunakan. Salut.',
    avatarUrl: Testi,
  },
  {
    id: 2,
    name: 'Siti Aminah',
    location: 'Bandung, Jawa Barat',
    message: 'Pelayanan yang sangat memuaskan dan hasilnya benar-benar bersih. Para kru  sudah lihai, Sepatu saya seperti baru lagi. cuci disini sangat luar biasa',
    avatarUrl: Testi,
  },
  {
    id: 3,
    name: 'Reza',
    location: 'Cirebon, Jawa Barat',
    message: 'Mino Clean masih tergolong jasa yang baru, tapi para kru  sudah lihai. Beda jenis sepatu, beda teknik pembersihan yang digunakan. Salut.',
    avatarUrl: Testi,
  },
  {
    id: 4,
    name: 'Fahmi Pahlevi',
    location: 'Bandung, Jawa Barat',
    message: 'Pelayanan yang sangat memuaskan dan hasilnya benar-benar bersih. Para kru  sudah lihai, Sepatu saya seperti baru lagi. cuci disini sangat luar biasa ',
    avatarUrl: Testi,
  },
]

const Testimonials = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-8 md:hidden">
      <h2 className="text-center text-kepala-5 font-bold mb-6 md:text-2xl">Apa Kata Mereka?</h2>


      <Swiper
        pagination={{ clickable: true,  el: '.custom-pagination' }}
        autoplay={{ delay: 5000, disableOnInteraction: false }} 
        modules={[Pagination, Autoplay]} 
        spaceBetween={20}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1, 
          },
          768: {
            slidesPerView: 2, 
          },
          1024: {
            slidesPerView: 3, 
          },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white border  p-4 rounded-lg shadow-md mb-4 h-[220px] ">
              <p className="text-gray-700 text-sm mb-4">{testimonial.message}</p>
              <div className="flex items-center">
                <Image 
                  src={testimonial.avatarUrl} 
                  alt={testimonial.name} 
                  className="w-10 h-10 rounded-full mr-3"
                  width={40} 
                  height={40} 
                />
                <div>
                  <h4 className="font-semibold text-base">{testimonial.name}</h4>
                  <p className="text-xs tracking-wider uppercase text-gray-500">{testimonial.location}</p>
                </div>
                <BiSolidQuoteRight className="absolute bottom-24 md:bottom-20 right-4 text-secondary-theme text-3xl" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='custom-pagination'></div>
    </div>
  );
};

export default Testimonials;


"use client";

import React from "react";
import Image from "next/image";
import Blog1 from "../../public/assets/img/Blog/Blog1.png";
import Blog2 from "../../public/assets/img/Blog/Blog2.png";
import Blog3 from "../../public/assets/img/Blog/Blog3.png";
import { StaticImageData } from "next/image";
import Button from "./Button";

interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  author: string;
  comments: number;
  excerpt: string;
  imageUrl: StaticImageData;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Sepatu Kotor? Untung Udah Ada Mino Clean dari Mino Store",
    category: "Promo",
    date: "10 Nov 2023",
    author: "Admin",
    comments: 3,
    excerpt:
      "Laiknya diri sendiri, sepatu juga butuh dirawat. Seti- daknya setiap sebulan sekali, sepatu perlu dibersih- kan. Namun pembersihan tergantung jenis bahan se...",
    imageUrl: Blog1,
  },
  {
    id: 2,
    title: "Sepatu Kotor? Untung Udah Ada Mino Clean dari Mino Store",
    category: "Promo",
    date: "30 Nov 2023",
    author: "Admin",
    comments: 3,
    excerpt:
      "Laiknya diri sendiri, sepatu juga butuh dirawat. Seti- daknya setiap sebulan sekali, sepatu perlu dibersih- kan. Namun pembersihan tergantung jenis bahan se...",
    imageUrl: Blog2,
  },
  {
    id: 3,
    title: "Tips Agar Kaki Tidak Keseleo Sewaktu Berlari",
    category: "Tips & Trik",
    date: "26 Nov 2023",
    author: "Admin",
    comments: 2,
    excerpt:
      "Jogging atau lari-lari pendek menjadi salah satu tren olahraga di tengah pandemi. Namun, sayangnya tren ini diikuti oleh pelari pemula.",
    imageUrl: Blog3,
  },
];

const Blog = () => {
  return (
    <div className="container mx-auto px-5 py-12  md:px-16 lg:px-20">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-bold md:text-3xl">Blog</h2>
        <Button
          variant="outline"
          className="rounded-[80px] w-[118px] text-sm leading-4 tracking-wider px-6 py-2.5 md:hidden"
        >
          Lainnya
        </Button>
        <Button
          variant="outline"
          className="hidden md:block rounded-[80px] w-[220px] text-base leading-4 tracking-wider px-6 py-2.5"
        >
          Lainnya
        </Button>
      </div>

      <div className="flex flex-col md:flex-row md:gap-4 mt-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="mb-6 md:mb-0 bg-white  overflow-hidden md:flex-1"
          >
            <Image
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-48 object-cover"
              width={700}
              height={400}
            />
            <div className="py-4">
              <span className="text-xs font-bold text-primary-theme uppercase">
                {post.category}
              </span>
              <h3 className="text-lg font-bold mt-2">{post.title}</h3>
              <div className="flex items-center text-2xl text-tersier-theme mt-2 uppercase">
                <span className="text-gray-500 text-xs">{post.date}</span>
                <span className="mx-2">·</span>
                <span className="text-gray-500 text-xs">
                  Oleh {post.author}
                </span>
                <span className="mx-2">·</span>
                <span className="text-gray-500 text-xs">
                  {post.comments} Komentar
                </span>
              </div>
              <p className="text-gray-500 text-sm mt-2">{post.excerpt}</p>

              <Button
                variant="primary"
                className="mt-4 inline-block text-sm md:text-base"
              >
                Baca Selengkapnya
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

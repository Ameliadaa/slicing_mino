"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { FaSearch, FaBars } from "react-icons/fa";
import {
  MdMenuOpen,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdAccountCircle,
  MdLocalShipping,
  MdKeyboardArrowRight,
} from "react-icons/md";
import Logomino from "../../public/Logomino.svg";
import Logo from "../../public/Logo.svg";
import SearchComponent from "./Inputsearch";
import Aksi from "../../public/assets/img/cart/Aksi.png";
import Cart from "../../public/assets/img/cart/cart.png";
import Voyager from "../../public/assets/img/product/Voyager.png";
import BlackMamba from "../../public/assets/img/product/BlackMamba.png";
import Aveola from "../../public/assets/img/product/Aveola.png";
import Borobudur from "../../public/assets/img/product/Borobudur.png";
import Kelimutu from "../../public/assets/img/product/Kelimutu.png";
import Mandalika from "../../public/assets/img/product/Mandalika.png";
import LeModiste from "../../public/assets/img/product/LeModiste.png";
import Merapi from "../../public/assets/img/product/Merapi.png";

type DropdownItem = {
  title: string;
};
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<number | null>(null);
  const [isHydrated, setIsHydrated] = useState<boolean>(false);
  const [isSubmenuSelected, setIsSubmenuSelected] = useState(false);
  const [openSubmenuVoyager, setOpenSubmenuVoyager] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(
    null
  );

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return null;
  }

  const toggleMenu = (menu: string | null) => {
    if (openMenu === menu) {
      setOpenMenu(null);
    } else {
      setOpenMenu(menu);
    }
  };

  const toggleSubmenu = () => {
    setOpenSubmenu(!openSubmenu);
  };

  const toggleSubmenuVoyager = () => {
    setOpenSubmenuVoyager(!openSubmenuVoyager);
  };

  const handleDropdown = (index: number | null) => {
    setIsDropdownOpen(isDropdownOpen === index ? null : index);
  };

  const handleSubmenuClick = (title: string) => {
    const image = submenuImages[title];
    if (image) {
      setSelectedImage(image);
      setIsSubmenuSelected(true);
    } else {
      setSelectedImage(null);
      setIsSubmenuSelected(false);
    }
  };

  type SubmenuImagesType = {
    [key: string]: StaticImageData;
  };

  const submenuImages: SubmenuImagesType = {
    "Vintage Forreste": Voyager,
    "Vintage Strobero": BlackMamba,
    "Vintage Shoe 1.0": Aveola,
    "El Dorado": Borobudur,
    "Unhinted": Kelimutu,
    "Cursed Again": Mandalika,
    "Nurture": LeModiste,
    "Secret Sky 2021": Merapi,
  };

  return (
    <header>
      {/* Navbar */}
      <nav className="bg-primary-1 md:bg-primary-theme p-4 z-50 fixed top-0 left-0 w-full ">
        <div className="container mx-auto flex justify-between items-center">
          {/* Menu  HP*/}
          <div className="md:hidden w-full flex items-center responsive-sm:px-4 ">
            <div className="w-full flex justify-between items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <MdMenuOpen
                    size={24}
                    className="text-primary-theme"
                  />
                ) : (
                  <FaBars size={24} className="text-primary-theme" />
                )}
              </button>
              <Image
                src={Logomino}
                alt="Logomino"
                width={70}
                height={20}
                priority
              />
              <Image src={Aksi} alt="Aksi" width={24} height={24} priority />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-16 flex justify-between items-center">
          <div className="hidden md:flex items-center space-x-6">
            <FaSearch
              className="text-secondary-theme cursor-pointer"
              size={24}
            />
          </div>

          {/* Logo */}
          <div className="hidden md:flex items-center justify-center">
            <Image src={Logo} alt="Logo" width={100} height={50} priority />
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <Image src={Cart} alt="Cart" width={32} height={32} priority />
            <MdAccountCircle
              className="text-secondary-theme cursor-pointer"
              size={32}
            />
          </div>
        </div>

        {/* Links  Desktop */}
        <div className="hidden md:flex justify-center space-x-8 mt-4 text-sm font-semibold text-white relative">
          <a
            href="#"
            className="hover:text-secondary-theme uppercase px-4 py-2"
          >
            Beranda
          </a>

          <div
            className="relative"
            onMouseEnter={() => handleDropdown(1)}
            onMouseLeave={() => handleDropdown(null)}
          >
            <button
              className={`hover:text-primary-theme hover:bg-primary-1 focus:bg-primary-1 focus:text-primary-theme flex items-center space-x-1 ${
                isDropdownOpen === 1 ? "bg-primary-1 text-primary-theme" : ""
              }`}
            >
              <span className="uppercase px-4 py-2">Belanja</span>
              {isDropdownOpen === 1 ? (
                <MdKeyboardArrowUp className="text-secondary-theme" size={24} />
              ) : (
                <MdKeyboardArrowDown
                  className="text-secondary-theme"
                  size={24}
                />
              )}
            </button>
            {isDropdownOpen === 1 && (
              <div className="fixed top-[120px] left-0 right-0 w-screen bg-primary-1 text-primary-t p-4 shadow-lg z-50">
                <h3 className="text-kepala-5 font-bold text-primary-theme px-24 my-4 uppercase">
                  Belanja
                </h3>
                <hr className="border-t-[0.3px] border-primary-theme my-2 mx-24" />
                <div className="flex space-x-4 px-24 text-primary-theme font-normal hover:font-bold text-body-base">
                  <div className="space-y-2 w-1/3">
                    <DropdownItem title="Semua Merk" />
                    <div
                      className="relative hover:bg-gray-200 p-2 cursor-pointer"
                      onClick={toggleSubmenu}
                    >
                      <div
                        className={`flex items-center justify-between text-primary-theme hover:font-bold font-normal text-body-base ${
                          openSubmenu || isSubmenuSelected ? "font-bold" : ""
                        }`}
                      >
                        <span>X-Voyager</span>
                        <MdKeyboardArrowRight
                          size={20}
                          className="text-secondary-theme"
                        />
                      </div>
                    </div>
                    <DropdownItem title="Balencia" />
                    <DropdownItem title="Cadillac" />
                    <DropdownItem title="Playon" />
                    <DropdownItem title="Machia" />
                    <DropdownItem title="Everest" />
                    <DropdownItem title="Marathon" />
                  </div>

                  <div className="w-1/3 pb-4 px-4 ">
                    {openSubmenu && (
                      <div className="space-y-2">
                        {Object.keys(submenuImages).map((item, index) => (
                          <DropdownItem
                            key={index}
                            title={item}
                            onClick={() => handleSubmenuClick(item)}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="w-1/3 p-4">
                    {isSubmenuSelected && selectedImage ? (
                      <Image
                        src={selectedImage}
                        alt="Submenu Image"
                        className="w-[332px] h-auto"
                      />
                    ) : (
                      <p className="text-center text-gray-500"> </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {["Bundel 1", "Bundel 2"].map((item, index) => (
            <DropdownButton
              key={index + 2}
              title={item}
              index={index + 2}
              isOpen={isDropdownOpen}
              onToggle={handleDropdown}
            >
              <DropdownItem title="Item 1" />
              <DropdownItem title="Item 2" />
            </DropdownButton>
          ))}

          <a
            href="#"
            className="hover:text-secondary-theme  uppercase px-4 py-2 space-x-1"
          >
            Promo
          </a>
          <a
            href="#"
            className="hover:text-secondary-theme   uppercase px-4 py-2 space-x-1"
          >
            Blog
          </a>
        </div>

        {/* sidebar HP */}
        <div
          className={`fixed top-0 left-0 w-4/5  h-full bg-primary-1 text-black z-50 p-4 transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Image
            src={Logomino}
            alt="Logomino"
            width={70}
            height={20}
            className="px-2 py-1"
            priority
          />
          <button
            className="absolute top-4 right-4 text-primary-t"
            onClick={() => setIsMenuOpen(false)}
          >
            <MdMenuOpen size={24} />
          </button>
          <div className="pt-6 text-body-base">
            <a
              href="#"
              className="block hover:bg-primary-theme hover:text-primary-1 hover:font-semibold  py-3 px-2"
            >
              Beranda
            </a>

            <div className="py-2">
              <button
                onClick={() => toggleMenu("belanja")}
                className={`w-full text-left hover:bg-primary-theme hover:text-primary-1 hover:font-semibold py-2 px-2 flex justify-between ${
                  openMenu === "belanja" ? "bg-primary-theme text-white" : ""
                }`}
              >
                Belanja
                {openMenu === "belanja" ? (
                  <MdKeyboardArrowUp size={24} />
                ) : (
                  <MdKeyboardArrowDown size={24} />
                )}
              </button>
              {openMenu === "belanja" && (
                <div className="bg-primary-theme">
                  <div className="mx-auto">
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-[#213143] text-primary-1 hover:text-primary-1 hover:font-semibold"
                    >
                      Semua Merek
                    </a>

                    <div
                      className={`${
                        openSubmenuVoyager ? "bg-[#213143] text-primary-1" : ""
                      }`}
                    >
                      <button
                        onClick={toggleSubmenuVoyager}
                        className={`w-full text-left py-2 px-4 flex justify-between ${
                          openSubmenuVoyager
                            ? "text-white font-semibold"
                            : "hover:bg-[#213143] text-primary-1"
                        }`}
                      >
                        X-Voyager
                        {openSubmenuVoyager ? (
                          <MdKeyboardArrowUp size={24} />
                        ) : (
                          <MdKeyboardArrowDown size={24} />
                        )}
                      </button>

                      {openSubmenuVoyager && (
                        <div className="ml-4 text-sm">
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-primary-theme hover:text-primary-1 hover:font-semibold"
                          >
                            Vintage Forreste
                          </a>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-primary-theme hover:text-primary-1 hover:font-semibold"
                          >
                            Vintage Strobero
                          </a>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-primary-theme hover:text-primary-1 hover:font-semibold"
                          >
                            Vintage Shoe 1.0
                          </a>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-primary-theme hover:text-primary-1 hover:font-semibold"
                          >
                            El Dorado
                          </a>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-primary-theme hover:text-primary-1 hover:font-semibold"
                          >
                            Unhinted
                          </a>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-primary-theme hover:text-primary-1 hover:font-semibold"
                          >
                            Cursed Again
                          </a>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-primary-theme hover:text-primary-1 hover:font-semibold"
                          >
                            Nurture
                          </a>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-primary-theme hover:text-primary-1 hover:font-semibold"
                          >
                            Secret Sky 2021
                          </a>
                        </div>
                      )}
                    </div>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-[#213143] text-primary-1 hover:text-primary-1 hover:font-semibold"
                    >
                      Balancia
                    </a>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-[#213143] text-primary-1 hover:text-primary-1 hover:font-semibold"
                    >
                      Cadillac
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="py-2">
              <button
                onClick={() => toggleMenu("bundel1")}
                className="w-full text-left hover:bg-primary-theme hover:text-primary-1 hover:font-semibold  py-2 px-2 flex justify-between"
              >
                Bundel 1
                {openMenu === "bundel1" ? (
                  <MdKeyboardArrowUp size={24} />
                ) : (
                  <MdKeyboardArrowDown size={24} />
                )}
              </button>
              {openMenu === "bundel1" && (
                <div className="mx-auto">
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-primary-theme hover:text-primary-1 hover:font-semibold"
                  >
                    Item 1
                  </a>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-primary-theme hover:text-primary-1 hover:font-semibold"
                  >
                    Item 2
                  </a>
                </div>
              )}
            </div>

            <div className="py-2">
              <button
                onClick={() => toggleMenu("bundel2")}
                className="w-full text-left hover:bg-primary-theme hover:text-primary-1 py-2 px-2 flex justify-between"
              >
                Bundel 2
                {openMenu === "bundel2" ? (
                  <MdKeyboardArrowUp size={24} />
                ) : (
                  <MdKeyboardArrowDown size={24} />
                )}
              </button>
              {openMenu === "bundel2" && (
                <div className="mx-auto">
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-primary-theme hover:text-primary-1 hover:font-semibold"
                  >
                    Item 1
                  </a>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-primary-theme hover:text-primary-1 hover:font-semibold"
                  >
                    Item 2
                  </a>
                </div>
              )}
            </div>

            <a
              href="#"
              className="block hover:bg-primary-theme hover:text-primary-1 hover:font-semibold  py-3 px-2"
            >
              Promo
            </a>
            <a
              href="#"
              className="block hover:bg-primary-theme hover:text-primary-1 hover:font-semibold  py-3 px-2"
            >
              Blog
            </a>
            <br />
            <hr className="border-t-2 border-primary-t px-2" />
            <br />
            <a
              href="#"
              className="block hover:bg-primary-theme hover:text-primary-1 hover:font-semibold  py-3 px-2"
            >
              Tentang
            </a>
            <a
              href="#"
              className="block hover:bg-primary-theme hover:text-primary-1 hover:font-semibold  py-3 px-2"
            >
              Akun Saya
            </a>
            <SearchComponent />
          </div>
        </div>
      </nav>
      {/* bawah HP */}
      <div className="bg-primary-theme md:hidden text-primary-1 text-center text-body-small py-1 mt-[56px] flex justify-center items-center">
        <MdLocalShipping
          className="text-primary-1 cursor-pointer mx-2"
          size={20}
        />
        <p className="mx-2 text-body-small">Gratis pengiriman di Pulau Jawa</p>
      </div>
    </header>
  );
}

// Dropdown dekstop
const DropdownButton = ({
  title,
  index,
  isOpen,
  onToggle,
  children,
}: {
  title: string;
  index: number;
  isOpen: number | null;
  onToggle: (index: number | null) => void;
  children: React.ReactNode;
}) => (
  <div
    className="relative"
    onMouseEnter={() => onToggle(index)}
    onMouseLeave={() => onToggle(null)}
  >
    <button className="hover:text-primary-theme hover:bg-primary-1 focus:bg-primary-1 focus:text-primary-theme flex items-center space-x-1">
      <span className="uppercase px-4 py-2">{title}</span>
      <div
        className={`transform transition-transform duration-1000 ${
          isOpen === index ? "rotate-360" : ""
        }`}
      >
        {isOpen === index ? (
          <MdKeyboardArrowUp className="text-secondary-theme" size={24} />
        ) : (
          <MdKeyboardArrowDown className="text-secondary-theme" size={24} />
        )}
      </div>
    </button>
    {isOpen === index && (
      <div className="fixed top-[120px] left-0 right-0 w-screen bg-primary-1 text-primary-t p-4 shadow-lg z-50 text-body-base">
        {children}
      </div>
    )}
  </div>
);

const DropdownItem = ({
  title,
  onClick,
}: {
  title: string;
  onClick?: () => void;
}) => (
  <div
    className="block  hover:bg-gray-100 p-2 cursor-pointer text-primary-theme font-normal hover:font-bold text-body-base"
    onClick={onClick}
  >
    {title}
  </div>
);

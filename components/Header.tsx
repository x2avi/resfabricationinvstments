import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosGlobe, IoMdMenu, IoMdClose } from "react-icons/io";
import Head from "next/head";
import Link from 'next/link';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute mt-5 flex w-full flex-wrap items-center justify-between gap-2 px-5 text-xs font-medium uppercase opacity-90 md:px-10">
      <Head>
        <title>Resident Fabrication Investments</title>
      </Head>
      <div className="flex items-center gap-2 font-medium tracking-[4px]">
        <IoIosGlobe className="text-xl" />
        RFI
      </div>
      <ul className="hidden md:flex flex-wrap items-center gap-3 text-[11px] md:gap-10">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          Home
        </Link>
        <Link href="/about" className="hover:opacity-80 transition-opacity">
          About
        </Link>

        <Link href="/gallery" className="hover:opacity-80 transition-opacity">
          Gallery
        </Link>

        <Link href="/pricing" className="hover:opacity-80 transition-opacity">
        Prices  
        </Link>
       
        <Link href="/contacts" className="hover:opacity-80 transition-opacity">
          Contacts
        </Link>
      </ul>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? <IoMdClose className="text-2xl" /> : <IoMdMenu className="text-2xl" />}
        </button>
      </div>
      <motion.ul
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden flex flex-col w-full items-start gap-3 text-[11px] mt-3 bg-white shadow-md rounded p-5"
      >
        <Link href="/" className="hover:opacity-80 transition-opacity">
          Home
        </Link>
        <Link href="/about" className="hover:opacity-80 transition-opacity">
          About
        </Link>
        <Link href="/gallery" className="hover:opacity-80 transition-opacity">
          Gallery
        </Link>
        <Link href="/pricing" className="hover:opacity-80 transition-opacity">
          Prices
        </Link>

        <Link href="/contacts" className="hover:opacity-80 transition-opacity">
          Contacts
        </Link>
      </motion.ul>
    </div>
  );
}

export default Header;

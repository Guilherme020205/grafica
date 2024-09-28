"use client"
import { useState } from "react";

import Image from "next/image";
import logo_grafica from "../../Images/logo_grafica.png"

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função abrir o menu
  const openMenu = () => {
    setIsMenuOpen(true);
  };

  // Função fechar o menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full flex bg-slate-950 justify-between items-center py-3 px-6">

      {/* Menu Mobile */}

      <div
        className={`absolute top-0 left-0 z-50 w-full ${isMenuOpen ? 'flex' : 'hidden'} flex-col items-center px-3 py-2 bg-white shadow-xl`}
      >
        <button onClick={closeMenu} className="text-3xl text-bold mt-4">
          X
        </button>
        <nav className="flex flex-col mt-8 gap-5 w-full">
          <button className="text-gray-500 font-medium hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-300"          >
            Produtos
          </button>
          <button className="text-gray-500 font-medium hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-300"          >
            Serviços
          </button>
          <button className="text-gray-500 font-medium hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-300"          >
            Contatos
          </button>
          <button className="text-gray-500 font-medium hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-300"          >
            Loja
          </button>
        </nav>
      </div>

      {/* Fim Menu Mobile */}

      <div>
        <Image
          src={logo_grafica}
          alt="logo_grafica"
          className="w-[80px]"
        />
      </div>

      <div className="flex gap-5">

        <button className="text-white">Início</button>
        <button className="hidden md:flex text-white"> Produtos</button>
        <button className="hidden md:flex text-white">Serviços</button>
        <button className="hidden md:flex text-white">Contatos</button>
        <button className="hidden md:flex text-white">Loja</button>
      
        <button onClick={openMenu} className="md:hidden flex items-center justify-center px-4 py-2">
          <i className="fa fa-bars text-white"></i>
        </button>

      </div>


    </header>
  );
}
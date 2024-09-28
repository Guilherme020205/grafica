"use client";
import { useState } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import logo_grafica from "../Images/logo_grafica.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Estado para a seção ativa

  // Função abrir o menu
  const openMenu = () => {
    setIsMenuOpen(true);
  };

  // Função fechar o menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const duracao = 1000;

  return (
    <main className="w-full flex bg-slate-950 justify-between items-center py-3 px-6 md:px-16">
      {/* Menu Mobile */}
      <div
        className={`absolute top-0 left-0 z-50 w-full ${
          isMenuOpen ? "flex" : "hidden"
        } flex-col items-center px-3 py-2 bg-white shadow-xl`}
      >
        <button onClick={closeMenu} className="text-3xl font-bold mt-4">
          X
        </button>

        <nav className="flex flex-col mt-8 gap-5 w-full">
          <button
            className="text-gray-500 font-medium hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-300"
            onClick={() => {
              setActiveSection("scroolProdutos");
              closeMenu();
            }}
          >
            <Link to="scroolProdutos" smooth={true} duration={duracao}>
              Produtos
            </Link>
          </button>

          <button
            className="text-gray-500 font-medium hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-300"
            onClick={() => {
              setActiveSection("scroolContatos");
              closeMenu();
            }}
          >
            <Link to="scroolContatos" smooth={true} duration={duracao}>
              Contatos
            </Link>
          </button>

          <button
            className="text-gray-500 font-medium hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-300"
            onClick={() => {
              setActiveSection("scroolLoja");
              closeMenu();
            }}
          >
            <Link to="scroolLoja" smooth={true} duration={duracao}>
              Loja
            </Link>
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

      {/* Sublinhar estes */}
      <div className="flex gap-2 md:gap-5">
        <Link to="scroolInicio" smooth={true} duration={duracao}>
          <button
            className={`text-white ${activeSection === "scroolInicio" ? "underline" : ""}`}
            onClick={() => setActiveSection("scroolInicio")}
          >
            Início
          </button>
        </Link>

        <Link to="scroolProdutos" smooth={true} duration={duracao}>
          <button
            className={`hidden md:flex text-white ${activeSection === "scroolProdutos" ? "underline" : ""}`}
            onClick={() => setActiveSection("scroolProdutos")}
          >
            Produtos
          </button>
        </Link>

        <Link to="scroolContatos" smooth={true} duration={duracao}>
          <button
            className={`hidden md:flex text-white ${activeSection === "scroolContatos" ? "underline" : ""}`}
            onClick={() => setActiveSection("scroolContatos")}
          >
            Contatos
          </button>
        </Link>

        <Link to="scroolLoja" smooth={true} duration={duracao}>
          <button
            className={`hidden md:flex text-white ${activeSection === "scroolLoja" ? "underline" : ""}`}
            onClick={() => setActiveSection("scroolLoja")}
          >
            Loja
          </button>
        </Link>

        <button
          onClick={openMenu}
          className="md:hidden flex items-center justify-center px-4 py-2"
        >
          <i className="fa fa-bars text-white"></i>
        </button>
      </div>
    </main>
  );
}

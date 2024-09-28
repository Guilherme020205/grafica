"use client";
import { useState } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import logo_grafica from "../Images/logo_grafica.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("");

  const duracao = 1000;

  // Função para abrir o menu mobile
  const openMenu = () => {
    setIsMenuOpen(true);
  };

  // Função para fechar o menu mobile
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Função que fecha o menu após o scroll para garantir que o menu só feche após a rolagem
  const closeMenuAfterScroll = () => {
    setTimeout(() => {
      setIsMenuOpen(false);
    }, duracao);
  };

  return (
  <main className="w-full flex bg-slate-900 justify-between items-center py-3 px-6 md:px-16">
      {/* Menu Mobile */}
      <div
        className={`absolute top-0 left-0 z-50 w-full ${isMenuOpen ? "flex" : "hidden" // Mostra o menu se o estado 'isMenuOpen' for true
          } flex-col items-center px-3 py-2 bg-slate-900 shadow-xl`}
      >
        <button onClick={closeMenu} className="text-3xl font-bold mt-4 text-white">
          X
        </button>

        {/* Navegação dentro do menu mobile */}
        <nav className="flex flex-col mt-8 gap-5 w-full">
          <button className="text-gray-200 font-medium hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-300">
            <Link to="scroolProdutos" smooth={true} duration={duracao}
             onClick={() => {
              setActiveSection("scroolProdutos"); // Define a seção ativa para 'Produtos'
              closeMenuAfterScroll(); // Fecha o menu após o scroll
            }}
            >
              Produtos
            </Link>
          </button>

          <button className="text-gray-200 font-medium hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-300">
            <Link to="scroolContatos" smooth={true} duration={duracao}
              onClick={() => {
                setActiveSection("scroolContatos"); // Define a seção ativa para 'Contatos'
                closeMenuAfterScroll(); // Fecha o menu após o scroll
              }}
            >
              Contatos
            </Link>
          </button>


          <button className="text-gray-200 font-medium hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-300">
            <Link to="scroolLoja" smooth={true} duration={duracao}
              onClick={() => {
                setActiveSection("scroolLoja"); // Define a seção ativa para 'Loja'
                closeMenuAfterScroll(); // Fecha o menu após o scroll
              }}
            >
              Loja
            </Link>
          </button>

        </nav>
      </div>
      {/* Fim Menu Mobile */}

      <div>
        <Image src={logo_grafica} alt="logo_grafica" className="w-[80px]" />
      </div>

      <div className="flex gap-2 md:gap-5">
        <Link to="scroolInicio" smooth={true} duration={duracao}>
          <button
            className={`text-white ${activeSection === "scroolInicio" ? "underline" : "" // Adiciona sublinhado se 'Início' for a seção ativa
              }`}
            onClick={() => setActiveSection("scroolInicio")}
          >
            Início
          </button>
        </Link>

        <Link to="scroolProdutos" smooth={true} duration={duracao}>
          <button
            className={`hidden md:flex text-white ${activeSection === "scroolProdutos" ? "underline" : "" // Adiciona sublinhado se 'Produtos' for a seção ativa
              }`}
            onClick={() => setActiveSection("scroolProdutos")}
          >
            Produtos
          </button>
        </Link>

        <Link to="scroolContatos" smooth={true} duration={duracao}>
          <button
            className={`hidden md:flex text-white ${activeSection === "scroolContatos" ? "underline" : "" // Adiciona sublinhado se 'Contatos' for a seção ativa
              }`}
            onClick={() => setActiveSection("scroolContatos")}
          >
            Contatos
          </button>
        </Link>

        <Link to="scroolLoja" smooth={true} duration={duracao}>
          <button
            className={`hidden md:flex text-white ${activeSection === "scroolLoja" ? "underline" : "" // Adiciona sublinhado se 'Loja' for a seção ativa
              }`}
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

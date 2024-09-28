import Image from "next/image";
import logo_grafica from "../../Images/logo_grafica.png";

export default function Inicio() {
  return (
    <main>
      <div className="flex justify-center w-[250px] bg-slate-900 rounded-full p-4">
        <Image
          src={logo_grafica}
          alt="logo_grafica"
        />
      </div>
      <h1 className="w-46 font-bold text-[44px] flex text-right">Trazendo vida ao seu negócio</h1>
      <h2>com qualidade e rapidez</h2>
      <p>Confira nossos produtos. Solicite um orçamento conosco.</p>
    </main>
  );
}

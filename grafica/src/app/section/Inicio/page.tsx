import Image from "next/image";
import logo_grafica from "../../Images/logo_grafica.png";

export default function Inicio() {
  return (
    <main className="flex w-full max-w-[950px] ">

      <div className="flex flex-row items-center mt-10">

        <div>

          <div className="flex justify-center w-[150px] md:w-[250px] bg-slate-900 rounded-full p-4 animate-float">
            <Image
              src={logo_grafica}
              alt="logo_grafica" 
            />
          </div>

        </div>

        <div className="flex flex-col text-right gap-10 md:gap-19">

          <h1 className="font-bold text-4xl md:text-7xl animate-float">Trazendo vida ao seu negócio</h1>

          <h2 className="text-[15px] md:text-2xl">com qualidade e rapidez</h2>

          <p className="text-[12px] md:text-xl">Confira nossos produtos e solicite um orçamento conosco.</p>

        </div>
      </div>

    </main>
  );
}

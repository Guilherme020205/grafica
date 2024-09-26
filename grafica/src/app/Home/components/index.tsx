import Image from "next/image";
import logo_grafica from "../../Images/logo_grafica.png"

export default function Header() {
  return (
    <main className="w-full h-auto max-h-[150px] bg-black py-2 px-5">
      <div>
        <Image
          src={logo_grafica}
          alt="Logo da grafica"
          className="w-20"
        />
      </div>
    </main>
  );
}
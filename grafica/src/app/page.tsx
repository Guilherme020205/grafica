

import Contatos from "./section/Contatos/page";
import Inicio from "./section/Inicio/page";
import Loja from "./section/Loja/page";
import Produtos from "./section/Produtos/page";

export default function Home() {
  return (
    <div className="w-full px-16">
      <main className="pt-36">
        <div id="scroolInicio ">
          <Inicio />
        </div>

        <div id="scroolProdutos">
          <Produtos />
        </div>

        <div id="scroolContatos">
          <Contatos />
        </div>

        <div id="scroolLoja">
          <Loja />
        </div>
      </main>
    </div>
  );
}

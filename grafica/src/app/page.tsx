

import Contatos from "./section/Contatos/page";
import Inicio from "./section/Inicio/page";
import Loja from "./section/Loja/page";
import Produtos from "./section/Produtos/page";

export default function Home() {
  return (
    <div className="w-full px-16">
      <main>
        <div className="pt-40" id="scroolInicio">
          <Inicio />
        </div>

        <div className="pt-40" id="scroolProdutos">
          <Produtos />
        </div>

        <div className="pt-40" id="scroolContatos">
          <Contatos />
        </div>

        <div className="pt-40 mb-96" id="scroolLoja">
          <Loja />
        </div>
      </main>
    </div>
  );
}

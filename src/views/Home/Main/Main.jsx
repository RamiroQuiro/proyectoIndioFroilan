
import SectionCards from "./SectionCards";

import Seccion2 from "./Seccion2";
import SectinBanner from "./SectinBanner";
import Preguntas from "./Preguntas";
import Contacto from "./Contacto";


export default function Main() {




  return (
    <main className="w-full flex flex-col items-center justify-between">
      <SectionCards />
     <Seccion2/>
     <SectinBanner/>
     <Preguntas/>
     <Contacto/>
    </main>
  );
}

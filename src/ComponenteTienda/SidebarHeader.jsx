import React from "react";
import H3 from "../component/H3";
import TableHeader from "./TableHeader";

export default function SidebarHeader() {
  return (
    <div className="rounded-3xl flex flex-col shadow-xl text-neutral-700 bg-white/50 pt-10 backdrop-blur-sm md:h-[750px] md:translate-y-60 md:w-[550px]">
      <div className="w-full flex flex-col items-center justify-between p-2">
        <H3>Categorias</H3>
        <div className="w-full flex gap-3 mx-auto p-2">
          <input
            type="search"
            placeholder="Buscar Producto..."
            className="w-3/5 flex-auto  flex-auto rounded  p-2 mx-auto"
            name="categorias"
            id="categorias"
          />{" "}
          <input
            type="button"
            value="buscar"
            className="w-1/5 bg-blue-500 cursor-pointer rounded font-medium text-sm py-2 text-white flex-inline"
          />
        </div>
        <div className="w-full flex-auto flex gap-3 p-2  mx-auto">
            <select name="categoriasSelect"   className="w-full text-sm flex-inline  py-2 rounded px-3" id="CategoriasSelect"><option value="cuero">Cuero</option>
            <option value="Tejido">Tejido</option>
            <option value="Macrame">Macrame</option>
            <option value="Madera">Madera</option>
            <option value="Bijouteri">Bijouteri</option></select>
            <input
            type="button"
            value="buscar"
            className="w-1/5 bg-blue-500 cursor-pointer rounded font-medium text-sm py-2 text-white flex-inline"
          />
        </div>
      <TableHeader/>
      </div>
    </div>
  );
}

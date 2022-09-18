import React from "react";
import H3 from "../component/H3";

export default function TableHeader() {
  return (
    <div className="w-full px-3 text-center mt-10">
      <H3>Agregados Recientemente</H3>
      <table className="w-full text-sm text-left text-gray-400 ">
        <thead className="text-xs w-full text-gray-300 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="bg-gray-500  ">
            <th scope="col" className="px-2 py-1.5">
              Items
            </th>
            <th scope="col" className="px-2 text-center py-1.5">
              Precio
            </th>
            <th scope="col" className="px-2 text-center py-1.5">
              Categoria
            </th>

            <th scope="col" className="px-2 text-center">
              Accion
            </th>
          </tr>
        </thead>

        <tbody className="">
          <tr className=" border-b cursor-pointer border-blue-400 bg-gray-100 dark:border-gray-700 hover:bg-gray-50">
            <td
              scope="row"
              className=" px-4 py-2 font- text-gray-900  whitespace-nowrap"
            >
              Nombre
            </td>
            <td className="px-2 text-center py-2">$precio</td>
            <td className="px-2 text-center py-2">Categoria</td>

            <td className=" text-xs  text-center text-blue-400">
              <button>Comprar</button>
            </td>
          </tr>
          <tr className=" border-b cursor-pointer border-blue-400 bg-gray-100 dark:border-gray-700 hover:bg-gray-50">
            <td
              scope="row"
              className=" px-4 py-2 font- text-gray-900  whitespace-nowrap"
            >
              Nombre
            </td>
            <td className="px-2 text-center py-2">$precio</td>
            <td className="px-2 text-center py-2">Categoria</td>

            <td className=" text-xs  text-center text-blue-400">
              <button>Comprar</button>
            </td>
          </tr>
          <tr className=" border-b cursor-pointer border-blue-400 bg-gray-100 dark:border-gray-700 hover:bg-gray-50">
            <td
              scope="row"
              className=" px-4 py-2 font- text-gray-900  whitespace-nowrap"
            >
              Nombre
            </td>
            <td className="px-2 text-center py-2">$precio</td>
            <td className="px-2 text-center py-2">Categoria</td>

            <td className=" text-xs  text-center text-blue-400">
              <button>Comprar</button>
            </td>
          </tr>
          <tr className=" border-b cursor-pointer border-blue-400 bg-gray-100 dark:border-gray-700 hover:bg-gray-50">
            <td
              scope="row"
              className=" px-4 py-2 font- text-gray-900  whitespace-nowrap"
            >
              Nombre
            </td>
            <td className="px-2 text-center py-2">$precio</td>
            <td className="px-2 text-center py-2">Categoria</td>

            <td className=" text-xs  text-center text-blue-400">
              <button>Comprar</button>
            </td>
          </tr>
          <tr className=" border-b cursor-pointer border-blue-400 bg-gray-100 dark:border-gray-700 hover:bg-gray-50">
            <td
              scope="row"
              className=" px-4 py-2 font- text-gray-900  whitespace-nowrap"
            >
              Nombre
            </td>
            <td className="px-2 text-center py-2">$precio</td>
            <td className="px-2 text-center py-2">Categoria</td>

            <td className=" text-xs  text-center text-blue-400">
              <button>Comprar</button>
            </td>
          </tr>
          <tr className=" border-b cursor-pointer border-blue-400 bg-gray-100 dark:border-gray-700 hover:bg-gray-50">
            <td
              scope="row"
              className=" px-4 py-2 font- text-gray-900  whitespace-nowrap"
            >
              Nombre
            </td>
            <td className="px-2 text-center py-2">$precio</td>
            <td className="px-2 text-center py-2">Categoria</td>

            <td className=" text-xs  text-center text-blue-400">
              <button>Comprar</button>
            </td>
          </tr>
          <tr className=" border-b cursor-pointer border-blue-400 bg-gray-100 dark:border-gray-700 hover:bg-gray-50">
            <td
              scope="row"
              className=" px-4 py-2 font- text-gray-900  whitespace-nowrap"
            >
              Nombre
            </td>
            <td className="px-2 text-center py-2">$precio</td>
            <td className="px-2 text-center py-2">Categoria</td>

            <td className=" text-xs  text-center text-blue-400">
              <button>Comprar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

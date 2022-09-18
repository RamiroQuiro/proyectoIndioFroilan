import price from "../img/svg/price.svg";
import DescripcionProducto from "./DescripcionProducto";
import TituloCardProducto from "./TituloCardProducto";
export default function CardProductos({
  name,
  categoria,
  src,
  productor,
  precio,
}) {
  return (
    <div className=" flex flex-col items-steck justify-center md:w-[300px] w-1/3  flex-auto md:h-[480px]  bg-white rounded-xl shadow-lg transform transition duration-300 hover:-translate-y-5 hover:shadow-2xl overflow-hidden">
      <div>
        <TituloCardProducto>{name}</TituloCardProducto>
        <DescripcionProducto>{categoria}</DescripcionProducto>
      </div>
      <img
        className="w-full cursor-pointer object-cover overflow-hidden h-full md:w-auto object-center"
        src={src}
        alt=""
      />
      <div className="flex md:flex-row flex-col p-4 justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            className="w-10 rounded-full"
            src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
            alt="sara"
          />
          <h2 className="text-gray-800 font-bold cursor-pointer">{productor}</h2>
        </div>
        <div className="flex space-x-2 text-xl font-bold">
          <img src={price} alt="price" width={"30px"} height="30px" />
          {precio}
        </div>
      </div>
      <div className="flex p-4 w-full justify-between items-center ">
        <p className="text-xs text-center font-bold cursor-pointer hover:bg-green-300 duration-150 rounded-xl bg-green-400 p-1 md:p-2">
          {" "}
          Agregar al Carrito
        </p>
        <span className="text-xs text-center inline-block font-medium cursor-pointer rounded-full py-1 px-2 hover:bg-gray-100 duration-200">
          ver más <i>👀</i>
        </span>
      </div>
    </div>
  );
}

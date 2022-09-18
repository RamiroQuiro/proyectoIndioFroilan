import React from "react";
import H1 from "../../../component/H1";
import TituloCardProducto from "../../../ComponenteTienda/TituloCardProducto";



export default function BannerOfertas() {
  const datos = [
    // {
    //   id: "6516516",
    //   name: "Lampara Look",
    //   categoria: "Lamparas",
    //   src: "https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    //   productor: "RamaQuiro",
    //   precio: "$350",
    // },
    // {
    //   id: "6521217566516",
    //   name: "Mateicos ",
    //   categoria: "Lamparas",
    //   src: "https://www.guaymallen.gob.ar/wp-content/uploads/2021/02/Paseo-de-artesanos-de-Guaymallen-6-scaled.jpg",
    //   productor: "RamaQuiro",
    //   precio: "$700",
    // },
     {
       id: "65216516",
       name: "Mateicos ",
       categoria: "Lamparas",
       src: "https://www.guaymallen.gob.ar/wp-content/uploads/2021/02/Paseo-de-artesanos-de-Guaymallen-2-scaled.jpg",
       productor: "RamaQuiro",
       precio: "$700",
     },
    {
      id: "6521216221516",
      name: "Mateicos ",
      categoria: "Lamparas",
      src: "https://www.guaymallen.gob.ar/wp-content/uploads/2021/02/Paseo-de-artesanos-de-Guaymallen-7-scaled.jpg",
      productor: "RamaQuiro",
      precio: "$700",
    },
    
     {
       id: "65212165787616",
       name: "Mateicos ",
       categoria: "Lamparas",
       src: "https://www.guaymallen.gob.ar/wp-content/uploads/2021/02/Paseo-de-artesanos-de-Guaymallen-6-scaled.jpg",
       productor: "RamaQuiro",
      precio: "$700",
     },
     {
      id: "652121654416",
       name: "Mateicos ",
         categoria: "Lamparas",
       src: "https://www.guaymallen.gob.ar/wp-content/uploads/2021/02/Paseo-de-artesanos-de-Guaymallen-2-scaled.jpg",
       productor: "RamaQuiro",
       precio: "$700",
     },
    // {
    //   id: "65212156446516",
    //   name: "Mateicos ",
    //   categoria: "Lamparas",
    //   src: "https://scontent.fcor10-3.fna.fbcdn.net/v/t39.30808-6/300062398_607169344108779_3263156770871339327_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=5sU7qUa5RdsAX9RgCdH&_nc_ht=scontent.fcor10-3.fna&oh=00_AT9PlRbyAeCG-oC_DrnCjjrdvco8xm8cixmMqwUoD2nrKA&oe=632C8CEE",
    //   productor: "RamaQuiro",
    //   precio: "$700",
    // },
  ];

  return (
    <section className="bg-gray-100 my-10 py-10 w-full text-center flex flex-col ">
      <H1 className={"text-3xl text-gray-700"}>Productos de oferta</H1>
        <div className= "mx-auto w-full h-[350px] flex my-10   gap-8 overflow-hidden">
          <div className="w-8/12 flex flex-wrap  mx-auto">

          {datos?.map((items) => (
            <div
            key={items.id}
            className="md:w-1/5 mx-auto md:flex-initial bg-white/90 rounded-xl p-3  flex flex-col ">
              <img src={items.src} alt="" height={"50px"} className="object-contain h-[300px] overflow-hidden " />
              <TituloCardProducto>{items.name}</TituloCardProducto>
              <div>{items.categoria}</div>
              <div className="flex p-4 w- justify-between items-center ">
                <p className="text-xs font-bold cursor-pointer hover:bg-green-300 duration-150 rounded-xl bg-green-400 p-2">
                  {" "}
                  Agregar al Carrito
                </p>
                <span className="text-xs  inline-block font-medium cursor-pointer rounded-full py-1 px-2 hover:bg-gray-100 duration-200">
                  ver más <i>👀</i>
                </span>
              </div>
            </div>
          ))}
          </div>
        </div>
    </section>
  );
}

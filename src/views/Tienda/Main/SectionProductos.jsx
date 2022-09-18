import H1 from "../../../component/H1"
import Section from "../../../component/Section"
import GaleriaProductos from "./GaleriaProductos"
export default function SectionProductos() {
  return (
    <Section className={" flex flex-col py-16 my-20 font-sunday"}>
        <H1>Productos</H1>
        <div className="w-full my-10  border-b-4 border-gray-700 h-12 flex items-center justify-around">
            <h3 className="font-medium cursor-pointer hover:scale-105">Todo</h3>
            <h3 className="font-medium cursor-pointer hover:scale-105">Cuero</h3>
            <h3 className="font-medium cursor-pointer hover:scale-105">Tejido</h3>
            <h3 className="font-medium cursor-pointer hover:scale-105">Bijouteri</h3>
            <h3 className="font-medium cursor-pointer hover:scale-105">Macrame</h3>
        </div>
        <GaleriaProductos/>
        <button> ver más</button>
    </Section>
  )
}

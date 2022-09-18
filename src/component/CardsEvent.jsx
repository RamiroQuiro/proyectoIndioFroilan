import H3 from "./H3";

export default function CardsEvent({ children, h3, foto, className }) {
  return (
    <div className={`${className}  w-full h-2/6 flex items-center justify-center my-5  py-10`}>
      <div className="w-1/2 h-full ronded-lg">
        <img src={foto} alt="" className="w-auto h-full object-cover ronded-lg" />
      </div>
      <div className="px-5 text-left leading-8 w-1/2">
        <H3>{h3}</H3>
        <p className="text-sm leading-8">{children}</p>
      </div>
    </div>
  );
}

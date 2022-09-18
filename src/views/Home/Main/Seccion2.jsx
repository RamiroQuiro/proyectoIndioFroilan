import CardsEvent from "../../../component/CardsEvent";
import SvgComponent from "../../../component/Svg1";
import foto1 from "../../../img/foto1.jpg";
import foto2 from "../../../img/foto2.jpg";
import foto3 from "../../../img/foto3.jpg";
import H1 from "../../../component/H1";
import Section from "../../../component/Section";

export default function Seccion2() {

    const data = () => {
        const data = [
          {
            h3: "Titulo 3 skdjlskdjflksjdflkjsdlk",
            descipcion:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quo maxime dolores maiores earum in dolorem harum accusantium quaerat totam minima at possimus repellendus quibusdam, enim voluptatem sunt nulla aliquid?",
            img: foto1,
            className:" "
        },
        {
            h3: "Titulo 3 skdjlskdjflksjdflkjsdlk",
            descipcion:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quo maxime dolores maiores earum in dolorem harum accusantium quaerat totam minima at possimus repellendus quibusdam, enim voluptatem sunt nulla aliquid?",
            img: foto2,
            className:"flex-row-reverse "
        },
        {
            h3: "Titulo 3 skdjlskdjflksjdflkjsdlk",
            descipcion:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quo maxime dolores maiores earum in dolorem harum accusantium quaerat totam minima at possimus repellendus quibusdam, enim voluptatem sunt nulla aliquid?",
            img: foto3,
            className:" "
          },
        ];
    
        return data;
      };
      const datos = data();
  return (
    <Section className={"min-h-screen relative"}>
    <div className="w-10/12 mx-auto ">
      <H1 className={"text-center"}>El Patio</H1>
      <p className="w-1/3  text-center my-5 mx-auto">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Laudantium, ex!
      </p>
      {datos?.map((items, i) => (
        <CardsEvent 
        key={i}
        className={items.className}
        h3={items.h3} foto={items.img}>
         {items.descipcion}
        </CardsEvent>
      ))}
     
    </div>
    <SvgComponent
    className="absolute w-32 top-10 -left-16 fill-orange-500/40"
    />
    <SvgComponent
    className="absolute w-32 top-1/2 -right-16 fill-blue-500/40 rotate-45"
    />
    <SvgComponent
    className="absolute w-32 bottom-3 rounded-full left-10 fill-purple-500/40"
    />
  </Section>
  )
}

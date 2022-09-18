import Cards1 from "../../../component/Cards1"
import H3 from "../../../component/H3"
import Section from "../../../component/Section"

export default function SectionCards() {
  return (
    <Section className={"text-white "}>
           <Cards1>
              <H3>
                Tienda de artesanos
                    </H3>
                </Cards1>
           <Cards1>
              <H3>
                Eventos
                    </H3>
                </Cards1>
           <Cards1>
              <H3>
                Galeria de Fotos
                    </H3>
                </Cards1>
        </Section>
  )
}

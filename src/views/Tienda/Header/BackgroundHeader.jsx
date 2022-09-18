import bgHeader from '../../../img/headerTienda.jpg'
import partern from '../../../img/ruidobg.png'

export default function BackgroundHeader() {
  return (
    <div className='absolute w-full h-[110vh] z-0 top-0 left-0'>
            <div className='bg-ruido w-full h-full bg-gradient-to-r  from-amber-100 to-gray-500/50 bg-[ruido-pattern] absolute'></div>
            <img src={partern} alt="bgheader" width={"100%"} height="100%" className='w-full  h-full object-cover absolute opacity-20 backdrop-blur-sm' />
            <img src={bgHeader} alt="bgheader" width={"100%"} height="100%" className='w-full  h-full object-center object-cover' />
        </div>
  )
}

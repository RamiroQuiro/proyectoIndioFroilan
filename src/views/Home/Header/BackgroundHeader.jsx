import bgHeader from '../../../img/patioFroilan.webp'
import partern from '../../../img/ruidobg.png'

export default function BackgroundHeader() {
  return (
    <div className='absolute w-full h-[110vh] z-0 top-0 left-0'>
            <div className='bg-ruido w-full h-full bg-gradient-to-b  from-emerald-200/40 via-neutral-500/20 to-yellow-700/50 bg-[ruido-pattern] absolute'></div>
            <img src={partern} alt="bgheader" width={"100%"} height="100%" className='w-full h-full object-cover absolute opacity-50' />
            <img src={bgHeader} alt="bgheader" width={"100%"} height="100%" className='w-full h-full object-cover' />
        </div>
  )
}

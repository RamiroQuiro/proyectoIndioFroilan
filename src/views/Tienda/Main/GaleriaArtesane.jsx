import React from 'react'
import Section from '../../../component/Section'
import H1 from "../../../component/H1"
export default function GaleriaArtesane() {

    const artesanos=[
        {
            
            nombre:"Dany Bailey",
            categoria:"Lamparas",
            src:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        },
        {
            nombre:"Ramiro Quiroga",
            categoria:"Cueros",
            src:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        },
        {
            
            nombre:"Dany Bailey",
            categoria:"Lamparas",
            src:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        },
        {
            nombre:"Ramiro Quiroga",
            categoria:"Cueros",
            src:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        },
        {
            
            nombre:"Dany Bailey",
            categoria:"Lamparas",
            src:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        },
        {
            nombre:"Ramiro Quiroga",
            categoria:"Cueros",
            src:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        },
        {
            
            nombre:"Dany Bailey",
            categoria:"Lamparas",
            src:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        },
        {
            nombre:"Ramiro Quiroga",
            categoria:"Cueros",
            src:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        },
        {
            
            nombre:"Dany Bailey",
            categoria:"Lamparas",
            src:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        },
        {
            nombre:"Ramiro Quiroga",
            categoria:"Cueros",
            src:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        },
        {
            
            nombre:"Dany Bailey",
            categoria:"Lamparas",
            src:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        },
        {
            nombre:"Ramiro Quiroga",
            categoria:"Cueros",
            src:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        },
        {
            
            nombre:"Dany Bailey",
            categoria:"Lamparas",
            src:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        },
        {
            nombre:"Ramiro Quiroga",
            categoria:"Cueros",
            src:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        },
        {
            
            nombre:"Dany Bailey",
            categoria:"Lamparas",
            src:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        },
        {
            nombre:"Ramiro Quiroga",
            categoria:"Cueros",
            src:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        },
        {
            
            nombre:"Dany Bailey",
            categoria:"Lamparas",
            src:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        },
        {
            nombre:"Ramiro Quiroga",
            categoria:"Cueros",
            src:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        },
        {
            
            nombre:"Dany Bailey",
            categoria:"Lamparas",
            src:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        },
        {
            nombre:"Ramiro Quiroga",
            categoria:"Cueros",
            src:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        },
        {
            
            nombre:"Dany Bailey",
            categoria:"Lamparas",
            src:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        },
        {
            nombre:"Ramiro Quiroga",
            categoria:"Cueros",
            src:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        },
        {
            
            nombre:"Dany Bailey",
            categoria:"Lamparas",
            src:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        },
        {
            nombre:"Ramiro Quiroga",
            categoria:"Cueros",
            src:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        },

    ]

  return (
    <section className={"flex my-20 flex-col"}>
        <div className='w-11/12 mx-auto my-20'>
        <H1>Nuestros Artesanos</H1>
        <p>Ingresa en los perfiles de cada Artesano para ver sus productos</p>

        </div>
        <div className='w-full flex flex-wrap'>
            <div className='w-full p-3 bg-slate-900 rounded-tr-xl rounded-br-xl'>
<section class=" mx-auto px-4 sm:px-6 lg:px-4 py-12">
    <div class="flex flex-wrap gap-5">
        
{
    artesanos?.map((items,i)=>(
        <div 
        key={i}
        class="md:w-[15%] py-3 cursor-pointer hover:scale-105 flex-auto bg-white rounded-lg flex flex-col justify-center items-center">
        <div class="mb-8">
            <img class="object-center object-cover rounded-full h-36 w-36" src={items.src} alt="photo"/>
        </div>
        <div class="text-center">
            <p class="text-xl text-gray-700 font-bold mb-2">{items.nombre}</p>
            <p class="text-base text-gray-400 font-normal">{items.categoria}</p>
        </div>
    </div>
    ))
}
    
      
    
        
    </div>
</section>
            </div>
            <div></div>
        </div>
    </section>
  )
}

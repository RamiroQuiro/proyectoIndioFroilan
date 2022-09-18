import React from 'react'
import CardProductos from '../../../ComponenteTienda/CardProductos'

export default function GaleriaProductos() {

const fetchData=()=>{
    data=[{
        id:'6516516',
        name:"Lampara Look",
        categoria:"Lamparas",
        src:"https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        productor:"RamaQuiro",
        precio:"$350"
    },
]
return data
}

const datos=[
    {
    id:'6516516',
    name:"Lampara Look",
    categoria:"Lamparas",
    src:"https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    productor:"RamaQuiro",
    precio:"$350"
},
    {
    id:'652121516',
    name:"Mateicos ",
    categoria:"Lamparas",
    src:"https://www.guaymallen.gob.ar/wp-content/uploads/2021/02/Paseo-de-artesanos-de-Guaymallen-6-scaled.jpg",
    productor:"RamaQuiro",
    precio:"$700"
},
    {
    id:'65212165916',
    name:"Mateicos ",
    categoria:"Lamparas",
    src:"https://www.guaymallen.gob.ar/wp-content/uploads/2021/02/Paseo-de-artesanos-de-Guaymallen-2-scaled.jpg",
    productor:"RamaQuiro",
    precio:"$700"
},
    {
    id:'65212167516',
    name:"Mateicos ",
    categoria:"Lamparas",
    src:"https://www.guaymallen.gob.ar/wp-content/uploads/2021/02/Paseo-de-artesanos-de-Guaymallen-7-scaled.jpg",
    productor:"RamaQuiro",
    precio:"$700"
},
    {
    id:'65212163516',
    name:"Mateicos ",
    categoria:"Lamparas",
    src:"https://scontent.fcor10-3.fna.fbcdn.net/v/t39.30808-6/300062398_607169344108779_3263156770871339327_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=5sU7qUa5RdsAX9RgCdH&_nc_ht=scontent.fcor10-3.fna&oh=00_AT9PlRbyAeCG-oC_DrnCjjrdvco8xm8cixmMqwUoD2nrKA&oe=632C8CEE",
    productor:"RamaQuiro",
    precio:"$700"
},
    {
    id:'65212516516',
    name:"Mateicos ",
    categoria:"Lamparas",
    src:"https://www.guaymallen.gob.ar/wp-content/uploads/2021/02/Paseo-de-artesanos-de-Guaymallen-6-scaled.jpg",
    productor:"RamaQuiro",
    precio:"$700"
},
    {
    id:'65212168516',
    name:"Mateicos ",
    categoria:"Lampkjhkjharas",
    src:"https://scontent.fcor10-3.fna.fbcdn.net/v/t39.30808-6/299185998_606317910860589_6718417745623840104_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=TK5yUwJoBL0AX_Tg33f&tn=VV23SqevG2cnYX56&_nc_ht=scontent.fcor10-3.fna&oh=00_AT_oz6_oZ0eesK7PZMRQBe6VjXo-rEms9D9o2zoKp7z6QQ&oe=632B057A",
    productor:"RamaQuiro",
    precio:"$700"
},
]

  return (
    <div className='flex w-full md:my-20 flex-wrap items-center justify-around mx-auto gap-5'>
        
        {
            !datos? 
            null
            :
            datos.map(item=>(
                <CardProductos
                name={item.name}
                categoria={item.categoria}
                productor={item.productor}
                src={item.src}
                precio={item.precio}
                key={item.id}
                />
            ))

        }
 </div>

 
  )
}

import React from 'react'
import Section from '../../../component/Section'
import SvgComponent from '../../../component/Svg2'

export default function SectinBanner() {
  return (
    <Section className={"min-h-screen bg-ruido bg-gradient-to-b  from-neutral-900  to-gray-900  my-52 rounded-lg relative"}>
    <div className=" px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold font-sunday text-gray-800 capitalize lg:text-4xl dark:text-white">Eventos Recientes</h1>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            <div className="lg:flex">
                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://scontent.fcor10-3.fna.fbcdn.net/v/t39.30808-6/304785066_613763280116052_7179164675512039905_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=tXcqM33pj7YAX9hW6Lu&_nc_ht=scontent.fcor10-3.fna&oh=00_AT_6L5o3UwBbyGaFZ0gpxUm8aIGBLmXPGelmKMUc2tpfEg&oe=632C61BF" alt=""/>

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        How to use sticky note for problem solving
                    </a>
                    
                    <span className="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
                </div>
            </div>

            <div className="flex justify-center align-center">
                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://scontent.fcor10-4.fna.fbcdn.net/v/t39.30808-6/301248277_607472694078444_7607494274264363567_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=ZZG7B32-9hkAX9zYJB1&_nc_ht=scontent.fcor10-4.fna&oh=00_AT9XH9CrMpFdL7UaCK8YZBWn77t28EiT3P5lTzff7nB7wg&oe=632AEA59" alt=""/>

                <div className="flex flex-col lg:mx-6">
                    <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                    CHARLA-DEBATE Letra: "HERMANO KAKUY: ANALISIS Y REFLEXIONES SOBRE LA VIDA DE LAS MUJERES EN EL MONTE SANTIAGUEÑO"
                    </a>

                    <span className="text-sm text-gray-500 dark:text-gray-300">Domingo 28/8 nos encontraremos para compartir La CHARLA-DEBATE Sobre la Letra de la Chacarera "HERMANO KAKUY: ANALISIS Y REFLEXIONES SOBRE LA VIDA DE LAS MUJERES EN EL MONTE SANTIAGUEÑO"</span>
                </div>
            </div>

            <div className="lg:flex">
                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://scontent.fcor10-3.fna.fbcdn.net/v/t39.30808-6/297240148_599136874912026_1865897045989541381_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=7EMrhbjvq8oAX9MQRha&_nc_ht=scontent.fcor10-3.fna&oh=00_AT_OxA11OB0FggofJ4juNOBFiB9omy03b7v4YopotCQtUw&oe=632BAB51" alt=""/>

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        Morning routine to boost your mood
                    </a>

                    <span className="text-sm text-gray-500 dark:text-gray-300">On: 25 November 2020</span>
                </div>
            </div>

            <div className="lg:flex">
                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://scontent.fcor10-3.fna.fbcdn.net/v/t39.30808-6/297475591_599130418246005_8288019809457849713_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=mbrrd6FImS4AX_Po7Mc&_nc_ht=scontent.fcor10-3.fna&oh=00_AT-TzPNgZYW3Q4j52HTbXFXRaW_u6vXdIEp-oYIOs0OS-g&oe=632BE6A3" alt=""/>

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        All the features you want to know
                    </a>

                    <span className="text-sm text-gray-500 dark:text-gray-300">On: 30 September 2020</span>
                </div>
            </div>

        
        </div>
    </div>
    <SvgComponent
    className="fill-red-600/70 absolute -right-52 -top-52 -z-10"
    />
    <SvgComponent
    className="fill-orange-600/70 absolute -left-72 -bottom-72 skew-y-12 rotate-6 scale-50"
    />
    </Section>
  )
}

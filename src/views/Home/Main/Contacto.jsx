import React from "react";
import H1 from "../../../component/H1";
import Section from "../../../component/Section";

export default function Contacto() {
  return (
    <Section>
      <div className=" mx-auto max-w-screen-xl ">
            <H1>Contacto</H1>
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:py-12 lg:col-span-2 font-medium">
            <p className="max-w-xl text-lg font-bold ">Información de contacto</p>
            <br />
            <p className="max-w-xl text-">
              froilanbombo@hotmail.com
              <br />
              Correo electrónico
            </p>
            <br />
            <p className="max-w-xl text-">
              Sitios web y enlaces sociales
              <br />
              patiodelindiofroilan
            </p>
            <br />
            <p className="max-w-xl text-">Instagram</p>
            <br />

            <div className="mt-8">
              <a href="" className="text-2xl font-bold text-slate-600">
                {" "}
                0151 475 4450{" "}
              </a>

              <address className="mt-2 not-italic">
                Santiago del Estero, Argentina
              </address>
            </div>
          </div>

          <div className="p-8 bg-slate-800/80 rounded-lg shadow-lg lg:p-12 lg:col-span-3">
            <form action="" className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Nombre
                </label>
                <input
                  className="w-full p-3 text-sm border-gray-200 rounded-lg"
                  placeholder="Nombre y Apellido"
                  type="text"
                  id="name"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full p-3 text-sm border-gray-200 rounded-lg"
                    placeholder="Dirección de Email"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    N° de Telefono
                  </label>
                  <input
                    className="w-full p-3 text-sm border-gray-200 rounded-lg"
                    placeholder="N° de Telefono"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Mensaje
                </label>
                <textarea
                  className="w-full p-3 text-sm border-gray-200 rounded-lg"
                  placeholder="Mensaje"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <div className="mt-4 flex  gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center group justify-center w-1/2 px-5 py-3 text-white bg-red-700 rounded-lg sm:w-auto"
                >
                  <span className="font-medium text-sm"> Mandar Mensaje </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                     className="group-hover:translate-x-1 duration-300 z-30"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
                
                <button
                  type="submit"
                  className="inline-flex items-center group justify-center w-1/2 px-5 py-3 text-white bg-green-700 rounded-lg sm:w-auto"
                >
                  <span className="font-medium text-sm"> Mandar WhatsApp </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                    className="group-hover:translate-x-1 duration-300 z-30"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}

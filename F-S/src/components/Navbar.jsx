import React,{useState} from 'react'
import { Link } from "react-router-dom";  

function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-10 py-8 xl:py-12">
    <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div className="flex items-center justify-between">
            <div className="flex flex-shrink-0">
                <a href="#" title="BakerStreet" className="inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-secondary focus:ring-primary">
                    <img className="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo.svg" alt="BakerStreet" />
                </a>
            </div>

            <div className="md:hidden">
                <button type="button" className="p-2 -m-2 transition-all duration-200 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
                <a href="#" title="" className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"> Courses </a>

                <a
                    href="#"
                    title=""
                    className="
                        inline-flex
                        items-center
                        justify-center
                        px-5
                        py-2
                        font-sans
                        text-base
                        font-normal
                        leading-7
                        transition-all
                        duration-200
                        border-2
                        rounded-full
                        text-white
                        border-primary
                        focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary
                        hover:bg-white hover:text-black
                        focus:ring-offset-secondary
                    "
                >
                    Sign Up
                </a>
            </div>
        </div>
    </div>
</header>

  )
}

export default Navbar
import React from 'react'
// Components
import Image from '../../../assets/cinemator-app.svg'

export default function() {
  return (
    <section className="h-screen w-full bg-gray-800">
      <div className="container h-full flex flex-col-reverse justify-center pt-24 md:flex-row md:justify-between items-center gap-6 md:gap-2">
        <div className="flex-1 flex flex-col text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-200 mb-4">Be a Professional Video Editor</h1>
          <p className="text-lg text-gray-200 mb-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque dolorum corporis delectus beatae fugit?</p>
          <button className="btn btn-primary md:mr-auto md:mx-0 mx-auto">Get Started</button>
        </div>
        <div className="flex w-2/3 md:w-2/5">
        <img src={Image} alt="Cinemator" id="hero-img" />
        </div>
      </div>
    </section>
  )
}
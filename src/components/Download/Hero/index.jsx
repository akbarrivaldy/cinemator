import React from 'react'

export default function() {
  return (
    <section className="h-screen w-full bg-gray-800">
      <div className="container h-full flex flex-col justify-center items-center text-gray-200 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-5 sm:mb-2">Get Cinemator in your device</h1>
        <p className="text-sm sm:text-md mb-8 sm:mb-6">Choose your Operating System below and Download.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="" className="btn bg-gray-600 hover:bg-gray-700">Windows <i class="fab fa-windows ml-2"></i></a>
          <a href="" className="btn bg-gray-600 hover:bg-gray-700">MacOS <i class="fab fa-apple ml-2"></i></a>
          <a href="" className="btn bg-gray-600 hover:bg-gray-700">Linux Ubuntu <i class="fab fa-ubuntu ml-2"></i></a>
        </div>
      </div>
    </section>
  )
}
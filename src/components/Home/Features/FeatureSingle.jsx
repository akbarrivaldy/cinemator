import React from 'react'

export default function FeatureSingle({ title, text, image }) {
  return (
    <div className="w-full bg-gray-800 py-10">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex-1 text-gray-100 text-center md:text-left">
            <h4 className="text-2xl md:text-3xl lg:text-4xl mb-4 font-bold">{title}</h4>
            <p className="text-base lg:text-lg">{text}</p>
        </div>
        <div className="w-2/3 md:w-1/3">
          <img src={image} alt={title} />
        </div>
      </div>
    </div>
  )
}
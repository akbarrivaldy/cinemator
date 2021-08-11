import React from 'react'

export default function FeatureSingle({ title, text, image }) {
  return (
    <div className="w-full bg-purple-800 py-8">
      <div className="container flex justify-center items-center">
        <div className="flex flex-col w-full sm:w-1/2 text-gray-100 text-center">
          <h4 className="text-2xl mb-3 font-bold">{title}</h4>
          <p className="text-lg mb-6">{text}</p>
          <img src={image} alt={title} />
        </div>
      </div>
    </div>
  )
}
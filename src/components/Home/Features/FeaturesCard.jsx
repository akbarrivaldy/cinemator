import React from 'react'

export default function FeaturesCard({ title, text, image }) {
  return (
    <div className="w-full p-0 py-4 md:p-4">
      <div className="flex flex-col justify-center items-center text-center">
        <h4 className="text-2xl mb-3 font-bold">{title}</h4>
        <p className="text-base md:text-lg mb-6">{text}</p>
        <img src={image} alt={title} className="md:w-1/2" />
      </div>
    </div>
  )
}
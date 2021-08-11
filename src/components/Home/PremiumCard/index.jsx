import React from 'react'

export default function PremiumCard() {
  return (
    <div className="container py-12">
      <div className="w-full p-4 rounded-sm flex flex-col sm:flex-row justify-between items-center ring-1 ring-gray-800">
        <div className="flex flex-col w-full text-center sm:text-left sm:w-3/5">
          <h3 className="text-2xl mb-2">Get Cinemator Pro!</h3>
          <p className="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <button className="btn btn-secondary mt-4 sm:mt-0">Get Premium</button>
      </div>
    </div>
  )
}
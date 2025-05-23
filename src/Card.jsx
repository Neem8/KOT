import React from 'react'

export default function Card({ data }) {
  const { name, price, description } = data;
  return (
    <div className="relative flex w-80 flex-col justify-between rounded-xl border-2 bg-clip-border m-2 text-gray-700 shadow-md cursor-pointer min-h-[400px] p-6">
      <div>
        <h5 className="mb-2 font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900">
          {name}
        </h5>
        <p className="font-sans text-base font-light leading-relaxed text-inherit">
          Price : {price}
        </p>
        <p className="font-sans text-base font-light leading-relaxed text-inherit">
          Description : {description}
        </p>
      </div>
      <div className="pt-6">
        <button
          type="button"
          className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50"
        >
          Read More
        </button>
      </div>
    </div>
  );
}

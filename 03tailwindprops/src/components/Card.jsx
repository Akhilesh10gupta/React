import React from 'react';

function Card({title,about, btnText="VisitMe" }) {
    
    return (
    
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black mt-4">
        <img
          src="https://imgv3.fotor.com/images/gallery/beautiful-machine-girl-with-blue-eyes-created-by-Fotor-ai-art-creator.jpg"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {title}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{about}</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
        <button className="mt-2">
            {btnText || "visit me"} 
        </button>
      </div>
    
    )
}

export default Card;

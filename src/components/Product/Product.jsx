import React from 'react'

const imgProduct = 'https://parquesinfantiles.website/wp-content/uploads/2021/03/inv-columpios-bonitos.jpg'

export const Product = () => {
    return (
        <div className="h-5/6	">
            <div className= 'bg-gray-400	 w-80 border border-gray-700 border-3 px-2 py-2 ml-32 mt-32'>
                <img src= {imgProduct} alt="" className=' rounded-t-xl ' />
                <div className=" bg-white py-4  ">
                <h2 className='text-blue-700  pl-2'>Electronics</h2>
                <h2 className='mt-4  bg-zinc-300  pl-1  text-pink-700	font-extrabold		'>Fantastic Soft Computer <span className='pl-14  text-purple-900	'>594</span></h2>
                </div>
            </div>
        </div>
    )
}

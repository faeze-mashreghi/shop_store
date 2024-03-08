'use client'

import {useDispatch} from "react-redux";

import Image from "next/image";
import {addToPurchase} from "../../../../../../features/pruchaseSlice";
export const ProductCard=({product})=>{
    const dispatch=useDispatch()
const handleSelectedProductClick=()=>{
    dispatch(addToPurchase(product))
}
    return(
        <button className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg" onClick={handleSelectedProductClick}>
         <div className="h-48 w-full object-cover object-center relative">
             <Image  src={product.image} alt={product.title} layout='fill'/>

         </div>
            <div className="p-4">
                <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{product.title}</h2>
                <p className="mb-2 text-base dark:text-gray-300 text-gray-700">{product.description}</p>
                <div className="flex items-center">
                    <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">{product.price}$</p>
                </div>
            </div>
        </button>)
}
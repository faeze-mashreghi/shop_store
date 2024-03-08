'use client'

import Image from "next/image";
import {useDispatch} from "react-redux";
import {removeFromPurchase} from "../../features/pruchaseSlice";

export const PurchaseCard=({title,price,imageSRC,id})=>{

const dispatch=useDispatch()
    const handleClickOnSelectedPurchase=()=>{
        dispatch(removeFromPurchase(id))
    }
    return(<div className="flex py-6" >
        <div className="h-24 w-24 flex-shrink-0  overflow-hidden rounded-md border border-gray-200">
            <Image width={60} height={60} src={imageSRC}
                 alt={title}
                 />

        </div>

        <div className="ml-4 flex flex-1 flex-col">
            <div>

                <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                        <a href="#">{title}</a>
                    </h3>
                    <p className="ml-4">{price}</p>
                </div>

            </div>
            <div className="flex flex-1 items-end justify-between text-sm">

                <div className="flex">
                    <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={handleClickOnSelectedPurchase}>Remove</button>
                </div>
            </div>
        </div></div>)
}
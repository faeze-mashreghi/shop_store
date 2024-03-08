'use client'

import {PurchaseCard} from "../../../../components/purchaseCard";

import {useSelector} from "react-redux";

export const PurchasedList=()=>{
  const {purchaseList} = useSelector((redux) => redux.purchase);


    return(
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 ">

        <ul role="list" className=" divide-y divide-gray-200">
        {
            purchaseList.map(({id,title,image,price,})=><li className='mt-6' key={id} ><PurchaseCard title={title} imageSRC={image} price={price} id={id} /></li>)
        }

        </ul></div>)
}
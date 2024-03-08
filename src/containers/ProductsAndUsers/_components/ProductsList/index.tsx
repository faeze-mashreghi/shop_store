import {getListOfProducts} from "../../../../Server/product";
import {ProductCard} from "./_components/ProductCard";

export const ProductsList =async  ()=>{
    const products = await getListOfProducts()


    return(
        <><ul role="list" >

        {products?.map((product) => (<li className='mt-6' key={product.id} ><ProductCard product={product}  /></li>))}
        </ul>
        </>
    )

}
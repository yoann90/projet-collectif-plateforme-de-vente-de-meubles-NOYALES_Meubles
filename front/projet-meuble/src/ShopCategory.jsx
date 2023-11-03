import React, { useContext } from 'react'
import {ShopContext} from "./ShopContext"
export default function ShopCategory(props) {
    const {AllProduct} = useContext(ShopContext)
  return (
    <>
        <div className="shop-category">
        <div className="shop-category-product">
            {/* {AllProduct.map((item,i)=>{
                if(props.category === item.category)
            })} */}
        </div>
        </div>
    
    </>
  )
}

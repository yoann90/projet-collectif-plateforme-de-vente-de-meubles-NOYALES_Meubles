import React, { createContext } from "react";
// import AllProduct from "" a créer
export const ShopContext = createContext(null)

const ShopContextProvider = (props)=> {
    const ContextValue = {AllProduct}
    return (
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider
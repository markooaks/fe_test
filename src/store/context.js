import React, { createContext, useState } from "react";

export const ProductContext = createContext({
    
});

export const ProductProvider = ({ children }) => {
    const [datas, setDatas] = useState(null);
    const [cart, setCart] = useState("");
    const value = { datas, setDatas, cart, setCart };

    return (
        <ProductContext.Provider value={ value }>
            {children}
        </ProductContext.Provider>
    )
}
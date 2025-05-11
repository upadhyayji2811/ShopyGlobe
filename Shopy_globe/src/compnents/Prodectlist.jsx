import React from 'react'
import { useState, useEffect } from 'react';
import ProdectItem from "./ProdectItem"
const Prodectlist = () => {
    const [products, setProducts] = useState("");
    const [loading,setLoading] = useState(false);
    const URL = "https://dummyjson.com/products";

    async function fetchProduct() {
        setLoading(true);
        const response = await fetch(URL);
        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
    }
    useEffect(() => {
        fetchProduct();
    }, [])

    return (
        <div>
            <div className='w-11/12 m-auto flex flex-wrap gap-20'>
           {loading && <div className="loader"></div> }
          
            {products?products.map((item, idx) => (
                <ProdectItem key={idx} product={item} />
            )):""}
            </div>
        </div>
    )
}

export default Prodectlist
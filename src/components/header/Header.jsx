import React from 'react'
import PopularProducts from '../popularProducts/PopularProducts'
import { getAllProducts } from "../../api/FetchAPI";

export default function Header() {
    const { data, isFetching } = getAllProducts();
    return (
        <>
            <div className="header2">
                <h2>Popular Products</h2>
            </div>
            <div className="pro px">

                {data?.data?.data?.map((product) => (
                    <PopularProducts  key={product.documentId} name={product.productName} image={product.productImage} price={product.price}  slug={product.documentId} body={product.body}  avalibality={product.Availability} sku={product.SKU} originalPrice={product.originalPrice} />
                    
                ))}
            </div>
        </>
    );
}

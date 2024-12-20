import React from 'react'
import Category from '../category/Category'
import { getAllCategory } from "../../api/FetchAPI";

export default function Categories() {
  const { data } = getAllCategory();
  return (
     
         
     
       <>
            <div className="header2">
                <h2>SHOP BY CATEGORY</h2>
            </div>
            <div className="pro px">
                {data?.data?.data?.map((category) => (
                    <Category key={category.documentId} name={category.name} image={category.image} num={category.num}  slug={category.documentId} />
                    
                ))}
                   
            </div>
        </>
  )
}

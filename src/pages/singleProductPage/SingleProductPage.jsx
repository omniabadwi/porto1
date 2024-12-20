import React , { useEffect } from 'react'
import SingleProduct from '../../components/singleProduct/SingleProduct';
import { getSingleProducts } from '../../api/FetchAPI';
import { useParams } from "react-router-dom";
export default function SingleProductPage() {
  const { documentId } = useParams();
  const { data } = getSingleProducts(documentId);
  console.log(documentId);
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <>
      <SingleProduct image={data?.data?.data?.productImage} name={data?.data?.data?.productName} price={data?.data?.data?.price} slug={data?.data?.data?.documentId} avalibality={data?.data?.data?.Availability} sku={data?.data?.data?.SKU} originalPrice={data?.data?.data?.originalPrice} body={data?.data?.data?.body}  />
    </>
)
}

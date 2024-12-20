import { useQuery, useMutation } from "@tanstack/react-query";
import { AxiosConfig } from "../axios/AxiosConfig";

export const getAllProducts = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: () => AxiosConfig("api/products?populate=*"),
    });
};
export const getSingleProducts = (documentId) => {
    return useQuery({
        queryKey: ["single-product" ,documentId],
        queryFn: () => AxiosConfig(`api/products/${documentId}?populate=*`),
        // queryFn: () => AxiosConfig.get(`api/products/${documentId}?populate=*`).then((res) => res.data),
        // enabled: !!documentId,
    });
};
export const getAllCategory = () => {
    return useQuery({
        queryKey: ["category"],
        queryFn: () => AxiosConfig("api/categories?populate=*"),
    });
};
export const addToCartAPI = () => {
    return useMutation({
      mutationFn: async ({ productId, userId }) => {
      const response = await AxiosConfig.post("/api/cart/add", {
        productId,
        userId,
      });
      return response.data;
  } 
    },
  );
};
export const addToWishlistAPI = () => {
    return useMutation({
      mutationFn: async ({ productId, userId }) => {
      const response = await AxiosConfig.post("/api/wishlist/add", {
        productId,
        userId,
      });
      return response.data;
  } 
    },
  );
};
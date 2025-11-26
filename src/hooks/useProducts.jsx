import {
  fetchAllProducts,
  fetchSingleProduct,
} from "@/servicesfile/ServiceProducts";
import { useQuery } from "@tanstack/react-query";

// Hook to fetch all products
export const useFetchAllProducts = () => {
  return useQuery({
    queryKey: ["fetchAllProducts"],
    queryFn: fetchAllProducts,
  });
};

// Hook to fetch single Product
export const useFetchSingleProduct = (id) => {
  return useQuery({
    queryKey: ["fetchsingleproduct", id],
    queryFn: () => fetchSingleProduct(id),
  });
};

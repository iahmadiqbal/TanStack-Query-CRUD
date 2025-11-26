import { fetchAllProducts } from "@/servicesfile/ServiceProducts";
import { useQuery } from "@tanstack/react-query";

// Hook to fetch all products
export const useFetchAllProducts = () => {
  return useQuery({
    queryKey: ["fetchAllProducts"],
    queryFn: fetchAllProducts,
  });
};

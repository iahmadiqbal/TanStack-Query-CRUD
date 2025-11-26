import {
  fetchAllProducts,
  fetchsingledata,
  updateSingleProduct,
} from "@/servicesfile/ServiceProducts";
import { useMutation, useQuery } from "@tanstack/react-query";

// Hook to fetch all products
export const useFetchAllProducts = () => {
  return useQuery({
    queryKey: ["fetchAllProducts"],
    queryFn: fetchAllProducts,
  });
};

// Hook to fetch single data

export const useFetchSingleData = (id) => {
  return useQuery({
    queryKey: ["fetchsingledata", id],
    queryFn: () => fetchsingledata(id),
  });
};

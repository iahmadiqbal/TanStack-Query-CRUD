"use client";
import {
  CreateProductData,
  DeleteProductData,
  fetchAllProducts,
  fetchsingledata,
  UpdataProductData,
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

// Hook to create product
export const useCreateProductData = () => {
  return useMutation({
    mutationFn: (productData) => CreateProductData(productData),
  });
};
//  Hook to update the produc
export const useUpdataProductData = () => {
  return useMutation({
    mutationFn: ({ id, updateData }) => UpdataProductData(id, updateData),
  });
};

// Hook to Delete Product Data
export const useDeleteProductData = (id) => {
  return useMutation({
    mutationFn: (id) => DeleteProductData(id),
  });
};

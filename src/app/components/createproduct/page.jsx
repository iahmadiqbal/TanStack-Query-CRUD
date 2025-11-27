"use client";

import { useCreateNewProductData } from "@/hooks/useProducts";

const CreateProduct = () => {
  const { mutate, isLoading, isError } = useCreateNewProductData();
  if (isLoading) return <h1>Data is Loading...</h1>;
  if (isError) return <h1>Failed to fetch The Error</h1>;
  const handleCreateProduct = () => {
    mutate({
      title: "I am new Product title",
      description: "I am new Product Data Description",
      price: "$28",
    });
  };

  return (
    <div>
      <h1>Create Product Data...</h1>
      <button onClick={handleCreateProduct}>CreateProductData</button>
    </div>
  );
};

export default CreateProduct;

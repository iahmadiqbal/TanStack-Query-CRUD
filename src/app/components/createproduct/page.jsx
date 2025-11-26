"use client";

import { useCreateProductData } from "@/hooks/useProducts";

const CreateProduct = () => {
  const { mutate, isLoading, isError, isSuccess } = useCreateProductData();

  const handleCreateProduct = () => {
    mutate({
      title: "I am new Title",
      description: "I am the new Description",
      price: "$45",
    });
  };

  return (
    <div>
      <h1>Create Product</h1>
      <button onClick={handleCreateProduct}>Create Product</button>

      {isLoading && <p>Creating product...</p>}
      {isError && <p>Failed to create the product.</p>}
      {isSuccess && <p>Product created successfully!</p>}
    </div>
  );
};

export default CreateProduct;

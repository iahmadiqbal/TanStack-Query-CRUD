"use client";

import { useUpdateSingleProduct } from "@/hooks/useProducts";

const UpdateProduct = () => {
  const { mutate, isLoading, isError, isSuccess } = useUpdateSingleProduct();
  if (isLoading) return <h1>Data is Loading...</h1>;
  if (isError) return <h1>Something went wrong...</h1>;
  if (isSuccess) return <h1>Product updated successfully!</h1>;
  const handleUpdateProductData = () => {
    mutate({
      id: "3",
      updateData: {
        title: "Women Cloth",
        description: "I am the description of women cloth",
        price: "$33",
      },
    });
  };

  return (
    <>
      <h1>Update Product Data</h1>
      <button onClick={handleUpdateProductData}>Update Product</button>
    </>
  );
};

export default UpdateProduct;

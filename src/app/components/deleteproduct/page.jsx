"use client";
import { useDeleteProductData } from "@/hooks/useProducts";

const DeleteProduct = ({ id }) => {
  // <-- Receive id as prop
  const { mutate, isLoading, isError } = useDeleteProductData();

  if (isLoading) return <h1>Data is Loading...</h1>;
  if (isError) return <h1>Something went Wrong...</h1>;

  const handleDeleteProduct = () => {
    mutate(2);
  };

  return (
    <>
      <h1>Delete Product Data</h1>
      <button onClick={handleDeleteProduct}>Delete Product</button>
    </>
  );
};

export default DeleteProduct;

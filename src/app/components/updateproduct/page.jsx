"use client";

import { useUpdataProductData } from "@/hooks/useProducts";

const UpdateProduct = ({ id }) => {
  const { mutate, isLoading, isError } = useUpdataProductData(id);
  if (isLoading) return <h1>Data is Loading...</h1>;
  if (isError) return <h1>Something went Wrong...</h1>;

  const handleupdateProductData = () => {
    mutate({
      id: 2,
      updateData: {
        title: "i am the new Title",
        description: "i am the new description",
        price: "$56",
      },
    });
  };
  return (
    <>
      <h1>Update product is Here</h1>
      <button onClick={handleupdateProductData}>UpdateProduct</button>
    </>
  );
};

export default UpdateProduct;

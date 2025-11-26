"use client";

import { useFetchSingleData } from "@/hooks/useProducts";

const GetSingleProduct = ({ id }) => {
  const { data, isLoading, isError } = useFetchSingleData(id);

  if (isLoading)
    return <h1 className="text-xl font-bold">Data is Loading....</h1>;

  if (isError)
    return (
      <h1 className="text-xl font-bold text-red-500">
        Something went wrong...
      </h1>
    );

  console.log("single product data", data);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Single Product Details</h1>
      <ul className="list-disc ml-5 space-y-2">
        <li>
          <strong>ID:</strong> {data?.id}
        </li>
        <li>
          <strong>Category:</strong> {data?.category}
        </li>
        <li>
          <strong>Description:</strong> {data?.description}
        </li>
        <li>
          <strong>Image:</strong> <br />
          <img
            src={data?.image}
            alt={data?.category}
            className="w-40 h-40 object-contain mt-2"
          />
        </li>
        <li>
          <strong>Price:</strong> ${data?.price}
        </li>
      </ul>
    </div>
  );
};

export default GetSingleProduct;

"use client";
import { useFetchSingleProduct } from "@/hooks/useProducts";

const GetSingleProduct = ({ id }) => {
  const { data, isLoading, isError } = useFetchSingleProduct(id);

  if (isLoading) return <h1>Data is Loading...</h1>;
  if (isError) return <h1>Something went wrong...</h1>;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Single Product Details</h1>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>ID:</strong> {data.id}
        </li>
        <li>
          <strong>Title:</strong> {data.title}
        </li>
        <li>
          <strong>Price:</strong> ${data.price}
        </li>
        <li>
          <strong>Description:</strong> {data.description}
        </li>
        <li>
          <strong>Category:</strong> {data.category}
        </li>
        <li>
          <strong>Image:</strong> <br />
          <img
            src={data.image}
            alt={data.title}
            className="w-40 h-40 object-contain mt-2"
          />
        </li>
      </ul>
    </div>
  );
};

export default GetSingleProduct;

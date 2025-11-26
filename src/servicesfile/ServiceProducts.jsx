import { BASE_URL } from "@/lib/api";

// Fetch all products data
export const fetchAllProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);

    if (!response.ok) {
      throw new Error("Failed to fetch the products");
    }

    const data = await response.json();
    console.log("All products Data", data);
    return data;
  } catch (error) {
    console.log("Something went wrong:", error);
    throw error;
  }
};

//  Fetch single product data
export const fetchsingledata = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) {
      console.log("Failed to fetch the single product data...");
    }
    const data = await response.json();
    console.log("single product data", data);
    return data;
  } catch (error) {
    console.log("something went wrong...", error);
  }
};

// update product data
export const UpdataProductData = async (id, updateData) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });

    if (!response.ok) {
      console.log("Failed to update the product");
    }
    const data = await response.json();
    console.log("update product data", data);
  } catch (error) {
    console.log("something went wrong", error);
  }
};

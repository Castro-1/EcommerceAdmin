import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function ProductForm({
  name: existingName,
  description: existingDescription,
  price: existingPrice,
}) {
  const [name, setName] = useState(existingName || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [price, setPrice] = useState(existingPrice || "");
  const [goToProducts, setGoToProducts] = useState(false);
  const router = useRouter();
  async function createProduct(e) {
    e.preventDefault();
    const data = { name, description, price };
    await axios.post("/api/products", data);
    setGoToProducts(true);
  }
  if (goToProducts) {
    router.push("/products");
  }
  return (
    <form onSubmit={createProduct}>
      <label>Product Name</label>
      <input
        type="text"
        placeholder="product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Description</label>
      <textarea
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label>Price (in USD)</label>
      <input
        type="number"
        placeholder="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit" className="btn-primary">
        Save
      </button>
    </form>
  );
}

import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function DeleteProductPage() {
  const [productInfo, setProductInfo] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    axios.get("/api/products?id=" + id).then((res) => {
      setProductInfo(res.data);
    });
  }, [id]);

  function goBack() {
    router.push("/products");
  }

  async function deleteProduct() {
    await axios.delete("/api/products?id=" + id);
    goBack();
  }
  return (
    <Layout>
      <h1 className="text-center">
        Do you really want to delete &quot;{productInfo?.name}&quot;?
      </h1>
      <div className="flex gap-2 justify-center">
        <button className="btn-red" onClick={deleteProduct}>
          Yes
        </button>
        <button className="btn-default" onClick={goBack}>
          No
        </button>
      </div>
    </Layout>
  );
}

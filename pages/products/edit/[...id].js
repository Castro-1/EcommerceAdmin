import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ProductForm from "@/components/ProductFrom";
import axios from "axios";
import Spinner from "@/components/Spinner";
export default function EditProductPage() {
  const [productInfo, setProductInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (!id) return;
    setIsLoading(true);
    axios.get("/api/products/?id=" + id).then((res) => {
      setProductInfo(res.data);
      setIsLoading(false);
    });
  }, [id]);
  return (
    <Layout>
      <h1>Edit Product</h1>
      {isLoading && <Spinner fullWidth={true} />}
      {productInfo && <ProductForm {...productInfo} />}
    </Layout>
  );
}

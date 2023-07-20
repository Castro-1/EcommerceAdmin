import Layout from "@/components/Layout";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";
import EditIcon from "@/components/icons/EditIcon";
import TrashIcon from "@/components/icons/TrashIcon";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get("/api/products").then((res) => {
      setProducts(res.data);
      setIsLoading(false);
    });
  }, []);
  return (
    <Layout>
      <Link className="btn-primary" href={"/products/new"}>
        Add new product
      </Link>
      <table className="basic mt-6">
        <thead>
          <tr>
            <th>Product Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <td colSpan={2}>
                <div className="py-4">
                  <Spinner fullWidth={true} />
                </div>
              </td>
            </tr>
          )}
          {products.map((product, key) => (
            <tr key={key}>
              <td>{product.name}</td>
              <td>
                <Link className="btn" href={"/products/edit/" + product._id}>
                  <EditIcon className="w-4 h-4" />
                  Edit
                </Link>
                <Link
                  className="btn btn-red"
                  href={"/products/delete/" + product._id}
                >
                  <TrashIcon className="w-4 h-4" />
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

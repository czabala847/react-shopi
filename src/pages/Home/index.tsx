import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Products as ProductsInterface } from "../../interfaces";

export const Home = () => {
  const [products, setProducts] = useState<ProductsInterface[]>([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data: ProductsInterface[]) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

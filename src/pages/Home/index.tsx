import { useEffect, useState } from "react";

import { Card } from "../../components/Card";
import { ProductDetail } from "../../components/ProductDetail";

import { Product as ProductInterface } from "../../interfaces";

export const Home = () => {
  const [products, setProducts] = useState<ProductInterface[]>([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data: ProductInterface[]) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <ProductDetail />
    </div>
  );
};

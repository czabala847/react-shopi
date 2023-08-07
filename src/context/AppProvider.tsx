import { useState } from "react";
import { AppContext } from "./AppContext";
import { Product } from "../interfaces";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [productToShow, setProductToShow] = useState<Product>();

  const onChangeCount = (newCount: number) => {
    setCount(newCount);
  };

  const handleOpenProductDetail = (open: boolean) =>
    setIsProductDetailOpen(open);

  const onSaveProductInContext = (product: Product) => {
    setProductToShow(product);
  };

  return (
    <AppContext.Provider
      value={{
        count,
        isProductDetailOpen,
        productToShow,
        handleOpenProductDetail,
        onChangeCount,
        onSaveProductInContext,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

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
  const [cartProducts, setCartsProducts] = useState<Product[]>([]);
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);

  const onChangeCount = (newCount: number) => {
    setCount(newCount);
  };

  const handleOpenProductDetail = (open: boolean) =>
    setIsProductDetailOpen(open);

  const onSaveProductInContext = (product: Product) => {
    setProductToShow(product);
  };

  const onAddProductsToCart = (product: Product) => {
    setCartsProducts((prevCartsProduct) => {
      return [...prevCartsProduct, product];
    });
  };

  const handleOpenCheckoutSideMenu = (open: boolean) =>
    setIsCheckoutSideMenuOpen(open);

  const productIsInCart = (productId: number) => {
    const foundProduct = cartProducts.some(({ id }) => id === productId);
    return foundProduct;
  };

  return (
    <AppContext.Provider
      value={{
        cartProducts,
        count,
        isCheckoutSideMenuOpen,
        isProductDetailOpen,
        productToShow,
        handleOpenCheckoutSideMenu,
        handleOpenProductDetail,
        onAddProductsToCart,
        onChangeCount,
        onSaveProductInContext,
        productIsInCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

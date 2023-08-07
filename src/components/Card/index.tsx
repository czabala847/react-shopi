import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";

import { useAppContext } from "../../context/AppContext";
import { Product } from "../../interfaces";

interface Props {
  product: Product;
}

export const Card: React.FC<Props> = ({ product }) => {
  const { category, price, title, images } = product;
  const {
    count,
    handleOpenProductDetail,
    handleOpenCheckoutSideMenu,
    onAddProductsToCart,
    onChangeCount,
    onSaveProductInContext,
    productIsInCart,
  } = useAppContext();

  const showProduct = (productDetail: Product) => {
    onSaveProductInContext(productDetail);
    handleOpenCheckoutSideMenu(false);
    handleOpenProductDetail(true);
  };

  const addProductToCart = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    productDetail: Product
  ) => {
    event.stopPropagation();

    handleOpenProductDetail(false);
    onChangeCount(count + 1);
    onAddProductsToCart(productDetail);
    handleOpenCheckoutSideMenu(true);
  };

  const onOpenCart = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();

    handleOpenProductDetail(false);
    handleOpenCheckoutSideMenu(true);
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(product)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {category.name}
        </span>
        <img
          src={images[0]}
          alt="headphones"
          className="w-full h-full object-cover rounded-lg"
        />
        {!productIsInCart(product.id) ? (
          <div
            onClick={(event) => addProductToCart(event, product)}
            className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          >
            <PlusIcon className="h-6 w-6 text-black-500 cursor-pointer" />
          </div>
        ) : (
          <div
            onClick={(event) => onOpenCart(event)}
            className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1"
          >
            <CheckIcon className="h-6 w-6 text-white" />
          </div>
        )}
      </figure>
      <p className="flex justify-between">
        <span className="font-light text-sm">{title}</span>
        <span className="font-medium text-lg">${price}</span>
      </p>
    </div>
  );
};

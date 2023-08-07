import { XMarkIcon } from "@heroicons/react/24/solid";
import { useAppContext } from "../../context/AppContext";

export const ProductDetail = () => {
  const { isProductDetailOpen, handleOpenProductDetail, productToShow } =
    useAppContext();

  if (!isProductDetailOpen) return null;

  return (
    <aside className="flex flex-col fixed right-4 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)] bottom-4">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div onClick={() => handleOpenProductDetail(false)}>
          <XMarkIcon className="h-6 w-6 text-black-500 cursor-pointer" />
        </div>
      </div>
      {productToShow && (
        <>
          <figure className="px-6">
            <img
              className="w-full h-full rounded-lg"
              src={productToShow.images[0]}
              alt={productToShow.title}
            />
          </figure>
          <p className="flex flex-col p-6">
            <span className="font-medium text-2xl mb-2">
              ${productToShow.price}
            </span>
            <span className="font-medium text-md">{productToShow.title}</span>
            <span className="font-light text-sm">
              {productToShow.description}
            </span>
          </p>
        </>
      )}
    </aside>
  );
};

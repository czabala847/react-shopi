import { XMarkIcon } from "@heroicons/react/24/solid";
import { useAppContext } from "../../context/AppContext";
import { OrderCard } from "../OrderCard";

export const CheckoutSideMenu = () => {
  const { handleOpenCheckoutSideMenu, isCheckoutSideMenuOpen, cartProducts } =
    useAppContext();

  if (!isCheckoutSideMenuOpen) {
    return null;
  }

  return (
    <aside className="flex flex-col fixed right-4 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)] bottom-4">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div onClick={() => handleOpenCheckoutSideMenu(false)}>
          <XMarkIcon className="h-6 w-6 text-black-500 cursor-pointer" />
        </div>
      </div>

      <div className="px-6 overflow-y-scroll">
        {cartProducts.map((cartProduct) => (
          <OrderCard product={cartProduct} key={cartProduct.id} />
        ))}
      </div>
    </aside>
  );
};

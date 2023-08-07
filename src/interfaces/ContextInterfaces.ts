import { Product } from ".";

export interface ContextProps {
  cartProducts: Product[];
  count: number;
  isCheckoutSideMenuOpen: boolean;
  isProductDetailOpen: boolean;
  productToShow?: Product;
  handleOpenCheckoutSideMenu: (open: boolean) => void;
  handleOpenProductDetail: (open: boolean) => void;
  onAddProductsToCart: (product: Product) => void;
  onChangeCount: (newCount: number) => void;
  onSaveProductInContext: (product: Product) => void;
  productIsInCart: (productId: number) => boolean;
}

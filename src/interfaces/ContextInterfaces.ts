import { Product } from ".";

export interface ContextProps {
  count: number;
  isProductDetailOpen: boolean;
  productToShow?: Product;
  handleOpenProductDetail: (open: boolean) => void;
  onChangeCount: (newCount: number) => void;
  onSaveProductInContext: (product: Product) => void;
}
